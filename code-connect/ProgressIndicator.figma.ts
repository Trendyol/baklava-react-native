// url=https://www.figma.com/design/Dkp0DYbxpt76atpJ4kkTnf/Baklava-Mobile-Component-Library?node-id=13236-4359
// source=src/components/ProgressIndicator/ProgressIndicator.tsx
// component=ProgressIndicator
import figma from 'figma';
const instance = figma.selectedInstance;

const showHelper = instance.getBoolean('Helper Text');
const showIcon = instance.getBoolean('Icon');
const showLabel = instance.getBoolean('Label');
const showPercentage = instance.getBoolean('Percentage');
const label = instance.findText('Label').textContent;
const helperText = instance.findText('Optional helper text').textContent;
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
