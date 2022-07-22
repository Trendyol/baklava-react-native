import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import Icon from './Icon';
import { iconList } from './list';
import Box from '../Box/Box';
import Text from '../Text/Text';
import { IconNameType } from './types';

const IconMeta: ComponentMeta<typeof Icon> = {
  title: 'Icon',
  component: Icon,
  argTypes: {
    name: {
      options: iconList,
      control: { type: 'select' },
    },
  },
  args: {
    name: 'confetti',
    color: 'contentPrimary',
  },
};

export default IconMeta;

type IconStory = ComponentStory<typeof Icon>;

export const Basic: IconStory = args => (
  <>
    <Text p={3} variant="subtitle01Bold">
      Icon
    </Text>
    <Box flexDirection="row" p={3} alignItems="center">
      <Icon name={args.name} color={args.color} size="xlarge" />
      <Text pl="3">{args.name}</Text>
    </Box>
  </>
);

export const IconSizes: IconStory = args => (
  <>
    <Text p={3} variant="subtitle01Bold">
      Icon Sizes
    </Text>
    <Box p={3} alignSelf="flex-start">
      <Box flexDirection="row" p={3} alignItems="center">
        <Icon name={args.name} color={args.color} size="xlarge" />
        <Text pl="3">xlarge</Text>
      </Box>
      <Box flexDirection="row" p={3} alignItems="center">
        <Icon name={args.name} color={args.color} size="large" />
        <Text pl="3">large</Text>
      </Box>
      <Box flexDirection="row" p={3} alignItems="center">
        <Icon name={args.name} color={args.color} size="medium" />
        <Text pl="3">medium</Text>
      </Box>
      <Box flexDirection="row" p={3} alignItems="center">
        <Icon name={args.name} color={args.color} size="small" />
        <Text pl="3">small</Text>
      </Box>
      <Box flexDirection="row" p={3} alignItems="center">
        <Icon name={args.name} color={args.color} size="xsmall" />
        <Text pl="3">xsmall</Text>
      </Box>
      <Box flexDirection="row" p={3} alignItems="center">
        <Icon name={args.name} color={args.color} size="2xsmall" />
        <Text pl="3">2xsmall</Text>
      </Box>
    </Box>
  </>
);

export const IconColors: IconStory = args => (
  <>
    <Text p={3} variant="subtitle01Bold">
      Icon Colors
    </Text>
    <Box alignSelf="flex-start" p={3}>
      <Box flexDirection="row" p={3} alignItems="center">
        <Icon name={args.name} color="contentPrimary" />
        <Text pl="3">contentPrimary</Text>
      </Box>
      <Box flexDirection="row" p={3} alignItems="center">
        <Icon name={args.name} color="red" />
        <Text pl="3">red</Text>
      </Box>
      <Box flexDirection="row" p={3} alignItems="center">
        <Icon name={args.name} color="#90fa" />
        <Text pl="3">#90fa</Text>
      </Box>
    </Box>
  </>
);

export const IconList: IconStory = args => (
  <>
    <Text p={3} variant="subtitle01Bold">
      Icon List
    </Text>
    <Box p={3} alignSelf="flex-start">
      {iconList.map((iconName: IconNameType) => (
        <Box key={iconName} flexDirection="row" p={3} alignItems="center">
          <Icon name={iconName} color={args.color} />
          <Text pl="3">{iconName}</Text>
        </Box>
      ))}
    </Box>
  </>
);
