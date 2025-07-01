import React, { useCallback } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Box from '../Box/Box';
import Text from '../Text/Text';
import { DatePickerContextType } from './DatePickerContext';
import { ShowPickerType } from './constants';
import { generateCalendar } from './utils';

type MonthPickerProps = {
  context: DatePickerContextType;
};

const MonthItem = React.memo<{
  name: string;
  idx: number;
  isSelected: boolean;
  isCurrentMonth: boolean;
  onSelect: (idx: number) => void;
  testID: string;
}>(({ name, idx, isSelected, isCurrentMonth, onSelect, testID }) => (
  <TouchableOpacity
    key={name}
    onPress={() => onSelect(idx)}
    style={styles.monthItem}
    testID={`${testID}-month-${idx + 1}`}
    accessibilityLabel={`${testID}-month-${idx + 1}`}
  >
    <Box
      flex={1}
      mb="2xs"
      alignItems="center"
      py="2xs"
      borderRadius="s"
      backgroundColor={isSelected ? 'primaryKey' : 'neutralFull'}
    >
      <Text
        variant="subtitle03Regular"
        color={isSelected ? 'white' : isCurrentMonth ? 'primaryColor' : 'contentPrimary'}
      >
        {name}
      </Text>
    </Box>
  </TouchableOpacity>
));

const MonthPicker = React.memo<MonthPickerProps>(({ context }) => {
  const { 
    calendarData, 
    setCalendarData, 
    setShowPickerType,
    nameOfMonths, 
    firstDayOfWeek, 
    testID,
  } = context;
  
  const currentMonth = new Date().getMonth();
  
  const onSelect = useCallback((idx: number) => {
    setCalendarData({
      calendar: generateCalendar({
        year: calendarData.year,
        month: idx,
        firstDayOfWeek,
      }),
      year: calendarData.year,
      month: idx,
      nameOfMonth: nameOfMonths?.[idx]
    });
    setShowPickerType(ShowPickerType.NONE);
  }, [calendarData.year, firstDayOfWeek, nameOfMonths, setCalendarData, setShowPickerType]);

  return (
    <Box>
      <Box flexDirection="row" flexWrap="wrap" justifyContent="space-between">
        {nameOfMonths?.map((name, idx) => {
          const isSelected = calendarData.month === idx;
          const isCurrentMonth = idx === currentMonth;
          
          return (
            <MonthItem
              key={name}
              name={name}
              idx={idx}
              isSelected={isSelected}
              isCurrentMonth={isCurrentMonth}
              onSelect={onSelect}
              testID={testID || ''}
            />
          );
        })}
      </Box>
    </Box>
  );
});

MonthPicker.displayName = 'MonthPicker';
MonthItem.displayName = 'MonthItem';

export default MonthPicker; 

const styles = StyleSheet.create({
  monthItem: {
    width: '30%',
  },
});