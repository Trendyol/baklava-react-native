import React, { forwardRef, useMemo } from 'react';
import { TextInput } from 'react-native';
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

export interface InputOutlineMethods {
  focus: () => void;
  blur: () => void;
  isFocused: Boolean;
  clear: () => void;
}

type InputProps = React.ComponentPropsWithRef<typeof TextInput> & {
  size: InputSizeTypes;
  label?: string | null;
  labelFixed?: boolean;
  placeholder?: string;
  description?: string | null;
  optional?: boolean;
  icon?: IconNameType | null;
  success?: boolean;
  error?: boolean;
  secureTextEntry?: boolean;
  onFocus?: (args: any) => void;
  onBlur?: (args: any) => void;
  disabled?: boolean;
};

type TextInputHandles = Pick<
  TextInput,
  'focus' | 'clear' | 'blur' | 'isFocused' | 'setNativeProps'
>;

const Input = forwardRef<TextInputHandles, InputProps>(
  (
    {
      size = 'large',
      label,
      labelFixed,
      placeholder,
      description,
      icon,
      success,
      error,
      secureTextEntry = false,
      optional = false,
      disabled = false,
      editable = true,
      ...rest
    }: InputProps,
    ref,
  ) => {
    const isControlled = rest.value !== undefined;
    const validInputValue = isControlled ? rest.value : rest.defaultValue;
    const [focused, setFocused] = React.useState<boolean>(false);
    const [uncontrolledValue, setUncontrolledValue] = React.useState<
      string | undefined
    >(validInputValue);
    // Use value from props instead of local state when input is controlled
    const value = isControlled ? rest.value : uncontrolledValue;
    const root = React.useRef<TextInput | undefined | null>();

    const placeholderText = useMemo(
      () => (!label && optional ? `${placeholder} (Optional)` : placeholder),
      [label, optional, placeholder],
    );

    const inputHeight: number = {
      small: theme.inputStyle.height[0],
      medium: theme.inputStyle.height[1],
      large: theme.inputStyle.height[2],
    }[size];

    const borderColor = focused
      ? 'primaryColor'
      : success
      ? 'successColor'
      : error
      ? 'dangerColor'
      : 'borderColor';

    const labelColor = useMemo(
      () =>
        success ? 'successColor' : error ? 'dangerColor' : 'contentSecondary',
      [success, error],
    );

    const labelOptionalColor = useMemo(
      () =>
        success ? 'successColor' : error ? 'dangerColor' : 'contentTertiary',
      [success, error],
    );

    const descriptionColor = useMemo(
      () =>
        success ? 'successColor' : error ? 'dangerColor' : 'contentTertiary',
      [success, error],
    );

    const handleFocus = (args: any) => {
      if (disabled || !editable) {
        return;
      }

      setFocused(true);

      rest.onFocus?.(args);
    };

    const handleBlur = (args: Object) => {
      if (!editable) {
        return;
      }

      setFocused(false);
      rest.onBlur?.(args);
    };

    const handleChangeText = (nextValue: string) => {
      if (!editable || disabled) {
        return;
      }

      if (!isControlled) {
        // Keep track of value in local state when input is not controlled
        setUncontrolledValue(value);
      }
      rest.onChangeText?.(nextValue);
    };

    React.useImperativeHandle(ref, () => ({
      focus: () => root.current?.focus(),
      clear: () => root.current?.clear(),
      setNativeProps: (args: Object) => root.current?.setNativeProps(args),
      isFocused: () => root.current?.isFocused() || false,
      blur: () => root.current?.blur(),
      forceFocus: () => root.current?.focus(),
    }));

    const forceFocus = () => root.current?.focus();

    return (
      <Box py={3}>
        {label ? (
          labelFixed ? (
            <Box flexDirection="row" mb={2}>
              <Text variant="subtitle04Medium" color={labelColor}>
                {label}
              </Text>
              {optional && (
                <Text
                  ml={1}
                  variant="subtitle04Regular"
                  color={labelOptionalColor}>
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
          borderColor={borderColor}
          px={5}>
          <BaseInput
            {...rest}
            flex={1}
            innerRef={(innerRef: TextInput) => {
              root.current = innerRef;
            }}
            multiline={false}
            height={inputHeight}
            // bg="alertBackground"
            onFocus={handleFocus}
            forceFocus={forceFocus}
            onBlur={handleBlur}
            placeholder={placeholderText}
            secureTextEntry={secureTextEntry}
            placeholderTextColor={theme.colors.contentTertiary as string}
            onChangeText={handleChangeText}
            value={value}
          />
          {secureTextEntry ? (
            <Box px={3}>
              <Icon name="eye-off" color="contentTertiary" />
            </Box>
          ) : null}
          {icon ? (
            <Box pl={3}>
              <Icon
                name={icon}
                size="small"
                color={
                  success
                    ? 'successColor'
                    : error
                    ? 'dangerColor'
                    : 'contentTertiary'
                }
              />
            </Box>
          ) : null}
        </Box>
        {description ? (
          <Box mt={2} ml={5}>
            <Text variant="subtitle04Regular" color={descriptionColor}>
              {description}
            </Text>
          </Box>
        ) : null}
      </Box>
    );
  },
);

Input.defaultProps = {};

export default Input;
