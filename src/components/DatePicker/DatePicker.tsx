import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import CalendarWrapper from './CalendarWrapper';
import Input from '../Input/Input';
import Box from '../Box/Box';
import Icon from '../Icon/Icon';
import { DatePickerProvider, useDatePickerContext } from './DatePickerContext';
import { VariantProps } from '@ergenekonyigit/restyle';
import { Theme } from '../../theme';
import { getDateFromString } from './utils';
import { DEFAULT_DATE_FORMAT } from './constants';

interface DatePickerProps {
  nameOfWeekdays: string[];
  nameOfMonths: string[];
  closeButtonLabel: string;
  selectButtonLabel: string;
  title?: string;
  testID?: string;
  value: string | null;
  minYear?: number;
  maxYear?: number;
  placeholder?: string;
  firstDayOfWeek: 0 | 1;
  disableDates?: string[];
  onChange: (date: string) => void;
  size?: VariantProps<Theme, 'inputSizeVariants'>['variant'];
  label?: string;
  multiple?: boolean;
  format?: string;
  disableMonths?: number[];
  disableYears?: number[];
}

interface DatePickerContentProps {
  closeButtonLabel: string;
  selectButtonLabel: string;
  title?: string;
  placeholder?: string;
  size?: VariantProps<Theme, 'inputSizeVariants'>['variant'];
  label?: string;
  multiple?: boolean;
  format?: string;
}

const DatePickerContent = React.memo<DatePickerContentProps>(props => {
  const { handleOpen, testID, value, onChangeProp } = useDatePickerContext();

  const handleClear = React.useCallback(() => {
    onChangeProp('');
  }, [onChangeProp]);

  return (
    <>
      <Box position="relative">
        <Input
          placeholder={props.placeholder || ''}
          value={value || ''}
          editable={false}
          pointerEvents="none"
          testID={`${testID}-input`}
          accessibilityLabel={`${testID}-input`}
          size={props.size}
          labelFixed={true}
          label={props.label}
        />
        <TouchableOpacity
          style={styles.touchableOpacity}
          activeOpacity={1}
          onPress={handleOpen}
          testID={`${testID}-touchable`}
          accessibilityLabel={`${testID}-touchable`}
        />
        <Box style={styles.rightIconsContainer}>
          {value && (
            <>
              <TouchableOpacity
                style={styles.clearButton}
                onPress={handleClear}
                testID={`${testID}-clear`}>
                <Icon name="close" size="xs" color="neutralDarker" />
              </TouchableOpacity>
              <Box
                width={1}
                height={16}
                backgroundColor="neutralLighter"
                marginHorizontal="2xs"
              />
            </>
          )}
          <Box style={styles.calendarIconContainer}>
            <Icon name="calendar" size="xs" color="neutralLight" />
          </Box>
        </Box>
      </Box>
      <CalendarWrapper
        closeButtonLabel={props.closeButtonLabel}
        selectButtonLabel={props.selectButtonLabel}
        title={props.title || ''}
      />
    </>
  );
});

const DatePicker = React.memo<DatePickerProps>(props => {
  const _disableDates = React.useMemo(
    () =>
      (props.disableDates || []).map(date =>
        getDateFromString(date, props.format || DEFAULT_DATE_FORMAT).getTime(),
      ),
    [props.disableDates, props.format],
  );

  const contextValue = React.useMemo(
    () => ({
      value: props.value,
      nameOfWeekdays: props.nameOfWeekdays,
      nameOfMonths: props.nameOfMonths,
      minYear: props.minYear,
      maxYear: props.maxYear,
      testID: props.testID || 'datepicker',
      firstDayOfWeek: props.firstDayOfWeek,
      placeholder: props.placeholder || '',
      disableDates: _disableDates,
      onChange: props.onChange,
      multiple: props.multiple || false,
      format: props.format || DEFAULT_DATE_FORMAT,
      disableMonths: props.disableMonths,
      disableYears: props.disableYears,
    }),
    [
      props.value,
      props.nameOfWeekdays,
      props.nameOfMonths,
      props.minYear,
      props.maxYear,
      props.testID,
      props.firstDayOfWeek,
      props.placeholder,
      props.onChange,
      props.multiple,
      props.format,
      props.disableMonths,
      props.disableYears,
      _disableDates,
    ],
  );

  return (
    <DatePickerProvider {...contextValue}>
      <DatePickerContent
        closeButtonLabel={props.closeButtonLabel}
        selectButtonLabel={props.selectButtonLabel}
        title={props.title}
        placeholder={props.placeholder}
        size={props.size}
        label={props.label}
        multiple={props.multiple}
      />
    </DatePickerProvider>
  );
});

DatePicker.displayName = 'DatePicker';
DatePickerContent.displayName = 'DatePickerContent';

export default DatePicker;

const styles = StyleSheet.create({
  touchableOpacity: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  clearButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  rightIconsContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  calendarIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
});
