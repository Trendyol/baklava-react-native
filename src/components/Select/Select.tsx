import React, {
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  Easing,
  Pressable,
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
} from 'react-native';
import theme, { Theme } from '../../theme';
import Box, { BoxProps } from '../Box/Box';
import Icon from '../Icon/Icon';
import Text from '../Text/Text';
import SelectBottomSheet from '../SelectBottomSheet/SelectBottomSheet';
import { InputLabel } from '../Input/InputLabel';
import { InputHelpText } from '../Input/InputHelpText';
import { useOutlineLabelVisibility } from '../Input/hooks';
import { getBorderColor } from '../Input/utils';
import { VariantProps } from '@ergenekonyigit/restyle';
import { FlagIconNameType } from '../FlagIcon/types';

export interface SelectOption {
  id: string;
  label: string;
  disabled?: boolean;
  flagIcon?: FlagIconNameType | null;
}

export type SelectHandles = {
  focus: () => void;
  blur: () => void;
  clear: () => void;
};

type SelectProps = React.ComponentProps<typeof Box> & {
  label?: string | null;
  subLabel?: string | null;
  labelFixed?: boolean;
  placeholder?: string;
  helpText?: string | null;
  error?: boolean;
  errorText?: string | null;
  success?: boolean;
  successText?: string | null;
  required?: boolean;
  disabled?: boolean;
  size?: VariantProps<Theme, 'inputSizeVariants'>['variant'];
  options: SelectOption[];
  selectedOptions?: string[] | string;
  testID?: string;
  onSelect?: (value: string[]) => void;
  bottomSheetTitle?: string;
  selectButtonLabel?: string;
  closeButtonLabel?: string;
  multiple?: boolean;
  maxVisibleItems?: number;
  bottomSheetPAddingBottom?: BoxProps['pb'];
};

const useSelectState = (selectedOptions: string[] | string) => {
  const [selectedValues, setSelectedValues] = useState<string[]>(
    Array.isArray(selectedOptions) ? selectedOptions : [selectedOptions],
  );

  const bottomSheetSelectionRef = useRef<string[]>([]);

  const resetSelections = useCallback(() => {
    setSelectedValues([]);
  }, []);

  const updateSelections = useCallback((newSelections: string[]) => {
    setSelectedValues(newSelections);
  }, []);

  return {
    selectedValues,
    updateSelections,
    resetSelections,
    bottomSheetSelectionRef,
  };
};

const useDisplayValue = (props: {
  multiple: boolean;
  selectedOptionObjects: SelectOption[];
  selectedValues: string[];
  maxDisplayItems?: number;
}) => {
  const {
    multiple,
    selectedOptionObjects,
    selectedValues,
    maxDisplayItems = 2,
  } = props;

  const getDisplayValues = useCallback(() => {
    if (selectedValues.length === 0) {
      return { visibleText: '', remainingCount: 0 };
    }

    if (multiple) {
      const selectedLabels = selectedOptionObjects.map(option => option.label);

      if (selectedLabels.length <= maxDisplayItems) {
        return {
          visibleText: selectedLabels.join(', '),
          remainingCount: 0,
        };
      } else {
        const visibleLabels = selectedLabels.slice(0, maxDisplayItems);
        const remainingCount = selectedLabels.length - maxDisplayItems;
        return {
          visibleText: visibleLabels.join(', '),
          remainingCount,
        };
      }
    }

    return {
      visibleText:
        selectedOptionObjects.length > 0 ? selectedOptionObjects[0].label : '',
      remainingCount: 0,
    };
  }, [selectedOptionObjects, multiple, selectedValues, maxDisplayItems]);

  return {
    getDisplayValues,
  };
};

