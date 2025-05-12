import { EasingFunction, TextInput } from 'react-native';

export type TextInputRefType = TextInput;

export type InputRefType =
  () => React.MutableRefObject<TextInputRefType | null>;

export type AnimatedViewPropsType = {};

export type AnimatedTextPropsType = {
  style?: any;
};

export type CommonAnimatedPropsTypes = {
  duration: number;
  useNativeDriver: boolean;
  easing: EasingFunction;
};
