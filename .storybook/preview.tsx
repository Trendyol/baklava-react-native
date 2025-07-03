import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';
import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Parameters, Story } from '@storybook/react-native';
import {
  PortalProvider,
  ThemeProvider,
  TooltipProvider,
  Toast,
  theme,
} from '../src';

theme.fonts = {
  light: 'Rubik-Light',
  regular: 'Rubik-Regular',
  medium: 'Rubik-Medium',
  semiBold: 'Rubik-SemiBold',
  bold: 'Rubik-Bold',
};

export const decorators = [
  withBackgrounds,
  (Story: Story) => (
    <ThemeProvider theme={theme}>
      <TooltipProvider>
        <PortalProvider>
          <SafeAreaProvider>
            <ScrollView style={{ backgroundColor: theme.colors.neutralFull }}>
              <Story />
            </ScrollView>
            <Toast ignoreKeyboard extraPaddingBottom={16} />
          </SafeAreaProvider>
        </PortalProvider>
      </TooltipProvider>
    </ThemeProvider>
  ),
];

export const parameters: Parameters = {
  backgrounds: [
    { name: 'plain', value: theme.colors.neutralFull, default: true },
    { name: 'warm', value: '#f1f2f7' },
  ],
  layout: 'fullscreen',
  options: {
    storySort: {
      order: [
        'Alert',
        'Badge',
        'BottomSheet',
        'Box',
        'Button',
        ['Button Variants', 'Button Types'],
        'Checkbox',
        'DatePicker',
        'FlagIcon',
        'Icon',
        'Image',
        'Input',
        'Modal',
        'RadioButton',
        'Select',
        'SelectBottomSheet',
        'Spinner',
        'Switch',
        'Tabs',
        'Text',
        'TextArea',
        'TextLink',
        'Toast',
        'Tooltip',
      ],
      // locales: 'en-US',
    },
  },
};
