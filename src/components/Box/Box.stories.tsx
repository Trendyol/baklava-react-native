import { ComponentStory } from '@storybook/react-native';
import React from 'react';
import Text from '../Text/Text';
import Box from './Box';

export default {
  title: 'Box',
  component: Box,
};

type BoxStory = ComponentStory<typeof Box>;

export const Basic: BoxStory = args => (
  <>
    <Text p="2xs" variant="subtitle01Bold">
      Box
    </Text>
    <Box {...args} />
  </>
);

Basic.args = {
  backgroundColor: 'primaryKey',
  width: 200,
  height: 200,
};
