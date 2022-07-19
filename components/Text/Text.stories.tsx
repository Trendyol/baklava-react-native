import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { ThemeProvider } from 'styled-components/native';
import theme from '../../src/theme';
import Text from '../Text/Text';

const TextMeta: ComponentMeta<typeof Text> = {
  title: 'Text',
  component: Text,
  argTypes: {},
  args: {},
};

export default TextMeta;

type TextStory = ComponentStory<typeof Text>;

export const Heading: TextStory = () => (
  <ThemeProvider theme={theme}>
    <Text variant="heading1" p={3}>
      Heading 1
    </Text>
    <Text variant="heading2" p={3}>
      Heading 2
    </Text>
    <Text variant="heading3" p={3}>
      Heading 3
    </Text>
  </ThemeProvider>
);
export const Subtitle01: TextStory = () => (
  <ThemeProvider theme={theme}>
    <Text variant="subtitle01Regular" p={3}>
      Subtitle 01 / Regular
    </Text>
    <Text variant="subtitle01Medium" p={3}>
      Subtitle 01 / Medium
    </Text>
    <Text variant="subtitle01Semibold" p={3}>
      Subtitle 01 / Semibold
    </Text>
    <Text variant="subtitle01Bold" p={3}>
      Subtitle 01 / Bold
    </Text>
  </ThemeProvider>
);
export const Subtitle02: TextStory = () => (
  <ThemeProvider theme={theme}>
    <Text variant="subtitle02Regular" p={3}>
      Subtitle 02 / Regular
    </Text>
    <Text variant="subtitle02Medium" p={3}>
      Subtitle 02 / Medium
    </Text>
    <Text variant="subtitle02Semibold" p={3}>
      Subtitle 02 / Semibold
    </Text>
    <Text variant="subtitle02Bold" p={3}>
      Sutitle 02 / Bold
    </Text>
  </ThemeProvider>
);
export const Subtitle03: TextStory = () => (
  <ThemeProvider theme={theme}>
    <Text variant="subtitle03Regular" p={3}>
      Subtitle 03 / Regular
    </Text>
    <Text variant="subtitle03Medium" p={3}>
      Subtitle 03 / Medium
    </Text>
    <Text variant="subtitle03Semibold" p={3}>
      Subtitle 03 / Semibold
    </Text>
    <Text variant="subtitle03Bold" p={3}>
      Subtitle 03 / Bold
    </Text>
  </ThemeProvider>
);
export const Subtitle04: TextStory = () => (
  <ThemeProvider theme={theme}>
    <Text variant="subtitle04Regular" p={3}>
      Subtitle 04 / Regular
    </Text>
    <Text variant="subtitle04Medium" p={3}>
      Subtitle 04 / Medium
    </Text>
    <Text variant="subtitle04Semibold" p={3}>
      Subtitle 04 / Semibold
    </Text>
    <Text variant="subtitle04Bold" p={3}>
      Subtitle 04 / Bold
    </Text>
  </ThemeProvider>
);
export const Body: TextStory = () => (
  <ThemeProvider theme={theme}>
    <Text variant="bodyText" p={3}>
      Body / Text
    </Text>
    <Text variant="bodyUnderline" p={3}>
      Body / Underline
    </Text>
    <Text variant="bodyTextLink" p={3}>
      Body / Text Link
    </Text>
    <Text variant="bodyLongText" p={3}>
      Body / Long Text
    </Text>
  </ThemeProvider>
);
export const Caption: TextStory = () => (
  <ThemeProvider theme={theme}>
    <Text variant="captionText" p={3}>
      Caption / Text
    </Text>
    <Text variant="captionMedium" p={3}>
      Caption / Medium
    </Text>
    <Text variant="captionLongText" p={3}>
      Caption / Long Text
    </Text>
    <Text variant="captionTextLink" p={3}>
      Caption / Text Link
    </Text>
  </ThemeProvider>
);
