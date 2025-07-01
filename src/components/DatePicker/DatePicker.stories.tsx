import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import React from 'react';
import Box from '../Box/Box';
import Text from '../Text/Text';
import DatePicker from './DatePicker';
import { DEFAULT_NAME_OF_MONTHS, DEFAULT_NAME_OF_WEEKDAYS } from './constants';

const DatePickerMeta: ComponentMeta<typeof DatePicker> = {
  title: 'DatePicker',
  component: DatePicker,
  argTypes: {
    onChange: { action: 'onChange' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      defaultValue: 'large',
    },
    label: {
      control: { type: 'text' },
      description: 'Input label text',
    },
    maxYear: {
      control: { type: 'number' },
      description: 'Maximum year',
      defaultValue: 2035,
    },
    minYear: {
      control: { type: 'number' },
      description: 'Minimum year',
      defaultValue: 2015,
    },
    disableDates: {
      control: { type: 'array' },
      description: 'Disabled dates',
    },
    disableMonths: {
      control: { type: 'array' },
      description: 'Disabled months',
    },
    disableYears: {
      control: { type: 'array' },
      description: 'Disabled years',
    },
    multiple: {
      control: { type: 'boolean' },
      description: 'Multiple selection',
    },
    format: {
      control: { type: 'text' },
      description: 'Date format',
    },
    firstDayOfWeek: {
      control: { type: 'select' },
      options: [0, 1],
      defaultValue: 1,
      description: 'First day of week',
    },
  },
};

export default DatePickerMeta;

type DatePickerStory = ComponentStory<typeof DatePicker>;

export const Basic: DatePickerStory = args => {
  const [value, setValue] = React.useState<string | null>(null);
  return (
    <Box p="2xs">
      <Text p="2xs" variant="subtitle01Bold">
        DatePicker
      </Text>
      <DatePicker
        {...args}
        title="Select Date"
        closeButtonLabel="Close"
        selectButtonLabel="Select"
        nameOfWeekdays={DEFAULT_NAME_OF_WEEKDAYS}
        nameOfMonths={DEFAULT_NAME_OF_MONTHS}
        testID="datepicker"
        value={value}
        onChange={setValue}
        placeholder="Select date"
        firstDayOfWeek={1}
        multiple={false}
        format="dd/MM/yyyy"
      />
    </Box>
  );
};

export const WithStartViaSunday: DatePickerStory = args => {
  const [value, setValue] = React.useState<string | null>(null);
  return (
    <Box p="2xs">
      <Text p="2xs" variant="subtitle01Bold">
        DatePicker
      </Text>
      <DatePicker
        {...args}
        title="Select Date"
        closeButtonLabel="Close"
        selectButtonLabel="Select"
        nameOfWeekdays={['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']}
        nameOfMonths={DEFAULT_NAME_OF_MONTHS}
        testID="datepicker"
        value={value}
        onChange={setValue}
        placeholder="Select date"
        firstDayOfWeek={0}
        format="dd/MM/yyyy"
      />
    </Box>
  );
};

export const WithLabel: DatePickerStory = args => {
  const [value, setValue] = React.useState<string | null>(null);
  return (
    <Box p="2xs">
      <Text p="2xs" variant="subtitle01Bold">
        DatePicker with Label
      </Text>
      <DatePicker
        {...args}
        label="Birth Date"
        title="Select Date"
        closeButtonLabel="Close"
        selectButtonLabel="Select"
        nameOfWeekdays={DEFAULT_NAME_OF_WEEKDAYS}
        nameOfMonths={DEFAULT_NAME_OF_MONTHS}
        testID="datepicker-with-label"
        value={value}
        onChange={setValue}
        placeholder="Select date"
        firstDayOfWeek={1}
      />
    </Box>
  );
};

