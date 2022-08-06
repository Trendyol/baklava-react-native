import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import styled from 'styled-components/native';
import { color, flexbox, space, borderRadius } from 'styled-system';
import theme from '../../src/theme';
import Box from '../Box/Box';
import Text from '../Text/Text';
import Icon from '../Icon/Icon';
import { InputSizeTypes } from './types';
import { IconNameType } from '../Icon/types';

const BaseInput = styled(TextInput)`
  ${flexbox}
  ${color}
  ${space}
  ${borderRadius}
`;

type InputProps = {
  size: InputSizeTypes;
  label?: string | null;
  labelFixed?: boolean;
  placeholder?: string;
  description?: string;
  optional?: boolean;
  icon?: IconNameType;
} & TextInputProps;

const Input = ({
  size = 'large',
  label,
  labelFixed,
  placeholder,
  description,
  icon,
  optional = false,
  ...rest
}: InputProps): JSX.Element => {
  const placeholderText =
    !label && optional ? `${placeholder} (Optional)` : placeholder;

  const inputHeight = {
    small: theme.inputStyle.height[0],
    medium: theme.inputStyle.height[1],
    large: theme.inputStyle.height[2],
  }[size];

  return (
    <Box>
      {label ? (
        labelFixed ? (
          <Box flexDirection="row" mb={2}>
            <Text variant="subtitle04Medium" color="contentSecondary">
              {label}
            </Text>
            {optional && (
              <Text ml={1} variant="subtitle04Regular" color="contentTertiary">
                (Optional)
              </Text>
            )}
          </Box>
        ) : (
          <Text>animated-label</Text>
        )
      ) : null}
      <Box
        flexDirection="row"
        alignItems="center"
        borderWidth={1}
        borderRadius="normal"
        borderColor="borderColor"
        px={5}>
        <BaseInput
          flex={1}
          multiline={false}
          height={inputHeight}
          // bg="alertBackground"
          placeholder={placeholderText}
          placeholderTextColor={theme.colors.contentTertiary as string}
          {...rest}
        />
        {icon ? (
          <Box pl={3}>
            <Icon name={icon} size="small" color="successColor" />
          </Box>
        ) : null}
      </Box>
      {description ? (
        <Box mt={2} ml={5}>
          <Text variant="subtitle04Regular" color="contentTertiary">
            {description}
          </Text>
        </Box>
      ) : null}
    </Box>
  );
};

Input.defaultProps = {};

export default Input;
