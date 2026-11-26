// url=https://www.figma.com/design/Dkp0DYbxpt76atpJ4kkTnf/Baklava-Mobile-Component-Library?node-id=13236-4359
// source=src/components/ProgressIndicator/ProgressIndicator.tsx
// component=ProgressIndicator
import figma from 'figma';
import { findText } from './template-helpers';

const instance = figma.selectedInstance;

const showHelper = instance.getBoolean('Helper Text');
const showIcon = instance.getBoolean('Icon');
const showLabel = instance.getBoolean('Label');
const showPercentage = instance.getBoolean('Percentage');
const label = findText(instance, 'Label');
const helperText = findText(instance, 'Optional helper text');
const variant = instance.getEnum('Status', {
  'In Progress': 'inProgress',
  Success: 'success',
  Fail: 'fail',
});

export default {
  example: figma.code`
    <ProgressIndicator
      variant="${variant}"
      progress={16}
      showIcon={${showIcon}}
      showPercentage={${showPercentage}}
      ${showLabel ? figma.code`label="${label}"` : ''}
      ${showHelper ? figma.code`helperText="${helperText}"` : ''}
    />
  `,
  imports: [
    "import { ProgressIndicator } from '@trendyol/baklava-react-native'",
  ],
  id: 'progress-indicator',
  metadata: { nestable: false },
};
