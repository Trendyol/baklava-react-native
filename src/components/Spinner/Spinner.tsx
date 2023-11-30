import { VariantProps } from '@ergenekonyigit/restyle';
import React from 'react';
import {
  Animated,
  ColorValue,
  Easing,
  TextProps as RNTextProps,
} from 'react-native';
import Svg, { Path } from 'react-native-svg';
import theme, { Theme } from '../../theme';

const AnimatedSvg = Animated.createAnimatedComponent(Svg);

const Spinner = ({
  testID,
  accessibilityLabel,
  accessible,
  color = 'primaryKey',
  size = 'm',
}: {
  testID?: string;
  accessibilityLabel?: string;
  accessible?: boolean;
  color?: VariantProps<Theme, 'colors'>['variant'] | ColorValue;
  size?: VariantProps<Theme, 'spinnerSizeVariants'>['variant'];
}) => {
  const rotation = React.useRef(new Animated.Value(0)).current;
  const spinnerColor = theme.colors[color as keyof Theme['colors']] ?? color;
  const spinnerSize = theme.spinnerSizeVariants[size];

  React.useEffect(() => {
    const loop = Animated.loop(
      Animated.timing(rotation, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    );
    loop.start();

    return () => {
      loop.stop();
    };
  }, [rotation]);

  const testProps = React.useMemo(() => {
    const result: RNTextProps = {
      accessible: false,
      accessibilityLabel: undefined,
      testID: undefined,
    };

    if (!(testID || accessibilityLabel)) {
      return result;
    }

    result.accessible = accessible ?? true;
    result.accessibilityLabel = accessibilityLabel ?? testID;
    result.testID = testID ?? accessibilityLabel;

    return result;
  }, [testID, accessibilityLabel, accessible]);

  const animatedStyle = React.useMemo(() => {
    return {
      transform: [
        {
          rotate: rotation.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg'],
          }),
        },
      ],
    };
  }, [rotation]);

  return (
    <AnimatedSvg
      style={animatedStyle}
      width={spinnerSize}
      height={spinnerSize}
      viewBox="0 0 48 48"
      fill="#FFFFFF"
      xmlns="http://www.w3.org/2000/svg"
      {...testProps}>
      <Path
        opacity={0.3}
        d="M48 24c0 13.255-10.745 24-24 24S0 37.255 0 24 10.745 0 24 0s24 10.745 24 24zM7.2 24c0 9.278 7.522 16.8 16.8 16.8S40.8 33.278 40.8 24 33.278 7.2 24 7.2 7.2 14.722 7.2 24z"
        fill={spinnerColor}
      />
      <Path
        d="M44.4 24c1.988 0 3.628-1.62 3.33-3.587A23.999 23.999 0 0027.587.27C25.62-.028 24 1.612 24 3.6s1.63 3.561 3.573 3.984a16.8 16.8 0 0112.843 12.843C40.839 22.37 42.412 24 44.4 24z"
        fill={spinnerColor}
      />
    </AnimatedSvg>
  );
};

export default Spinner;
