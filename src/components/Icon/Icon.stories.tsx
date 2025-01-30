import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import Icon from './Icon';
import { iconList } from './list';
import Box from '../Box/Box';
import Text from '../Text/Text';
import { IconNameType } from './types';

const sizeList = ['2xs', 'xs', 's', 'm', 'l', 'xl'];

const IconMeta: ComponentMeta<typeof Icon> = {
  title: 'Icon',
  component: Icon,
  argTypes: {
    name: {
      options: iconList,
      control: { type: 'select' },
    },
    size: {
      options: sizeList,
      control: { type: 'radio' },
    },
  },
  args: {
    name: 'confetti',
    color: 'neutralDarker',
    size: 'l',
  },
};

export default IconMeta;

type IconStory = ComponentStory<typeof Icon>;

export const Basic: IconStory = args => (
  <>
    <Text p="2xs" variant="subtitle01Bold">
      Icon
    </Text>
    <Box flexDirection="row" p="2xs" alignItems="center">
      <Icon name={args.name} color={args.color} size={args.size} />
      <Text px="2xs">{args.name}</Text>
    </Box>
  </>
);

export const IconSizes: IconStory = args => (
  <>
    <Text p="2xs" variant="subtitle01Bold">
      Icon Sizes
    </Text>
    <Box p="2xs" alignSelf="flex-start">
      <Box flexDirection="row" p="2xs" alignItems="center">
        <Icon name={args.name} color={args.color} size="xl" />
        <Text px="2xs">xl</Text>
      </Box>
      <Box flexDirection="row" p="2xs" alignItems="center">
        <Icon name={args.name} color={args.color} size="l" />
        <Text px="2xs">l</Text>
      </Box>
      <Box flexDirection="row" p="2xs" alignItems="center">
        <Icon name={args.name} color={args.color} size="m" />
        <Text px="2xs">m</Text>
      </Box>
      <Box flexDirection="row" p="2xs" alignItems="center">
        <Icon name={args.name} color={args.color} size="s" />
        <Text px="2xs">s</Text>
      </Box>
      <Box flexDirection="row" p="2xs" alignItems="center">
        <Icon name={args.name} color={args.color} size="xs" />
        <Text px="2xs">xs</Text>
      </Box>
      <Box flexDirection="row" p="2xs" alignItems="center">
        <Icon name={args.name} color={args.color} size="2xs" />
        <Text px="2xs">2xs</Text>
      </Box>
    </Box>
  </>
);

export const IconColors: IconStory = args => (
  <>
    <Text p="2xs" variant="subtitle01Bold">
      Icon Colors
    </Text>
    <Box alignSelf="flex-start" p="2xs">
      <Box flexDirection="row" p="2xs" alignItems="center">
        <Icon name={args.name} color="neutralDarker" />
        <Text px="2xs">neutralDarker</Text>
      </Box>
      <Box flexDirection="row" p="2xs" alignItems="center">
        <Icon name={args.name} color="red" />
        <Text px="2xs">red</Text>
      </Box>
      <Box flexDirection="row" p="2xs" alignItems="center">
        <Icon name={args.name} color="#fcba03" />
        <Text px="2xs">#fcba03</Text>
      </Box>
    </Box>
  </>
);

export const IconList: IconStory = args => (
  <>
    <Text p="2xs" variant="subtitle01Bold">
      Icon List
    </Text>
    <Box p="2xs" alignSelf="flex-start">
      {iconList.map((iconName: IconNameType) => (
        <Box key={iconName} flexDirection="row" p="2xs" alignItems="center">
          <Icon name={iconName} color={args.color} />
          <Text px="2xs">{iconName}</Text>
        </Box>
      ))}
    </Box>
  </>
);
