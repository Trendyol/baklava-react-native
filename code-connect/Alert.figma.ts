// url=https://www.figma.com/design/Dkp0DYbxpt76atpJ4kkTnf/Baklava-Mobile-Component-Library?node-id=4882-50845
// source=src/components/Alert/Alert.tsx
// component=Alert
import figma from 'figma';
const instance = figma.selectedInstance;

const caption = instance.getString('Title Text');
const description = instance.getString('Text');
const showTitle = instance.getBoolean('Title');
const showIcon = instance.getBoolean('Icon');
const closable = instance.getBoolean('Close');
const variant = instance.getEnum('Type', {
  Informational: 'info',
  Success: 'success',
  Error: 'danger',
  Warning: 'warning',
});
const btn1 = instance.findInstance('Button');
let btn1Code;
if (btn1 && btn1.type === 'INSTANCE') {
  btn1Code = btn1.executeTemplate().example;
}

export default {
  example: figma.code`
    <Alert
      variant="${variant}"
      icon={${showIcon}}
      closable={${closable}}
      ${showTitle ? figma.code`caption="${caption}"` : ''}
      description="${description}"
    >
      ${btn1Code}
    </Alert>
  `,
  imports: ["import { Alert } from '@trendyol/baklava-react-native'"],
  id: 'alert',
  metadata: { nestable: false },
};
