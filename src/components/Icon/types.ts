import { deprecatedIconNames, iconList } from './list';

export type PrimaryIconNameType = (typeof iconList)[number];

/**
 * @deprecated Use the primary Baklava Web icon names from IconNameType
 * (e.g. 'add_note' instead of 'add-note'). Legacy names keep working as
 * aliases but will be removed in a future major version.
 */
export type DeprecatedIconNameType = keyof typeof deprecatedIconNames;

export type IconNameType = PrimaryIconNameType | DeprecatedIconNameType;
