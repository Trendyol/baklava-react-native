import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Text from '../Text/Text';
import Box from './Box';

const meta: Meta<typeof Box> = {
  title: 'Box',
  component: Box,
};

export default meta;

const longText =
  'Baklava Design System is the design system of Trendyol and this text is long enough to overflow.';

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    backgroundColor: 'primaryKey',
    width: 200,
    height: 200,
  },
  render: args => (
    <>
      <Text p="2xs" variant="subtitle1Bold">
        Box
      </Text>
      <Box {...args} />
    </>
  ),
};

export const Shrink: Story = {
  render: () => (
    <>
      <Text p="2xs" variant="subtitle1Bold">
        Box Shrink
      </Text>

      <Box px="2xs" py="3xs">
        <Text variant="captionText">Without Shrink / Sibling Is Pushed Out</Text>
        <Box
          flexDirection="row"
          alignItems="center"
          backgroundColor="neutralLightest"
          borderRadius="xs"
          p="2xs">
          <Box>
            <Text variant="body2" truncate>
              {longText}
            </Text>
          </Box>
          <Text variant="subtitle4Bold" pl="3xs">
            99 TL
          </Text>
        </Box>
      </Box>

      <Box px="2xs" py="3xs">
        <Text variant="captionText">With Shrink / Sibling Stays Visible</Text>
        <Box
          flexDirection="row"
          alignItems="center"
          backgroundColor="neutralLightest"
          borderRadius="xs"
          p="2xs">
          <Box shrink>
            <Text variant="body2" truncate>
              {longText}
            </Text>
          </Box>
          <Text variant="subtitle4Bold" pl="3xs">
            99 TL
          </Text>
        </Box>
      </Box>
    </>
  ),
};
