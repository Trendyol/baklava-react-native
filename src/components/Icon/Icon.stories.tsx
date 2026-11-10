import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Icon from './Icon';
import { iconList } from './list';
import Box from '../Box/Box';
import Text from '../Text/Text';
import { IconNameType } from './types';

const sizeList = ['2xs', 'xs', 's', 'm', 'l', 'xl'];

const IconMeta: Meta<typeof Icon> = {
  title: 'Icon',
  component: Icon,
  parameters: {
    notes: {
      'Icon set':
        'Icons come from @trendyol/baklava-icons (same set as Baklava Web).\n' +
        'Primary names use the package names, e.g. "add_note"; legacy kebab names like "add-note" are deprecated aliases.\n\n' +
        'Browse all icons (visual reference):\n' +
        'https://github.com/Trendyol/baklava-icons/tree/main/icons\n\n' +
        'Any icon directly from CDN:\n' +
        'https://cdn.jsdelivr.net/npm/@trendyol/baklava-icons/icons/<name>.svg\n\n' +
        'Full name list: src/components/Icon/list.ts (auto-generated).',
    },
  },
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

type Story = StoryObj<typeof IconMeta>;

export const Basic: Story = {
  render: args => (
    <>
      <Text p="2xs" variant="subtitle01Bold">
        Icon
      </Text>
      <Box flexDirection="row" p="2xs" alignItems="center">
        <Icon name={args.name} color={args.color} size={args.size} />
        <Text px="2xs">{args.name}</Text>
      </Box>
    </>
  ),
};

export const IconSizes: Story = {
  render: args => (
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
  ),
};

export const IconColors: Story = {
  render: args => (
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
  ),
};

export const IconList: Story = {
  render: args => (
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
  ),
};
