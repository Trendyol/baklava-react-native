import { StepperStepState } from './types';

export const clampStep = (currentStep: number, totalSteps: number): number => {
  if (totalSteps < 1) {
    return 1;
  }

  return Math.min(totalSteps, Math.max(1, currentStep));
};

export const getStepState = (
  index: number,
  currentStep: number,
  stepStates?: StepperStepState[],
): StepperStepState => {
  if (stepStates?.[index]) {
    return stepStates[index];
  }

  if (index < currentStep - 1) {
    return 'success';
  }

  if (index === currentStep - 1) {
    return 'active';
  }

  return 'default';
};
