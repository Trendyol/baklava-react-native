// url=https://www.figma.com/design/Dkp0DYbxpt76atpJ4kkTnf/Baklava-Mobile-Component-Library?node-id=1329-5327
// source=src/components/Toast/Toast.tsx
// component=Toast
import figma from 'figma';
import { findText } from './template-helpers';

const instance = figma.selectedInstance;

const variant = instance.getEnum('Type', {
  Default: 'default',
  Success: 'success',
  Error: 'error',
  Warning: 'warning',
});
const text = findText(instance, 'Default');

export default {
  example: figma.code`
    Toast.show({
      variant: "${variant}",
      text: "${text}",
    })
  `,
  imports: ["import { Toast } from '@trendyol/baklava-react-native'"],
  id: 'toast',
  metadata: { nestable: false },
};
