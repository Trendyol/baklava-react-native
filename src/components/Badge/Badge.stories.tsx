import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import React from 'react';
import Box from '../Box/Box';
import Text from '../Text/Text';
import Badge from './Badge';
import { iconList } from '../Icon/list';

const variantList = ['default', 'neutral', 'success', 'warning', 'danger'];
const sizeList = ['small', 'medium', 'large'];

const BadgeMeta: ComponentMeta<typeof Badge> = {
  title: 'Badge',
  component: Badge,
  argTypes: {
    variant: {
      options: variantList,
      control: { type: 'radios' },
    },
    icon: {
      options: iconList,
      control: { type: 'select' },
    },
    size: {
      options: sizeList,
      control: { type: 'radios' },
    },
  },
  args: {
    variant: 'default',
    icon: 'confetti',
    text: 'Lorem Ipsum',
    size: 'medium',
    transparent: false,
  },
};

export default BadgeMeta;

type BadgeStory = ComponentStory<typeof Badge>;

export const Basic: BadgeStory = args => (
  <>
    <Text p="2xs" variant="subtitle01Bold">
      Badge
    </Text>

    <Box px="m" py="2xs">
      <Badge
        variant={args.variant}
        icon={args.icon}
        text={args.text}
        size={args.size}
        transparent={args.transparent}
      />
    </Box>
  </>
);

export const Cases: BadgeStory = () => {
  return (
    <>
      <Text p="2xs" variant="subtitle01Bold">
        Badge Cases
      </Text>

      <Box px="m" py="2xs">
        <Badge
          text="Yeni"
          icon="alert"
          color="white"
          transparent
          backgroundColor="red"
        />
      </Box>

      <Box px="m" py="2xs">
        <Badge
          text="Lorem Ipsum"
          icon="confetti"
          color="white"
          transparent
          backgroundColor="green"
        />
      </Box>

      <Box px="m" py="2xs">
        <Badge
          text="Lorem Ipsum"
          transparent
          color="featuredColor"
          backgroundColor="featuredBackground"
        />
      </Box>

      <Box px="m" py="2xs">
        <Badge
          text="Lorem Ipsum"
          icon="gift"
          color="alternativeColor"
          transparent
        />
      </Box>

      <Box px="m" py="2xs" flexDirection="row">
        <Box pr="2xs">
          <Badge icon="clock" />
        </Box>
        <Box pr="2xs">
          <Badge variant="neutral" />
        </Box>
        <Box pr="2xs">
          <Badge variant="success" />
        </Box>
        <Box pr="2xs">
          <Badge variant="warning" />
        </Box>
        <Box pr="2xs">
          <Badge variant="danger" />
        </Box>
      </Box>

      <Box px="m" py="2xs" flexDirection="row">
        <Box pr="2xs">
          <Badge icon="hamburger" transparent />
        </Box>
        <Box pr="2xs">
          <Badge icon="flash" color="featuredColor" transparent />
        </Box>
        <Box pr="2xs">
          <Badge icon="motorcycle" color="successColor" transparent />
        </Box>
        <Box pr="2xs">
          <Badge icon="vacation-mode" transparent />
        </Box>
        <Box pr="2xs">
          <Badge icon="stop" color="dangerColor" transparent />
        </Box>
      </Box>
    </>
  );
};

export const Sizes: BadgeStory = () => {
  return (
    <>
      <Text p="2xs" variant="subtitle01Bold">
        Badge Sizes
      </Text>

      <Box px="m" py="2xs">
        <Badge text="Small Badge" size="small" />
      </Box>

      <Box px="m" py="2xs">
        <Badge text="Medium Badge" size="medium" />
      </Box>

      <Box px="m" py="2xs">
        <Badge text="Large Badge" size="large" />
      </Box>
    </>
  );
};

export const WithBackground: BadgeStory = () => {
  return (
    <>
      <Text p="2xs" variant="subtitle01Bold">
        Badge With Background
      </Text>

      <Box px="m" py="2xs">
        <Badge text="Default" icon="clock" />
      </Box>

      <Box px="m" py="2xs">
        <Badge variant="neutral" text="Neutral" />
      </Box>

      <Box px="m" py="2xs">
        <Badge variant="success" text="Success" />
      </Box>

      <Box px="m" py="2xs">
        <Badge variant="warning" text="Warning" />
      </Box>

      <Box px="m" py="2xs">
        <Badge variant="danger" text="Danger" />
      </Box>
    </>
  );
};

export const WithoutBackground: BadgeStory = () => {
  return (
    <>
      <Text p="2xs" variant="subtitle01Bold">
        Badge Without Background
      </Text>

      <Box px="m" py="2xs">
        <Badge text="Default" icon="clock" transparent />
      </Box>

      <Box px="m" py="2xs">
        <Badge variant="neutral" text="Neutral" transparent />
      </Box>

      <Box px="m" py="2xs">
        <Badge variant="success" text="Success" transparent />
      </Box>

      <Box px="m" py="2xs">
        <Badge variant="warning" text="Warning" transparent />
      </Box>

      <Box px="m" py="2xs">
        <Badge variant="danger" text="Danger" transparent />
      </Box>
    </>
  );
};
