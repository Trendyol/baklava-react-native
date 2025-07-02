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
  isDisabled: boolean;
}>(
  ({ name, idx, isSelected, isCurrentMonth, onSelect, testID, isDisabled }) => {
    return (
      <TouchableOpacity
        key={name}
        onPress={() => {
          if (isDisabled) {
            return;
          }
          onSelect(idx);
        }}
        style={styles.monthItem}
        testID={`${testID}-month-${idx + 1}`}
        accessibilityLabel={`${testID}-month-${idx + 1}`}>
        <Box
          flex={1}
          mb="2xs"
          alignItems="center"
          py="2xs"
          borderRadius="s"
          backgroundColor={isSelected ? 'primaryKey' : 'neutralFull'}
          opacity={isDisabled ? 0.5 : 1}>
          <Text
            variant="subtitle03Regular"
            color={
              isSelected
                ? 'white'
                : isCurrentMonth
                ? 'primaryColor'
                : 'contentPrimary'
            }>
            {name}
          </Text>
        </Box>
      </TouchableOpacity>
    );
  },
);

const MonthPicker = React.memo<MonthPickerProps>(({ context }) => {
  const {
    calendarData,
    setCalendarData,
    setShowPickerType,
    nameOfMonths,
    firstDayOfWeek,
    testID,
    disableMonths,
  } = context;

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const onSelect = useCallback(
    (idx: number) => {
      setCalendarData({
        calendar: generateCalendar({
          year: calendarData.year,
          month: idx,
          firstDayOfWeek,
        }),
        year: calendarData.year,
        month: idx,
        nameOfMonth: nameOfMonths?.[idx],
      });
      setShowPickerType(ShowPickerType.NONE);
    },
    [
      calendarData.year,
      firstDayOfWeek,
      nameOfMonths,
      setCalendarData,
      setShowPickerType,
    ],
  );

  return (
    <Box>
      <Box flexDirection="row" flexWrap="wrap" justifyContent="space-between">
        {nameOfMonths?.map((name, idx) => {
          const isSelected = calendarData.month === idx;
          const isCurrentMonth =
            idx === currentMonth && calendarData.year === currentYear;
          const isDisabled = disableMonths
            ? disableMonths.includes(
                Number(
                  `${calendarData.year}${(idx + 1)
                    .toString()
                    .padStart(2, '0')}`,
                ),
              )
            : false;

          return (
            <MonthItem
              key={name}
              name={name}
              idx={idx}
              isSelected={isSelected}
              isCurrentMonth={isCurrentMonth}
              onSelect={onSelect}
              testID={testID || ''}
              isDisabled={isDisabled}
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
