import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import Button from './Button';
import Box from '../Box/Box';
import InfoIco from '../../src/icons/Info';
import Text from '../Text/Text';
import { ButtonSizeTypes, ButtonTypeTypes, ButtonVariantTypes } from './types';

const variantList = ['primary', 'secondary', 'success', 'danger', 'passive'];
const typeList = ['contained', 'outline', 'text'];
const sizeList = ['small', 'medium', 'large'];

const ButtonMeta: ComponentMeta<typeof Button> = {
  title: 'Button',
  component: Button,
  argTypes: {
    onPress: { action: 'pressed the button' },
    variant: {
      options: variantList,
      control: { type: 'radios' },
    },
    type: {
      options: typeList,
      control: { type: 'radios' },
    },
    size: {
      options: sizeList,
      control: { type: 'radios' },
    },
  },
  args: {
    variant: variantList[0] as ButtonVariantTypes,
    type: typeList[0] as ButtonTypeTypes,
    size: sizeList[1] as ButtonSizeTypes,
  },
};

export default ButtonMeta;

type ButtonStory = ComponentStory<typeof Button>;

export const Basic: ButtonStory = args => (
  <>
    <Text p={3} variant="subtitle01Bold">
      Button
    </Text>
    <Button
      {...args}
      variant={args.variant}
      type={args.type}
      size={args.size}
      text={`${args.variant} ${args.type} ${args.size} button`}
      m={3}
    />
  </>
);

export const Variants: ButtonStory = args => (
  <>
    <Text p={3} variant="subtitle01Bold">
      Button Variants
    </Text>
    <Box>
      <Button
        {...args}
        variant="primary"
        size="large"
        text="Primary Button"
        m={3}
      />
      <Button
        {...args}
        variant="secondary"
        size="large"
        text="Secondary Button"
        m={3}
      />
      <Button
        {...args}
        variant="success"
        size="large"
        text="Success Button"
        m={3}
      />
      <Button
        {...args}
        variant="danger"
        size="large"
        text="Danger Button"
        m={3}
      />
      <Button
        {...args}
        variant="passive"
        size="large"
        text="Passive Button"
        disabled={true}
        m={3}
      />
    </Box>
  </>
);

export const Types: ButtonStory = args => (
  <>
    <Text p={3} variant="subtitle01Bold">
      Button Types
    </Text>
    <Box>
      <Button
        {...args}
        variant="primary"
        size="large"
        text="Contained Button"
        m={3}
      />
      <Button
        {...args}
        variant="primary"
        size="large"
        type="outline"
        text="Outlined Button"
        m={3}
      />
      <Button
        {...args}
        variant="primary"
        size="large"
        type="text"
        text="Text Button"
        m={3}
      />
    </Box>
  </>
);

export const Sizes: ButtonStory = args => (
  <>
    <Text p={3} variant="subtitle01Bold">
      Button Sizes
    </Text>
    <Box>
      <Button
        {...args}
        variant="primary"
        size="large"
        text="Primary Button"
        m={3}
      />
      <Button
        {...args}
        variant="primary"
        size="medium"
        text="Primary Button"
        m={3}
      />
      <Button
        {...args}
        variant="primary"
        size="small"
        text="Primary Button"
        m={3}
        mb={6}
      />
      <Button
        {...args}
        variant="primary"
        size="large"
        text="Primary Button"
        filled={true}
        m={3}
      />
      <Button
        {...args}
        variant="primary"
        size="medium"
        text="Primary Button"
        filled={true}
        m={3}
      />
      <Button
        {...args}
        variant="primary"
        size="small"
        text="Primary Button"
        filled={true}
        m={3}
      />
    </Box>
  </>
);

export const ContainedButtons: ButtonStory = args => (
  <>
    <Text p={3} variant="subtitle01Bold">
      Contained Buttons
    </Text>
    <Box>
      <Button
        {...args}
        variant="primary"
        size="large"
        text="Primary Button"
        m={3}
      />
      <Button
        {...args}
        variant="secondary"
        size="large"
        text="Secondary Button"
        m={3}
      />
      <Button
        {...args}
        variant="success"
        size="large"
        text="Success Button"
        m={3}
      />
      <Button
        {...args}
        variant="danger"
        size="large"
        text="Danger Button"
        m={3}
      />
      <Button
        {...args}
        variant="passive"
        size="large"
        text="Passive Button"
        disabled={true}
        m={3}
      />
    </Box>
  </>
);

