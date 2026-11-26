// url=https://www.figma.com/design/Dkp0DYbxpt76atpJ4kkTnf/Baklava-Mobile-Component-Library?node-id=11883-18737
// source=src/components/Stepper/Stepper.tsx
// component=Stepper
import figma from 'figma';
import { findText } from './template-helpers';

const instance = figma.selectedInstance;

const showNext = instance.getBoolean('Next step');
const stepTitle = findText(instance, 'Step Title');
const nextTitle = findText(instance, 'Next Step Title');
const stepLabelPrefix = findText(instance, 'Step Number');
const nextStepLabelPrefix = findText(instance, 'Next Step Label');

export default {
  example: figma.code`
    <Stepper
      currentStep={2}
      totalSteps={4}
      stepTitle="${stepTitle}"
      stepLabelPrefix="${stepLabelPrefix}"
      showNextStep={${showNext}}
      ${showNext ? figma.code`nextStepTitle="${nextTitle}"` : ''}
      ${
        showNext ? figma.code`nextStepLabelPrefix="${nextStepLabelPrefix}"` : ''
      }
    />
  `,
  imports: ["import { Stepper } from '@trendyol/baklava-react-native'"],
  id: 'stepper',
  metadata: { nestable: false },
};
