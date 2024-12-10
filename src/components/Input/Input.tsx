import React, { forwardRef, useEffect } from 'react';
import {
  Easing,
  EasingFunction,
  NativeSyntheticEvent,
  TextInput,
  TextInputProps,
  TextInputFocusEventData,
} from 'react-native';
import theme, { Theme } from '../../theme';
import Box from '../Box/Box';
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
import {
  backgroundColor,
  border,
  createRestyleComponent,
  createVariant,
  layout,
  position,
  spacing,
  VariantProps,
} from '@ergenekonyigit/restyle';
import Text from '../Text/Text';

type InputProps = React.ComponentProps<typeof Box> &
  TextInputProps & {
    label?: string | null;
    labelFixed?: boolean;
    placeholder?: string;
    helpText?: string | null;
    errorText?: string | null;
    successText?: string | null;
    required?: boolean;
    requiredText?: boolean;
    icon?: IconNameType | null;
    success?: boolean;
    error?: boolean;
    secureTextEntry?: boolean;
    onFocus?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
    onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
    disabled?: boolean;
    easing?: EasingFunction;
    testID?: string;
    editable?: boolean;
    value?: string;
    defaultValue?: string;
    leadingText?: string;
    trailingText?: string;
    onChangeText?: (text: string) => void;
    size?: VariantProps<Theme, 'inputSizeVariants'>['variant'];
  };

const sizeVariant = createVariant<Theme, 'inputSizeVariants', 'size'>({
  property: 'size',
  themeKey: 'inputSizeVariants',
});

const BaseInput = createRestyleComponent<
  InputProps & VariantProps<Theme, 'inputSizeVariants'>,
  Theme
>([layout, spacing, border, backgroundColor, position, sizeVariant], TextInput);

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
      requiredText = false,
      disabled = false,
      editable = true,
      easing = Easing.inOut(Easing.ease),
      testID = 'input',
      leadingText,
      trailingText,
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

    const borderColor = getBorderColor({
      focused,
      successState,
      errorState,
    });

    const inputHeight: number = {
      small: theme.inputSizeVariants.small.height,
      medium: theme.inputSizeVariants.medium.height,
      large: theme.inputSizeVariants.large.height,
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
      theme,
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

    const handleFocus = async (
      e: NativeSyntheticEvent<TextInputFocusEventData>,
    ) => {
      if (disabled || !editable) {
        return;
      }
      await startAnimation();

      setFocused(true);
      setVariantIconName(null);
      setErrorState(false);
      setSuccessState(false);

      rest.onFocus?.(e);
    };

    const handleBlur = async (
      e: NativeSyntheticEvent<TextInputFocusEventData>,
    ) => {
      if (disabled || !editable) {
        return;
      }

      if (!value) {
        await stopAnimation();
      }

      setFocused(false);
      rest.onBlur?.(e);
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
      <Box py={'2xs'}>
        <InputLabel
          label={label}
          labelFixed={labelFixed}
          required={required}
          requiredText={requiredText}
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
          borderRadius={'m'}
          borderColor={borderColor}
          backgroundColor={disabled ? 'neutralLightest' : 'neutralFull'}
          px="m"
          zIndex="layer_0"
          accessibilityLabel={`${testID}-box`}
          testID={`${testID}-box`}>
          {leadingText && !disabled ? (
            <Box mr="2xs">
              <Text
                color="neutralDark"
                variant="subtitle2Medium"
                accessibilityLabel="input-leading-text">
                {leadingText}
              </Text>
            </Box>
          ) : null}
          <BaseInput
            {...rest}
            flex={1}
            ref={innerRef}
            multiline={false}
            height={inputHeight}
            bg="transparent"
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder={placeholderText}
            placeholderTextColor={theme.colors.neutralLight}
            secureTextEntry={passwordVisibility}
            onChangeText={handleChangeText}
            value={value}
            disabled={disabled}
            editable={!disabled}
            accessibilityLabel={testID}
            testID={testID}
          />
          {trailingText ? (
            <Box ml="m" mr={icon ? 'm' : 'none'}>
              <Text
                color="neutralDark"
                variant="subtitle2Medium"
                accessibilityLabel="input-trailing-text">
                {trailingText}
              </Text>
            </Box>
          ) : null}
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
