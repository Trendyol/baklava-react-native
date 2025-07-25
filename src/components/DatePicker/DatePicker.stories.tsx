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
    },
    label: {
      control: { type: 'text' },
      description: 'Input label text',
    },
    maxYear: {
      control: { type: 'number' },
      description: 'Maximum year',
    },
    minYear: {
      control: { type: 'number' },
      description: 'Minimum year',
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
      description: 'First day of week',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text',
    },
    title: {
      control: { type: 'text' },
      description: 'Title text',
    },
    closeButtonLabel: {
      control: { type: 'text' },
      description: 'Close button label',
    },
    selectButtonLabel: {
      control: { type: 'text' },
      description: 'Select button label',
    },
  },
  args: {
    title: 'Select Date',
    closeButtonLabel: 'Close',
    selectButtonLabel: 'Select',
    placeholder: 'Select date',
    firstDayOfWeek: 1,
    multiple: false,
    format: 'dd/MM/yyyy',
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
        testID="datepicker"
        value={value}
        onChange={setValue}
      />
    </Box>
  );
};

export const Cases: DatePickerStory = args => {
  const [value1, setValue1] = React.useState<string | null>(null);
  const [value2, setValue2] = React.useState<string | null>(null);
  const [value3, setValue3] = React.useState<string | null>(null);

  return (
    <Box gap="2xs">
      <Box p="2xs">
        <Text p="2xs" variant="subtitle01Bold">
          DatePicker start via Sunday
        </Text>
        <DatePicker
          {...args}
          title="Select Date"
          closeButtonLabel="Close"
          selectButtonLabel="Select"
          nameOfWeekdays={['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']}
          testID="datepicker"
          value={value1}
          onChange={setValue1}
          placeholder="Select date"
          firstDayOfWeek={0}
          format="dd/MM/yyyy"
        />
      </Box>
      <Box p="2xs">
        <Text p="2xs" variant="subtitle01Bold">
          DatePicker start via Monday (Default)
        </Text>
        <DatePicker
          {...args}
          title="Select Date"
          closeButtonLabel="Close"
          selectButtonLabel="Select"
          testID="datepicker"
          value={value2}
          onChange={setValue2}
          placeholder="Select date"
          firstDayOfWeek={1}
          format="dd/MM/yyyy"
        />
      </Box>
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
          testID="datepicker-with-label"
          value={value3}
          onChange={setValue3}
          placeholder="Select date"
          firstDayOfWeek={1}
        />
      </Box>
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
        testID="datepicker-medium-compare"
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
        title="Select Date"
        label="Large Date"
        closeButtonLabel="Close"
        selectButtonLabel="Select"
        testID="datepicker-large-compare"
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
  const [value1, setValue1] = React.useState<string | null>(null);
  return (
    <Box gap="2xs">
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
          testID="datepicker-multiple"
          value={value}
          onChange={setValue}
          firstDayOfWeek={1}
          format="yyyy-MM-dd"
        />
      </Box>

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
          testID="datepicker-multiple-custom"
          value={value1}
          onChange={setValue1}
          firstDayOfWeek={1}
        />
      </Box>
    </Box>
  );
};

export const WithDisabledDates: DatePickerStory = args => {
  const [value, setValue] = React.useState<string | null>(null);
  const [value1, setValue1] = React.useState<string | null>(null);
  const [value2, setValue2] = React.useState<string | null>(null);
  const disabledMonths = [
    202501, 202502, 202506, 202507, 202512, 202601, 202606, 202610,
  ];
  const disabledYears = [2024, 2026];

  const disabledDates = [
    '2025-01-04',
    '2025-01-05',
    '2025-01-12',
    '2025-01-25',
    '2025-01-26',
    '2025-01-01',
    '2025-01-15',
  ];

  return (
    <Box gap="2xs">
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
      <Box p="2xs">
        <Text p="2xs" variant="subtitle01Bold">
          DatePicker with Disabled Months
        </Text>
        <Text p="2xs" variant="subtitle03Regular" color="neutralDark">
          Some months are disabled
        </Text>
        <DatePicker
          {...args}
          label="Month Selection"
          title="Select Available Month"
          closeButtonLabel="Close"
          selectButtonLabel="Select"
          nameOfWeekdays={DEFAULT_NAME_OF_WEEKDAYS}
          nameOfMonths={DEFAULT_NAME_OF_MONTHS}
          testID="datepicker-disabled-months"
          value={value1}
          onChange={setValue1}
          placeholder="Select available month"
          firstDayOfWeek={1}
          disableMonths={disabledMonths}
          format="yyyy-MM-dd"
        />
      </Box>
      <Box p="2xs">
        <Text p="2xs" variant="subtitle01Bold">
          DatePicker with Disabled Years
        </Text>
        <Text p="2xs" variant="subtitle03Regular" color="neutralDark">
          Some years are disabled
        </Text>
        <DatePicker
          {...args}
          label="Year Selection"
          title="Select Available Year"
          closeButtonLabel="Close"
          selectButtonLabel="Select"
          nameOfWeekdays={DEFAULT_NAME_OF_WEEKDAYS}
          nameOfMonths={DEFAULT_NAME_OF_MONTHS}
          testID="datepicker-disabled-years"
          value={value2}
          onChange={setValue2}
          placeholder="Select available year"
          firstDayOfWeek={1}
          disableYears={disabledYears}
          format="yyyy-MM-dd"
        />
      </Box>
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
