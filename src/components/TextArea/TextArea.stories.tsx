import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Text from '../Text/Text';
import TextArea from './TextArea';
import Box from '../Box/Box';
import Button from '../Button/Button';

const sizeList = ['small', 'medium', 'large'];

const TextAreaMeta: Meta<typeof TextArea> = {
  title: 'TextArea',
  component: TextArea,
  argTypes: {
    size: {
      options: sizeList,
      control: { type: 'radio' },
    },
  },
  args: {
    size: 'medium',
    label: 'Label',
    placeholder: 'Type something...',
    labelFixed: false,
    helpText: 'Helper Text',
    error: false,
    disabled: false,
    errorText: 'Error Text',
  },
};

export default TextAreaMeta;

type Story = StoryObj<typeof TextAreaMeta>;

export const Basic: Story = {
  render: args => (
    <Box>
      <Box px="2xs">
        <Text py="2xs" variant="subtitle01Bold">
          Text Area
        </Text>
      </Box>

      <TextArea {...args} />
    </Box>
  ),
};

export const Cases: Story = {
  render: args => {
    const [state, setState] = useState(args);

    return (
      <Box>
        <Box px="2xs">
          <Text py="2xs" variant="subtitle01Bold">
            Text Area Cases
          </Text>
        </Box>

        <TextArea {...args} disabled={true} />

        <Box pt="2xl">
          <TextArea {...state} />

          <Box flexDirection="row" px="2xs" marginLeft="2xs" marginTop="xs">
            <Button
              flex={1}
              kind="danger"
              variant="secondary"
              size="s"
              onPress={() =>
                setState({ ...state, error: true, errorText: null })
              }
              label="Toggle Error"
              filled={true}
              mr="2xs"
            />
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
                })
              }
              label="Error with Text"
              filled={true}
              mr="2xs"
            />
          </Box>
        </Box>
      </Box>
    );
  },
};

export const Sizes: Story = {
  render: () => (
    <Box>
      <Box px="2xs">
        <Text py="2xs" variant="subtitle01Bold">
          Text Area Sizes
        </Text>
      </Box>

      <Box py="xs">
        <TextArea
          size="large"
          label="Label"
          placeholder="Large"
          helpText="Help Text"
        />
      </Box>

      <Box py="xs">
        <TextArea
          size="medium"
          label="Label"
          placeholder="Medium"
          helpText="Help Text"
        />
      </Box>

      <Box py="xs">
        <TextArea
          size="small"
          label="Label"
          placeholder="Small"
          helpText="Help Text"
        />
      </Box>
    </Box>
  ),
};

export const Types: Story = {
  render: args => {
    return (
      <Box>
        <Box px="2xs">
          <Text py="2xs" variant="subtitle01Bold">
            Text Area Types
          </Text>
        </Box>

        <TextArea {...args} labelFixed={true} />

        <TextArea {...args} />

        <TextArea {...args} label={null} />
      </Box>
    );
  },
};
