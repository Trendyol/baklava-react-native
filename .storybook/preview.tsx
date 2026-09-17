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
            <ScrollView
              keyboardShouldPersistTaps="handled"
              style={{ backgroundColor: theme.colors.neutralFull }}>
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
      // Required for the nested arrays below to sort stories inside a component.
      includeNames: true,
      order: [
        'ActionBar',
        [
          'Single',
          'Stacked',
          'Inline',
          'Mixed',
          'With Checkbox',
          'With Icon',
          'Disabled Safe Area',
        ],
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
        'ProgressIndicator',
        [
          'Basic',
          'Variants',
          'Sizes',
          'Icon And Label',
          'Helper Text',
          'Cases',
        ],
        'RadioButton',
        'SearchInput',
        'Select',
        'SelectBottomSheet',
        'Spinner',
        'Stepper',
        ['Basic', 'States', 'BarHeights', 'StepCounts'],
        'Switch',
        'Tabs',
        'Text',
        'TextArea',
        'TextLink',
        'Toast',
        'Tooltip',
        'Upload',
        [
          'Basic',
          'Uploaded',
          'Multiple Statuses',
          'Error Validation',
          'Disabled',
          'Interactive',
        ],
      ],
      // locales: 'en-US',
    },
  },
};
