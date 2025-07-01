// React Native örnek kullanım:
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import CalendarWrapper from './CalendarWrapper';
import Input from '../Input/Input';
import Box from '../Box/Box';
import { DatePickerProvider, useDatePickerContext } from './DatePickerContext';
import { VariantProps } from '@ergenekonyigit/restyle';
import { Theme } from '../../theme';
import { getDateFromString } from './utils';

interface DatePickerProps {
  nameOfWeekdays: string[];
  nameOfMonths: string[];
  closeButtonLabel: string;
  selectButtonLabel: string;
  title: string;
  testID: string;
  value: string | null;
  minYear?: number;
  maxYear?: number;
  placeholder: string;
  firstDayOfWeek: 0 | 1;
  disableDates: string[];
  onChange: (date: string) => void;
  size?: VariantProps<Theme, 'inputSizeVariants'>['variant'];
  label?: string;
  multiple?: boolean;
  format?: string;
}

interface DatePickerContentProps {
  closeButtonLabel: string;
  selectButtonLabel: string;
  title: string;
  placeholder: string;
  size?: VariantProps<Theme, 'inputSizeVariants'>['variant'];
  label?: string;
  multiple?: boolean;
  format?: string;
}

const DatePickerContent = React.memo<DatePickerContentProps>((props) => {
  const { handleOpen, testID, value } = useDatePickerContext();


  return (
    <>
      <Box position="relative">
        <Input
          placeholder={props.placeholder}
          value={value || ''}
          editable={false}
          pointerEvents="none"
          testID={`${testID}-input`}
          accessibilityLabel={`${testID}-input`}
          size={props.size}
          icon="calendar"
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
      </Box>
      <CalendarWrapper 
        closeButtonLabel={props.closeButtonLabel}
        selectButtonLabel={props.selectButtonLabel} 
        title={props.title}
       />
    </>
  );
});

const DatePicker = React.memo<DatePickerProps>((props) => {
  const _disableDates = React.useMemo(() => (props.disableDates || []).map(date => getDateFromString(date, props.format).getTime()), [props.disableDates, props.format]);

  const contextValue = React.useMemo(() => ({
    value: props.value,
    nameOfWeekdays: props.nameOfWeekdays,
    nameOfMonths: props.nameOfMonths,
    minYear: props.minYear,
    maxYear: props.maxYear,
    testID: props.testID,
    firstDayOfWeek: props.firstDayOfWeek,
    placeholder: props.placeholder, 
    disableDates: _disableDates,
    onChange: props.onChange,
    multiple: props.multiple || false,
    format: props.format,
  }), [
    props.value,
    props.nameOfWeekdays, 
    props.nameOfMonths, 
    props.minYear, 
    props.maxYear, 
    props.testID, 
    props.firstDayOfWeek, 
    props.placeholder, 
    props.disableDates,
    props.onChange,
    props.multiple,
    props.format
  ]);
  
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
});