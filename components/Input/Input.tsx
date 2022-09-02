import React, { forwardRef, useEffect } from 'react';
import {
  Easing,
  EasingFunction,
  NativeSyntheticEvent,
  TextInput,
  TextInputFocusEventData,
} from 'react-native';
import styled from 'styled-components/native';
import { color, flexbox, space, borderRadius, position } from 'styled-system';
import theme from '../../src/theme';
import Box from '../Box/Box';
import { InputSizeTypes } from './types';
import { IconNameType } from '../Icon/types';
import { InputIcon } from './InputIcon';
import { InputLabel } from './InputLabel';
import { InputHelpText } from './InputHelpText';
import {
  useInputRef,
  useInputValue,
  useOutlineLabelVisibility,
  useTogglePasswordVisibility,
} from './hooks';
import { getBorderColor, getPlaceholderText } from './utils';

const BaseInput = styled(TextInput)`
  ${flexbox}
  ${color}
  ${space}
  ${position}
  ${borderRadius}
`;

type InputProps = React.ComponentPropsWithRef<typeof TextInput> & {
  size?: InputSizeTypes;
  label?: string | null;
  labelFixed?: boolean;
  placeholder?: string;
  helpText?: string | null;
  errorText?: string | null;
  successText?: string | null;
  required?: boolean;
  icon?: IconNameType | null;
  success?: boolean;
  error?: boolean;
  secureTextEntry?: boolean;
  onFocus?: (args: any) => void;
  onBlur?: (args: any) => void;
  disabled?: boolean;
  easing?: EasingFunction;
  testID?: string;
};

export type TextInputHandles = Pick<
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
      helpText,
      errorText,
      successText,
      icon,
      success = false,
      error = false,
      secureTextEntry = false,
      required = false,
      disabled = false,
      editable = true,
      easing = Easing.inOut(Easing.ease),
      testID = 'input',
      ...rest
    }: InputProps,
    ref,
  ) => {
    const [focused, setFocused] = React.useState<boolean>(false);
    const [errorState, setErrorState] = React.useState<boolean>(false);
    const [successState, setSuccessState] = React.useState<boolean>(false);
    const [variantIconName, setVariantIconName] =
      React.useState<IconNameType | null>(null);

    const innerRef = useInputRef();
    const { value, isControlled, setUncontrolledValue } = useInputValue({
      value: rest.value,
      defaultValue: rest.defaultValue,
    });

    const placeholderText = getPlaceholderText({
      label,
      labelFixed,
      placeholder,
      required,
      value,
      focused,
    });

    const borderColor = getBorderColor({ focused, successState, errorState });

    const inputHeight: number = {
      small: theme.inputStyle.height[0],
      medium: theme.inputStyle.height[1],
      large: theme.inputStyle.height[2],
    }[size];

    const {
      passwordVisibility,
      setPasswordVisibility,
      passwordVisibilityIcon,
      handlePasswordVisibility,
    } = useTogglePasswordVisibility(secureTextEntry);

    useEffect(() => {
      setPasswordVisibility(secureTextEntry);
    }, [secureTextEntry, setPasswordVisibility]);

    const {
      startAnimation,
      stopAnimation,
      animatedViewProps,
      animatedTextProps,
    } = useOutlineLabelVisibility({
      easing,
      inputHeight,
      focused,
      value,
      disabled,
      helpText,
      errorText,
      successText,
      errorState,
      successState,
    });

    useEffect(() => {
      setErrorState(error);
      setSuccessState(success);

      if (icon) {
        setVariantIconName(null);
      } else if (error) {
        setVariantIconName('close-fill');
      } else if (success) {
        setVariantIconName('check-fill');
      }
    }, [error, success, icon]);

    const handleFocus = (
      args: NativeSyntheticEvent<TextInputFocusEventData>,
    ) => {
      if (disabled || !editable) {
        return;
      }
      startAnimation();

      setFocused(true);
      setVariantIconName(null);
      setErrorState(false);
      setSuccessState(false);

      rest.onFocus?.(args);
    };

    const handleBlur = (
      args: NativeSyntheticEvent<TextInputFocusEventData>,
    ) => {
      if (disabled || !editable) {
        return;
      }

      if (!value) {
        stopAnimation();
      }

      setFocused(false);
      rest.onBlur?.(args);
    };

    const handleChangeText = (nextValue: string) => {
      if (disabled || !editable) {
        return;
      }

      if (!isControlled) {
        setUncontrolledValue(nextValue);
      }
      rest.onChangeText?.(nextValue);
    };

    React.useImperativeHandle(ref, () => ({
      focus: () => innerRef.current?.focus(),
      clear: () => innerRef.current?.clear(),
      setNativeProps: (args: Record<string, unknown>) =>
        innerRef.current?.setNativeProps(args),
      isFocused: () => innerRef.current?.isFocused() || false,
      blur: () => innerRef.current?.blur(),
    }));

    return (
      <Box py={3}>
        <InputLabel
          label={label}
          labelFixed={labelFixed}
          placeholder={placeholderText}
          required={required}
          focused={focused}
          errorState={errorState}
          successState={successState}
          animatedViewProps={animatedViewProps}
          animatedTextProps={animatedTextProps}
          inputHeight={inputHeight}
        />
        <Box
          flexDirection="row"
          alignItems="center"
          borderWidth={1}
          borderRadius="normal"
          borderColor={borderColor}
          backgroundColor={disabled ? 'tertiaryColor' : 'white'}
          px={5}
          zIndex={0}
          accessibilityLabel={`${testID}-box`}
          testID={`${testID}-box`}>
          <BaseInput
            {...rest}
            //@ts-ignore
            flex={1}
            ref={innerRef}
            multiline={false}
            height={inputHeight}
            bg="transparent"
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder={placeholderText}
            placeholderTextColor={theme.colors.contentTertiary}
            secureTextEntry={passwordVisibility}
            onChangeText={handleChangeText}
            value={value}
            disabled={disabled}
            editable={!disabled}
            accessibilityLabel={testID}
            testID={testID}
            style={{ fontFamily: theme.fontNames[1] }}
          />
          <InputIcon
            secureTextEntry={secureTextEntry}
            icon={icon}
            variantIconName={variantIconName}
            focused={focused}
            successState={successState}
            errorState={errorState}
            passwordVisibilityIcon={passwordVisibilityIcon}
            handlePasswordVisibility={handlePasswordVisibility}
          />
        </Box>
        <InputHelpText
          helpText={helpText}
          errorState={errorState}
          errorText={errorText}
          successState={successState}
          successText={successText}
        />
      </Box>
    );
  },
);

export default Input;
