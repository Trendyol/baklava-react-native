#!/usr/bin/env node
/**
 * Baklava icon generation pipeline.
 *
 * Single source of truth: @trendyol/baklava-icons (published icon set,
 * shared with Baklava Web). This script regenerates the React Native icon
 * components deterministically from that package:
 *
 *   node_modules/@trendyol/baklava-icons/icons/*.svg  (authoritative)
 *   src/svg-icons-local/*.svg                         (RN-only additions)
 *        |
 *        +--> src/icons/*.tsx          (SVGR, native + typescript)
 *        +--> src/icons/index.ts
 *        +--> src/components/Icon/list.ts (iconList + deprecated aliases)
 *
 * src/flag-icons is NOT generated from the package (flags are not published
 * there); this script only refreshes src/flag-icons/index.ts.
 *
 * CI runs `npm run icons:generate` and fails when the git diff is not empty,
 * which guarantees that every icon in the package exists in this library.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { transform } from '@svgr/core';
import prettier from 'prettier';
import svgoConfig from '../svgo.config.js';
import {
  DEFAULT_ICON_FILL,
  LEGACY_ICON_ALIASES,
  PROP_FILL_VALUES,
  RTL_FLIP_ICON_NAMES,
} from './icons/config.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const PKG_DIR = path.resolve(ROOT, 'node_modules/@trendyol/baklava-icons');
const PKG_ICONS_DIR = path.join(PKG_DIR, 'icons');
const LOCAL_ICONS_DIR = path.join(ROOT, 'src/svg-icons-local');
const OUT_ICONS_DIR = path.join(ROOT, 'src/icons');
const OUT_FLAGS_DIR = path.join(ROOT, 'src/flag-icons');
const OUT_LIST_FILE = path.join(ROOT, 'src/components/Icon/list.ts');

const FILL_EXPRESSION = `{props?.fill ?? '${DEFAULT_ICON_FILL}'}`;

const formatTs = (code, filePath) =>
  prettier.format(code, {
    ...prettier.resolveConfig.sync(filePath),
    filepath: filePath,
  });

/**
 * Keep in sync with src/components/Icon/utils.ts#toPascalCase, which the
 * Icon component uses to resolve a name to an export of src/icons/index.ts.
 */
const toPascalCase = str =>
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.charAt(0).toUpperCase() + x.slice(1).toLowerCase())
    .join('');

const readPackageIconList = () => {
  const indexJs = fs.readFileSync(path.join(PKG_DIR, 'index.js'), 'utf8');
  const match = indexJs.match(/const iconList = (\[[^\]]*\])/);
  if (!match) {
    throw new Error(
      'Could not read iconList from @trendyol/baklava-icons/index.js',
    );
  }
  return JSON.parse(match[1]);
};

const collectSources = () => {
  const packageNames = readPackageIconList();
  const localNames = fs
    .readdirSync(LOCAL_ICONS_DIR)
    .filter(f => f.endsWith('.svg'))
    .map(f => f.replace(/\.svg$/, ''))
    .sort();

  const duplicates = localNames.filter(n => packageNames.includes(n));
  if (duplicates.length) {
    throw new Error(
      `Icons in src/svg-icons-local already exist in @trendyol/baklava-icons ` +
        `(remove the local copies, the package is authoritative): ${duplicates.join(
          ', ',
        )}`,
    );
  }

  const seenComponent = new Map();
  const assertComponentName = (name, componentName) => {
    const existing = seenComponent.get(componentName.toLowerCase());
    if (existing) {
      throw new Error(
        `Component name collision: "${existing}" and "${name}" both map to ${componentName}`,
      );
    }
    seenComponent.set(componentName.toLowerCase(), name);
  };

  const sources = [...packageNames, ...localNames].map(name => {
    const componentName = toPascalCase(name);
    assertComponentName(name, componentName);
    const fromPackage = packageNames.includes(name);
    const svgPath = fromPackage
      ? path.join(PKG_ICONS_DIR, `${name}.svg`)
      : path.join(LOCAL_ICONS_DIR, `${name}.svg`);
    return { name, componentName, svgPath, fromPackage };
  });

  const missing = sources.filter(s => !fs.existsSync(s.svgPath));
  if (missing.length) {
    throw new Error(
      `Missing SVG source files: ${missing.map(m => m.svgPath).join(', ')}`,
    );
  }

  return { sources, packageNames, localNames };
};

