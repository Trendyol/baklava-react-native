import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import Button from './Button';
import Box from '../Box/Box';
import Text from '../Text/Text';
import {
  ButtonSizeVariantTypes,
  ButtonKindVariantTypes,
  ButtonVariantVariantTypes,
} from './types';

const variantList = ['primary', 'secondary', 'tertiary'];
const kindList = ['default', 'neutral', 'success', 'danger'];
const sizeList = ['s', 'm', 'l'];

const ButtonMeta: ComponentMeta<typeof Button> = {
  title: 'Button',
  component: Button,
  argTypes: {
    onPress: { action: 'pressed the button' },
    variant: {
      options: variantList,
      control: { type: 'radios' },
    },
    kind: {
      options: kindList,
      control: { type: 'radios' },
    },
    size: {
      options: sizeList,
      control: { type: 'radios' },
    },
  },
  args: {
    size: sizeList[1] as ButtonSizeVariantTypes,
    kind: kindList[0] as ButtonKindVariantTypes,
    variant: variantList[0] as ButtonVariantVariantTypes,
    disabled: false,
    filled: false,
  },
};

export default ButtonMeta;

type ButtonStory = ComponentStory<typeof Button>;

export const Basic: ButtonStory = args => (
  <>
    <Text p="2xs" variant="subtitle01Bold">
      Button
    </Text>
    <Button
      {...args}
      size={args.size}
      kind={args.kind}
      variant={args.variant}
      filled={args.filled}
      icon="confetti"
      label={
        args.disabled
          ? `disabled ${args.kind} ${args.size} button`
          : `${args.variant} ${args.kind} ${args.size} button`
      }
      m="2xs"
    />
  </>
);

export const ButtonVariants: ButtonStory = () => (
  <>
    <Text p="2xs" variant="subtitle01Bold">
      Button Variants
    </Text>
    <Box>
      <Button variant="primary" label="Primary Button" m="2xs" />
      <Button variant="secondary" label="Secondary Button" m="2xs" />
      <Button variant="tertiary" label="Tertiary Button" m="2xs" />
    </Box>
  </>
);

export const PrimaryButtons: ButtonStory = () => (
  <>
    <Text p="2xs" variant="subtitle01Bold">
      Primary Buttons
    </Text>
    <Box>
      <Button label="Primary Button" m="2xs" />
      <Button kind="neutral" label="Primary Button" m="2xs" />
      <Button kind="success" label="Primary Button" m="2xs" />
      <Button kind="danger" label="Primary Button" m="2xs" />
    </Box>
  </>
);

export const SecondaryButtons: ButtonStory = () => (
  <>
    <Text p="2xs" variant="subtitle01Bold">
      Secondary Buttons
    </Text>
    <Box>
      <Button variant="secondary" label="Secondary Button" m="2xs" />
      <Button
        variant="secondary"
        kind="neutral"
        label="Secondary Button"
        m="2xs"
      />
      <Button
        variant="secondary"
        kind="success"
        label="Secondary Button"
        m="2xs"
      />
      <Button
        variant="secondary"
        kind="danger"
        label="Secondary Button"
        m="2xs"
      />
    </Box>
  </>
);

export const TertiaryButtons: ButtonStory = () => (
  <>
    <Text p="2xs" variant="subtitle01Bold">
      Tertiary Buttons
    </Text>
    <Box>
      <Button variant="tertiary" label="Tertiary Button" m="2xs" />
      <Button
        variant="tertiary"
        kind="neutral"
        label="Tertiary Button"
        m="2xs"
      />
      <Button
        variant="tertiary"
        kind="success"
        label="Tertiary Button"
        m="2xs"
      />
      <Button
        variant="tertiary"
        kind="danger"
        label="Tertiary Button"
        m="2xs"
      />
    </Box>
  </>
);

