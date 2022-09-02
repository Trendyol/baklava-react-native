import { Animated, EasingFunction, TextInput } from 'react-native';
import Box from '../Box/Box';
import Text from '../Text/Text';

export type TextInputRefType = TextInput;

export type InputRefType =
  () => React.MutableRefObject<TextInputRefType | null>;

export type InputSizeTypes = 'small' | 'medium' | 'large';

export type AnimatedViewPropsType = Animated.AnimatedProps<typeof Box>;

export type AnimatedTextPropsType = Animated.AnimatedProps<typeof Text>;

export type CommonAnimatedPropsTypes = {
  duration: number;
  useNativeDriver: boolean;
  easing: EasingFunction;
};
