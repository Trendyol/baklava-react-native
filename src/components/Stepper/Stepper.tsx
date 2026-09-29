import React from 'react';
import Box from '../Box/Box';
import Text from '../Text/Text';
import theme, { Theme } from '../../theme';
import { StepperProps, StepperStepState } from './types';
import { clampStep, getStepState } from './utils';
import { I18nManager } from 'react-native';

const Stepper = ({
  currentStep,
  totalSteps,
  stepTitle,
  stepLabelPrefix = 'Step',
  nextStepTitle,
  nextStepLabelPrefix = 'Next',
  showNextStep = true,
  stepStates,
  barHeight = 6,
  testID = 'stepper',
}: StepperProps) => {
  const clampedCurrentStep = clampStep(currentStep, totalSteps);

  const getBarColor = (state: StepperStepState) =>
    theme.stepperVariants[state].barColor as keyof Theme['colors'];

  const shouldShowNextStep =
    showNextStep && nextStepTitle && clampedCurrentStep < totalSteps;

  return (
    <Box testID={testID} gap="2xs">
      <Box
        testID={`${testID}-header`}
        flexDirection="row"
        flexWrap="wrap"
        alignItems="center"
        gap={'3xs'}>
        <Text
          testID={`${testID}-stepLabelPrefix`}
          variant="subtitle2Medium"
          color="neutralDarker">
          {stepLabelPrefix}
        </Text>
        <Box flexDirection="row" alignItems="center">
          <Text
            testID={`${testID}-stepLabel`}
            variant="subtitle2Medium"
            color="neutralDarker">
            {clampedCurrentStep}
          </Text>
          <Text
            testID={`${testID}-stepCount`}
            variant="subtitle2Regular"
            color="neutralLight">
            {I18nManager.isRTL ? `:${totalSteps}/` : `/${totalSteps}:`}
          </Text>
        </Box>
        <Box flex={1}>
          <Text
            testID={`${testID}-stepTitle`}
            variant="subtitle2Medium"
            color="neutralDarker">
            {stepTitle}
          </Text>
        </Box>
      </Box>

      <Box testID={`${testID}-bars`} flexDirection="row" gap="3xs">
        {Array.from({ length: totalSteps }, (_, index) => {
          const state = getStepState(index, clampedCurrentStep, stepStates);

          return (
            <Box
              key={index}
              flex={1}
              height={barHeight}
              borderRadius="xs"
              backgroundColor={getBarColor(state)}
              testID={`${testID}-bar-${index}`}
            />
          );
        })}
      </Box>

      {shouldShowNextStep && (
        <Box
          testID={`${testID}-nextStep`}
          flexDirection="row"
          justifyContent="flex-end"
          alignItems="center"
          gap="3xs">
          <Text
            testID={`${testID}-nextStepLabel`}
            variant="subtitle3Regular"
            color="neutralDark">
            {I18nManager.isRTL
              ? `:${nextStepLabelPrefix}`
              : `${nextStepLabelPrefix}:`}
          </Text>
          <Text
            testID={`${testID}-nextStepTitle`}
            variant="subtitle3Regular"
            color="neutralDark">
            {nextStepTitle}
          </Text>
        </Box>
      )}
    </Box>
  );
};

export default Stepper;
