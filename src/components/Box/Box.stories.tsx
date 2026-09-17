import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Text from '../Text/Text';
import Box from './Box';

const meta: Meta<typeof Box> = {
  title: 'Box',
  component: Box,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    backgroundColor: 'primaryKey',
    width: 200,
    height: 200,
  },
  render: args => (
    <>
      <Text p="2xs" variant="subtitle01Bold">
        Box
      </Text>
      <Box {...args} />
    </>
  ),
};