const useSortedOptions = (props: {
  options: SelectOption[];
  selectedValues: string[];
  multiple: boolean;
  isBottomSheetVisible: boolean;
  wasCleared: boolean;
}) => {
  const { options, selectedValues, isBottomSheetVisible, wasCleared } = props;
  const originalOptionsRef = useRef<SelectOption[]>([]);

  useEffect(() => {
    if (originalOptionsRef.current.length === 0) {
      originalOptionsRef.current = [...options];
    }
  }, [options]);

  return useMemo(() => {
    if (wasCleared || !isBottomSheetVisible) {
      return options;
    }

    if (selectedValues.length === 0) {
      return options;
    }

    const selectedOptions = options.filter(option =>
      selectedValues.includes(option.id),
    );
    const unselectedOptions = options.filter(
      option => !selectedValues.includes(option.id),
    );

    return [...selectedOptions, ...unselectedOptions];
  }, [options, selectedValues, isBottomSheetVisible, wasCleared]);
};

const Select = forwardRef<SelectHandles, SelectProps>(
  (
    {
      label,
      subLabel,
      labelFixed = false,
      placeholder = '',
      helpText,
      error = false,
      errorText,
      success = false,
      successText,
      required = false,
      disabled = false,
      size = 'medium',
      options = [],
      selectedOptions = [],
      testID = 'select',
      onSelect,
      bottomSheetTitle,
      closeButtonLabel = '',
      selectButtonLabel,
      multiple = true,
      maxVisibleItems = 6,
      bottomSheetPAddingBottom,
      ...rest
    }: SelectProps,
    ref,
  ) => {
    const [focused, setFocused] = useState<boolean>(false);
    const [errorState, setErrorState] = useState<boolean>(error);
    const [successState, setSuccessState] = useState<boolean>(success);
    const [isBottomSheetVisible, setIsBottomSheetVisible] =
      useState<boolean>(false);
    const [wasCleared, setWasCleared] = useState<boolean>(false);

    const {
      selectedValues,
      updateSelections,
      resetSelections,
      bottomSheetSelectionRef,
    } = useSelectState(selectedOptions);

    const selectedOptionObjects = useMemo(
      () => options.filter(option => selectedValues.includes(option.id)),
      [options, selectedValues],
    );

    const sortedOptions = useSortedOptions({
      options,
      selectedValues,
      multiple,
      isBottomSheetVisible,
      wasCleared,
    });

    const inputHeight = theme.inputSizeVariants[size].height;

    const borderColor = useMemo(
      () =>
        getBorderColor({
          focused,
          successState,
          errorState,
        }),
      [focused, successState, errorState],
    );

    const { getDisplayValues } = useDisplayValue({
      multiple,
      selectedOptionObjects,
      selectedValues,
      maxDisplayItems: 2,
    });

    const { startAnimation, animatedViewProps, animatedTextProps } =
      useOutlineLabelVisibility({
        theme,
        easing: Easing.inOut(Easing.ease),
        inputHeight,
        focused,
        value: getDisplayValues().visibleText || '',
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
    }, [error, success]);

    const openBottomSheet = useCallback(async () => {
      if (disabled) {
        return;
      }

      await startAnimation();
      setFocused(true);

      bottomSheetSelectionRef.current = [...selectedValues];

      setWasCleared(false);
      setIsBottomSheetVisible(true);
    }, [disabled, startAnimation, selectedValues, bottomSheetSelectionRef]);

    const closeBottomSheet = useCallback(() => {
      setIsBottomSheetVisible(false);
      setFocused(false);
    }, []);

    const confirmSelection = useCallback(() => {
      const newSelections = [...bottomSheetSelectionRef.current];
      updateSelections(newSelections);

      if (onSelect) {
        onSelect(newSelections);
      }

      closeBottomSheet();
    }, [onSelect, closeBottomSheet, bottomSheetSelectionRef, updateSelections]);

    const handleClear = useCallback(
      (event?: GestureResponderEvent) => {
        event?.stopPropagation();
        resetSelections();

        if (onSelect) {
          onSelect([]);
        }

        setWasCleared(true);
      },
      [onSelect, resetSelections],
    );

    const handleBottomSheetSelection = useCallback(
      (selectedIds: string[]) => {
        bottomSheetSelectionRef.current = selectedIds;
      },
      [bottomSheetSelectionRef],
    );

    const { visibleText, remainingCount } = useMemo(
      () => getDisplayValues(),
      [getDisplayValues],
    );

    const hasSelectedValue = useMemo(
      () => selectedValues.length > 0,
      [selectedValues],
    );

    const iconColor = useMemo(() => {
      if (disabled) {
        return 'neutralLight';
      } else if (focused || hasSelectedValue) {
        return 'neutralDarker';
      } else {
        return 'neutralLight';
      }
    }, [focused, hasSelectedValue, disabled]);

    React.useImperativeHandle(ref, () => ({
      focus: openBottomSheet,
      blur: closeBottomSheet,
      clear: () => {
        handleClear();
      },
    }));

    return (
      <Box py="2xs" {...rest}>
        <InputLabel
          label={label}
          subLabel={subLabel}
          labelFixed={labelFixed}
          errorState={errorState}
          successState={successState}
          animatedViewProps={animatedViewProps}
          animatedTextProps={animatedTextProps}
          inputHeight={inputHeight}
          required={required}
        />

        <Pressable
          onPress={openBottomSheet}
          disabled={disabled}
          testID={`${testID}-pressable`}>
          <Box
            flexDirection="row"
            alignItems="center"
            borderWidth={1}
            borderRadius={'m'}
            borderColor={borderColor}
            backgroundColor={disabled ? 'neutralLightest' : 'neutralFull'}
            px="m"
            height={inputHeight}
            zIndex="layer_0"
            accessibilityLabel={`${testID}-box`}
            testID={`${testID}-box`}>
            <Box
              flex={1}
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between"
              testID={`${testID}-text-container`}>
              <Text
                variant="body2"
                color={visibleText ? 'neutralDarker' : 'neutralLight'}
                testID={`${testID}-value`}
                numberOfLines={1}
                ellipsizeMode="tail"
                style={{ flex: 1 }}>
                {visibleText || placeholder}
              </Text>

              {remainingCount > 0 && (
                <Text
                  variant="body2"
                  color="neutralDarker"
                  testID={`${testID}-remaining-count`}
                  marginRight="m">
                  +{remainingCount}
                </Text>
              )}
            </Box>

            <Box flexDirection="row" alignItems="center">
              {hasSelectedValue && !disabled && (
                <TouchableOpacity
                  onPress={handleClear}
                  hitSlop={{ top: 10, right: 10, bottom: 10, left: 10 }}
                  testID={`${testID}-clear`}
                  style={styles.clearButton}>
                  <Icon name="close" size="s" color="neutralDarker" />
                </TouchableOpacity>
              )}
              {hasSelectedValue && !disabled && (
                <Box
                  height={16}
                  width={1}
                  backgroundColor="neutralLighter"
                  marginHorizontal="xs"
                  testID={`${testID}-divider`}
                />
              )}
              <Icon
                name={isBottomSheetVisible ? 'arrow-up' : 'arrow-down'}
                size="xs"
                color={iconColor}
                testID={`${testID}-icon`}
                accessibilityLabel={`${testID}-icon`}
              />
            </Box>
          </Box>
        </Pressable>

        {(helpText || errorText || successText) && (
          <InputHelpText
            helpText={helpText}
            errorState={errorState}
            errorText={errorText}
            successState={successState}
            successText={successText}
          />
        )}

        <SelectBottomSheet
          pb={bottomSheetPAddingBottom}
          visible={isBottomSheetVisible}
          title={bottomSheetTitle}
          closeButtonLabel={closeButtonLabel}
          closeButtonAction={closeBottomSheet}
          selectButtonLabel={selectButtonLabel}
          selectButtonAction={confirmSelection}
          options={sortedOptions}
          type={multiple ? 'checkbox' : 'radio'}
          onSelect={handleBottomSheetSelection}
          selectedOption={
            isBottomSheetVisible
              ? bottomSheetSelectionRef.current
              : selectedValues
          }
          testID={`${testID}-bottomSheet`}
          maxVisibleItems={maxVisibleItems}
        />
      </Box>
    );
  },
);

const styles = StyleSheet.create({
  clearButton: {
    padding: 2,
  },
});

export default Select;
