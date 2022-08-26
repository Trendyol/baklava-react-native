import React from 'react';
import { Animated, Pressable } from 'react-native';
import theme from '../../src/theme';
import Box from '../Box/Box';
import Text from '../Text/Text';
import { getLabelColor } from './utils';

export function InputLabel({
  label,
  labelFixed,
  placeholder,
  required,
  focused,
  forceFocus,
  errorState,
  successState,
  animatedViewProps,
  animatedTextProps,
  inputHeight,
}: {
  label: string | null | undefined;
  labelFixed: boolean | undefined;
  placeholder: string | null | undefined;
  required: boolean;
  focused: boolean;
  forceFocus: () => void;
  errorState: boolean;
  successState: boolean;
  animatedViewProps: Animated.AnimatedProps<any>;
  animatedTextProps: Animated.AnimatedProps<any>;
  inputHeight: number;
}) {
  if (!label) {
    return null;
  }

  const contentSecondaryColor = getLabelColor({ errorState, successState });

  const RenderFixedLabel = () => {
    return (
      <Pressable onPress={forceFocus}>
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
      </Pressable>
    );
  };

  const RenderOutlinedLabel = () => {
    return (
      <>
        <Animated.View {...animatedViewProps}>
          <Pressable onPress={forceFocus}>
            <Box flexDirection="row" height={inputHeight + 6}>
              <Animated.Text {...animatedTextProps}>
                {label}
                {!required ? ' (Optional)' : ''}
              </Animated.Text>
            </Box>
          </Pressable>
        </Animated.View>
        {focused ? (
          <Box
            position="absolute"
            zIndex={1}
            top={inputHeight / 2 + 1}
            left={theme.space[5]}>
            <Text variant="subtitle03Regular" color="contentTertiary" pl="1px">
              {placeholder}
            </Text>
          </Box>
        ) : null}
      </>
    );
  };

  return labelFixed ? <RenderFixedLabel /> : <RenderOutlinedLabel />;
}
