import { useCallback, useMemo, useRef, useState } from 'react';
import { Animated, EasingFunction } from 'react-native';
import { theme } from '../../src';
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

  const labelFontSize: number = theme.fontSizes[1];
  const labelLineHeightValue: number = theme.fontSizes[2];
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
    new Animated.Value(value ? theme.fontSizes[0] : theme.fontSizes[1]),
  ).current;
  const lineHeightRef = useRef(
    new Animated.Value(value ? theme.fontSizes[1] : theme.fontSizes[2]),
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
        left: theme.space[4],
        zIndex: 2,
        height: viewHeight,
      },
    };
  }, [labelPositionRef, viewHeight]);

  const animatedTextProps: AnimatedTextPropsType = useMemo(() => {
    return {
      style: {
        fontFamily: theme.fontNames[1],
        color: focused
          ? theme.colors.contentSecondary
          : theme.colors.contentTertiary,
        backgroundColor: disabled ? 'transparent' : 'white',
        height: lineHeightRef,
        paddingLeft: theme.space[2],
        paddingRight: theme.space[2],
        top: initialTopValue - 4,
        fontSize: fontSizeRef,
        lineHeight: lineHeightRef,
      },
    };
  }, [disabled, focused, fontSizeRef, initialTopValue, lineHeightRef]);

  return {
    startAnimation,
    stopAnimation,
    animatedViewProps,
    animatedTextProps,
  };
};
