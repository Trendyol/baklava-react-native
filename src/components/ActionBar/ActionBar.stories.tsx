import { ComponentStory } from '@storybook/react-native';
import React, { useState } from 'react';
import ActionBar from './ActionBar';
import Button from '../Button/Button';
import Checkbox from '../Checkbox/Checkbox';
import Box from '../Box/Box';
import Text from '../Text/Text';
import Icon from '../Icon/Icon';

export default {
  title: 'ActionBar',
  component: ActionBar,
};

type ActionBarStory = ComponentStory<typeof ActionBar>;

export const Single: ActionBarStory = () => (
  <Box p="m">
    <Text variant="subtitle01Bold" mb="s">
      Single Button
    </Text>
    <Text color="neutralDark">
      ActionBar with a single primary button that spans full width.
    </Text>
    <ActionBar>
      <Button
        variant="primary"
        size="l"
        label="Primary Button"
        filled
        onPress={() => {}}
      />
    </ActionBar>
  </Box>
);

export const Stacked: ActionBarStory = () => (
  <Box p="m">
    <Text variant="subtitle01Bold" mb="s">
      Stacked Buttons
    </Text>
    <Text color="neutralDark">
      ActionBar with primary and secondary buttons stacked vertically.
    </Text>
    <ActionBar>
      <Button
        variant="primary"
        size="l"
        label="Primary Button"
        filled
        onPress={() => {}}
      />
      <Button
        variant="primary"
        kind="neutral"
        size="l"
        label="Secondary Button"
        filled
        onPress={() => {}}
      />
    </ActionBar>
  </Box>
);

export const Inline: ActionBarStory = () => (
  <Box p="m">
    <Text variant="subtitle01Bold" mb="s">
      Inline Buttons
    </Text>
    <Text color="neutralDark">
      ActionBar with buttons placed side by side horizontally.
    </Text>
    <ActionBar>
      <Box flexDirection="row" gap="xs">
        <Box flex={1}>
          <Button
            variant="primary"
            kind="neutral"
            size="l"
            label="Secondary"
            filled
            onPress={() => {}}
          />
        </Box>
        <Box flex={1}>
          <Button
            variant="primary"
            size="l"
            label="Primary"
            filled
            onPress={() => {}}
          />
        </Box>
      </Box>
    </ActionBar>
  </Box>
);

export const Mixed: ActionBarStory = () => (
  <Box p="m">
    <Text variant="subtitle01Bold" mb="s">
      Mixed Layout
    </Text>
    <Text color="neutralDark">
      ActionBar with primary button on top and tertiary + secondary buttons
      below.
    </Text>
    <ActionBar>
      <Button
        variant="primary"
        size="l"
        label="Primary Button"
        filled
        onPress={() => {}}
      />
      <Box flexDirection="row" gap="xs">
        <Box flex={1}>
          <Button
            variant="secondary"
            kind="neutral"
            size="l"
            label="Tertiary"
            filled
            onPress={() => {}}
          />
        </Box>
        <Box flex={1}>
          <Button
            variant="primary"
            kind="neutral"
            size="l"
            label="Secondary"
            filled
            onPress={() => {}}
          />
        </Box>
      </Box>
    </ActionBar>
  </Box>
);

export const WithCheckbox: ActionBarStory = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Box p="m">
      <Text variant="subtitle01Bold" mb="s">
        With Checkbox
      </Text>
      <Text color="neutralDark">
        ActionBar with checkbox and conditional button state.
      </Text>
      <ActionBar>
        <Checkbox
          checked={checked}
          onPress={() => setChecked(!checked)}
          label="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <Button
          variant="primary"
          size="l"
          label="Primary Button"
          filled
          disabled={!checked}
          onPress={() => {}}
        />
      </ActionBar>
    </Box>
  );
};

export const WithIcon: ActionBarStory = () => (
  <Box p="m">
    <Text variant="subtitle01Bold" mb="s">
      With Icon
    </Text>
    <Text color="neutralDark">
      ActionBar with an icon on the left side of the button.
    </Text>
    <ActionBar>
      <Box flexDirection="row" alignItems="center" gap="s">
        <Icon name="delete" size="l" color="neutralDarker" />
        <Box flex={1}>
          <Button
            variant="primary"
            kind="success"
            size="l"
            label="Success"
            filled
            onPress={() => {}}
          />
        </Box>
      </Box>
    </ActionBar>
  </Box>
);

export const DisabledSafeArea: ActionBarStory = () => (
  <Box p="m">
    <Text variant="subtitle01Bold" mb="s">
      Disabled Safe Area
    </Text>
    <Text color="neutralDark">ActionBar with safe area padding disabled.</Text>
    <ActionBar disableSafeArea>
      <Button
        variant="primary"
        size="l"
        label="Primary Button"
        filled
        onPress={() => {}}
      />
    </ActionBar>
  </Box>
);
