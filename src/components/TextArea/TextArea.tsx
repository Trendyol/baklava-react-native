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
import { TextAreaLabel } from './TextAreaLabel';
import { TextAreaHelpText } from './TextAreaHelpText';
import { TextAreaCounterText } from './TextAreaCounterText';
import { useInputRef, useInputValue, useOutlineLabelVisibility } from './hooks';
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

type TextAreaProps = React.ComponentProps<typeof Box> &
  TextInputProps & {
    label?: string | null;
    labelFixed?: boolean;
    placeholder?: string;
    helpText?: string | null;
    counterText?: number;
    errorText?: string | null;
    error?: boolean;
    onFocus?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
    onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
    disabled?: boolean;
    easing?: EasingFunction;
    testID?: string;
    editable?: boolean;
    value?: string;
    defaultValue?: string;
    onChangeText?: (text: string) => void;
    size?: VariantProps<Theme, 'textAreaSizeVariants'>['variant'];
    maxLength?: number;
    maxLengthErrorText?: string;
  };

const sizeVariant = createVariant<Theme, 'textAreaSizeVariants', 'size'>({
  property: 'size',
  themeKey: 'textAreaSizeVariants',
});

const BaseTextArea = createRestyleComponent<
  TextAreaProps & VariantProps<Theme, 'textAreaSizeVariants'>,
  Theme
>([layout, spacing, border, backgroundColor, position, sizeVariant], TextInput);

export type TextInputHandles = Pick<
  TextInput,
  'focus' | 'clear' | 'blur' | 'isFocused' | 'setNativeProps'
>;

const TextArea = forwardRef<TextInputHandles, TextAreaProps>(
  (
    {
      size = 'medium',
      label,
      labelFixed = false,
      placeholder,
      helpText,
      counterText,
      errorText,
      error = false,
      disabled = false,
      editable = true,
      easing = Easing.inOut(Easing.ease),
      testID = 'textArea',
      maxLength = 200,
      maxLengthErrorText = 'You have exceeded the character limit.',
      ...rest
    }: TextAreaProps,
    ref,
  ) => {
    const [focused, setFocused] = React.useState<boolean>(false);
    const [errorState, setErrorState] = React.useState<boolean>(false);
    const [length, setLength] = React.useState<number>(0);

    const innerRef = useInputRef();
    const { value, isControlled, setUncontrolledValue } = useInputValue({
      value: rest.value,
      defaultValue: rest.defaultValue,
    });

    const placeholderText = getPlaceholderText({
      label,
      labelFixed,
      placeholder,
      value,
      focused,
    });

    const borderColor = getBorderColor({
      focused,
      errorState,
    });

    const textAreaHeight: number = {
      small: theme.textAreaSizeVariants.small.height,
      medium: theme.textAreaSizeVariants.medium.height,
      large: theme.textAreaSizeVariants.large.height,
    }[size];

    const {
      startAnimation,
      stopAnimation,
      animatedViewProps,
      animatedTextProps,
    } = useOutlineLabelVisibility({
      theme,
      easing,
      textAreaHeight,
      focused,
      value,
      disabled,
      helpText,
      counterText,
      errorText,
      errorState,
    });

    useEffect(() => {
      setErrorState(error);
    }, [error]);

    const handleFocus = async (
      e: NativeSyntheticEvent<TextInputFocusEventData>,
    ) => {
      if (disabled || !editable) {
        return;
      }
      await startAnimation();

      setFocused(true);
      setErrorState(false);

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

      setLength(nextValue.length);

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

    const placeHolderSize = () => {
      if (size === 'large') {
        return 'm';
      } else if (size === 'medium') {
        return 'xs';
      } else {
        return '2xs';
      }
    };

    return (
      <Box py="2xs" px="m">
        <TextAreaLabel
          label={label}
          labelFixed={labelFixed}
          errorState={errorState}
          animatedViewProps={animatedViewProps}
          animatedTextProps={animatedTextProps}
          textAreaHeight={textAreaHeight}
        />
        <Box
          flexDirection="row"
          alignItems="center"
          borderWidth={1}
          borderRadius="m"
          borderColor={length > maxLength ? 'dangerKey' : borderColor}
          backgroundColor={disabled ? 'neutralLightest' : 'neutralFull'}
          px="m"
          justifyContent="flex-start"
          zIndex="layer_0"
          accessibilityLabel={`${testID}-box`}
          testID={`${testID}-box`}>
          <BaseTextArea
            {...rest}
            flex={1}
            paddingTop={placeHolderSize()}
            ref={innerRef}
            multiline={true}
            height={textAreaHeight}
            bg="transparent"
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder={placeholderText}
            placeholderTextColor={theme.colors.neutralLight}
            onChangeText={handleChangeText}
            value={value}
            disabled={disabled}
            editable={!disabled}
            accessibilityLabel={testID}
            testID={testID}
          />
        </Box>

        <Box flexDirection="row" justifyContent="space-between">
          <Box justifyContent="flex-start">
            <TextAreaHelpText
              helpText={helpText}
              errorState={length > maxLength ? true : errorState}
              errorText={length > maxLength ? maxLengthErrorText : errorText}
            />
          </Box>
          <Box justifyContent="flex-end">
            <TextAreaCounterText
              counterText={length}
              errorState={length > maxLength ? true : errorState}
            />
          </Box>
        </Box>
      </Box>
    );
  },
);

export default TextArea;
