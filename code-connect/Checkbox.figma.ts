// url=https://www.figma.com/design/Dkp0DYbxpt76atpJ4kkTnf/Baklava-Mobile-Component-Library?node-id=4824-47824
// source=src/components/Checkbox/Checkbox.tsx
// component=Checkbox
import figma from 'figma';
const instance = figma.selectedInstance;

const showLabel = instance.getBoolean('Label');
const showHelp = instance.getBoolean('Help Text');
const label = instance.findText('Label_text').textContent;
const helperText = instance.findText('Helper text').textContent;
const checked = instance.getEnum('State', {
  Default: false,
  Selected: true,
  Indeterminate: true,
  Danger: false,
});
const indeterminate = instance.getEnum('State', {
  Default: false,
  Selected: false,
  Indeterminate: true,
  Danger: false,
});
const error = instance.getEnum('State', {
  Default: false,
  Selected: false,
  Indeterminate: false,
  Danger: true,
});
const disabled = instance.getEnum('Disabled', {
  True: true,
  False: false,
});

export default {
  example: figma.code`
    <Checkbox
      checked={${checked}}
      indeterminate={${indeterminate}}
      disabled={${disabled}}
      error={${error}}
      ${showLabel ? figma.code`label="${label}"` : ''}
      ${showHelp ? figma.code`helperText="${helperText}"` : ''}
    />
  `,
  imports: ["import { Checkbox } from '@trendyol/baklava-react-native'"],
  id: 'checkbox',
  metadata: { nestable: true },
};
