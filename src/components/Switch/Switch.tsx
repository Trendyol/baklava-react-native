import {
  createRestyleComponent,
  layout,
  border,
  spacing,
  opacity,
} from '@ergenekonyigit/restyle';
import React, { useRef, useState } from 'react';
import {
  SwitchProps as RNSwitchProps,
  Animated,
  Easing,
  Pressable,
  StyleProp,
  ViewStyle,
} from 'react-native';
import theme, { Theme } from '../../theme';
import Text from '../Text/Text';
import Box from '../Box/Box';

export type SwitchContainerProps = React.ComponentProps<typeof Box>;

const SwitchContainer = createRestyleComponent<SwitchContainerProps, Theme>(
  [layout],
  Box,
);

export type AnimatedViewProps = React.ComponentProps<typeof Box> &
  Animated.AnimatedProps<StyleProp<ViewStyle>>;

const AnimatedView = createRestyleComponent<AnimatedViewProps, Theme>(
  [layout, border, spacing],
  Animated.View,
);

export type PressableProps = React.ComponentProps<typeof Box> &
  React.ComponentProps<typeof Pressable>;

const RestyledPressable = createRestyleComponent<PressableProps, Theme>(
  [opacity],
  Pressable,
);

export type SwitchProps = RNSwitchProps & {
  label?: string;
  value?: boolean;
  onValueChange: (value: boolean) => void;
  disabled?: boolean;
  onColor?: string;
  offColor?: string;
  containerStyle?: StyleProp<ViewStyle>;
};

const Switch = ({
  label,
  value,
  onValueChange,
  disabled,
  onColor,
  offColor,
  testID,
  accessibilityLabel,
  accessible,
  containerStyle,
}: SwitchProps) => {
  const [isEnabled, setIsEnabled] = useState(value ? value : false);
  const animatedCirclePosition = useRef(
    new Animated.Value(isEnabled ? 1 : 0),
  ).current;
  const animatedSwitchWidth = useRef(
    new Animated.Value(theme.spacing.l),
  ).current;
  const animatedSwitchMarginRight = useRef(new Animated.Value(0)).current;

  const onSwitchPressIn = () => {
    Animated.timing(animatedSwitchMarginRight, {
      toValue: isEnabled ? 1 : -1,
      duration: 200,
      easing: Easing.sin,
      useNativeDriver: false,
    }).start();

    Animated.timing(animatedSwitchWidth, {
      toValue: theme.spacing.xl,
      duration: 200,
      easing: Easing.sin,
      useNativeDriver: false,
    }).start();
  };

  const onSwitchPressOut = () => {
    Animated.timing(animatedSwitchWidth, {
      toValue: theme.spacing.l,
      duration: 130,
      easing: Easing.out(Easing.exp),
      useNativeDriver: false,
    }).start();
  };

  const handleValueChange = React.useCallback(
    (nextState: boolean) => {
      setIsEnabled(nextState);
      if (onValueChange) {
        onValueChange(nextState);
      }

      Animated.timing(animatedCirclePosition, {
        toValue: nextState ? 1 : 0,
        duration: 130,
        easing: Easing.out(Easing.exp),
        useNativeDriver: false,
      }).start();

      Animated.timing(animatedSwitchMarginRight, {
        toValue: 0,
        duration: 90,
        easing: Easing.out(Easing.exp),
        useNativeDriver: false,
      }).start();
    },
    [animatedCirclePosition, animatedSwitchMarginRight, onValueChange],
  );

  React.useEffect(() => {
    handleValueChange(!!value);
  }, [value, handleValueChange]);

  const testProps = React.useMemo(() => {
    const result: RNSwitchProps = {
      accessible: false,
      accessibilityLabel: undefined,
      testID: undefined,
    };

    if (!(testID || accessibilityLabel)) {
      return result;
    }

    result.accessible = accessible ?? true;
    result.accessibilityLabel = accessibilityLabel;
    result.testID = testID ?? accessibilityLabel;

    return result;
  }, [testID, accessibilityLabel, accessible]);

  return (
    <SwitchContainer
      flexDirection="row"
      alignItems="center"
      style={containerStyle}>
      {label && (
        <Text variant="subtitle2Medium" p="2xs" testID="switch-label">
          {label}
        </Text>
      )}
      <RestyledPressable
        opacity={disabled ? 0.5 : 1}
        disabled={disabled}
        onPressOut={() => onSwitchPressOut()}
        onPressIn={() => onSwitchPressIn()}
        onPress={() => handleValueChange(!isEnabled)}
        {...testProps}>
        <AnimatedView
          width={theme.spacing['4xl']}
          height={theme.spacing.xl}
          justifyContent="center"
          borderRadius="full"
          testID="switch-outer-view"
          //@ts-ignore
          backgroundColor={animatedCirclePosition.interpolate({
            inputRange: [0, 1],
            outputRange: [
              offColor ? offColor : theme.colors.neutralLighter,
              onColor ? onColor : theme.colors.primaryKey,
            ],
          })}>
          <AnimatedView
            backgroundColor="white"
            height={theme.spacing.l}
            marginStart="4xs"
            borderRadius="full"
            testID="switch-inner-view"
            //@ts-ignore
            width={animatedSwitchWidth}
            //@ts-ignore
            style={{
              transform: [
                {
                  translateX: animatedCirclePosition.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, theme.spacing.xl],
                  }),
                },
                {
                  translateX: animatedSwitchMarginRight.interpolate({
                    inputRange: [-1, 0, 1],
                    outputRange: [2, 0, -6],
                  }),
                },
              ],
            }}
          />
        </AnimatedView>
      </RestyledPressable>
    </SwitchContainer>
  );
};

export default Switch;
