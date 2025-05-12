import React from 'react';
import { Animated, I18nManager } from 'react-native';
import Box from '../Box/Box';
import Text from '../Text/Text';
import { AnimatedTextPropsType, AnimatedViewPropsType } from './types';
import { getLabelColor } from './utils';
import theme from '../../theme';

const isRTL = I18nManager.isRTL;

export const InputLabel = React.memo(
  ({
    label,
    subLabel,
    labelFixed,
    errorState,
    successState,
    animatedViewProps,
    animatedTextProps,
    inputHeight,
    required,
  }: {
    label?: string | null;
    subLabel?: string | null;
    labelFixed?: boolean;
    errorState: boolean;
    successState: boolean;
    animatedViewProps: AnimatedViewPropsType;
    animatedTextProps: AnimatedTextPropsType;
    inputHeight: number;
    required?: boolean;
  }) => {
    if (!label) {
      return null;
    }

    const contentSecondaryColor = getLabelColor({ errorState, successState });

    const RenderFixedLabel = () => {
      return (
        <Box flexDirection="row" mb="3xs" testID="fixed-label-box">
          <Text
            variant="subtitle04Medium"
            color={contentSecondaryColor}
            testID="fixed-label">
            {label}
            {required && (
              <Text variant="subtitle04Medium" color="dangerKey">
                *
              </Text>
            )}
          </Text>
          {subLabel ? (
            <Text
              testID="subLabel"
              ml="4xs"
              variant="subtitle04Regular"
              color="neutralLight">
              {subLabel}
            </Text>
          ) : null}
        </Box>
      );
    };

    const RenderOutlinedLabel = () => {
      return (
        <>
          <Animated.View {...animatedViewProps} pointerEvents="none">
            <Box
              flexDirection="row"
              height={inputHeight + 6}
              testID="outlined-label-box">
              <Animated.Text {...animatedTextProps}>
                {isRTL
                  ? `${subLabel ?? ''}${label}`
                  : `${label}${subLabel ?? ''}`}
              </Animated.Text>
              {required && (
                <Animated.Text
                  style={[
                    animatedTextProps.style,
                    { color: theme.colors.dangerKey },
                  ]}>
                  *
                </Animated.Text>
              )}
            </Box>
          </Animated.View>
        </>
      );
    };

    return labelFixed ? <RenderFixedLabel /> : <RenderOutlinedLabel />;
  },
);
