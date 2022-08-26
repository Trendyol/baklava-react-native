import { EasingFunction, TextInput } from 'react-native';

export type TextInputRefType = TextInput;

export type InputRefType =
  () => React.MutableRefObject<TextInputRefType | null>;

export type InputSizeTypes = 'small' | 'medium' | 'large';

export type CommonAnimatedPropsTypes = {
  duration: number;
  useNativeDriver: boolean;
  easing: EasingFunction;
};