export const IconButtons: ButtonStory = () => (
  <>
    <Text p="2xs" variant="subtitle01Bold">
      Icon Buttons
    </Text>
    <Box flexDirection="row" justifyContent="space-around">
      <Box>
        <Button label="Save" icon="info" m="2xs" />
        <Button kind="neutral" label="Save" icon="info" m="2xs" />
        <Button kind="success" label="Save" icon="info" m="2xs" />
        <Button kind="danger" label="Save" icon="info" m="2xs" />
      </Box>
      <Box>
        <Button variant="tertiary" label="Save" icon="info" m="2xs" />
        <Button
          variant="tertiary"
          kind="neutral"
          label="Save"
          icon="info"
          m="2xs"
        />
        <Button
          variant="tertiary"
          kind="success"
          label="Save"
          icon="info"
          m="2xs"
        />
        <Button
          variant="tertiary"
          kind="danger"
          label="Save"
          icon="info"
          m="2xs"
        />
      </Box>
    </Box>
  </>
);

export const IconOnlyButtons: ButtonStory = () => (
  <>
    <Text p="2xs" variant="subtitle01Bold">
      Icon Only Buttons
    </Text>
    <Box>
      <Button icon="info" m="2xs" />
      <Button kind="neutral" icon="info" m="2xs" />
      <Button kind="success" icon="info" m="2xs" />
      <Button kind="danger" icon="info" m="2xs" />
    </Box>
  </>
);

export const Sizes: ButtonStory = () => (
  <>
    <Text p="2xs" variant="subtitle01Bold">
      Button Sizes
    </Text>
    <Box>
      <Button size="l" icon="info" label="Primary Button" m="2xs" />
      <Button size="m" icon="info" label="Primary Button" m="2xs" />
      <Button size="s" icon="info" label="Primary Button" m="2xs" mb="2xl" />
      <Button
        size="l"
        icon="info"
        label="Primary Button"
        filled={true}
        m="2xs"
      />
      <Button
        size="m"
        icon="info"
        label="Primary Button"
        filled={true}
        m="2xs"
      />
      <Button
        size="s"
        icon="info"
        label="Primary Button"
        filled={true}
        m="2xs"
      />
    </Box>
  </>
);

export const DisabledButtons: ButtonStory = () => (
  <>
    <Text p="2xs" variant="subtitle01Bold">
      Disabled Buttons
    </Text>
    <Box mt="xl">
      <Text p="2xs" variant="captionMedium">
        Primary & Secondary Variants
      </Text>
      <Button size="l" disabled={true} label="Passive Button" m="2xs" />
      <Button size="m" disabled={true} label="Passive Button" m="2xs" />
      <Button
        size="s"
        disabled={true}
        label="Passive Button"
        m="2xs"
        mb="2xl"
      />
      <Text p="2xs" variant="captionMedium">
        Tertiary Variant
      </Text>
      <Button
        size="l"
        variant="tertiary"
        disabled={true}
        label="Passive Button"
        m="2xs"
      />
      <Button
        size="m"
        variant="tertiary"
        disabled={true}
        label="Passive Button"
        m="2xs"
      />
      <Button
        size="s"
        variant="tertiary"
        disabled={true}
        label="Passive Button"
        m="2xs"
      />
    </Box>
  </>
);

export const PressedStates: ButtonStory = () => (
  <>
    <Text p="2xs" variant="subtitle01Bold">
      Pressed States
    </Text>
    <Box mt="xl">
      <Text p="2xs" variant="captionMedium">
        Primary & Secondary Variants
      </Text>
      <Button isPressed={true} label="Save" icon="info" m="2xs" />
      <Button
        isPressed={true}
        kind="neutral"
        label="Save"
        icon="info"
        m="2xs"
      />
      <Button
        isPressed={true}
        kind="success"
        label="Save"
        icon="info"
        m="2xs"
      />
      <Button
        isPressed={true}
        kind="danger"
        label="Save"
        icon="info"
        m="2xs"
        mb="2xl"
      />
      <Text p="2xs" variant="captionMedium">
        Tertiary Variant
      </Text>
      <Button
        variant="tertiary"
        isPressed={true}
        label="Save"
        icon="info"
        m="2xs"
      />
      <Button
        variant="tertiary"
        isPressed={true}
        kind="neutral"
        label="Save"
        icon="info"
        m="2xs"
      />
      <Button
        variant="tertiary"
        isPressed={true}
        kind="success"
        label="Save"
        icon="info"
        m="2xs"
      />
      <Button
        variant="tertiary"
        isPressed={true}
        kind="danger"
        label="Save"
        icon="info"
        m="2xs"
      />
    </Box>
  </>
);
