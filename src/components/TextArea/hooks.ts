import { useMemo, useRef, useState } from 'react';
import { Animated, EasingFunction } from 'react-native';
import { Theme } from '../../theme';
import {
  InputRefType,
  CommonAnimatedPropsTypes,
  AnimatedViewPropsType,
  AnimatedTextPropsType,
} from './types';
import { getHelpText, getCounterText } from './utils';

export const useInputRef: InputRefType = () => useRef(null);

export const useInputValue = ({
  value,
  defaultValue,
}: {
  value?: string;
  defaultValue?: string;
}) => {
  const isControlled = value !== undefined;
  const validInputValue = isControlled ? value : defaultValue;
  const [uncontrolledValue, setUncontrolledValue] = useState<
    string | undefined
  >(validInputValue);

  return {
    isControlled,
    setUncontrolledValue,
    value: isControlled ? value : uncontrolledValue,
  };
};

export const useOutlineLabelVisibility = ({
  theme,
  easing,
  textAreaHeight,
  focused,
  value,
  disabled,
  helpText,
  counterText,
  errorText,
  errorState,
}: {
  theme: Theme;
  easing: EasingFunction;
  textAreaHeight: number;
  focused: boolean;
  value?: string;
  disabled: boolean;
  helpText?: string | null;
  counterText?: number;
  errorText?: string | null;
  errorState: boolean;
}) => {
  const duration = 200;
  const commonAnimatedProps: CommonAnimatedPropsTypes = {
    duration,
    useNativeDriver: false,
    easing,
  };

  const labelFontSize: number = theme.textVariants.defaults.fontSize;
  const labelLineHeightValue: number =
    theme.textVariants.subtitle2Regular.fontSize;
  const initialTopValue: number = 12;
  const labelPositionEmptyValue = 0;
  const labelPositionFillValue: number =
    labelLineHeightValue / 2 + initialTopValue - 2;

  const labelPositionRef = useRef(
    new Animated.Value(
      value ? labelPositionFillValue : labelPositionEmptyValue,
    ),
  ).current;
  const fontSizeRef = useRef(
    new Animated.Value(
      value
        ? theme.textVariants.subtitle4Regular.fontSize
        : theme.textVariants.defaults.fontSize,
    ),
  ).current;
  const lineHeightRef = useRef(
    new Animated.Value(
      value
        ? theme.textVariants.defaults.fontSize
        : theme.textVariants.subtitle2Regular.fontSize,
    ),
  ).current;

  /* istanbul ignore next */
  const startAnimation = () => {
    Animated.parallel([
      Animated.timing(labelPositionRef, {
        toValue: labelPositionFillValue,
        ...commonAnimatedProps,
      }),
      Animated.timing(fontSizeRef, {
        toValue: labelFontSize - 2,
        ...commonAnimatedProps,
      }),
      Animated.timing(lineHeightRef, {
        toValue: labelLineHeightValue - 2,
        ...commonAnimatedProps,
      }),
    ]).start();
  };

  /* istanbul ignore next */
  const stopAnimation = () => {
    Animated.parallel([
      Animated.timing(labelPositionRef, {
        toValue: labelPositionEmptyValue,
        ...commonAnimatedProps,
      }),
      Animated.timing(fontSizeRef, {
        toValue: labelFontSize,
        ...commonAnimatedProps,
      }),
      Animated.timing(lineHeightRef, {
        toValue: labelLineHeightValue,
        ...commonAnimatedProps,
      }),
    ]).start();
  };

  let viewHeight = textAreaHeight + 6;
  const helpTextContent = getHelpText({
    helpText,
    errorText,
    errorState,
  });

  if (helpTextContent) {
    viewHeight = textAreaHeight + 24;
  }

  const counterTextContent = getCounterText({
    counterText,
    errorText,
    errorState,
  });

  if (counterTextContent) {
    viewHeight = textAreaHeight + 24;
  }

  const animatedViewProps: AnimatedViewPropsType = useMemo(() => {
    return {
      style: {
        position: 'absolute',
        bottom: labelPositionRef,
        left: theme.spacing.xs,
        zIndex: 2,
        height: viewHeight,
      },
    };
  }, [labelPositionRef, theme.spacing, viewHeight]);

  const animatedTextProps: AnimatedTextPropsType = useMemo(() => {
    return {
      style: {
        fontFamily: theme.fonts.regular,
        color: focused ? theme.colors.neutralDark : theme.colors.neutralLight,
        backgroundColor: disabled ? 'transparent' : theme.colors.neutralFull,
        height: lineHeightRef,
        paddingLeft: theme.spacing['3xs'],
        paddingRight: theme.spacing['3xs'],
        top: initialTopValue - 4,
        fontSize: fontSizeRef,
        lineHeight: lineHeightRef,
      },
    };
  }, [
    disabled,
    focused,
    fontSizeRef,
    initialTopValue,
    lineHeightRef,
    theme.colors.neutralDark,
    theme.colors.neutralFull,
    theme.colors.neutralLight,
    theme.fonts,
    theme.spacing,
  ]);

  return {
    startAnimation,
    stopAnimation,
    animatedViewProps,
    animatedTextProps,
  };
};
