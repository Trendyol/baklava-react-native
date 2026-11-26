// url=https://www.figma.com/design/Dkp0DYbxpt76atpJ4kkTnf/Baklava-Mobile-Component-Library?node-id=11883-18737
// source=src/components/Stepper/Stepper.tsx
// component=Stepper
import figma from 'figma';
const instance = figma.selectedInstance;

const showNext = instance.getBoolean('Next step');
const stepTitle = instance.findText('Step Title').textContent;
const nextTitle = instance.findText('Next Step Title').textContent;
const stepLabelPrefix = instance.findText('Step Number').textContent;
const nextStepLabelPrefix = instance.findText('Next Step Label').textContent;

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
