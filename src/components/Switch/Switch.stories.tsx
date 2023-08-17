import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import Switch from './Switch';
import theme from '../../theme';
import Text from '../Text/Text';
import Box from '../Box/Box';
import Button from '../Button/Button';

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

    <Box px="m" py="2xs">
      <Switch onValueChange={_ => {}} />
    </Box>
  </>
);

export const SwitchWithLabel: SwitchStory = args => (
  <>
    <Text p="2xs" variant="subtitle01Bold">
      Switch With Label
    </Text>

    <Box px="m" py="2xs">
      <Switch onValueChange={_ => {}} label={args.label} disabled={false} />
    </Box>
  </>
);

export const DisabledSwitch: SwitchStory = () => (
  <>
    <Text p="2xs" variant="subtitle01Bold">
      Disabled Switch
    </Text>

    <Box px="m" py="2xs">
      <Switch onValueChange={_ => {}} disabled={true} />
    </Box>

    <Box px="m" py="2xs">
      <Switch onValueChange={_ => {}} disabled={true} value={true} />
    </Box>
  </>
);

export const CustomSwitch: SwitchStory = () => (
  <>
    <Text p="2xs" variant="subtitle01Bold">
      Custom Switch
    </Text>

    <Box px="m" py="2xs">
      <Switch
        onValueChange={_ => {}}
        onColor={theme.colors.successKey}
        offColor={theme.colors.dangerKey}
      />
    </Box>
  </>
);

export const SwitchState: SwitchStory = () => {
  const [value, setValue] = React.useState(true);

  return (
    <>
      <Text p="2xs" variant="subtitle01Bold">
        Switch State
      </Text>

      <Box px="m" py="2xs" flexDirection="row">
        <Box pr="3xl">
          <Switch onValueChange={setValue} value={value} label="Lorem" />
        </Box>

        <Button
          label={'Make it ' + !value}
          onPress={() => {
            setValue(!value);
          }}
        />
      </Box>
    </>
  );
};
