import React from 'react';
import { ScrollView } from 'react-native';
import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';
import { ThemeProvider } from 'styled-components/native';
import { theme } from '../src';

export const decorators = [
  withBackgrounds,
  Story => (
    <ThemeProvider theme={theme}>
      <ScrollView>
        <Story />
      </ScrollView>
    </ThemeProvider>
  ),
];
export const parameters = {
  backgrounds: [
    { name: 'plain', value: 'white', default: true },
    { name: 'warm', value: '#f1f2f7' },
  ],
  options: {
    storySort: {
      order: ['Box', 'Button', ['Button Variants', 'Button Types'], 'Text'],
      // locales: 'en-US',
    },
  },
};
