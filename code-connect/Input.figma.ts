// url=https://www.figma.com/design/Dkp0DYbxpt76atpJ4kkTnf/Baklava-Mobile-Component-Library?node-id=3103-32001
// source=src/components/Input/Input.tsx
// component=Input
import figma from 'figma';
const instance = figma.selectedInstance;

const labelText = instance.getString('Label Text');
const inputText = instance.getString('Input Text');
const helperText = instance.getString('Helper Text');
const showHelper = instance.getBoolean('Helper');
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
const required = instance.getBoolean('Asterix');
const error = instance.getEnum('State', {
  Default: false,
  Focused: false,
  Typing: false,
  Entered: false,
  Disabled: false,
  Success: false,
  Danger: true,
});
const success = instance.getEnum('State', {
  Default: false,
  Focused: false,
  Typing: false,
  Entered: false,
  Disabled: false,
  Success: true,
  Danger: false,
});
const disabled = instance.getEnum('State', {
  Default: false,
  Focused: false,
  Typing: false,
  Entered: false,
  Disabled: true,
  Success: false,
  Danger: false,
});
const size = instance.getEnum('Size', {
  Small: 'small',
  Medium: 'medium',
  Large: 'large',
});
const leadingTextOn = instance.getBoolean('Left Fixed Text');
const trailingTextOn = instance.getBoolean('Right Fixed Text');
const fixedText = instance.getString('Fixed Text');

export default {
  example: figma.code`
    <Input
      size="${size}"
      ${showLabel ? figma.code`label="${labelText}"` : ''}
      labelFixed={${labelFixed}}
      value="${inputText}"
      required={${required}}
      disabled={${disabled}}
      error={${error}}
      success={${success}}
      ${showHelper ? figma.code`helpText="${helperText}"` : ''}
      ${leadingTextOn ? figma.code`leadingText="${fixedText}"` : ''}
      ${trailingTextOn ? figma.code`trailingText="${fixedText}"` : ''}
    />
  `,
  imports: ["import { Input } from '@trendyol/baklava-react-native'"],
  id: 'input',
  metadata: { nestable: true },
};
