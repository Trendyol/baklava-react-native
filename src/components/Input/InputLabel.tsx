import React from 'react';
import { Animated } from 'react-native';
import Box from '../Box/Box';
import Text from '../Text/Text';
import { AnimatedTextPropsType, AnimatedViewPropsType } from './types';
import { getLabelColor } from './utils';

export const InputLabel = React.memo(
  ({
    label,
    labelFixed,
    required,
    errorState,
    successState,
    animatedViewProps,
    animatedTextProps,
    inputHeight,
  }: {
    label?: string | null;
    labelFixed?: boolean;
    required: boolean;
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
          {!required ? (
            <Text
              testID="optional-fixed-label"
              ml="4xs"
              variant="subtitle04Regular"
              color="contentTertiary">
              (Optional)
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
                {label}
                {!required ? ' (Optional)' : ''}
              </Animated.Text>
            </Box>
          </Animated.View>
        </>
      );
    };

    return labelFixed ? <RenderFixedLabel /> : <RenderOutlinedLabel />;
  },
);
