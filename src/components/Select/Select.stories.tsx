import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import Select from './Select';
import Text from '../Text/Text';
import Box from '../Box/Box';

const sizeList = ['small', 'medium', 'large'];

const SelectMeta: ComponentMeta<typeof Select> = {
  title: 'Select',
  component: Select,
  argTypes: {
    size: {
      options: sizeList,
      control: { type: 'radio' },
    },
  },
  args: {
    size: 'large',
    label: 'Label',
    placeholder: 'Select item',
    helpText: 'Helper text',
    errorText: 'Error text',
    successText: 'Success text',
    labelFixed: true,
    error: false,
    success: false,
    disabled: false,
    options: [
      { id: '1', label: 'Option 1 ' },
      { id: '2', label: 'Option 2' },
      { id: '3', label: 'Option 3' },
      { id: '4', label: 'Option 4' },
      { id: '5', label: 'Option 5' },
    ],
    multiple: true,
    bottomSheetTitle: 'Options',
    closeButtonLabel: 'Cancel',
    selectButtonLabel: 'Select',
  },
};

export default SelectMeta;

type SelectStory = ComponentStory<typeof Select>;

export const Basic: SelectStory = args => (
  <Box borderRadius="l" p="m">
    <Text variant="subtitle1Bold" mb="l">
      Select
    </Text>

    <Select {...args} />
  </Box>
);

export const Cases: SelectStory = () => {
  const options = [
    { id: '1', label: 'Option 1' },
    { id: '2', label: 'Option 2' },
    { id: '3', label: 'Option 3' },
    { id: '4', label: 'Option 4' },
    { id: '5', label: 'Option 5' },
  ];

  return (
    <Box px={'2xs'}>
      <Text py={'2xs'} variant="subtitle01Bold">
        Select Cases
      </Text>

      <Box py={'xs'}>
        <Select
          label="Inline Label"
          placeholder="Inline Label"
          options={options}
          bottomSheetTitle="Options"
          closeButtonLabel="Cancel"
          selectButtonLabel="Select"
        />
        <Select
          label="Label Fixed"
          placeholder="Label Fixed"
          labelFixed={true}
          options={options}
          bottomSheetTitle="Options"
          closeButtonLabel="Cancel"
          selectButtonLabel="Select"
        />
        <Select
          placeholder="Label False"
          options={options}
          bottomSheetTitle="Options"
          closeButtonLabel="Cancel"
          selectButtonLabel="Select"
        />
        <Select
          placeholder="Disable"
          labelFixed={true}
          options={options}
          disabled
        />
      </Box>

      <Box py={'l'}>
        <Select
          label="Label"
          placeholder="Required"
          labelFixed={true}
          options={options}
          bottomSheetTitle="Options"
          closeButtonLabel="Cancel"
          selectButtonLabel="Select"
          required
        />

        <Select
          label="Label"
          placeholder="Optional"
          options={options}
          bottomSheetTitle="Options"
          closeButtonLabel="Cancel"
          selectButtonLabel="Select"
          subLabel={' (Optional)'}
        />
      </Box>

      <Box py={'l'}>
        <Select
          label="Label"
          placeholder="Helper text"
          labelFixed={true}
          options={options}
          bottomSheetTitle="Options"
          closeButtonLabel="Cancel"
          selectButtonLabel="Select"
          helpText="Helper text"
        />
        <Select
          label="Label"
          placeholder="Success"
          labelFixed={true}
          options={options}
          bottomSheetTitle="Options"
          closeButtonLabel="Cancel"
          selectButtonLabel="Select"
          success
          successText="Success text"
        />
        <Select
          label="Label"
          placeholder="Error"
          labelFixed={true}
          options={options}
          bottomSheetTitle="Options"
          closeButtonLabel="Cancel"
          selectButtonLabel="Select"
          error
          errorText="Error text"
        />
      </Box>
    </Box>
  );
};

