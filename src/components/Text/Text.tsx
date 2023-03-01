import { createText, TextProps } from '@ergenekonyigit/restyle';
import { Theme } from '../../theme';

const Text = createText<Theme>();

export type TextVariants = TextProps<Theme>['variant'];

export default Text;
