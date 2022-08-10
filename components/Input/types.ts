import { EasingFunction } from 'react-native';

export type InputTypeTypes = 'filter' | 'form' | 'table';

export type InputSizeTypes = 'small' | 'medium' | 'large';

export type CommonAnimatedPropsTypes = {
  duration: number;
  useNativeDriver: boolean;
  easing: EasingFunction;
};

export type LabelStylePropTypes = {
  isFocused: boolean;
  initialTopValue: number;
  activeLabelColor: string;
  passiveLabelColor: string;
};
