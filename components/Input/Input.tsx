import React, { forwardRef, useEffect } from 'react';
import { Easing, EasingFunction, TextInput, Pressable } from 'react-native';
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
  useOutlineLabelVisibility,
  useTogglePasswordVisibility,
} from './hooks';

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
      ...rest
    }: InputProps,
    ref,
  ) => {
    const [focused, setFocused] = React.useState<boolean>(false);
    const [errorState, setErrorState] = React.useState<boolean>(false);
    const [successState, setSuccessState] = React.useState<boolean>(false);
    const [iconName, setIconName] = React.useState<IconNameType | null>(
      icon ?? null,
    );
    const [variantIconName, setVariantIconName] =
      React.useState<IconNameType | null>(null);

    const isControlled = rest.value !== undefined;
    const validInputValue = isControlled ? rest.value : rest.defaultValue;
    const [uncontrolledValue, setUncontrolledValue] = React.useState<
      string | undefined
    >(validInputValue);
    const value = isControlled ? rest.value : uncontrolledValue;
    const root = React.useRef<TextInput | undefined | null>();

    const inputHeight: number = {
      small: theme.inputStyle.height[0],
      medium: theme.inputStyle.height[1],
      large: theme.inputStyle.height[2],
    }[size];

    const {
      passwordVisibility,
      passwordVisibilityIcon,
      handlePasswordVisibility,
    } = useTogglePasswordVisibility(secureTextEntry);

    const {
      startAnimation,
      stopAnimation,
      animatedViewProps,
      animatedTextProps,
    } = useOutlineLabelVisibility(easing, inputHeight, focused, value);

    useEffect(() => {
      setErrorState(error);
      if (!iconName && error) {
        setVariantIconName('close-fill');
      }
    }, [error, iconName]);

    useEffect(() => {
      setSuccessState(success);
      if (!iconName && success) {
        setVariantIconName('check-fill');
      }
    }, [success, iconName]);

    useEffect(() => {
      if (icon) {
        setVariantIconName(null);
        setIconName(icon);
      }
    }, [icon]);

    const getPlaceholderText = () => {
      if (!label && !placeholder) {
        return '';
      }

      if (!label && placeholder) {
        if (required) {
          return `${placeholder}`;
        } else {
          return `${placeholder} (Optional)`;
        }
      }

      if (label && !placeholder) {
        return '';
      }

      if (label && placeholder) {
        if (labelFixed) {
          return placeholder;
        } else {
          return '';
        }
      }
    };
    const placeholderText = getPlaceholderText();

    const borderColor = focused
      ? 'primaryColor'
      : successState
      ? 'successColor'
      : errorState
      ? 'dangerColor'
      : 'borderColor';

    const handleFocus = (args: any) => {
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

    const handleBlur = (args: Object) => {
      if (!editable) {
        return;
      }

      if (!value) {
        stopAnimation();
      }

      setFocused(false);
      // Keyboard.dismiss();
      rest.onBlur?.(args);
    };

    const handleChangeText = (nextValue: string) => {
      if (!editable || disabled) {
        return;
      }

      if (!isControlled) {
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

    const handlePressOut = () => {
      console.log('handlePressOut');
    };

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
        <Pressable onPressOut={handlePressOut}>
          <Box
            flexDirection="row"
            alignItems="center"
            borderWidth={1}
            borderRadius="normal"
            borderColor={borderColor}
            backgroundColor={disabled ? 'tertiaryColor' : 'white'}
            px={5}
            zIndex={0}>
            <BaseInput
              {...rest}
              flex={1}
              innerRef={(innerRef: TextInput) => {
                root.current = innerRef;
              }}
              multiline={false}
              height={inputHeight}
              bg="transparent"
              onFocus={handleFocus}
              forceFocus={forceFocus}
              onBlur={handleBlur}
              placeholder={placeholderText}
              placeholderTextColor={theme.colors.contentTertiary as string}
              secureTextEntry={passwordVisibility}
              onChangeText={handleChangeText}
              value={value}
              disabled={disabled}
              editable={!disabled}
              style={{ fontFamily: theme.fontNames[1] }}
            />
            <InputIcon
              secureTextEntry={secureTextEntry}
              iconName={iconName}
              variantIconName={variantIconName}
              focused={focused}
              successState={successState}
              errorState={errorState}
              passwordVisibilityIcon={passwordVisibilityIcon}
              handlePasswordVisibility={handlePasswordVisibility}
            />
          </Box>
        </Pressable>
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
