import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Text from './Text';
import Box from '../Box/Box';
import theme from '../../theme';

const variantList = Object.keys(theme.textVariants);
const ellipsizeModeList = ['head', 'middle', 'tail', 'clip'];

const longText =
  'Baklava Design System is the design system of Trendyol and this text is long enough to overflow.';

const TextMeta: Meta<typeof Text> = {
  title: 'Text',
  component: Text,
  argTypes: {
    variant: {
      options: variantList,
      control: { type: 'radio' },
    },
    truncate: {
      control: { type: 'boolean' },
    },
    ellipsizeMode: {
      options: ellipsizeModeList,
      control: { type: 'radio' },
    },
  },
  args: {
    variant: variantList[0] as any,
    truncate: false,
  },
};

export default TextMeta;

type Story = StoryObj<typeof TextMeta>;

export const Basic: Story = {
  render: args => (
    <>
      <Text p="2xs" variant="subtitle1Bold">
        Text
      </Text>
      <Text
        variant={args.variant}
        truncate={args.truncate}
        numberOfLines={args.numberOfLines}
        ellipsizeMode={args.ellipsizeMode}
        p="2xs">
        {args.truncate ? longText : 'Sample Text'}
      </Text>
    </>
  ),
};

export const Heading: Story = {
  render: () => (
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
  ),
};

export const Subtitle1: Story = {
  render: () => (
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
  ),
};

export const Subtitle2: Story = {
  render: () => (
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
  ),
};

export const Subtitle3: Story = {
  render: () => (
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
  ),
};

export const Subtitle4: Story = {
  render: () => (
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
  ),
};

export const Body: Story = {
  render: () => (
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
  ),
};

export const Caption: Story = {
  render: () => (
    <>
      <Text p="2xs" variant="subtitle1Bold">
        Text Caption
      </Text>
      <Text variant="captionText" p="2xs">
        Caption / Text
      </Text>
    </>
  ),
};

export const Truncate: Story = {
  render: () => (
    <>
      <Text p="2xs" variant="subtitle1Bold">
        Text Truncate
      </Text>

      <Box px="2xs" py="3xs">
        <Text variant="captionText">Default / Wraps</Text>
        <Text variant="body2">{longText}</Text>
      </Box>

      <Box px="2xs" py="3xs">
        <Text variant="captionText">Truncate</Text>
        <Text variant="body2" truncate>
          {longText}
        </Text>
      </Box>

      <Box px="2xs" py="3xs">
        <Text variant="captionText">Truncate / Two Lines</Text>
        <Text variant="body2" truncate numberOfLines={2}>
          {longText}
        </Text>
      </Box>

      <Box px="2xs" py="3xs">
        <Text variant="captionText">Truncate / Middle Ellipsis</Text>
        <Text variant="body2" truncate ellipsizeMode="middle">
          {longText}
        </Text>
      </Box>

      <Box px="2xs" py="3xs">
        <Text variant="captionText">Truncate / Next To A Sibling</Text>
        <Box flexDirection="row" alignItems="center">
          <Text variant="body2" truncate>
            {longText}
          </Text>
          <Text variant="subtitle4Bold" pl="3xs">
            99 TL
          </Text>
        </Box>
      </Box>
    </>
  ),
};
