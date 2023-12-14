import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';
import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PortalProvider, ThemeProvider, Toast, theme } from '../src';

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
      <PortalProvider>
        <SafeAreaProvider>
          <ScrollView style={{ backgroundColor: theme.colors.neutralFull }}>
            <Story />
          </ScrollView>
          <Toast ignoreKeyboard extraPaddingBottom={16} />
        </SafeAreaProvider>
      </PortalProvider>
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
        'Modal',
      ],
      // locales: 'en-US',
    },
  },
};
