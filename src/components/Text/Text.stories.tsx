import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import Text from './Text';
import theme from '../../theme';

const variantList = Object.keys(theme.textVariants);

const TextMeta: ComponentMeta<typeof Text> = {
  title: 'Text',
  component: Text,
  argTypes: {
    variant: {
      options: variantList,
      control: { type: 'radio' },
    },
  },
  args: {
    variant: variantList[0] as any,
  },
};

export default TextMeta;

type TextStory = ComponentStory<typeof Text>;

export const Basic: TextStory = args => (
  <>
    <Text p="2xs" variant="subtitle1Bold">
      Text
    </Text>
    <Text variant={args.variant} p="2xs">
      Sample Text
    </Text>
  </>
);

export const Heading: TextStory = () => (
  <>
    <Text p="2xs" variant="subtitle1Bold">
      Text Heading
    </Text>
    <Text variant="heading1" p="2xs">
      Heading 1
    </Text>
    <Text variant="heading2" p="2xs">
      Heading 2
    </Text>
    <Text variant="heading3" p="2xs">
      Heading 3
    </Text>
  </>
);

export const Subtitle1: TextStory = () => (
  <>
    <Text p="2xs" variant="subtitle1Bold">
      Text Subtitle 1
    </Text>
    <Text variant="subtitle1Regular" p="2xs">
      Subtitle 1 / Regular
    </Text>
    <Text variant="subtitle1Medium" p="2xs">
      Subtitle 1 / Medium
    </Text>
    <Text variant="subtitle1Semibold" p="2xs">
      Subtitle 1 / Semibold
    </Text>
    <Text variant="subtitle1Bold" p="2xs">
      Subtitle 1 / Bold
    </Text>
  </>
);

export const Subtitle2: TextStory = () => (
  <>
    <Text p="2xs" variant="subtitle1Bold">
      Text Subtitle 2
    </Text>
    <Text variant="subtitle2Regular" p="2xs">
      Subtitle 2 / Regular
    </Text>
    <Text variant="subtitle2Medium" p="2xs">
      Subtitle 2 / Medium
    </Text>
    <Text variant="subtitle2Semibold" p="2xs">
      Subtitle 2 / Semibold
    </Text>
    <Text variant="subtitle2Bold" p="2xs">
      Subtitle 2 / Bold
    </Text>
  </>
);

export const Subtitle3: TextStory = () => (
  <>
    <Text p="2xs" variant="subtitle1Bold">
      Text Subtitle 3
    </Text>
    <Text variant="subtitle3Regular" p="2xs">
      Subtitle 3 / Regular
    </Text>
    <Text variant="subtitle3Medium" p="2xs">
      Subtitle 3 / Medium
    </Text>
    <Text variant="subtitle3Semibold" p="2xs">
      Subtitle 3 / Semibold
    </Text>
    <Text variant="subtitle3Bold" p="2xs">
      Subtitle 3 / Bold
    </Text>
  </>
);

export const Subtitle4: TextStory = () => (
  <>
    <Text p="2xs" variant="subtitle1Bold">
      Text Subtitle 4
    </Text>
    <Text variant="subtitle4Regular" p="2xs">
      Subtitle 4 / Regular
    </Text>
    <Text variant="subtitle4Medium" p="2xs">
      Subtitle 4 / Medium
    </Text>
    <Text variant="subtitle4Semibold" p="2xs">
      Subtitle 4 / Semibold
    </Text>
    <Text variant="subtitle4Bold" p="2xs">
      Subtitle 4 / Bold
    </Text>
  </>
);

export const Body: TextStory = () => (
  <>
    <Text p="2xs" variant="subtitle1Bold">
      Text Body
    </Text>
    <Text variant="body1" p="2xs">
      Body 1
    </Text>
    <Text variant="body2" p="2xs">
      Body 2
    </Text>
    <Text variant="body3" p="2xs">
      Body 3
    </Text>
    {/* <Text variant="bodyUnderline" p="2xs">
      Body / Underline
    </Text>
    <Text variant="bodyTextLink" p="2xs">
      Body / Text Link
    </Text>
    <Text variant="bodyLongText" p="2xs">
      Body / Long Text
    </Text> */}
  </>
);

export const Caption: TextStory = () => (
  <>
    <Text p="2xs" variant="subtitle1Bold">
      Text Caption
    </Text>
    <Text variant="captionText" p="2xs">
      Caption / Text
    </Text>
  </>
);
