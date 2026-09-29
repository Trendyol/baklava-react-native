import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Box from '../Box/Box';
import Text from '../Text/Text';
import RadioButton from './RadioButton';

const RadioButtonMeta: Meta<typeof RadioButton> = {
  title: 'RadioButton',
  component: RadioButton,
  argTypes: {
    onPress: { action: 'pressed the button' },
  },
  args: {
    selected: true,
    disabled: false,
  },
};

export default RadioButtonMeta;

type Story = StoryObj<typeof RadioButtonMeta>;

export const Basic: Story = {
  render: args => {
    const [selected, setSelected] = React.useState(false);

    return (
      <>
        <Text p="2xs" variant="subtitle01Bold">
          RadioButton
        </Text>
        <RadioButton
          {...args}
          onPress={() => setSelected(true)}
          selected={selected}
          label="lorem ipsum"
          m="2xs"
        />
      </>
    );
  },
};

export const Cases: Story = {
  render: () => {
    return (
      <>
        <Text p="2xs" variant="subtitle01Bold">
          RadioButton
        </Text>
        <Box px="m" py="2xs" flexDirection="row">
          <RadioButton selected={false} />
          <Box width={8} />
          <RadioButton selected={true} />
          <Box width={8} />
          <RadioButton disabled selected={false} />
          <Box width={8} />
          <RadioButton disabled selected={true} />
        </Box>

        <Box px="m" py="2xs">
          <Box height={12} />
          <RadioButton selected={false} label="selected: false" />
          <Box height={12} />
          <RadioButton selected={true} label="selected: true" />
        </Box>

        <Box px="m" py="xs">
          <Text py="xs" variant="subtitle02Medium">
            Disable:
          </Text>
          <RadioButton
            disabled={true}
            selected={false}
            label="disabled, selected: false"
          />
          <Box height={12} />
          <RadioButton
            disabled={true}
            selected={true}
            label="disabled, selected: true"
          />
        </Box>

        <Box px="m" py="xs">
          <Text py="xs" variant="subtitle02Medium">
            Alignment:
          </Text>
          <RadioButton
            selected={false}
            label="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <Box height={12} />
          <RadioButton
            selected={false}
            alignItems="center"
            label="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </Box>
      </>
    );
  },
};

export const RadioButtonWithFlagIcon: Story = {
  render: () => {
    return (
      <>
        <Text p="2xs" variant="subtitle01Bold">
          Radio Button With Flag Icon
        </Text>

        <Box px="m" py="2xs">
          <Box height={12} />
          <RadioButton
            selected={false}
            label="selected: false, flagIcon: TR"
            flagIcon="TR"
          />
          <Box height={12} />
          <RadioButton
            selected={true}
            label="selected: true, flagIcon: DE"
            flagIcon="DE"
          />
          <Box height={12} />
          <RadioButton
            disabled
            selected={false}
            label="selected: false, disabled, flagIcon: GR"
            flagIcon="GR"
          />
          <Box height={12} />
          <RadioButton
            disabled
            selected={true}
            label="selected: true, disabled, flagIcon: RO"
            flagIcon="RO"
          />
        </Box>
      </>
    );
  },
};
