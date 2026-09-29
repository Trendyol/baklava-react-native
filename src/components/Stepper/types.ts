export type StepperStepState = 'default' | 'active' | 'success' | 'error';

export type StepperProps = {
  currentStep: number;
  totalSteps: number;
  stepTitle: string;
  stepLabelPrefix?: string;
  nextStepTitle?: string;
  nextStepLabelPrefix?: string;
  showNextStep?: boolean;
  stepStates?: StepperStepState[];
  barHeight?: number;
  testID?: string;
};
