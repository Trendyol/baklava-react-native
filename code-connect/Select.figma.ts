// url=https://www.figma.com/design/Dkp0DYbxpt76atpJ4kkTnf/Baklava-Mobile-Component-Library?node-id=7084-59967
// source=src/components/Select/Select.tsx
// component=Select
import figma from 'figma';
const instance = figma.selectedInstance;

const labelText = instance.getString('Label Text');
const placeholder = instance.getString('Action Text');
const helperText = instance.getString('Helper Text');
const selectedText = instance.getString('Selected Text');
const showHelper = instance.getBoolean('Helper');
const required = instance.getBoolean('Asterix');
const showLabel = instance.getEnum('Label', {
  True: true,
  False: false,
  'Inline Label': true,
});
const labelFixed = instance.getEnum('Label', {
  True: true,
  False: false,
  'Inline Label': false,
});
const error = instance.getEnum('State', {
  Default: false,
  Focused: false,
  Selected: false,
  Disabled: false,
  Danger: true,
  Success: false,
  'Focused Search': false,
});
const success = instance.getEnum('State', {
  Default: false,
  Focused: false,
  Selected: false,
  Disabled: false,
  Danger: false,
  Success: true,
  'Focused Search': false,
});
const disabled = instance.getEnum('State', {
  Default: false,
  Focused: false,
  Selected: false,
  Disabled: true,
  Danger: false,
  Success: false,
  'Focused Search': false,
});
const size = instance.getEnum('Size', {
  Medium: 'medium',
  Small: 'small',
  Large: 'large',
});

export default {
  example: figma.code`
    <Select
      size="${size}"
      ${showLabel ? figma.code`label="${labelText}"` : ''}
      labelFixed={${labelFixed}}
      placeholder="${placeholder}"
      required={${required}}
      disabled={${disabled}}
      error={${error}}
      success={${success}}
      ${showHelper ? figma.code`helpText="${helperText}"` : ''}
      options={[{ id: '1', label: '${selectedText}' }]}
      selectedOptions={['1']}
    />
  `,
  imports: ["import { Select } from '@trendyol/baklava-react-native'"],
  id: 'select',
  metadata: { nestable: true },
};