const svgrConfig = {
  icon: true,
  native: true,
  typescript: true,
  memo: false,
  ref: false,
  expandProps: 'spread',
  svgo: true,
  svgoConfig,
  prettier: true,
  plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx', '@svgr/plugin-prettier'],
  replaceAttrValues: Object.fromEntries(
    PROP_FILL_VALUES.map(value => [value, FILL_EXPRESSION]),
  ),
};

const generate = async ({ sources }) => {
  fs.rmSync(OUT_ICONS_DIR, { recursive: true, force: true });
  fs.mkdirSync(OUT_ICONS_DIR, { recursive: true });

  for (const { name, componentName, svgPath } of sources) {
    const svg = fs.readFileSync(svgPath, 'utf8');
    const outputPath = path.join(OUT_ICONS_DIR, `${componentName}.tsx`);
    const code = await transform(
      svg,
      { ...svgrConfig },
      { componentName, filePath: outputPath },
    );
    fs.writeFileSync(outputPath, code);
  }

  const indexLines = sources
    .slice()
    .sort((a, b) => a.componentName.localeCompare(b.componentName))
    .map(
      ({ componentName }) =>
        `export { default as ${componentName} } from './${componentName}';`,
    );

  fs.writeFileSync(
    path.join(OUT_ICONS_DIR, 'index.ts'),
    formatTs(
      `// AUTO-GENERATED by scripts/generate-icons.mjs. Do not edit manually.\n${indexLines.join(
        '\n',
      )}\n`,
      path.join(OUT_ICONS_DIR, 'index.ts'),
    ),
  );
};

const generateFlagIndex = () => {
  const flagComponents = fs
    .readdirSync(OUT_FLAGS_DIR)
    .filter(f => f.endsWith('.tsx'))
    .map(f => f.replace(/\.tsx$/, ''))
    .sort();

  const indexLines = flagComponents.map(
    name => `export { default as ${name} } from './${name}';`,
  );

  fs.writeFileSync(
    path.join(OUT_FLAGS_DIR, 'index.ts'),
    formatTs(
      `// AUTO-GENERATED by scripts/generate-icons.mjs. Do not edit manually.\n${indexLines.join(
        '\n',
      )}\n`,
      path.join(OUT_FLAGS_DIR, 'index.ts'),
    ),
  );

  return flagComponents;
};

const generateList = ({ packageNames, localNames, flagComponents }) => {
  const iconList = [...packageNames, ...localNames].sort();

  // An alias is only meaningful when the legacy name differs from the
  // primary (package) name. Aliases pointing to flag names are kept as-is:
  // FlagIcon has its own component folder, so such aliases would be broken.
  const aliases = Object.entries(LEGACY_ICON_ALIASES).filter(
    ([legacy, primary]) =>
      legacy !== primary &&
      iconList.includes(primary) &&
      !flagComponents.includes(toPascalCase(primary)),
  );

  for (const [legacy] of aliases) {
    if (iconList.includes(legacy)) {
      throw new Error(
        `Legacy alias "${legacy}" must not be a primary icon name.`,
      );
    }
  }

  const formatList = items => items.map(i => `  '${i}',`).join('\n');

  const aliasBody = aliases
    .sort(([a], [b]) => (a < b ? -1 : 1))
    .map(([legacy, primary]) => `  '${legacy}': '${primary}',`)
    .join('\n');

  const content = `// AUTO-GENERATED by scripts/generate-icons.mjs. Do not edit manually.
// Primary names come from @trendyol/baklava-icons (single source of truth).

export const iconList = [
${formatList(iconList)}
] as const;

/**
 * Deprecated kebab-case names of the pre-pipeline public API.
 * They keep working as aliases; use the primary names from iconList instead.
 */
export const deprecatedIconNames = {
${aliasBody}
} as const;

// Icons that the Icon component mirrors horizontally when I18nManager.isRTL.
export const rtlFlippableIconNames = [
${formatList(RTL_FLIP_ICON_NAMES)}
] as const;
`;

  fs.writeFileSync(OUT_LIST_FILE, formatTs(content, OUT_LIST_FILE));
  return { iconList, aliases: aliases.length };
};

const main = async () => {
  const collected = collectSources();
  const { iconList, aliases } = await generate(collected).then(() => {
    const flagComponents = generateFlagIndex();
    return generateList({ ...collected, flagComponents });
  });

  const packageCount = collected.packageNames.length;
  const localCount = collected.localNames.length;
  console.log(
    `icons: ${packageCount} from @trendyol/baklava-icons, ${localCount} local, ` +
      `${iconList.length} total names, ${aliases} deprecated aliases`,
  );
};

main().catch(err => {
  console.error(err.message);
  process.exit(1);
});
