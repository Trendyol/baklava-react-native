import React from 'react';
import { Animated } from 'react-native';
import theme from '../../src/theme';
import Box from '../Box/Box';
import Text from '../Text/Text';
import { AnimatedTextPropsType, AnimatedViewPropsType } from './types';
import { getLabelColor } from './utils';

export const InputLabel = React.memo(
  ({
    label,
    labelFixed,
    placeholder,
    required,
    focused,
    errorState,
    successState,
    animatedViewProps,
    animatedTextProps,
    inputHeight,
  }: {
    label?: string | null;
    labelFixed?: boolean;
    placeholder?: string | null;
    required: boolean;
    focused: boolean;
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
        <Box flexDirection="row" mb={2}>
          <Text variant="subtitle04Medium" color={contentSecondaryColor}>
            {label}
          </Text>
          {!required ? (
            <Text ml={1} variant="subtitle04Regular" color="contentTertiary">
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
            <Box flexDirection="row" height={inputHeight + 6}>
              <Animated.Text {...animatedTextProps}>
                {label}
                {!required ? ' (Optional)' : ''}
              </Animated.Text>
            </Box>
          </Animated.View>
          {focused ? (
            <Box
              position="absolute"
              zIndex={1}
              top={inputHeight / 2 + 1}
              left={theme.space[5]}>
              <Text
                variant="subtitle03Regular"
                color="contentTertiary"
                testID="input-label-placeholder"
                pl="1px">
                {placeholder}
              </Text>
            </Box>
          ) : null}
        </>
      );
    };

    return labelFixed ? <RenderFixedLabel /> : <RenderOutlinedLabel />;
  },
);