export const SizeComparison: DatePickerStory = args => {
  const [value1, setValue1] = React.useState<string | null>(null);
  const [value2, setValue2] = React.useState<string | null>(null);
  const [value3, setValue3] = React.useState<string | null>(null);

  return (
    <Box p="2xs" gap="2xs">
      <Text p="2xs" variant="subtitle01Bold">
        DatePicker Size Comparison
      </Text>

      <Text variant="subtitle03Medium" color="neutralDark">
        Small Size:
      </Text>
      <DatePicker
        {...args}
        size="small"
        title="Select Date"
        closeButtonLabel="Close"
        selectButtonLabel="Select"
        nameOfWeekdays={DEFAULT_NAME_OF_WEEKDAYS}
        nameOfMonths={DEFAULT_NAME_OF_MONTHS}
        testID="datepicker-small-compare"
        value={value1}
        onChange={setValue1}
        placeholder="Small size"
        firstDayOfWeek={1}
      />

      <Text variant="subtitle03Medium" color="neutralDark">
        Medium Size:
      </Text>
      <DatePicker
        {...args}
        size="medium"
        title="Select Date"
        closeButtonLabel="Close"
        selectButtonLabel="Select"
        nameOfWeekdays={DEFAULT_NAME_OF_WEEKDAYS}
        nameOfMonths={DEFAULT_NAME_OF_MONTHS}
        testID="datepicker-medium-compare"
        value={value2}
        onChange={setValue2}
        placeholder="Medium size"
        firstDayOfWeek={1}
      />

      <Text variant="subtitle03Medium" color="neutralDark">
        Large Size:
      </Text>
      <DatePicker
        {...args}
        size="large"
        title="Select Date"
        closeButtonLabel="Close"
        selectButtonLabel="Select"
        nameOfWeekdays={DEFAULT_NAME_OF_WEEKDAYS}
        nameOfMonths={DEFAULT_NAME_OF_MONTHS}
        testID="datepicker-large-compare"
        value={value3}
        onChange={setValue3}
        placeholder="Large size"
        firstDayOfWeek={1}
      />
    </Box>
  );
};

export const WithLabelAndSize: DatePickerStory = args => {
  const [value1, setValue1] = React.useState<string | null>(null);
  const [value2, setValue2] = React.useState<string | null>(null);
  const [value3, setValue3] = React.useState<string | null>(null);

  return (
    <Box p="2xs" gap="2xs">
      <Text p="2xs" variant="subtitle01Bold">
        DatePicker with Label and Different Sizes
      </Text>

      <Text variant="subtitle03Medium" color="neutralDark">
        Small with Label:
      </Text>
      <DatePicker
        {...args}
        size="small"
        label="Small Date"
        title="Select Date"
        closeButtonLabel="Close"
        selectButtonLabel="Select"
        nameOfWeekdays={DEFAULT_NAME_OF_WEEKDAYS}
        nameOfMonths={DEFAULT_NAME_OF_MONTHS}
        testID="datepicker-small-label"
        value={value1}
        onChange={setValue1}
        placeholder="Small size"
        firstDayOfWeek={1}
      />

      <Text variant="subtitle03Medium" color="neutralDark">
        Medium with Label:
      </Text>
      <DatePicker
        {...args}
        size="medium"
        label="Medium Date"
        title="Select Date"
        closeButtonLabel="Close"
        selectButtonLabel="Select"
        nameOfWeekdays={DEFAULT_NAME_OF_WEEKDAYS}
        nameOfMonths={DEFAULT_NAME_OF_MONTHS}
        testID="datepicker-medium-label"
        value={value2}
        onChange={setValue2}
        placeholder="Medium size"
        firstDayOfWeek={1}
      />

      <Text variant="subtitle03Medium" color="neutralDark">
        Large with Label:
      </Text>
      <DatePicker
        {...args}
        size="large"
        label="Large Date"
        title="Select Date"
        closeButtonLabel="Close"
        selectButtonLabel="Select"
        nameOfWeekdays={DEFAULT_NAME_OF_WEEKDAYS}
        nameOfMonths={DEFAULT_NAME_OF_MONTHS}
        testID="datepicker-large-label"
        value={value3}
        onChange={setValue3}
        placeholder="Large size"
        firstDayOfWeek={1}
      />
    </Box>
  );
};

export const MultipleDateSelection: DatePickerStory = args => {
  const [value, setValue] = React.useState<string | null>(null);
  return (
    <Box p="2xs">
      <Text p="2xs" variant="subtitle01Bold">
        Multiple Date Selection
      </Text>
      <DatePicker
        {...args}
        multiple={true}
        label="Date Range Selector"
        placeholder="Select start - end date"
        title="Select date range"
        closeButtonLabel="Close"
        selectButtonLabel="Select"
        nameOfWeekdays={DEFAULT_NAME_OF_WEEKDAYS}
        nameOfMonths={DEFAULT_NAME_OF_MONTHS}
        testID="datepicker-multiple"
        value={value}
        onChange={setValue}
        firstDayOfWeek={1}
        format="yyyy-MM-dd"
      />
    </Box>
  );
};

export const MultipleDateSelectionWithCustomLabels: DatePickerStory = args => {
  const [value, setValue] = React.useState<string | null>(null);
  return (
    <Box p="2xs">
      <Text p="2xs" variant="subtitle01Bold">
        Multiple Date Selection with Custom Labels
      </Text>
      <DatePicker
        {...args}
        multiple={true}
        label="Reservation Date"
        placeholder="Select check-in - check-out date"
        title="Select reservation date"
        closeButtonLabel="Cancel"
        selectButtonLabel="Confirm"
        nameOfWeekdays={DEFAULT_NAME_OF_WEEKDAYS}
        nameOfMonths={DEFAULT_NAME_OF_MONTHS}
        testID="datepicker-multiple-custom"
        value={value}
        onChange={setValue}
        firstDayOfWeek={1}
      />
    </Box>
  );
};

