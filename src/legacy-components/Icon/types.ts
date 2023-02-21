import { iconList } from './list';

export type IconNameType = typeof iconList[number];

export type IconSizeType =
  | '2xsmall'
  | 'xsmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'xlarge';
