// url=https://www.figma.com/design/Dkp0DYbxpt76atpJ4kkTnf/Baklava-Mobile-Component-Library?node-id=130-401
// source=src/components/RadioButton/RadioButton.tsx
// component=RadioButton
import figma from 'figma';
import { findText } from './template-helpers';

const instance = figma.selectedInstance;

const showLabel = instance.getBoolean('Label');
const label = findText(instance, 'Label');
const selected = instance.getEnum('Selected', {
  True: true,
  False: false,
});
const disabled = instance.getEnum('Disabled', {
  True: true,
  False: false,
});

export default {
  example: figma.code`
    <RadioButton
      selected={${selected}}
      disabled={${disabled}}
      ${showLabel ? figma.code`label="${label}"` : ''}
    />
  `,
  imports: ["import { RadioButton } from '@trendyol/baklava-react-native'"],
  id: 'radio-button',
  metadata: { nestable: true },
};
