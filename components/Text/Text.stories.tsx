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
    <Text variant="headingBig" p={3}>
      Heading 1
    </Text>
    <Text variant="headingMedium" p={3}>
      Heading 2
    </Text>
    <Text variant="headingSmall" p={3}>
      Heading 3
    </Text>
  </ThemeProvider>
);
export const SubtitleXLarge: TextStory = () => (
  <ThemeProvider theme={theme}>
    <Text variant="subtitleXLargeRegular" p={3}>
      Subtitle XLarge / Regular
    </Text>
    <Text variant="subtitleXLargeMedium" p={3}>
      Subtitle XLarge / Medium
    </Text>
    <Text variant="subtitleXLargeSemibold" p={3}>
      Subtitle XLarge / Semibold
    </Text>
    <Text variant="subtitleXLargeBold" p={3}>
      Subtitle XLarge / Bold
    </Text>
  </ThemeProvider>
);
export const SubtitleLarge: TextStory = () => (
  <ThemeProvider theme={theme}>
    <Text variant="subtitleLargeRegular" p={3}>
      Subtitle Large / Regular
    </Text>
    <Text variant="subtitleLargeMedium" p={3}>
      Subtitle Large / Medium
    </Text>
    <Text variant="subtitleLargeSemibold" p={3}>
      Subtitle Large / Semibold
    </Text>
    <Text variant="subtitleLargeBold" p={3}>
      Sutitle Large / Bold
    </Text>
  </ThemeProvider>
);
export const SubtitleMedium: TextStory = () => (
  <ThemeProvider theme={theme}>
    <Text variant="subtitleMediumRegular" p={3}>
      Subtitle Medium / Regular
    </Text>
    <Text variant="subtitleMediumMedium" p={3}>
      Subtitle Medium / Medium
    </Text>
    <Text variant="subtitleMediumSemibold" p={3}>
      Subtitle Medium / Semibold
    </Text>
    <Text variant="subtitleMediumBold" p={3}>
      Subtitle Medium / Bold
    </Text>
  </ThemeProvider>
);
export const SubtitleSmall: TextStory = () => (
  <ThemeProvider theme={theme}>
    <Text variant="subtitleSmallRegular" p={3}>
      Subtitle Small / Regular
    </Text>
    <Text variant="subtitleSmallMedium" p={3}>
      Subtitle Small / Medium
    </Text>
    <Text variant="subtitleSmallSemibold" p={3}>
      Subtitle Small / Semibold
    </Text>
    <Text variant="subtitleSmallBold" p={3}>
      Subtitle Small / Bold
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
