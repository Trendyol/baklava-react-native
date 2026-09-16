import { VariantProps } from '@ergenekonyigit/restyle';
import React from 'react';
import {
  I18nManager,
  NativeSyntheticEvent,
  Platform,
  Pressable,
  StyleSheet,
  TextInput,
  TextInputFocusEventData,
  TextInputProps,
  View,
} from 'react-native';
import theme, { Theme } from '../../theme';
import Icon from '../Icon/Icon';
import { useInputRef } from '../Input/hooks';
import type { TextInputHandles } from '../Input/Input';
import Spinner from '../Spinner/Spinner';

export type SearchInputProps = TextInputProps & {
  size?: VariantProps<Theme, 'inputSizeVariants'>['variant'];
  loading?: boolean;
  disabled?: boolean;
  onClear?: () => void;
  clearAccessibilityLabel?: string;
  fontFamily?: keyof Theme['fonts'];
  testID?: string;
};

/* istanbul ignore next -- both are fixed by the native runtime */
const selectionColor = Platform.select({
  android: undefined,
  default: theme.colors.primaryKey,
});
/* istanbul ignore next -- both are fixed by the native runtime */
const textAlign = I18nManager.isRTL ? 'right' : 'left';

const SearchInput = React.forwardRef<TextInputHandles, SearchInputProps>(
  (
    {
      size = 'large',
      loading = false,
      disabled = false,
      editable = true,
      onClear,
      clearAccessibilityLabel = 'Clear search',
      fontFamily = 'regular',
      testID = 'search-input',
      placeholder = 'Search',
      onFocus,
      onBlur,
      onChangeText,
      value,
      defaultValue,
      style,
      ...rest
    },
    ref,
  ) => {
    const inputRef = useInputRef();
    const [focused, setFocused] = React.useState(false);
    // The text itself is never mirrored here: an uncontrolled input keeps it in
    // the native view and a controlled one keeps it in its owner. Only the
    // emptiness is tracked, to swap the search and clear actions.
    const [filled, setFilled] = React.useState(() => Boolean(defaultValue));

    const isControlled = value !== undefined;
    const isEditable = editable && !disabled;
    const hasValue = isControlled ? Boolean(value) : filled;
    const hasClearButton = hasValue && !loading && isEditable;

    const handleFocus = React.useCallback(
      (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
        if (!isEditable) {
          return;
        }

        setFocused(true);
        onFocus?.(event);
      },
      [isEditable, onFocus],
    );

    const handleBlur = React.useCallback(
      (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
        if (!isEditable) {
          return;
        }

        setFocused(false);
        onBlur?.(event);
      },
      [isEditable, onBlur],
    );

    const handleChangeText = React.useCallback(
      (nextValue: string) => {
        if (!isEditable) {
          return;
        }

        if (!isControlled) {
          setFilled(Boolean(nextValue));
        }
        onChangeText?.(nextValue);
      },
      [isControlled, isEditable, onChangeText],
    );

    const handleClear = React.useCallback(() => {
      inputRef.current?.clear();
      if (!isControlled) {
        setFilled(false);
      }
      onChangeText?.('');
      onClear?.();
    }, [inputRef, isControlled, onChangeText, onClear]);

    React.useImperativeHandle(ref, () => ({
      focus: () => inputRef.current?.focus(),
      clear: () => {
        inputRef.current?.clear();
        if (!isControlled) {
          setFilled(false);
        }
      },
      setNativeProps: (args: Record<string, unknown>) =>
        inputRef.current?.setNativeProps(args),
      isFocused: () => inputRef.current?.isFocused() || false,
      blur: () => inputRef.current?.blur(),
    }));

    const containerStyle = [
      styles.container,
      containerSizes[size],
      hasClearButton ? clearPaddings[size] : idlePaddings[size],
      focused || loading ? styles.active : styles.passive,
      disabled ? styles.disabled : styles.enabled,
    ];

    const textStyle = React.useMemo(
      () => ({ fontFamily: theme.fonts[fontFamily] }),
      [fontFamily],
    );

    return (
      <View
        accessible
        accessibilityLabel={`${testID}-box`}
        testID={`${testID}-box`}
        style={containerStyle}>
        <TextInput
          {...rest}
          ref={inputRef}
          value={value}
          defaultValue={defaultValue}
          editable={isEditable}
          multiline={false}
          placeholder={placeholder}
          placeholderTextColor={theme.colors.neutralLight}
          cursorColor={theme.colors.primaryKey}
          selectionColor={selectionColor}
          returnKeyType={rest.returnKeyType || 'search'}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChangeText={handleChangeText}
          textAlign={textAlign}
          accessibilityLabel={rest.accessibilityLabel || testID}
          accessibilityState={{ disabled }}
          testID={testID}
          style={[styles.input, textSizes[size], textStyle, style]}
        />

        {loading ? (
          <Spinner
            size="xs"
            color="primaryKey"
            testID={`${testID}-loading`}
            accessibilityLabel={`${testID}-loading`}
          />
        ) : hasClearButton ? (
          <Pressable
            accessibilityRole="button"
            accessibilityLabel={clearAccessibilityLabel}
            onPressIn={handleClear}
            hitSlop={{ top: 4, right: 4, bottom: 4, left: 4 }}
            testID={`${testID}-clear`}
            style={styles.clearButton}>
            <Icon
              name="close"
              size="s"
              color="neutralDarker"
              testID={`${testID}-clear-icon`}
              accessible={false}
            />
          </Pressable>
        ) : (
          <Icon
            name="search"
            size="s"
            color={focused ? 'primaryKey' : 'neutralDark'}
            testID={`${testID}-icon`}
            accessible={false}
          />
        )}
      </View>
    );
  },
);

SearchInput.displayName = 'SearchInput';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
  },
  input: {
    flex: 1,
    padding: 0,
    margin: 0,
    color: theme.colors.neutralDarker,
  },
  active: {
    borderColor: theme.colors.primaryKey,
  },
  passive: {
    borderColor: theme.colors.neutralLighter,
  },
  enabled: {
    backgroundColor: theme.colors.neutralFull,
  },
  disabled: {
    backgroundColor: theme.colors.neutralLightest,
  },
  clearButton: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const containerSizes = StyleSheet.create({
  small: {
    height: theme.inputSizeVariants.small.height,
    borderRadius: theme.borderRadii.s,
    paddingLeft: theme.spacing.xs,
  },
  medium: {
    height: theme.inputSizeVariants.medium.height,
    borderRadius: theme.borderRadii.m,
    paddingLeft: theme.spacing.m,
  },
  large: {
    height: theme.inputSizeVariants.large.height,
    borderRadius: theme.borderRadii.m,
    paddingLeft: theme.spacing.m,
  },
});

const idlePaddings = StyleSheet.create({
  small: { paddingRight: theme.spacing.xs },
  medium: { paddingRight: theme.spacing.xs },
  large: { paddingRight: theme.spacing.m },
});

const clearPaddings = StyleSheet.create({
  small: { paddingRight: theme.spacing['3xs'] },
  medium: { paddingRight: theme.spacing['3xs'] },
  large: { paddingRight: theme.spacing['2xs'] },
});

const textSizes = StyleSheet.create({
  small: { fontSize: 14, lineHeight: 16 },
  medium: { fontSize: 14, lineHeight: 16 },
  large: { fontSize: 16, lineHeight: 20 },
});

export default SearchInput;