export const DisplaySelected: SelectStory = args => {
  const [selectedMultiple, setSelectedMultiple] = useState<string[]>([]);

  const handleMultiSelect = (selected: string[]) => {
    setSelectedMultiple(selected);
  };

  return (
    <Box px={'2xs'}>
      <Select
        {...args}
        label="Label"
        placeholder="Multi Select"
        selectedOptions={selectedMultiple}
        onSelect={handleMultiSelect}
      />

      <Box py={'s'}>
        <Text>Selected values: {selectedMultiple.join(', ') || 'None'}</Text>
      </Box>
    </Box>
  );
};

export const SingleSelect: SelectStory = () => {
  const options = [
    { id: '1', label: 'Option 1' },
    { id: '2', label: 'Option 2' },
    { id: '3', label: 'Option 3' },
    { id: '4', label: 'Option 4' },
    { id: '5', label: 'Option 5' },
  ];

  return (
    <Box px={'2xs'}>
      <Text py={'2xs'} variant="subtitle01Bold">
        Single Select
      </Text>

      <Box py={'xs'}>
        <Select
          multiple={false}
          label="Inline Label"
          placeholder="Inline Label"
          options={options}
          bottomSheetTitle="Options"
          closeButtonLabel="Cancel"
          selectButtonLabel="Select"
        />
        <Select
          multiple={false}
          label="Label Fixed"
          placeholder="Label Fixed"
          labelFixed={true}
          options={options}
          bottomSheetTitle="Options"
          closeButtonLabel="Cancel"
          selectButtonLabel="Select"
        />
        <Select
          multiple={false}
          placeholder="Label False"
          options={options}
          bottomSheetTitle="Options"
          closeButtonLabel="Cancel"
          selectButtonLabel="Select"
        />
      </Box>
    </Box>
  );
};

export const Sizes: SelectStory = () => {
  const options = [
    { id: '1', label: 'Option 1' },
    { id: '2', label: 'Option 2' },
    { id: '3', label: 'Option 3' },
    { id: '4', label: 'Option 4' },
    { id: '5', label: 'Option 5' },
  ];

  return (
    <Box px={'2xs'}>
      <Text py={'2xs'} variant="subtitle01Bold">
        Select Sizes
      </Text>

      <Box py={'xs'}>
        <Select
          size="large"
          label="Label"
          placeholder="Large"
          options={options}
          bottomSheetTitle="Options"
          closeButtonLabel="Cancel"
          selectButtonLabel="Select"
        />
        <Select
          size="large"
          label="Label"
          placeholder="Large"
          labelFixed={true}
          options={options}
          bottomSheetTitle="Options"
          closeButtonLabel="Cancel"
          selectButtonLabel="Select"
        />
        <Select
          size="large"
          placeholder="Large"
          options={options}
          bottomSheetTitle="Options"
          closeButtonLabel="Cancel"
          selectButtonLabel="Select"
        />
      </Box>

      <Box py={'xl'}>
        <Select
          size="medium"
          label="Label"
          placeholder="Medium"
          options={options}
          bottomSheetTitle="Options"
          closeButtonLabel="Cancel"
          selectButtonLabel="Select"
        />
        <Select
          size="medium"
          label="Label"
          placeholder="Medium"
          labelFixed={true}
          options={options}
          bottomSheetTitle="Options"
          closeButtonLabel="Cancel"
          selectButtonLabel="Select"
        />
        <Select
          size="medium"
          placeholder="Medium"
          options={options}
          bottomSheetTitle="Options"
          closeButtonLabel="Cancel"
          selectButtonLabel="Select"
        />
      </Box>

      <Box py={'xl'}>
        <Select
          size="small"
          label="Label"
          placeholder="Small"
          options={options}
          bottomSheetTitle="Options"
          closeButtonLabel="Cancel"
          selectButtonLabel="Select"
        />
        <Select
          size="small"
          label="Label"
          placeholder="Small"
          labelFixed={true}
          options={options}
          bottomSheetTitle="Options"
          closeButtonLabel="Cancel"
          selectButtonLabel="Select"
        />
        <Select
          size="small"
          placeholder="Small"
          options={options}
          bottomSheetTitle="Options"
          closeButtonLabel="Cancel"
          selectButtonLabel="Select"
        />
      </Box>
    </Box>
  );
};