export const WithDisabledDates: DatePickerStory = args => {
  const [value, setValue] = React.useState<string | null>(null);

  const disabledDates = [
    '2025-01-04',
    '2025-01-05',
    '2025-01-11',
    '2025-01-12',
    '2025-01-18',
    '2025-01-19',
    '2025-01-25',
    '2025-01-26',
    '2025-01-01',
    '2025-01-15',
  ];

  return (
    <Box p="2xs">
      <Text p="2xs" variant="subtitle01Bold">
        DatePicker with Disabled Dates
      </Text>
      <Text p="2xs" variant="subtitle03Regular" color="neutralDark">
        Weekends and holidays are disabled
      </Text>
      <DatePicker
        {...args}
        label="Appointment Date"
        title="Select Available Date"
        closeButtonLabel="Close"
        selectButtonLabel="Select"
        nameOfWeekdays={DEFAULT_NAME_OF_WEEKDAYS}
        nameOfMonths={DEFAULT_NAME_OF_MONTHS}
        testID="datepicker-disabled-dates"
        value={value}
        onChange={setValue}
        placeholder="Select available date"
        firstDayOfWeek={1}
        disableDates={disabledDates}
        format="yyyy-MM-dd"
      />
    </Box>
  );
};

export const WithYearRange: DatePickerStory = args => {
  const [value, setValue] = React.useState<string | null>(null);

  const minYear = 2024;
  const maxYear = 2026;

  return (
    <Box p="2xs">
      <Text p="2xs" variant="subtitle01Bold">
        DatePicker with Year Range
      </Text>
      <Text p="2xs" variant="subtitle03Regular" color="neutralDark">
        Only years 2024-2026 are selectable
      </Text>
      <DatePicker
        {...args}
        label="Event Date"
        title="Select Event Date"
        closeButtonLabel="Close"
        selectButtonLabel="Select"
        nameOfWeekdays={DEFAULT_NAME_OF_WEEKDAYS}
        nameOfMonths={DEFAULT_NAME_OF_MONTHS}
        testID="datepicker-year-range"
        value={value}
        onChange={setValue}
        placeholder="Select event date (2024-2026)"
        firstDayOfWeek={1}
        minYear={minYear}
        maxYear={maxYear}
        format="dd/MM/yyyy"
      />
    </Box>
  );
};

export const WithDisabledMonths: DatePickerStory = args => {
  const [value, setValue] = React.useState<string | null>(null);

  const disabledMonths = [
    202501, 202502, 202506, 202507, 202512, 202601, 202606, 202610,
  ];

  return (
    <Box p="2xs">
      <Text p="2xs" variant="subtitle01Bold">
        DatePicker with Disabled Months
      </Text>
      <Text p="2xs" variant="subtitle03Regular" color="neutralDark">
        Winter months and peak summer months are disabled
      </Text>
      <DatePicker
        {...args}
        label="Seasonal Event Date"
        title="Select Seasonal Date"
        closeButtonLabel="Close"
        selectButtonLabel="Select"
        nameOfWeekdays={DEFAULT_NAME_OF_WEEKDAYS}
        nameOfMonths={DEFAULT_NAME_OF_MONTHS}
        testID="datepicker-disabled-months"
        value={value}
        onChange={setValue}
        placeholder="Select available month"
        firstDayOfWeek={1}
        disableMonths={disabledMonths}
        format="dd/MM/yyyy"
      />
    </Box>
  );
};

export const WithDisabledYears: DatePickerStory = args => {
  const [value, setValue] = React.useState<string | null>(null);

  const disabledYears = [2020, 2021, 2022, 2027, 2028, 2029];

  return (
    <Box p="2xs">
      <Text p="2xs" variant="subtitle01Bold">
        DatePicker with Disabled Years
      </Text>
      <Text p="2xs" variant="subtitle03Regular" color="neutralDark">
        Past years and future years are disabled
      </Text>
      <DatePicker
        {...args}
        label="Current Period Date"
        title="Select Current Period Date"
        closeButtonLabel="Close"
        selectButtonLabel="Select"
        nameOfWeekdays={DEFAULT_NAME_OF_WEEKDAYS}
        nameOfMonths={DEFAULT_NAME_OF_MONTHS}
        testID="datepicker-disabled-years"
        value={value}
        onChange={setValue}
        placeholder="Select current period date"
        firstDayOfWeek={1}
        disableYears={disabledYears}
        format="dd/MM/yyyy"
      />
    </Box>
  );
};
