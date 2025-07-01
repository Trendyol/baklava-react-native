import React, { useCallback, useMemo } from 'react';
import { TouchableOpacity } from 'react-native';
import Box from '../Box/Box';
import Text from '../Text/Text';
import { ShowPickerType } from './constants';
import { generateCalendar } from './utils';
import { DatePickerContextType } from './DatePickerContext';

type YearPickerProps = {
  context: DatePickerContextType;
};

const YearItem = React.memo<{
  year: number;
  isSelected: boolean;
  isCurrentYear: boolean;
  onSelect: (year: number) => void;
  testID: string;
}>(({ year, isSelected, isCurrentYear, onSelect, testID }) => (
  <TouchableOpacity
    key={year}
    onPress={() => onSelect(year)}
    style={{
      width: '30%',
    }}
    testID={`${testID}-year-${year}`}
    accessibilityLabel={`${testID}-year-${year}`}>
    <Box
      flex={1}
      mb="2xs"
      alignItems="center"
      py="2xs"
      borderRadius="s"
      backgroundColor={isSelected ? 'primaryKey' : 'neutralFull'}>
      <Text
        variant="subtitle03Regular"
        color={
          isSelected
            ? 'white'
            : isCurrentYear
            ? 'primaryColor'
            : 'neutralDarker'
        }>
        {year}
      </Text>
    </Box>
  </TouchableOpacity>
));

const YearPicker = React.memo<YearPickerProps>(({ context }) => {
  const {
    calendarData,
    setCalendarData,
    setShowPickerType,
    nameOfMonths,
    nameOfWeekdays,
    firstDayOfWeek,
    yearRange,
    testID,
  } = context;

  const onSelect = useCallback(
    (year: number) => {
      const calendar = generateCalendar({
        year,
        month: calendarData.month,
        nameOfMonths,
        nameOfWeekdays,
        firstDayOfWeek,
      });
      setCalendarData({
        calendar,
        year,
        month: calendarData.month,
        nameOfMonth: nameOfMonths?.[calendarData.month],
      });
      setShowPickerType(ShowPickerType.NONE);
    },
    [
      calendarData.month,
      nameOfMonths,
      nameOfWeekdays,
      firstDayOfWeek,
      setCalendarData,
      setShowPickerType,
    ],
  );

  const currentYear = new Date().getFullYear();

  const years = useMemo(
    () =>
      Array.from(
        { length: yearRange.max - yearRange.min + 1 },
        (_, i) => yearRange.min + i,
      ),
    [yearRange.min, yearRange.max],
  );

  return (
    <Box mb="2xs">
      <Box flexDirection="row" flexWrap="wrap" justifyContent="space-between">
        {years.map(year => {
          const isSelected = calendarData.year === year;
          const isCurrentYear = year === currentYear;

          return (
            <YearItem
              key={year}
              year={year}
              isSelected={isSelected}
              isCurrentYear={isCurrentYear}
              onSelect={onSelect}
              testID={testID || ''}
            />
          );
        })}
      </Box>
    </Box>
  );
});

YearPicker.displayName = 'YearPicker';
YearItem.displayName = 'YearItem';

export default YearPicker;
