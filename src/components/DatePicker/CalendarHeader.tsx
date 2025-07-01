import React, { useCallback } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Box from '../Box/Box';
import Text from '../Text/Text';
import Icon from '../Icon/Icon';
import { ShowPickerType } from './constants';
import { DatePickerContextType } from './DatePickerContext';

interface CalendarHeaderProps {
  context: DatePickerContextType;
}

const PickerButton = React.memo<{
  label: string | number;
  isActive: boolean;
  onPress: () => void;
  testID: string;
}>(({ label, isActive, onPress, testID }) => (
  <TouchableOpacity
    onPress={onPress}
    style={styles.touchableOpacity}
    testID={testID}
    accessibilityLabel={testID}>
    <Box
      py="2xs"
      px="xl"
      alignItems="center"
      borderRadius="s"
      backgroundColor={isActive ? 'neutralLightest' : undefined}>
      <Text variant="subtitle03Medium" color="neutralDarkest">
        {label}
      </Text>
    </Box>
  </TouchableOpacity>
));

const NavigationButton = React.memo<{
  iconName: 'arrow-left' | 'arrow-right';
  onPress: () => void;
  testID: string;
}>(({ iconName, onPress, testID }) => (
  <TouchableOpacity
    onPress={onPress}
    testID={testID}
    accessibilityLabel={testID}>
    <Box p="xs">
      <Icon size="m" name={iconName} />
    </Box>
  </TouchableOpacity>
));

const CalendarHeader = React.memo<CalendarHeaderProps>(({ context }) => {
  const {
    calendarData,
    showPickerType,
    setShowPickerType,
    onPressNext,
    onPressPrev,
    testID,
  } = context;

  const handlePickerPress = useCallback(
    (pickerType: ShowPickerType) => {
      setShowPickerType(
        showPickerType === pickerType ? ShowPickerType.NONE : pickerType,
      );
    },
    [showPickerType, setShowPickerType],
  );

  return (
    <Box
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      py="2xs"
      mb="2xs">
      <NavigationButton
        iconName="arrow-left"
        onPress={onPressPrev}
        testID={`${testID}-header-prev`}
      />

      <Box
        flex={1}
        flexDirection="row"
        gap="2xs"
        alignItems="center"
        justifyContent="space-between">
        <PickerButton
          label={calendarData.nameOfMonth}
          isActive={showPickerType === ShowPickerType.MONTH}
          onPress={() => handlePickerPress(ShowPickerType.MONTH)}
          testID={`${testID}-header-month-select`}
        />

        <PickerButton
          label={calendarData.year}
          isActive={showPickerType === ShowPickerType.YEAR}
          onPress={() => handlePickerPress(ShowPickerType.YEAR)}
          testID={`${testID}-header-year-select`}
        />
      </Box>

      <NavigationButton
        iconName="arrow-right"
        onPress={onPressNext}
        testID={`${testID}-header-next`}
      />
    </Box>
  );
});

CalendarHeader.displayName = 'CalendarHeader';
PickerButton.displayName = 'PickerButton';
NavigationButton.displayName = 'NavigationButton';

export default CalendarHeader;

const styles = StyleSheet.create({
  touchableOpacity: {
    flex: 1,
  },
});
