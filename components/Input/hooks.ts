import { useRef, useState } from 'react';
import { Animated, EasingFunction } from 'react-native';
import { theme } from '../../src';
import { IconNameType } from '../Icon/types';
import { CommonAnimatedPropsTypes, LabelStylePropTypes } from './types';

export const useTogglePasswordVisibility = (secureTextEntry: boolean) => {
  const [passwordVisibility, setPasswordVisibility] = useState(secureTextEntry);
  const [passwordVisibilityIcon, setPasswordVisibilityIcon] =
    useState<IconNameType>('eye-on');

  const handlePasswordVisibility = () => {
    if (passwordVisibilityIcon === 'eye-on') {
      setPasswordVisibilityIcon('eye-off');
      setPasswordVisibility(!passwordVisibility);
    } else if (passwordVisibilityIcon === 'eye-off') {
      setPasswordVisibilityIcon('eye-on');
      setPasswordVisibility(!passwordVisibility);
    }
  };

  return {
    passwordVisibility,
    passwordVisibilityIcon,
    handlePasswordVisibility,
  };
};

export const useOutlineLabelVisibility = (
  easing: EasingFunction,
  inputHeight: number,
  focused: boolean,
  value: string | undefined,
) => {
  const duration = 200;
  const commonAnimatedProps: CommonAnimatedPropsTypes = {
    duration,
    useNativeDriver: false,
    easing,
  };

  const labelFontSize: number = theme.fontSizes[1];
  const labelLineHeightValue: number = theme.fontSizes[2];
  const initialTopValue: number = (inputHeight - labelLineHeightValue + 2) / 2;
  const labelPositionEmptyValue: number = 0;
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

  const LabelStyle = ({
    isFocused,
    initialTopValue: topValue,
    activeLabelColor,
    passiveLabelColor,
  }: LabelStylePropTypes) => ({
    fontFamily: theme.fontNames[1],
    color: isFocused ? activeLabelColor : passiveLabelColor,
    backgroundColor: 'white',
    paddingRight: theme.space[2],
    paddingLeft: theme.space[2],
    top: topValue - 4,
  });

  const animatedViewProps = {
    style: {
      position: 'absolute',
      bottom: labelPositionRef,
      left: theme.space[4],
      zIndex: 2,
      height: inputHeight + 6,
    },
  };

  const animatedTextProps = {
    style: [
      LabelStyle({
        isFocused: focused,
        initialTopValue,
        activeLabelColor: theme.colors.contentSecondary as string,
        passiveLabelColor: theme.colors.contentTertiary as string,
      }),
      {
        fontSize: fontSizeRef,
        lineHeight: lineHeightRef,
      },
    ],
  };

  return {
    startAnimation,
    stopAnimation,
    animatedViewProps,
    animatedTextProps,
  };
};
