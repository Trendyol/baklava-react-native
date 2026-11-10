import baklavaIconList from '@trendyol/baklava-icons';
import * as icons from '../../icons';
import { deprecatedIconNames, iconList, rtlFlippableIconNames } from './list';
import { toPascalCase } from './utils';

/**
 * Guarantee: every icon published in @trendyol/baklava-icons must exist in
 * this library. This test is the runtime contract of the generation
 * pipeline (scripts/generate-icons.mjs); CI additionally checks that the
 * generated files are committed (npm run icons:check).
 */
describe('Icon pipeline parity with @trendyol/baklava-icons', () => {
  test('every published icon is exported by iconList', () => {
    const missing = baklavaIconList.filter(
      name => !(iconList as readonly string[]).includes(name),
    );
    expect(missing).toEqual([]);
  });

  test('every name in iconList resolves to a generated component', () => {
    const missing = iconList.filter(
      name => !icons[toPascalCase(name) as keyof typeof icons],
    );
    expect(missing).toEqual([]);
  });

  test('every deprecated alias points to a valid primary name', () => {
    const broken = Object.entries(deprecatedIconNames).filter(
      ([, primary]) => !(iconList as readonly string[]).includes(primary),
    );
    expect(broken).toEqual([]);
  });

  test('every deprecated alias resolves to a generated component', () => {
    const broken = Object.entries(deprecatedIconNames).filter(
      ([legacy]) =>
        !icons[toPascalCase(legacy) as keyof typeof icons] &&
        !icons[
          toPascalCase(
            deprecatedIconNames[legacy as keyof typeof deprecatedIconNames],
          ) as keyof typeof icons
        ],
    );
    expect(broken).toEqual([]);
  });

  test('rtlFlippableIconNames only contain valid primary names', () => {
    const invalid = rtlFlippableIconNames.filter(
      name => !(iconList as readonly string[]).includes(name),
    );
    expect(invalid).toEqual([]);
  });
});