export const OutlinedButtons: ButtonStory = args => (
  <>
    <Text p={3} variant="subtitle01Bold">
      Outlined Buttons
    </Text>
    <Box>
      <Button
        {...args}
        variant="primary"
        size="large"
        type="outline"
        text="Primary Button"
        m={3}
      />
      <Button
        {...args}
        variant="secondary"
        size="large"
        type="outline"
        text="Secondary Button"
        m={3}
      />
      <Button
        {...args}
        variant="success"
        size="large"
        type="outline"
        text="Success Button"
        m={3}
      />
      <Button
        {...args}
        variant="danger"
        size="large"
        type="outline"
        text="Danger Button"
        m={3}
      />
    </Box>
  </>
);

export const TextButtons: ButtonStory = args => (
  <>
    <Text p={3} variant="subtitle01Bold">
      Text Buttons
    </Text>
    <Box>
      <Button
        {...args}
        variant="primary"
        size="large"
        type="text"
        text="Primary Button"
        m={3}
      />
      <Button
        {...args}
        variant="secondary"
        size="large"
        type="text"
        text="Secondary Button"
        m={3}
      />
      <Button
        {...args}
        variant="success"
        size="large"
        type="text"
        text="Success Button"
        m={3}
      />
      <Button
        {...args}
        variant="danger"
        size="large"
        type="text"
        text="Danger Button"
        m={3}
      />
      <Button
        {...args}
        variant="passive"
        size="large"
        type="text"
        text="Passive Button"
        disabled={true}
        m={3}
      />
    </Box>
  </>
);

export const IconButtons: ButtonStory = args => (
  <>
    <Text p={3} variant="subtitle01Bold">
      Icon Buttons
    </Text>
    {/* @ts-ignore */}
    <Box flexDirection="row" justifyContent="space-around">
      <Box>
        <Button {...args} variant="primary" text="Save" icon={InfoIco} m={3} />
        <Button
          {...args}
          variant="secondary"
          text="Save"
          icon={InfoIco}
          m={3}
        />
        <Button {...args} variant="success" text="Save" icon={InfoIco} m={3} />
        <Button {...args} variant="danger" text="Save" icon={InfoIco} m={3} />
        <Button
          {...args}
          variant="passive"
          text="Save"
          icon={InfoIco}
          disabled={true}
          m={3}
        />
      </Box>
      <Box>
        <Button
          {...args}
          variant="primary"
          text="Save"
          type="text"
          icon={InfoIco}
          m={3}
        />
        <Button
          {...args}
          variant="secondary"
          text="Save"
          type="text"
          icon={InfoIco}
          m={3}
        />
        <Button
          {...args}
          variant="success"
          text="Save"
          type="text"
          icon={InfoIco}
          m={3}
        />
        <Button
          {...args}
          variant="danger"
          text="Save"
          type="text"
          icon={InfoIco}
          m={3}
        />
        <Button
          {...args}
          variant="passive"
          text="Save"
          type="text"
          icon={InfoIco}
          disabled={true}
          m={3}
        />
      </Box>
    </Box>
  </>
);

export const IconOnlyButtons: ButtonStory = args => (
  <>
    <Text p={3} variant="subtitle01Bold">
      Icon Only Buttons
    </Text>
    <Box>
      <Button {...args} variant="primary" size="large" icon={InfoIco} m={3} />
      <Button {...args} variant="secondary" size="large" icon={InfoIco} m={3} />
      <Button {...args} variant="success" size="large" icon={InfoIco} m={3} />
      <Button {...args} variant="danger" size="large" icon={InfoIco} m={3} />
      <Button
        {...args}
        variant="passive"
        size="large"
        icon={InfoIco}
        disabled={true}
        m={3}
      />
    </Box>
  </>
);
