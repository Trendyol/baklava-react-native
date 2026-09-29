import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Box from '../Box/Box';
import Text from '../Text/Text';
import ProgressIndicator from './ProgressIndicator';

const variantList = ['inProgress', 'success', 'fail'];
const sizeList = ['small', 'medium'];

const ProgressIndicatorMeta: Meta<typeof ProgressIndicator> = {
  title: 'ProgressIndicator',
  component: ProgressIndicator,
  argTypes: {
    variant: {
      options: variantList,
      control: { type: 'radio' },
    },
    size: {
      options: sizeList,
      control: { type: 'radio' },
    },
    onClose: { action: 'pressed the close button' },
  },
  args: {
    variant: 'inProgress',
    size: 'medium',
    label: 'Label',
    progress: 16,
    showPercentage: true,
    showIcon: true,
    helperText: '',
  },
};

export default ProgressIndicatorMeta;

type Story = StoryObj<typeof ProgressIndicatorMeta>;

export const Basic: Story = {
  render: args => (
    <>
      <Text p="2xs" variant="subtitle01Bold">
        ProgressIndicator
      </Text>
      <Box px="m" py="2xs" mb="m">
        <ProgressIndicator
          variant={args.variant}
          size={args.size}
          label={args.label}
          progress={args.progress}
          showPercentage={args.showPercentage}
          showIcon={args.showIcon}
          helperText={args.helperText}
          onClose={args.onClose}
        />
      </Box>
    </>
  ),
};

export const Variants: Story = {
  render: () => (
    <>
      <Text p="2xs" variant="subtitle01Bold">
        ProgressIndicator Variants
      </Text>

      <Box px="m" py="2xs" mb="m">
        <Text p="2xs" variant="captionMedium">
          In Progress:
        </Text>
        <ProgressIndicator
          variant="inProgress"
          label="Label"
          progress={16}
          helperText="Optional helper text"
        />
      </Box>

      <Box px="m" py="2xs" mb="m">
        <Text p="2xs" variant="captionMedium">
          Success:
        </Text>
        <ProgressIndicator
          variant="success"
          label="Label"
          helperText="Optional helper text"
        />
      </Box>

      <Box px="m" py="2xs" mb="m">
        <Text p="2xs" variant="captionMedium">
          Fail:
        </Text>
        <ProgressIndicator
          variant="fail"
          label="Label"
          helperText="Optional helper text"
        />
      </Box>
    </>
  ),
};

export const Sizes: Story = {
  render: () => (
    <>
      <Text p="2xs" variant="subtitle01Bold">
        ProgressIndicator Sizes
      </Text>

      <Box px="m" py="2xs">
        <Text p="2xs" variant="captionMedium">
          Small:
        </Text>
        <ProgressIndicator
          variant="inProgress"
          size="small"
          label="Label"
          progress={16}
        />
      </Box>

      <Box px="m" py="2xs" mb="2xl">
        <Text p="2xs" variant="captionMedium">
          Medium:
        </Text>
        <ProgressIndicator
          variant="inProgress"
          size="medium"
          label="Label"
          progress={16}
        />
      </Box>

      <Box px="m" py="2xs">
        <Text p="2xs" variant="captionMedium">
          Small - Success:
        </Text>
        <ProgressIndicator variant="success" size="small" label="Label" />
      </Box>

      <Box px="m" py="2xs" mb="2xl">
        <Text p="2xs" variant="captionMedium">
          Medium - Success:
        </Text>
        <ProgressIndicator variant="success" size="medium" label="Label" />
      </Box>

      <Box px="m" py="2xs">
        <Text p="2xs" variant="captionMedium">
          Small - Fail:
        </Text>
        <ProgressIndicator variant="fail" size="small" label="Label" />
      </Box>

      <Box px="m" py="2xs" mb="m">
        <Text p="2xs" variant="captionMedium">
          Medium - Fail:
        </Text>
        <ProgressIndicator variant="fail" size="medium" label="Label" />
      </Box>
    </>
  ),
};

export const IconAndLabel: Story = {
  render: () => (
    <>
      <Text p="2xs" variant="subtitle01Bold">
        Icon And Label
      </Text>

      <Box px="m" py="2xs" mb="m">
        <Text p="2xs" variant="captionMedium">
          In Progress:
        </Text>
        <ProgressIndicator variant="inProgress" label="Label" progress={16} />
      </Box>

      <Box px="m" py="2xs" mb="m">
        <Text p="2xs" variant="captionMedium">
          Success - With Icon:
        </Text>
        <ProgressIndicator variant="success" label="Label" showIcon />
      </Box>

      <Box px="m" py="2xs" mb="m">
        <Text p="2xs" variant="captionMedium">
          Fail - With Icon:
        </Text>
        <ProgressIndicator variant="fail" label="Label" showIcon />
      </Box>
    </>
  ),
};

export const HelperText: Story = {
  render: () => (
    <>
      <Text p="2xs" variant="subtitle01Bold">
        Helper Text
      </Text>

      <Box px="m" py="2xs" mb="m">
        <Text p="2xs" variant="captionMedium">
          In Progress:
        </Text>
        <ProgressIndicator
          variant="inProgress"
          label="Label"
          progress={16}
          helperText="Optional helper text"
        />
      </Box>

      <Box px="m" py="2xs" mb="m">
        <Text p="2xs" variant="captionMedium">
          Success:
        </Text>
        <ProgressIndicator
          variant="success"
          label="Label"
          helperText="Optional helper text"
        />
      </Box>

      <Box px="m" py="2xs" mb="m">
        <Text p="2xs" variant="captionMedium">
          Fail:
        </Text>
        <ProgressIndicator
          variant="fail"
          label="Label"
          helperText="Optional helper text"
        />
      </Box>
    </>
  ),
};

export const Cases: Story = {
  render: () => (
    <>
      <Text p="2xs" variant="subtitle01Bold">
        ProgressIndicator Cases
      </Text>

      <Box px="m" py="2xs" mb="m">
        <Text p="2xs" variant="captionMedium">
          0%:
        </Text>
        <ProgressIndicator variant="inProgress" label="Label" progress={0} />
      </Box>

      <Box px="m" py="2xs" mb="m">
        <Text p="2xs" variant="captionMedium">
          In Progress:
        </Text>
        <ProgressIndicator variant="inProgress" label="Label" progress={16} />
      </Box>

      <Box px="m" py="2xs" mb="m">
        <Text p="2xs" variant="captionMedium">
          70%:
        </Text>
        <ProgressIndicator variant="inProgress" label="Label" progress={70} />
      </Box>

      <Box px="m" py="2xs" mb="m">
        <Text p="2xs" variant="captionMedium">
          Success:
        </Text>
        <ProgressIndicator variant="success" label="Label" showIcon={false} />
      </Box>

      <Box px="m" py="2xs" mb="m">
        <Text p="2xs" variant="captionMedium">
          Fail:
        </Text>
        <ProgressIndicator
          variant="fail"
          label="Label"
          showIcon={false}
          helperText="Optional helper text"
        />
      </Box>
    </>
  ),
};
