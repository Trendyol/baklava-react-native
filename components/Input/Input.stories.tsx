import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import Text from '../Text/Text';
import Input from './Input';
import Box from '../Box/Box';
import Button from '../Button/Button';

const InputMeta: ComponentMeta<typeof Input> = {
  title: 'Input',
  component: Input,
  argTypes: {
    onPress: { action: 'pressed the button' },
  },
  args: {
    size: 'large',
    label: 'Label',
    placeholder: 'Placeholder Text',
    labelFixed: true,
    required: true,
    helpText: 'Help Text',
    error: false,
    success: false,
    disabled: false,
    icon: 'calendar',
  },
};

export default InputMeta;

type InputStory = ComponentStory<typeof Input>;

export const Basic: InputStory = args => {
  const [state, setState] = useState(args);

  return (
    <Box px={3}>
      <Text py={3} variant="subtitle01Bold">
        Input
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

      <Box flexDirection="row" mb={5}>
        <Button
          flex={1}
          variant="danger"
          type="outline"
          size="small"
          onPress={() =>
            setState({ ...state, error: true, errorText: null, success: false })
          }
          text="Toggle Error"
          filled={true}
          mr={3}
        />
        <Button
          flex={1}
          size="small"
          variant="success"
          type="outline"
          onPress={() =>
            setState({
              ...state,
              success: true,
              successText: null,
              error: false,
            })
          }
          text="Toggle Success"
          filled={true}
          ml={3}
        />
      </Box>

      <Box flexDirection="row">
        <Button
          flex={1}
          variant="danger"
          type="outline"
          size="small"
          onPress={() =>
            setState({
              ...state,
              error: true,
              errorText: 'Error text',
              success: false,
            })
          }
          text="Error with Text"
          filled={true}
          mr={3}
        />
        <Button
          flex={1}
          size="small"
          variant="success"
          type="outline"
          onPress={() =>
            setState({
              ...state,
              success: true,
              successText: 'Success text',
              error: false,
            })
          }
          text="Success with Text"
          filled={true}
          ml={3}
        />
      </Box>
    </Box>
  );
};

export const Sizes: InputStory = () => (
  <Box px={3}>
    <Text py={3} variant="subtitle01Bold">
      Input Sizes
    </Text>
    <Box py={4}>
      <Input size="large" label="Label" placeholder="Large" />
      <Input size="large" label="Label" placeholder="Large" labelFixed={true} />
      <Input size="large" placeholder="Large" />
    </Box>

    <Box py={4}>
      <Input size="medium" label="Label" placeholder="Medium" />
      <Input
        size="medium"
        label="Label"
        placeholder="Medium"
        labelFixed={true}
      />
      <Input size="medium" placeholder="Medium" />
    </Box>

    <Box py={4}>
      <Input size="small" label="Label" placeholder="Small" />
      <Input size="small" label="Label" placeholder="Small" labelFixed={true} />
      <Input size="small" placeholder="Small" />
    </Box>
  </Box>
);
