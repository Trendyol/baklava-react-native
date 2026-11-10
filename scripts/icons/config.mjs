// Configuration for the Baklava icon generation pipeline (scripts/generate-icons.mjs).
// Primary icon names are the Baklava Web names from @trendyol/baklava-icons.

// Icons that must be mirrored horizontally in RTL layouts.
// The flip is applied by the Icon component at runtime (I18nManager.isRTL).
export const RTL_FLIP_ICON_NAMES = ['arrow_left', 'arrow_right'];

// Fill values in source SVGs that become prop-driven:
// fill={props?.fill ?? '#273142'}
// 'currentColor' is the Baklava Web convention,
// '#273142' is kept for SVGs in src/svg-icons-local.
export const PROP_FILL_VALUES = ['currentColor', '#273142'];

export const DEFAULT_ICON_FILL = '#273142';

// Deprecated kebab-case aliases of the pre-pipeline RN public API.
export { LEGACY_ICON_ALIASES } from './legacy-aliases.mjs';
