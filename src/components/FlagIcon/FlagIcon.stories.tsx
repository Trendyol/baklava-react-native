import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import FlagIcon from './FlagIcon';
import { flagIconList } from './list';
import Box from '../Box/Box';
import Text from '../Text/Text';
import { FlagIconNameType } from './types';

const sizeList = ['2xs', 'xs', 's', 'm', 'l', 'xl'];

const FlagIconMeta: ComponentMeta<typeof FlagIcon> = {
  title: 'FlagIcon',
  component: FlagIcon,
  argTypes: {
    name: {
      options: flagIconList,
      control: { type: 'select' },
    },
    size: {
      options: sizeList,
      control: { type: 'radio' },
    },
  },
  args: {
    name: 'TR',
    size: 'l',
  },
};

export default FlagIconMeta;

type FlagIconStory = ComponentStory<typeof FlagIcon>;

export const Basic: FlagIconStory = args => (
  <>
    <Text p="2xs" variant="subtitle01Bold">
      Flag Icon
    </Text>
    <Box flexDirection="row" p="2xs" alignItems="center">
      <FlagIcon name={args.name} size={args.size} />
      <Text px="2xs">{args.name}</Text>
    </Box>
  </>
);

export const FlagIconSizes: FlagIconStory = args => (
  <>
    <Text p="2xs" variant="subtitle01Bold">
      Flag Icon Sizes
    </Text>
    <Box p="2xs" alignSelf="flex-start">
      <Box flexDirection="row" p="2xs" alignItems="center">
        <FlagIcon name={args.name} size="xl" />
        <Text px="2xs">xl</Text>
      </Box>
      <Box flexDirection="row" p="2xs" alignItems="center">
        <FlagIcon name={args.name} size="l" />
        <Text px="2xs">l</Text>
      </Box>
      <Box flexDirection="row" p="2xs" alignItems="center">
        <FlagIcon name={args.name} size="m" />
        <Text px="2xs">m</Text>
      </Box>
      <Box flexDirection="row" p="2xs" alignItems="center">
        <FlagIcon name={args.name} size="s" />
        <Text px="2xs">s</Text>
      </Box>
      <Box flexDirection="row" p="2xs" alignItems="center">
        <FlagIcon name={args.name} size="xs" />
        <Text px="2xs">xs</Text>
      </Box>
      <Box flexDirection="row" p="2xs" alignItems="center">
        <FlagIcon name={args.name} size="2xs" />
        <Text px="2xs">2xs</Text>
      </Box>
    </Box>
  </>
);

export const FlagIconList: FlagIconStory = () => (
  <>
    <Text p="2xs" variant="subtitle01Bold">
      Flag Icon List
    </Text>
    <Box p="2xs" alignSelf="flex-start">
      {flagIconList.map((iconName: FlagIconNameType) => (
        <Box key={iconName} flexDirection="row" p="2xs" alignItems="center">
          <FlagIcon name={iconName} />
          <Text px="2xs">{iconName}</Text>
        </Box>
      ))}
    </Box>
  </>
);
