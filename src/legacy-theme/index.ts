import base from './base';
import components from './components';

const theme = {
  ...base,
  ...components,
};

export type Theme = typeof theme;

export default theme;
