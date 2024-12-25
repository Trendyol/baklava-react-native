import React from 'react';
import { Animated, I18nManager } from 'react-native';
import Box from '../Box/Box';
import Text from '../Text/Text';
import { AnimatedTextPropsType, AnimatedViewPropsType } from './types';
import { getLabelColor } from './utils';

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
  }: {
    label?: string | null;
    subLabel?: string | null;
    labelFixed?: boolean;
    errorState: boolean;
    successState: boolean;
    animatedViewProps: AnimatedViewPropsType;
    animatedTextProps: AnimatedTextPropsType;
    inputHeight: number;
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
            </Box>
          </Animated.View>
        </>
      );
    };

    return labelFixed ? <RenderFixedLabel /> : <RenderOutlinedLabel />;
  },
);
