import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import TextLink from './TextLink';
import theme from '../../theme';
import Text from '../Text/Text';

const variantList = Object.keys(theme.textVariants);

const TextLinkMeta: ComponentMeta<typeof TextLink> = {
  title: 'TextLink',
  component: TextLink,
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

export default TextLinkMeta;

type TextLinkStory = ComponentStory<typeof TextLink>;

export const Basic: TextLinkStory = args => (
  <>
    <Text p="2xs" variant="subtitle01Bold">
      TextLink
    </Text>
    <TextLink variant={args.variant} p="2xs">
      Sample TextLink
    </TextLink>
    <Text p="2xs" variant="subtitle01Bold">
      Pressed TextLink
    </Text>
    <TextLink variant={args.variant} p="2xs" isPressed>
      Sample TextLink
    </TextLink>
    <Text p="2xs" variant="subtitle01Bold">
      TextLink in Paragraph
    </Text>
    <Text p="2xs" variant={args.variant}>
      It is an example of usage{' '}
      <TextLink p="2xs" variant={args.variant} isPressed>
        Sample TextLink
      </TextLink>{' '}
      in a paragraph.
    </Text>
  </>
);

export const Heading: TextLinkStory = () => (
  <>
    <Text p="2xs" variant="subtitle01Bold">
      TextLink Heading
    </Text>
    <TextLink variant="heading1" p="2xs">
      Heading 1
    </TextLink>
    <TextLink variant="heading2" p="2xs">
      Heading 2
    </TextLink>
    <TextLink variant="heading3" p="2xs">
      Heading 3
    </TextLink>
    <Text p="2xs" variant="subtitle01Bold">
      Pressed TextLink Heading
    </Text>
    <TextLink variant="heading1" p="2xs" isPressed>
      Heading 1
    </TextLink>
    <TextLink variant="heading2" p="2xs" isPressed>
      Heading 2
    </TextLink>
    <TextLink variant="heading3" p="2xs" isPressed>
      Heading 3
    </TextLink>
    <Text p="2xs" variant="subtitle01Bold">
      Heading TextLink in Paragraph
    </Text>
    <Text p="2xs" variant="heading1">
      It is an example of usage{' '}
      <TextLink p="2xs" variant="heading1" isPressed>
        Heading TextLink
      </TextLink>{' '}
      in a paragraph.
    </Text>
  </>
);

export const Subtitle01: TextLinkStory = () => (
  <>
    <Text p="2xs" variant="subtitle01Bold">
      TextLink Subtitle 01
    </Text>
    <TextLink variant="subtitle01Regular" p="2xs">
      Subtitle 01 / Regular
    </TextLink>
    <TextLink variant="subtitle01Medium" p="2xs">
      Subtitle 01 / Medium
    </TextLink>
    <TextLink variant="subtitle01Semibold" p="2xs">
      Subtitle 01 / Semibold
    </TextLink>
    <TextLink variant="subtitle01Bold" p="2xs">
      Subtitle 01 / Bold
    </TextLink>
    <Text p="2xs" variant="subtitle01Bold">
      Pressed TextLink Subtitle 01
    </Text>
    <TextLink variant="subtitle01Regular" p="2xs" isPressed>
      Subtitle 01 / Regular
    </TextLink>
    <TextLink variant="subtitle01Medium" p="2xs" isPressed>
      Subtitle 01 / Medium
    </TextLink>
    <TextLink variant="subtitle01Semibold" p="2xs" isPressed>
      Subtitle 01 / Semibold
    </TextLink>
    <TextLink variant="subtitle01Bold" p="2xs" isPressed>
      Subtitle 01 / Bold
    </TextLink>
    <Text p="2xs" variant="subtitle01Bold">
      Subtitle TextLink in Paragraph
    </Text>
    <Text p="2xs" variant="subtitle01Regular">
      It is an example of usage{' '}
      <TextLink p="2xs" variant="subtitle01Regular" isPressed>
        Subtitle TextLink
      </TextLink>{' '}
      in a paragraph.
    </Text>
  </>
);

export const Subtitle02: TextLinkStory = () => (
  <>
    <Text p="2xs" variant="subtitle01Bold">
      TextLink Subtitle 02
    </Text>
    <TextLink variant="subtitle02Regular" p="2xs">
      Subtitle 02 / Regular
    </TextLink>
    <TextLink variant="subtitle02Medium" p="2xs">
      Subtitle 02 / Medium
    </TextLink>
    <TextLink variant="subtitle02Semibold" p="2xs">
      Subtitle 02 / Semibold
    </TextLink>
    <TextLink variant="subtitle02Bold" p="2xs">
      Sutitle 02 / Bold
    </TextLink>
    <Text p="2xs" variant="subtitle01Bold">
      Pressed TextLink Subtitle 02
    </Text>
    <TextLink variant="subtitle02Regular" p="2xs" isPressed>
      Subtitle 02 / Regular
    </TextLink>
    <TextLink variant="subtitle02Medium" p="2xs" isPressed>
      Subtitle 02 / Medium
    </TextLink>
    <TextLink variant="subtitle02Semibold" p="2xs" isPressed>
      Subtitle 02 / Semibold
    </TextLink>
    <TextLink variant="subtitle02Bold" p="2xs" isPressed>
      Sutitle 02 / Bold
    </TextLink>
    <Text p="2xs" variant="subtitle01Bold">
      Subtitle TextLink in Paragraph
    </Text>
    <Text p="2xs" variant="subtitle02Regular">
      It is an example of usage{' '}
      <TextLink p="2xs" variant="subtitle02Regular" isPressed>
        Subtitle TextLink
      </TextLink>{' '}
      in a paragraph.
    </Text>
  </>
);

export const Subtitle03: TextLinkStory = () => (
  <>
    <Text p="2xs" variant="subtitle01Bold">
      TextLink Subtitle 03
    </Text>
    <TextLink variant="subtitle03Regular" p="2xs">
      Subtitle 03 / Regular
    </TextLink>
    <TextLink variant="subtitle03Medium" p="2xs">
      Subtitle 03 / Medium
    </TextLink>
    <TextLink variant="subtitle03Semibold" p="2xs">
      Subtitle 03 / Semibold
    </TextLink>
    <TextLink variant="subtitle03Bold" p="2xs">
      Subtitle 03 / Bold
    </TextLink>
    <Text p="2xs" variant="subtitle01Bold">
      Pressed TextLink Subtitle 03
    </Text>
    <TextLink variant="subtitle03Regular" p="2xs" isPressed>
      Subtitle 03 / Regular
    </TextLink>
    <TextLink variant="subtitle03Medium" p="2xs" isPressed>
      Subtitle 03 / Medium
    </TextLink>
    <TextLink variant="subtitle03Semibold" p="2xs" isPressed>
      Subtitle 03 / Semibold
    </TextLink>
    <TextLink variant="subtitle03Bold" p="2xs" isPressed>
      Subtitle 03 / Bold
    </TextLink>
    <Text p="2xs" variant="subtitle01Bold">
      Subtitle TextLink in Paragraph
    </Text>
    <Text p="2xs" variant="subtitle03Regular">
      It is an example of usage{' '}
      <TextLink p="2xs" variant="subtitle03Regular" isPressed>
        Subtitle TextLink
      </TextLink>{' '}
      in a paragraph.
    </Text>
  </>
);

export const Subtitle04: TextLinkStory = () => (
  <>
    <Text p="2xs" variant="subtitle01Bold">
      TextLink Subtitle 04
    </Text>
    <TextLink variant="subtitle04Regular" p="2xs">
      Subtitle 04 / Regular
    </TextLink>
    <TextLink variant="subtitle04Medium" p="2xs">
      Subtitle 04 / Medium
    </TextLink>
    <TextLink variant="subtitle04Semibold" p="2xs">
      Subtitle 04 / Semibold
    </TextLink>
    <TextLink variant="subtitle04Bold" p="2xs">
      Subtitle 04 / Bold
    </TextLink>
    <Text p="2xs" variant="subtitle01Bold">
      Pressed TextLink Subtitle 04
    </Text>
    <TextLink variant="subtitle04Regular" p="2xs" isPressed>
      Subtitle 04 / Regular
    </TextLink>
    <TextLink variant="subtitle04Medium" p="2xs" isPressed>
      Subtitle 04 / Medium
    </TextLink>
    <TextLink variant="subtitle04Semibold" p="2xs" isPressed>
      Subtitle 04 / Semibold
    </TextLink>
    <TextLink variant="subtitle04Bold" p="2xs" isPressed>
      Subtitle 04 / Bold
    </TextLink>
    <Text p="2xs" variant="subtitle01Bold">
      Subtitle TextLink in Paragraph
    </Text>
    <Text p="2xs" variant="subtitle04Regular">
      It is an example of usage{' '}
      <TextLink p="2xs" variant="subtitle04Regular" isPressed>
        Subtitle TextLink
      </TextLink>{' '}
      in a paragraph.
    </Text>
  </>
);

export const Body: TextLinkStory = () => (
  <>
    <Text p="2xs" variant="subtitle01Bold">
      TextLink Body
    </Text>
    <TextLink variant="bodyText" p="2xs">
      Body / Text
    </TextLink>
    <Text p="2xs" variant="subtitle01Bold">
      Pressed TextLink Body
    </Text>
    <TextLink variant="bodyText" p="2xs" isPressed>
      Body / Text
    </TextLink>
    <Text p="2xs" variant="subtitle01Bold">
      Body TextLink in Paragraph
    </Text>
    <Text p="2xs" variant="bodyText">
      It is an example of usage{' '}
      <TextLink p="2xs" variant="bodyText" isPressed>
        Subtitle TextLink
      </TextLink>{' '}
      in a paragraph.
    </Text>
  </>
);

export const Caption: TextLinkStory = () => (
  <>
    <Text p="2xs" variant="subtitle01Bold">
      TextLink Caption
    </Text>
    <TextLink variant="captionText" p="2xs">
      Caption / Text
    </TextLink>
    <TextLink variant="captionMedium" p="2xs">
      Caption / Medium
    </TextLink>
    <TextLink variant="captionLongText" p="2xs">
      Caption / Long Text
    </TextLink>
    <Text p="2xs" variant="subtitle01Bold">
      Pressed TextLink Caption
    </Text>
    <TextLink variant="captionText" p="2xs" isPressed>
      Caption / Text
    </TextLink>
    <TextLink variant="captionMedium" p="2xs" isPressed>
      Caption / Medium
    </TextLink>
    <TextLink variant="captionLongText" p="2xs" isPressed>
      Caption / Long Text
    </TextLink>
    <Text p="2xs" variant="subtitle01Bold">
      Caption TextLink in Paragraph
    </Text>
    <Text p="2xs" variant="captionText">
      It is an example of usage{' '}
      <TextLink p="2xs" variant="captionText" isPressed>
        Subtitle TextLink
      </TextLink>{' '}
      in a paragraph.
    </Text>
  </>
);
