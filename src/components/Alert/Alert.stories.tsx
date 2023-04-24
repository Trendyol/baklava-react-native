import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import React, { useState } from 'react';
import Text from '../Text/Text';
import Alert from './Alert';
import Button from '../Button/Button';
import Box from '../Box/Box';
import { VariantProps } from '@ergenekonyigit/restyle';
import { Theme } from '../../theme';

const variantList = ['info', 'warning', 'success', 'danger'];

const AlertMeta: ComponentMeta<typeof Alert> = {
  title: 'Alert',
  component: Alert,
  argTypes: {
    variant: {
      options: variantList,
      control: { type: 'radios' },
    },
  },
  args: {
    variant: variantList[0] as VariantProps<Theme, 'alertVariants'>['variant'],
    caption: 'Informational Caption',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt tellus, tellus non facilisis. Est at ante amet eget ut blandit.',
    closable: true,
    icon: true,
    closed: false,
  },
};

export default AlertMeta;

type AlertStory = ComponentStory<typeof Alert>;

export const Basic: AlertStory = args => {
  const [state, setState] = useState(args);

  return (
    <>
      <Text p="2xs" variant="subtitle01Bold">
        Alert
      </Text>
      <Box px="m" py="2xs">
        <Alert {...state} onClose={() => setState({ ...state, closed: true })}>
          <Button label="Button" />
          <Button label="Button" variant="secondary" ml="2xs" />
        </Alert>
      </Box>
    </>
  );
};

export const Variants: AlertStory = () => (
  <>
    <Text p="2xs" variant="subtitle01Bold">
      Alert Variants
    </Text>
    <Box px="m" py="2xs">
      <Alert
        caption="Informational Caption"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt tellus, tellus non facilisis. Est at ante amet eget ut blandit."
        closable={false}>
        <Button label="Button" />
        <Button label="Button" variant="secondary" ml="2xs" />
      </Alert>
    </Box>
    <Box px="m" py="2xs">
      <Alert
        caption="Informational Caption"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt tellus, tellus non facilisis. Est at ante amet eget ut blandit."
        variant="warning"
        closable={true}
        icon={false}>
        <Button label="Button" />
      </Alert>
    </Box>
    <Box px="m" py="2xs">
      <Alert
        caption="Informational Caption"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt tellus, tellus non facilisis. Est at ante amet eget ut blandit."
        variant="success"
        closable={false}
        icon={false}>
        <Button label="Button" variant="secondary" />
      </Alert>
    </Box>
    <Box px="m" py="2xs">
      <Alert
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt tellus, tellus non facilisis. Est at ante amet eget ut blandit."
        variant="danger"
        closable={true}
      />
    </Box>
  </>
);
