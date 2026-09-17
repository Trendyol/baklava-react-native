import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Box from '../Box/Box';
import Text from '../Text/Text';
import Stepper from './Stepper';

const StepperMeta: Meta<typeof Stepper> = {
  title: 'Stepper',
  component: Stepper,
  argTypes: {
    barHeight: {
      control: { type: 'number', min: 2, max: 16, step: 1 },
    },
  },
  args: {
    currentStep: 2,
    totalSteps: 4,
    stepTitle: 'Contact Information',
    nextStepTitle: 'Payment Information',
    stepLabelPrefix: 'Step',
    nextStepLabelPrefix: 'Next',
    showNextStep: true,
    barHeight: 6,
  },
};

export default StepperMeta;

type Story = StoryObj<typeof StepperMeta>;

const stepStatesCodeExample = `<Stepper
  currentStep={3}
  totalSteps={4}
  stepTitle="Payment Information"
  nextStepTitle="Confirmation"
  stepStates={['success', 'error', 'active', 'default']}
/>`;

export const Basic: Story = {
  render: args => (
    <>
      <Text p="2xs" variant="subtitle01Bold">
        Stepper
      </Text>

      <Box px="m" py="2xs" mb="m">
        <Text p="2xs" variant="captionMedium">
          Default Prefixes:
        </Text>
        <Stepper
          currentStep={args.currentStep}
          totalSteps={args.totalSteps}
          stepTitle={args.stepTitle}
          nextStepTitle={args.nextStepTitle}
          stepLabelPrefix={args.stepLabelPrefix}
          nextStepLabelPrefix={args.nextStepLabelPrefix}
          showNextStep={args.showNextStep}
          barHeight={args.barHeight}
        />
      </Box>

      <Box px="m" py="2xs" mb="m">
        <Text p="2xs" variant="captionMedium">
          Custom Prefixes:
        </Text>
        <Stepper
          currentStep={args.currentStep}
          totalSteps={args.totalSteps}
          stepTitle="İletişim Bilgileri"
          nextStepTitle="Ödeme Bilgileri"
          stepLabelPrefix="Adım"
          nextStepLabelPrefix="Sonraki"
          showNextStep={args.showNextStep}
          barHeight={args.barHeight}
        />
      </Box>

      <Box px="m" py="2xs" mb="m">
        <Text p="2xs" variant="captionMedium">
          Without next step hint:
        </Text>
        <Stepper
          currentStep={args.currentStep}
          totalSteps={args.totalSteps}
          stepTitle={args.stepTitle}
          nextStepTitle={args.nextStepTitle}
          stepLabelPrefix={args.stepLabelPrefix}
          nextStepLabelPrefix={args.nextStepLabelPrefix}
          showNextStep={false}
          barHeight={args.barHeight}
        />
      </Box>
    </>
  ),
};

export const States: Story = {
  render: () => (
    <>
      <Text p="2xs" variant="subtitle01Bold">
        Stepper States
      </Text>

      <Box px="m" py="2xs" mb="m">
        <Text p="2xs" variant="captionMedium">
          Step 2/4 (success + active + default):
        </Text>
        <Stepper
          currentStep={2}
          totalSteps={4}
          stepTitle="Contact Information"
          nextStepTitle="Payment Information"
        />
      </Box>

      <Box px="m" py="2xs" mb="m">
        <Text p="2xs" variant="captionMedium">
          Step 3/4 with error on step 2:
        </Text>
        <Stepper
          currentStep={3}
          totalSteps={4}
          stepTitle="Payment Information"
          nextStepTitle="Confirmation"
          stepStates={['success', 'error', 'active', 'default']}
        />
      </Box>

      <Box px="m" py="2xs" mb="m">
        <Text p="2xs" variant="captionMedium">
          Code Example:
        </Text>
        <Text selectable variant="subtitle4Regular" color="neutralDark">
          {stepStatesCodeExample}
        </Text>
      </Box>
    </>
  ),
};

export const BarHeights: Story = {
  render: () => (
    <>
      <Text p="2xs" variant="subtitle01Bold">
        Stepper Bar Heights
      </Text>

      {[4, 6, 8, 12].map(barHeight => (
        <Box key={barHeight} px="m" py="2xs" mb="m">
          <Text p="2xs" variant="captionMedium">
            {barHeight}px{barHeight === 6 ? ' (default)' : ''}:
          </Text>
          <Stepper
            currentStep={2}
            totalSteps={4}
            stepTitle="Contact Information"
            nextStepTitle="Payment Information"
            barHeight={barHeight}
          />
        </Box>
      ))}
    </>
  ),
};

export const StepCounts: Story = {
  render: () => (
    <>
      <Text p="2xs" variant="subtitle01Bold">
        Stepper Step Counts
      </Text>

      {[2, 3, 4, 5].map(totalSteps => (
        <Box key={totalSteps} px="m" py="2xs" mb="m">
          <Text p="2xs" variant="captionMedium">
            {totalSteps} Steps:
          </Text>
          <Stepper
            currentStep={1}
            totalSteps={totalSteps}
            stepTitle="Step Title"
          />
        </Box>
      ))}
    </>
  ),
};
