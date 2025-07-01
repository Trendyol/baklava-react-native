import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Box from '../Box/Box';
import Text from '../Text/Text';
import { DatePickerContextType } from './DatePickerContext';

type CalendarPickerProps = {
  context: DatePickerContextType;
};

const DayItem = React.memo<{
  date: any;
  weekIndex: number;
  dateIndex: number;
  isSelected: boolean;
  inRange: boolean | undefined;
  onSelectDate: (date: any) => void;
  disableDates: number[];
  testID: string;
  children: React.ReactNode;
}>(({ date, weekIndex, dateIndex, isSelected, inRange, onSelectDate, testID, children, disableDates }) => {
  const isCurrentDay = date.isCurrentDate && date.isActive;
  const backgroundColor = isSelected ? 'primaryKey' : undefined;
  const textColor = isSelected ? 'white' : !date.isActive ? 'neutralDark' : isCurrentDay ? 'primaryColor' : 'neutralDark';
  const inRangeBackgroundColor = inRange ? 'primaryContrast' : 'transparent';
  const isDisabled = disableDates.includes(date.timestamp);

  return (
    <Box 
      flex={1}
      justifyContent="center"
      alignItems="center"
      backgroundColor={inRangeBackgroundColor}
    >
      <TouchableOpacity
        key={`day-${weekIndex}-${dateIndex}`}
        onPress={() => onSelectDate(date)}
        testID={`${testID}-datepicker-day-${date.timestamp}`}
        accessibilityLabel={`${testID}-datepicker-day-${date.timestamp}`}
        style={styles.dayItemTouchableOpacity}
      >
        {children}
        <Box
          width={40}
          height={40}
          justifyContent="center"
          alignItems="center"
          style={[styles.positionRelative, styles.zIndex1]}
          borderRadius={isSelected ? 'full' : 'none'}
          backgroundColor={backgroundColor}
          opacity={!date.isActive || isDisabled ? 0.5 : 1}
        >
          <Text
              variant="subtitle03Regular"
              color={textColor}
              testID={`${testID}-datepicker-day-${date.timestamp}-text`}
              accessibilityLabel={`${testID}-datepicker-day-${date.timestamp}-text`}
            >
              {date.day}
            </Text>
        </Box>
      </TouchableOpacity>
    </Box>
  );
});

// Hafta başlığı için memoized component
const WeekHeader = React.memo<{
  nameOfWeekdays: string[];
  testID: string;
}>(({ nameOfWeekdays, testID }) => (
  <Box flexDirection="row" justifyContent="space-around" mb="2xs">
    {nameOfWeekdays.map((dayName, dateIndex) => (
      <Box key={`${testID}-datepicker-header-${dateIndex}`} width={40}>
        <Text 
          textAlign='center'
          variant='subtitle03Regular'
          color='neutralDark'
          testID={`${testID}-datepicker-header-${dateIndex}-text`}
          accessibilityLabel={`${testID}-datepicker-header-${dateIndex}-text`}
        >
          {dayName}
        </Text>
      </Box>
    ))}
  </Box>
));

const CalendarPicker = React.memo<CalendarPickerProps>(({ context }) => {
  const { 
    onSelectDate, 
    date: selectedDate, 
    testID, 
    dateRange, 
    calendarData, 
    nameOfWeekdays, 
    multiple, 
    disableDates = [] 
  } = context;


  const getIsSelected = (date: any) => {
    if (multiple) {
      return dateRange?.startDate?.timestamp === date.timestamp || dateRange?.endDate?.timestamp === date.timestamp;
    }
    return selectedDate?.timestamp === date.timestamp;
  }
  const isRange = (date: any) => {
    if (!multiple) {
      return false;
    }

    if (dateRange?.startDate?.timestamp && dateRange?.endDate?.timestamp) {
      return dateRange?.startDate?.timestamp < date.timestamp && dateRange?.endDate?.timestamp > date.timestamp;
    }
  }
  
  return (
    <>
      {calendarData.calendar.map((week: any[], weekIndex: number) => {
        if (weekIndex === 0) {
          return (
            <WeekHeader 
              key={`week-header-${weekIndex}`}
              nameOfWeekdays={nameOfWeekdays || []}
              testID={testID || ''}
            />
          );
        }

        return (
          <Box 
          key={`week-${weekIndex}`} 
          flexDirection="row" 
          justifyContent="space-around" 
          mb="2xs"
          style={styles.positionRelative}
          height={40}
          >
            {week.map((date, dateIndex) => {
              const isSelected = getIsSelected(date);
              const inRange = isRange(date);
              const isStartDate = dateRange?.startDate?.timestamp === date.timestamp;
              const isEndDate = dateRange?.endDate?.timestamp === date.timestamp;
              const rangeIsActive = dateRange?.startDate?.timestamp && dateRange?.endDate?.timestamp && dateRange?.startDate?.timestamp !== dateRange?.endDate?.timestamp;

              return (
                <DayItem
                  key={`day-${weekIndex}-${dateIndex}`}
                  date={date}
                  weekIndex={weekIndex}
                  dateIndex={dateIndex}
                  isSelected={isSelected}
                  inRange={multiple && inRange}
                  onSelectDate={onSelectDate}
                  testID={testID || ''}
                  disableDates={disableDates}
                >
                  {multiple && rangeIsActive ? (
                    <>
                      <Box width={20} height={40} style={styles.dayItemLeftBackground} backgroundColor={isEndDate ? 'primaryContrast' : 'transparent'} />
                      <Box width={20} height={40} style={styles.dayItemRightBackground} backgroundColor={isStartDate ? 'primaryContrast' : 'transparent'} />
                    </>
                  ) : null}
                </DayItem>
              );
            })}
          </Box>
        );
      })}
    </>
  );
});

CalendarPicker.displayName = 'CalendarPicker';
DayItem.displayName = 'DayItem';
WeekHeader.displayName = 'WeekHeader';

export default CalendarPicker; 

const styles = StyleSheet.create({
  dayItemTouchableOpacity: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  },
  dayItemLeftBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0
  },
  dayItemRightBackground: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0
  },
  positionRelative: {
    position: 'relative',
  },
  zIndex1: {
    zIndex: 1,
  }
});