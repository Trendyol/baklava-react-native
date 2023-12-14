import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import Text from '../Text/Text';
import Input from './Input';
import Box from '../Box/Box';
import Button from '../Button/Button';
import { iconList } from '../Icon/list';

const sizeList = ['small', 'medium', 'large'];

const InputMeta: ComponentMeta<typeof Input> = {
  title: 'Input',
  component: Input,
  argTypes: {
    size: {
      options: sizeList,
      control: { type: 'radios' },
    },
    icon: {
      options: iconList,
      control: { type: 'select' },
    },
  },
  args: {
    size: 'large',
    label: 'Label',
    placeholder: 'Placeholder Text',
    labelFixed: false,
    required: true,
    secureTextEntry: false,
    helpText: 'Help Text',
    error: false,
    success: false,
    disabled: false,
    errorText: 'Error Text',
    successText: 'Success Text',
    icon: 'confetti',
    leadingText: '',
    trailingText: '',
  },
};

export default InputMeta;

type InputStory = ComponentStory<typeof Input>;

export const Basic: InputStory = args => (
  <Box px={'2xs'}>
    <Text py={'2xs'} variant="subtitle01Bold">
      Input
    </Text>

    <Input {...args} />
  </Box>
);

export const Cases: InputStory = args => {
  const [state, setState] = useState(args);

  return (
    <Box px={'2xs'}>
      <Text py={'2xs'} variant="subtitle01Bold">
        Input Cases
      </Text>

      <Input
        {...args}
        success={false}
        error={false}
        required={false}
        helpText={null}
        icon={null}
        disabled={true}
      />

      <Input
        {...args}
        success={false}
        error={false}
        required={true}
        helpText={null}
        icon="calendar"
        label={null}
      />

      <Input
        {...args}
        labelFixed={false}
        success={false}
        error={false}
        icon={null}
        size="large"
        helpText={null}
      />
      <Input
        {...args}
        labelFixed={false}
        success={false}
        error={false}
        icon={null}
        size="medium"
        helpText={null}
      />
      <Input
        {...args}
        labelFixed={false}
        success={false}
        error={false}
        icon={null}
        size="small"
        helpText={null}
      />
      <Input {...state} />

      <Box flexDirection="row" mb="m">
        <Button
          flex={1}
          kind="danger"
          variant="secondary"
          size="s"
          onPress={() =>
            setState({ ...state, error: true, errorText: null, success: false })
          }
          label="Toggle Error"
          filled={true}
          mr="2xs"
        />
        <Button
          flex={1}
          size="s"
          kind="success"
          variant="secondary"
          onPress={() =>
            setState({
              ...state,
              success: true,
              successText: null,
              error: false,
            })
          }
          label="Toggle Success"
          filled={true}
          ml="2xs"
        />
      </Box>

      <Box flexDirection="row">
        <Button
          flex={1}
          size="s"
          kind="danger"
          variant="secondary"
          onPress={() =>
            setState({
              ...state,
              error: true,
              errorText: 'Error text',
              success: false,
            })
          }
          label="Error with Text"
          filled={true}
          mr="2xs"
        />

        <Button
          flex={1}
          size="s"
          kind="success"
          variant="secondary"
          onPress={() =>
            setState({
              ...state,
              success: true,
              successText: 'Success text',
              error: false,
            })
          }
          label="Success with Text"
          filled={true}
          ml="2xs"
        />
      </Box>
    </Box>
  );
};

export const Sizes: InputStory = () => (
  <Box px={'2xs'}>
    <Text py={'2xs'} variant="subtitle01Bold">
      Input Sizes
    </Text>
    <Box py={'xs'}>
      <Input size="large" label="Label" placeholder="Large" />
      <Input size="large" label="Label" placeholder="Large" labelFixed={true} />
      <Input size="large" placeholder="Large" />
    </Box>

    <Box py={'xs'}>
      <Input size="medium" label="Label" placeholder="Medium" />
      <Input
        size="medium"
        label="Label"
        placeholder="Medium"
        labelFixed={true}
      />
      <Input size="medium" placeholder="Medium" />
    </Box>

    <Box py={'xs'}>
      <Input size="small" label="Label" placeholder="Small" />
      <Input size="small" label="Label" placeholder="Small" labelFixed={true} />
      <Input size="small" placeholder="Small" />
    </Box>
  </Box>
);
