import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import Text from '../Text/Text';
import theme from '../../src/theme';

const variantList = Object.keys(theme.textStyle);

const TextMeta: ComponentMeta<typeof Text> = {
  title: 'Text',
  component: Text,
  argTypes: {
    variant: {
      options: variantList,
      control: { type: 'radios' },
    },
  },
  args: {
    variant: variantList[0] as string,
  },
};

export default TextMeta;

type TextStory = ComponentStory<typeof Text>;

export const Basic: TextStory = args => (
  <>
    <Text p={3} variant="subtitle01Bold">
      Text
    </Text>
    <Text variant={args.variant} p={3}>
      Sample Text
    </Text>
  </>
);

export const Heading: TextStory = () => (
  <>
    <Text p={3} variant="subtitle01Bold">
      Heading
    </Text>
    <Text variant="heading1" p={3}>
      Heading 1
    </Text>
    <Text variant="heading2" p={3}>
      Heading 2
    </Text>
    <Text variant="heading3" p={3}>
      Heading 3
    </Text>
  </>
);

export const Subtitle01: TextStory = () => (
  <>
    <Text p={3} variant="subtitle01Bold">
      Subtitle
    </Text>
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
  </>
);

export const Subtitle02: TextStory = () => (
  <>
    <Text p={3} variant="subtitle01Bold">
      Subtitle
    </Text>
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
  </>
);

export const Subtitle03: TextStory = () => (
  <>
    <Text p={3} variant="subtitle01Bold">
      Subtitle
    </Text>
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
  </>
);

export const Subtitle04: TextStory = () => (
  <>
    <Text p={3} variant="subtitle01Bold">
      Subtitle
    </Text>
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
  </>
);

export const Body: TextStory = () => (
  <>
    <Text p={3} variant="subtitle01Bold">
      Body
    </Text>
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
  </>
);

export const Caption: TextStory = () => (
  <>
    <Text p={3} variant="subtitle01Bold">
      Caption
    </Text>
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
  </>
);
