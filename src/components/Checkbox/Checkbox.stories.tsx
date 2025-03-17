import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import React from 'react';
import Box from '../Box/Box';
import Text from '../Text/Text';
import Checkbox from './Checkbox';

const CheckboxMeta: ComponentMeta<typeof Checkbox> = {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: {
    onPress: { action: 'pressed the button' },
  },
  args: {
    checked: true,
    indeterminate: false,
    disabled: false,
  },
};

export default CheckboxMeta;

type CheckboxStory = ComponentStory<typeof Checkbox>;

export const Basic: CheckboxStory = args => {
  const [checked, setChecked] = React.useState(false);
  React.useEffect(() => {
    setChecked(args.checked);
  }, [args.checked]);
  return (
    <>
      <Text p="2xs" variant="subtitle01Bold">
        Checkbox
      </Text>
      <Checkbox
        {...args}
        onPress={() => setChecked(!checked)}
        checked={checked}
        indeterminate={args.indeterminate}
        label="lorem ipsum"
        m="2xs"
      />
    </>
  );
};

export const Cases: CheckboxStory = () => {
  return (
    <>
      <Text p="2xs" variant="subtitle01Bold">
        Checkbox
      </Text>
      <Box px="m" py="2xs" flexDirection="row">
        <Checkbox checked={false} />
        <Box width={8} />
        <Checkbox checked={true} indeterminate={false} />
        <Box width={8} />
        <Checkbox checked={true} indeterminate={true} />
        <Box width={8} />
        <Checkbox disabled checked={false} />
        <Box width={8} />
        <Checkbox disabled checked={true} indeterminate={false} />
        <Box width={8} />
        <Checkbox disabled checked={true} indeterminate={true} />
      </Box>

      <Box px="m" py="2xs">
        <Box height={12} />
        <Checkbox checked={false} label="checked: false" />
        <Box height={12} />
        <Checkbox
          checked={false}
          indeterminate={false}
          label="checked: false, indeterminate: false"
        />
        <Box height={12} />
        <Checkbox
          checked={false}
          indeterminate={true}
          label="checked: false, indeterminate: true"
        />
        <Box height={12} />
        <Checkbox checked={true} label="checked: true" />
        <Box height={12} />
        <Checkbox
          checked={true}
          indeterminate={false}
          label="checked: true, indeterminate: false"
        />
        <Box height={12} />
        <Checkbox
          checked={true}
          indeterminate={true}
          label="checked: true, indeterminate: true"
        />
      </Box>

      <Box px="m" py="xs">
        <Text py="xs" variant="subtitle02Medium">
          Disable:
        </Text>
        <Checkbox
          disabled={true}
          checked={false}
          label="disabled, checked: false"
        />
        <Box height={12} />
        <Checkbox
          disabled={true}
          checked={false}
          indeterminate={false}
          label="disabled, checked: false, indeterminate: false"
        />
        <Box height={12} />
        <Checkbox
          disabled={true}
          checked={false}
          indeterminate={true}
          label="disabled, checked: false, indeterminate: true"
        />
        <Box height={12} />
        <Checkbox
          disabled={true}
          checked={true}
          label="disabled, checked: true"
        />
        <Box height={12} />
        <Checkbox
          disabled={true}
          checked={true}
          indeterminate={false}
          label="disabled, checked: true, indeterminate: false"
        />
        <Box height={12} />
        <Checkbox
          disabled={true}
          checked={true}
          indeterminate={true}
          label="disabled, checked: true, indeterminate: true"
        />
      </Box>

      <Box px="m" py="xs">
        <Text py="xs" variant="subtitle02Medium">
          Alignment:
        </Text>
        <Checkbox
          checked={false}
          label="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <Box height={12} />
        <Checkbox
          checked={false}
          indeterminate={false}
          alignItems="center"
          label="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </Box>
    </>
  );
};

export const CheckboxWithIcon: CheckboxStory = () => {
  return (
    <>
      <Text p="2xs" variant="subtitle01Bold">
        Checkbox With Icon
      </Text>

      <Box px="m" py="2xs">
        <Box height={12} />
        <Checkbox
          checked={false}
          label="checked: false, icon: heart"
          icon="heart"
        />
        <Box height={12} />
        <Checkbox
          checked={true}
          label="checked: true, icon: heart"
          icon="heart"
        />
        <Box height={12} />
        <Checkbox
          checked={true}
          indeterminate={true}
          label="checked: true, indeterminate: true, icon: heart"
          icon="heart"
        />
        <Box height={12} />
        <Checkbox
          disabled={true}
          checked={false}
          label="checked: false, disabled, icon: heart"
          icon="heart"
        />
      </Box>
    </>
  );
};
