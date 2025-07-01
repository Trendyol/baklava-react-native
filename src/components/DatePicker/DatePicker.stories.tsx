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
        title="Tarih seçiniz"
        closeButtonLabel="Kapat"
        selectButtonLabel="Seç"
        nameOfWeekdays={DEFAULT_NAME_OF_WEEKDAYS}
        nameOfMonths={DEFAULT_NAME_OF_MONTHS}
        testID="datepicker"
        value={value}
        onChange={setValue}
        placeholder="Tarih seçiniz"
        firstDayOfWeek={1}
        multiple={false}
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
        label="Doğum Tarihi"
        title="Tarih seçiniz"
        closeButtonLabel="Kapat"
        selectButtonLabel="Seç"
        nameOfWeekdays={DEFAULT_NAME_OF_WEEKDAYS}
        nameOfMonths={DEFAULT_NAME_OF_MONTHS}
        testID="datepicker-with-label"
        value={value}
        onChange={setValue}
        placeholder="Tarih seçiniz"
        firstDayOfWeek={1}
      />
    </Box>
  );
};

export const Small: DatePickerStory = args => {
  const [value, setValue] = React.useState<string | null>(null);
  return (
    <Box p="2xs">
      <Text p="2xs" variant="subtitle01Bold">
        Small DatePicker
      </Text>
      <DatePicker
        {...args}
        size="small"
        title="Tarih seçiniz"
        closeButtonLabel="Kapat"
        selectButtonLabel="Seç"
        nameOfWeekdays={DEFAULT_NAME_OF_WEEKDAYS}
        nameOfMonths={DEFAULT_NAME_OF_MONTHS}
        testID="datepicker-small"
        value={value}
        onChange={setValue}
        placeholder="Tarih seçiniz"
        firstDayOfWeek={1}
      />
    </Box>
  );
};

export const Medium: DatePickerStory = args => {
  const [value, setValue] = React.useState<string | null>(null);
  return (
    <Box p="2xs">
      <Text p="2xs" variant="subtitle01Bold">
        Medium DatePicker
      </Text>
      <DatePicker
        {...args}
        size="medium"
        title="Tarih seçiniz"
        closeButtonLabel="Kapat"
        selectButtonLabel="Seç"
        nameOfWeekdays={DEFAULT_NAME_OF_WEEKDAYS}
        nameOfMonths={DEFAULT_NAME_OF_MONTHS}
        testID="datepicker-medium"
        value={value}
        onChange={setValue}
        placeholder="Tarih seçiniz"
        firstDayOfWeek={1}
      />
    </Box>
  );
};

export const Large: DatePickerStory = args => {
  const [value, setValue] = React.useState<string | null>(null);
  return (
    <Box p="2xs">
      <Text p="2xs" variant="subtitle01Bold">
        Large DatePicker
      </Text>
      <DatePicker
        {...args}
        size="large"
        title="Tarih seçiniz"
        closeButtonLabel="Kapat"
        selectButtonLabel="Seç"
        nameOfWeekdays={DEFAULT_NAME_OF_WEEKDAYS}
        nameOfMonths={DEFAULT_NAME_OF_MONTHS}
        testID="datepicker-large"
        value={value}
        onChange={setValue}
        placeholder="Tarih seçiniz"
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
        title="Tarih seçiniz"
        closeButtonLabel="Kapat"
        selectButtonLabel="Seç"
        nameOfWeekdays={DEFAULT_NAME_OF_WEEKDAYS}
        nameOfMonths={DEFAULT_NAME_OF_MONTHS}
        testID="datepicker-small-compare"
        value={value1}
        onChange={setValue1}
        placeholder="Küçük boyut"
        firstDayOfWeek={1}
      />

      <Text variant="subtitle03Medium" color="neutralDark">
        Medium Size:
      </Text>
      <DatePicker
        {...args}
        size="medium"
        title="Tarih seçiniz"
        closeButtonLabel="Kapat"
        selectButtonLabel="Seç"
        nameOfWeekdays={DEFAULT_NAME_OF_WEEKDAYS}
        nameOfMonths={DEFAULT_NAME_OF_MONTHS}
        testID="datepicker-medium-compare"
        value={value2}
        onChange={setValue2}
        placeholder="Orta boyut"
        firstDayOfWeek={1}
      />

      <Text variant="subtitle03Medium" color="neutralDark">
        Large Size:
      </Text>
      <DatePicker
        {...args}
        size="large"
        title="Tarih seçiniz"
        closeButtonLabel="Kapat"
        selectButtonLabel="Seç"
        nameOfWeekdays={DEFAULT_NAME_OF_WEEKDAYS}
        nameOfMonths={DEFAULT_NAME_OF_MONTHS}
        testID="datepicker-large-compare"
        value={value3}
        onChange={setValue3}
        placeholder="Büyük boyut"
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
        label="Küçük Tarih"
        title="Tarih seçiniz"
        closeButtonLabel="Kapat"
        selectButtonLabel="Seç"
        nameOfWeekdays={DEFAULT_NAME_OF_WEEKDAYS}
        nameOfMonths={DEFAULT_NAME_OF_MONTHS}
        testID="datepicker-small-label"
        value={value1}
        onChange={setValue1}
        placeholder="Küçük boyut"
        firstDayOfWeek={1}
      />

      <Text variant="subtitle03Medium" color="neutralDark">
        Medium with Label:
      </Text>
      <DatePicker
        {...args}
        size="medium"
        label="Orta Tarih"
        title="Tarih seçiniz"
        closeButtonLabel="Kapat"
        selectButtonLabel="Seç"
        nameOfWeekdays={DEFAULT_NAME_OF_WEEKDAYS}
        nameOfMonths={DEFAULT_NAME_OF_MONTHS}
        testID="datepicker-medium-label"
        value={value2}
        onChange={setValue2}
        placeholder="Orta boyut"
        firstDayOfWeek={1}
      />

      <Text variant="subtitle03Medium" color="neutralDark">
        Large with Label:
      </Text>
      <DatePicker
        {...args}
        size="large"
        label="Büyük Tarih"
        title="Tarih seçiniz"
        closeButtonLabel="Kapat"
        selectButtonLabel="Seç"
        nameOfWeekdays={DEFAULT_NAME_OF_WEEKDAYS}
        nameOfMonths={DEFAULT_NAME_OF_MONTHS}
        testID="datepicker-large-label"
        value={value3}
        onChange={setValue3}
        placeholder="Büyük boyut"
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
        label="Tarih Aralığı Seçici"
        placeholder="Başlangıç - Bitiş tarihi seçin"
        title="Tarih aralığı seçiniz"
        closeButtonLabel="Kapat"
        selectButtonLabel="Seç"
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
        label="Rezervasyon Tarihi"
        placeholder="Giriş - Çıkış tarihi seçin"
        title="Rezervasyon tarihi seçiniz"
        closeButtonLabel="İptal"
        selectButtonLabel="Onayla"
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
