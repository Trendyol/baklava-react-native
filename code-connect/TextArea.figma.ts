// url=https://www.figma.com/design/Dkp0DYbxpt76atpJ4kkTnf/Baklava-Mobile-Component-Library?node-id=7079-52667
// source=src/components/TextArea/TextArea.tsx
// component=TextArea
import figma from 'figma';
const instance = figma.selectedInstance;

const showLabel = instance.getEnum('Label', {
  True: true,
  False: false,
  Inline: true,
});
const labelFixed = instance.getEnum('Label', {
  True: true,
  False: false,
  Inline: false,
});
const label = instance.findText('ARAMA TÜRÜ').textContent;
const value = instance.findText('Tarihe Göre Arama').textContent;
const showHelp = instance.getBoolean('Helper Text');
const showCounter = instance.getBoolean('Character Counter');
const error = instance.getEnum('State', {
  Default: false,
  Focused: false,
  Typing: false,
  Entered: false,
  Disabled: false,
  Danger: true,
});
const disabled = instance.getEnum('State', {
  Default: false,
  Focused: false,
  Typing: false,
  Entered: false,
  Disabled: true,
  Danger: false,
});
const size = instance.getEnum('Size', {
  Large: 'large',
  Medium: 'medium',
  Small: 'small',
});

export default {
  example: figma.code`
    <TextArea
      size="${size}"
      ${showLabel ? figma.code`label="${label}"` : ''}
      labelFixed={${labelFixed}}
      value="${value}"
      disabled={${disabled}}
      error={${error}}
      ${showHelp ? figma.code`helpText="Helper text"` : ''}
      ${showCounter ? figma.code`counterText={200}` : ''}
    />
  `,
  imports: ["import { TextArea } from '@trendyol/baklava-react-native'"],
  id: 'text-area',
  metadata: { nestable: true },
};
