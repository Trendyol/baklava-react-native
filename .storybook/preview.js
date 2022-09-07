import React from 'react';
import { ScrollView } from 'react-native';
import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';
import { theme as defaultTheme, ThemeProvider } from '../src';

const theme = {
  ...defaultTheme,
  fonts: [
    'Rubik-Light',
    'Rubik-Regular',
    'Rubik-Medium',
    'Rubik-SemiBold',
    'Rubik-Bold',
  ],
};

export const decorators = [
  withBackgrounds,
  Story => (
    <ThemeProvider theme={theme}>
      <ScrollView style={{ backgroundColor: 'white' }}>
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
