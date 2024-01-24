import React from 'react';
import { Animated } from 'react-native';
import Box from '../Box/Box';
import Text from '../Text/Text';
import { AnimatedTextPropsType, AnimatedViewPropsType } from './types';
import { getLabelColor } from './utils';

export const TextAreaLabel = React.memo(
  ({
    label,
    labelFixed,
    errorState,
    animatedViewProps,
    animatedTextProps,
  }: {
    label?: string | null;
    labelFixed?: boolean;
    errorState: boolean;
    animatedViewProps: AnimatedViewPropsType;
    animatedTextProps: AnimatedTextPropsType | any;
    textAreaHeight: number;
  }) => {
    if (!label) {
      return null;
    }

    const contentSecondaryColor = getLabelColor({ errorState });

    const RenderFixedLabel = () => {
      return (
        <Box flexDirection="row" mb="3xs" testID="fixed-label-box">
          <Text
            variant="subtitle04Medium"
            color={contentSecondaryColor}
            testID="fixed-label">
            {label}
          </Text>
        </Box>
      );
    };

    const RenderOutlinedLabel = () => {
      return (
        <>
          <Animated.View {...animatedViewProps} pointerEvents="none">
            <Box flexDirection="row" pl="m" testID="outlined-label-box">
              <Animated.Text
                style={
                  errorState
                    ? [animatedTextProps.style, { color: 'red' }]
                    : animatedTextProps.style
                }>
                {label}
              </Animated.Text>
            </Box>
          </Animated.View>
        </>
      );
    };

    return labelFixed ? <RenderFixedLabel /> : <RenderOutlinedLabel />;
  },
);
