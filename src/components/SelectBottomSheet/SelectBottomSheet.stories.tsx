import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Alert } from 'react-native';
import SelectBottomSheet from './SelectBottomSheet';
import Text from '../Text/Text';
import Button from '../Button/Button';
import Box from '../Box/Box';

const typeList = ['checkbox', 'radio'];

const SelectBottomSheetMeta: ComponentMeta<typeof SelectBottomSheet> = {
  title: 'SelectBottomSheet',
  component: SelectBottomSheet,
  argTypes: {
    type: typeList,
    options: {
      id: '1',
      label: 'Option',
    },
  },
  args: {
    visible: true,
    type: 'checkbox',
    selectButtonLabel: 'Select',
    closeButtonLabel: 'Close',
    title: 'Select Options',
    options: [
      { id: '1', label: 'Option 1' },
      { id: '2', label: 'Option 2' },
      { id: '3', label: 'Option 3' },
    ],
  },
};

export default SelectBottomSheetMeta;

type SelectBottomSheetStory = ComponentStory<typeof SelectBottomSheet>;

export const Basic: SelectBottomSheetStory = args => (
  <Box borderRadius="l" p="m">
    <Text variant="subtitle1Bold" mb="l">
      Select Bottom Sheet
    </Text>

    <SelectBottomSheet
      visible={args.visible}
      type={args.type}
      selectButtonLabel="Select"
      closeButtonLabel="Close"
      title="Select Options"
      options={args.options}
      onSelect={() => {}}
    />
  </Box>
);

export const Checkbox: SelectBottomSheetStory = () => {
  const [modal, showModal] = React.useState(false);
  const [selectedOptions, setSelectedOptions] = React.useState<string[]>([]);

  const handleMultiSelect = (options: string | string[]) => {
    if (Array.isArray(options)) {
      setSelectedOptions(options);
    }
  };

  const options = [
    { id: '1', label: 'Option 1' },
    { id: '2', label: 'Option 2' },
    { id: '3', label: 'Option 3' },
    { id: '4', label: 'Option 4' },
    { id: '5', label: 'Option 5' },
    { id: '6', label: 'Option 6' },
    { id: '7', label: 'Option 7' },
    { id: '8', label: 'Option 8' },
    { id: '9', label: 'Option 9' },
  ];

  const showAlert = (selected: string[]) => {
    Alert.alert('Selected Items', selected.join(', '));
  };

  return (
    <>
      <Text p="2xs" variant="subtitle01Bold">
        Select Bottom Sheet with Checkbox
      </Text>

      <Box px="m" py="2xs">
        <Button
          mb="m"
          filled
          label="Checkbox"
          onPress={() => showModal(true)}
        />
        <SelectBottomSheet
          visible={modal}
          type="checkbox"
          selectButtonLabel="Select"
          closeButtonLabel="Close"
          title="Select Options"
          closeButtonAction={() => showModal(false)}
          selectButtonAction={() => {
            showAlert(selectedOptions);
            showModal(false);
          }}
          options={options}
          selectedOption={selectedOptions}
          onSelect={handleMultiSelect}
        />
      </Box>
    </>
  );
};

export const RadioButton: SelectBottomSheetStory = () => {
  const [modal, showModal] = React.useState(false);
  const [selectedRadioOption, setSelectedRadioOption] =
    React.useState<string>('');

  const handleRadioSelect = (option: string | string[]) => {
    if (Array.isArray(option) && option.length > 0) {
      setSelectedRadioOption(option[0]);
    } else if (typeof option === 'string') {
      setSelectedRadioOption(option);
    }
  };

  const [modal2, showModal2] = React.useState(false);
  const [selectedRadioOption2, setSelectedRadioOption2] =
    React.useState<string>('');

  const handleRadioSelect2 = (option: string | string[]) => {
    if (Array.isArray(option) && option.length > 0) {
      setSelectedRadioOption2(option[0]);
    } else if (typeof option === 'string') {
      setSelectedRadioOption2(option);
    }

    if (selectedRadioOption2) {
      showAlert([selectedRadioOption2]);
      showModal2(false);
    }
  };

  const options = [
    { id: '1', label: 'Option 1' },
    { id: '2', label: 'Option 2' },
    { id: '3', label: 'Option 3' },
    { id: '4', label: 'Option 4' },
    { id: '5', label: 'Option 5' },
    { id: '6', label: 'Option 6' },
    { id: '7', label: 'Option 7' },
    { id: '8', label: 'Option 8' },
    { id: '9', label: 'Option 9' },
  ];

  const showAlert = (selected: string[]) => {
    Alert.alert('Selected Items', selected.join(', '));
  };

  return (
    <>
      <Text p="2xs" variant="subtitle01Bold">
        Select Bottom Sheet with RadioButton
      </Text>

      <Box px="m" py="2xs">
        <Button
          mb="m"
          filled
          label="RadioButton"
          onPress={() => showModal(true)}
        />
        <SelectBottomSheet
          visible={modal}
          type="radio"
          selectButtonLabel="Select"
          closeButtonLabel="Close"
          title="Select a Single Option"
          closeButtonAction={() => showModal(false)}
          selectButtonAction={() => {
            showAlert([selectedRadioOption]);
            showModal(false);
          }}
          options={options}
          selectedOption={[selectedRadioOption]}
          onSelect={handleRadioSelect}
        />
      </Box>

      <Box px="m" py="2xs">
        <Button
          mb="m"
          filled
          label="RadioButton without select button"
          onPress={() => showModal2(true)}
        />
        <SelectBottomSheet
          visible={modal2}
          type="radio"
          options={options}
          title="Select a Single Option"
          closeButtonLabel="Close"
          closeButtonAction={() => showModal2(false)}
          onSelect={handleRadioSelect2}
        />
      </Box>
    </>
  );
};
