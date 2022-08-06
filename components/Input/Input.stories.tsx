import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import Text from '../Text/Text';
import Input from './Input';
import Box from '../Box/Box';

const InputMeta: ComponentMeta<typeof Input> = {
  title: 'Input',
  component: Input,
  argTypes: {
    onPress: { action: 'pressed the button' },
  },
  args: {
    size: 'large',
    label: 'Label',
    placeholder: 'Input Text',
    labelFixed: true,
    optional: true,
    description: 'Description.',
    icon: 'check-fill',
  },
};

export default InputMeta;

type InputStory = ComponentStory<typeof Input>;

export const Basic: InputStory = args => (
  <Box px={3}>
    <Text py={3} variant="subtitle01Bold">
      Input
    </Text>
    <Input {...args} />
  </Box>
);
