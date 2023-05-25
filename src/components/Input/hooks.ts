import { useCallback, useMemo, useRef, useState } from 'react';
import { Animated, EasingFunction } from 'react-native';
import { Theme } from '../../theme';
import { IconNameType } from '../Icon/types';
import {
  InputRefType,
  CommonAnimatedPropsTypes,
  AnimatedViewPropsType,
  AnimatedTextPropsType,
} from './types';
import { getHelpText } from './utils';

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

export const useTogglePasswordVisibility = (secureTextEntry: boolean) => {
  const [passwordVisibility, setPasswordVisibility] = useState(secureTextEntry);
  const [passwordVisibilityIcon, setPasswordVisibilityIcon] =
    useState<IconNameType>('eye-on');

  const handlePasswordVisibility = useCallback(() => {
    setPasswordVisibility(prev => {
      if (prev) {
        setPasswordVisibilityIcon('eye-off');
      } else {
        setPasswordVisibilityIcon('eye-on');
      }
      return !prev;
    });
  }, []);

  return {
    passwordVisibility,
    setPasswordVisibility,
    passwordVisibilityIcon,
    handlePasswordVisibility,
  };
};

export const useOutlineLabelVisibility = ({
  theme,
  easing,
  inputHeight,
  focused,
  value,
  disabled,
  helpText,
  errorText,
  successText,
  errorState,
  successState,
}: {
  theme: Theme;
  easing: EasingFunction;
  inputHeight: number;
  focused: boolean;
  value?: string;
  disabled: boolean;
  helpText?: string | null;
  errorText?: string | null;
  successText?: string | null;
  errorState: boolean;
  successState: boolean;
}) => {
  const duration = 200;
  const commonAnimatedProps: CommonAnimatedPropsTypes = {
    duration,
    useNativeDriver: false,
    easing,
  };

  const labelFontSize: number = theme.textVariants.defaults.fontSize;
  const labelLineHeightValue: number =
    theme.textVariants.subtitle02Regular.fontSize;
  const initialTopValue: number = (inputHeight - labelLineHeightValue + 2) / 2;
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
        ? theme.textVariants.subtitle04Regular.fontSize
        : theme.textVariants.defaults.fontSize,
    ),
  ).current;
  const lineHeightRef = useRef(
    new Animated.Value(
      value
        ? theme.textVariants.defaults.fontSize
        : theme.textVariants.subtitle02Regular.fontSize,
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

  let viewHeight = inputHeight + 6;
  const helpTextContent = getHelpText({
    helpText,
    errorText,
    successText,
    errorState,
    successState,
  });

  if (helpTextContent) {
    viewHeight = inputHeight + 24;
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
