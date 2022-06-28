import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import Box from './Box';
import { ThemeProvider } from 'styled-components/native';
import theme from '../../src/theme';

const BoxMeta: ComponentMeta<typeof Box> = {
  title: 'Box',
  component: Box,
  argTypes: {},
  args: {
    backgroundColor: 'primaryColor',
    width: 200,
    height: 200,
  },
};

export default BoxMeta;

type BoxStory = ComponentStory<typeof Box>;

export const Basic: BoxStory = args => (
  <ThemeProvider theme={theme}>
    <Box {...args} />
  </ThemeProvider>
);
