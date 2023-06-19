import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import Switch from './Switch';
import theme from '../../theme';
import Text from '../Text/Text';

const variantList = Object.keys(theme.textVariants);

const TextMeta: ComponentMeta<typeof Switch> = {
  title: 'Switch',
  component: Switch,
  args: {
    label: variantList[0] as string,
  },
};

export default TextMeta;

type SwitchStory = ComponentStory<typeof Switch>;

export const Basic: SwitchStory = () => (
  <>
    <Text p="2xs" variant="subtitle01Bold">
      Switch
    </Text>
    <Switch onChange={_ => {}} />
  </>
);

export const SwitchWithLabel: SwitchStory = args => (
  <>
    <Text p="2xs" variant="subtitle01Bold">
      Switch
    </Text>
    <Switch onChange={_ => {}} label={args.label} disabled={false} />
  </>
);

export const DisabledSwitch: SwitchStory = () => (
  <>
    <Text p="2xs" variant="subtitle01Bold">
      Switch
    </Text>
    <Switch onChange={_ => {}} disabled={true} />
    <Switch onChange={_ => {}} disabled={true} checked={true} />
  </>
);

export const Customization: SwitchStory = () => (
  <>
    <Text p="2xs" variant="subtitle01Bold">
      Switch
    </Text>
    <Switch
      onChange={_ => {}}
      customization={{
        colorOn: theme.colors.successKey,
        colorOff: theme.colors.dangerKey,
      }}
    />
  </>
);
