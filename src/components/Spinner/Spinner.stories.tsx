import { ComponentStory } from '@storybook/react-native';
import React from 'react';
import Text from '../Text/Text';
import Spinner from './Spinner';
import Box from '../Box/Box';

export default {
  title: 'Spinner',
  component: Spinner,
};

type SpinnerStory = ComponentStory<typeof Spinner>;

export const Size: SpinnerStory = () => (
  <>
    <Text p="2xs" variant="subtitle01Bold">
      Spinner
    </Text>
    <Box
      flexDirection="row"
      alignItems="flex-end"
      justifyContent="space-around">
      <Box>
        <Spinner size="2xl" />
        <Text mt="s" textAlign="center">
          2xl
        </Text>
      </Box>
      <Box>
        <Spinner size="xl" />
        <Text mt="s" textAlign="center">
          xl
        </Text>
      </Box>
      <Box>
        <Spinner size="l" />
        <Text mt="s" textAlign="center">
          l
        </Text>
      </Box>
      <Box>
        <Spinner size="m" />
        <Text mt="s" textAlign="center">
          m
        </Text>
      </Box>
      <Box>
        <Spinner size="s" />
        <Text mt="s" textAlign="center">
          s
        </Text>
      </Box>
      <Box>
        <Spinner size="xs" />
        <Text mt="s" textAlign="center">
          xs
        </Text>
      </Box>
      <Box>
        <Spinner size="2xs" />
        <Text mt="s" textAlign="center">
          2xs
        </Text>
      </Box>
    </Box>
  </>
);

export const Color: SpinnerStory = () => (
  <>
    <Text p="2xs" variant="subtitle01Bold">
      Spinner with color
    </Text>
    <Box flexDirection="row">
      <Box flex={1} p="m" justifyContent="space-around">
        <Box flexDirection="row" alignItems="center" mb="s">
          <Spinner size="l" color="neutralDarker" />
          <Text ml="m">neutralDarker</Text>
        </Box>
        <Box flexDirection="row" alignItems="center" mb="s">
          <Spinner size="l" color="red" />
          <Text ml="m">red</Text>
        </Box>
        <Box flexDirection="row" alignItems="center" mb="s">
          <Spinner size="l" color="maroon" />
          <Text ml="m">maroon</Text>
        </Box>
        <Box flexDirection="row" alignItems="center" mb="s">
          <Spinner size="l" color="#EBEF95" />
          <Text ml="m">#EBEF95</Text>
        </Box>
        <Box flexDirection="row" alignItems="center" mb="s">
          <Spinner size="l" color="#BEADFA" />
          <Text ml="m">#BEADFA</Text>
        </Box>
        <Box flexDirection="row" alignItems="center" mb="s">
          <Spinner size="l" color="#5C8984" />
          <Text ml="m">#5C8984</Text>
        </Box>
      </Box>

      <Box flex={1} p="m" justifyContent="space-around" bg="neutralDarker">
        <Box flexDirection="row" alignItems="center" mb="s">
          <Spinner size="l" color="neutralLight" />
          <Text ml="m" color="white">
            neutralLight
          </Text>
        </Box>
        <Box flexDirection="row" alignItems="center" mb="s">
          <Spinner size="l" color="red" />
          <Text ml="m" color="white">
            red
          </Text>
        </Box>
        <Box flexDirection="row" alignItems="center" mb="s">
          <Spinner size="l" color="maroon" />
          <Text ml="m" color="white">
            maroon
          </Text>
        </Box>
        <Box flexDirection="row" alignItems="center" mb="s">
          <Spinner size="l" color="#EBEF95" />
          <Text ml="m" color="white">
            #EBEF95
          </Text>
        </Box>
        <Box flexDirection="row" alignItems="center" mb="s">
          <Spinner size="l" color="#BEADFA" />
          <Text ml="m" color="white">
            #BEADFA
          </Text>
        </Box>
        <Box flexDirection="row" alignItems="center" mb="s">
          <Spinner size="l" color="#5C8984" />
          <Text ml="m" color="white">
            #5C8984
          </Text>
        </Box>
      </Box>
    </Box>
  </>
);
