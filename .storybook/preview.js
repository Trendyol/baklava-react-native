import React from 'react';
import { ScrollView } from 'react-native';
import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';
import { theme, ThemeProvider, Toast } from '../src';
import { SafeAreaProvider } from 'react-native-safe-area-context';

theme.fonts = {
  light: 'Rubik-Light',
  regular: 'Rubik-Regular',
  medium: 'Rubik-Medium',
  semiBold: 'Rubik-SemiBold',
  bold: 'Rubik-Bold',
};

export const decorators = [
  withBackgrounds,
  Story => (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <ScrollView style={{ backgroundColor: theme.colors.neutralFull }}>
          <Story />
        </ScrollView>
        <Toast ignoreKeyboard extraPaddingBottom={16} />
      </SafeAreaProvider>
    </ThemeProvider>
  ),
];

export const parameters = {
  backgrounds: [
    { name: 'plain', value: theme.colors.neutralFull, default: true },
    { name: 'warm', value: '#f1f2f7' },
  ],
  options: {
    storySort: {
      order: [
        'Alert',
        'Badge',
        'Box',
        'Button',
        ['Button Variants', 'Button Types'],
        'Checkbox',
        'Icon',
        'Image',
        'Input',
        'Text',
        'Toast',
        'Switch',
      ],
      // locales: 'en-US',
    },
  },
};
