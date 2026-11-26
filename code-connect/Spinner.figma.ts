// url=https://www.figma.com/design/Dkp0DYbxpt76atpJ4kkTnf/Baklava-Mobile-Component-Library?node-id=7985-108
// source=src/components/Spinner/Spinner.tsx
// component=Spinner
import figma from 'figma';
const instance = figma.selectedInstance;

const size = instance.getEnum('Size', {
  XXLarge: '2xl',
  XLarge: 'xl',
  Large: 'l',
  Medium: 'm',
  Small: 's',
  XSmall: 'xs',
  XXSmall: '2xs',
});

export default {
  example: figma.code`
    <Spinner size="${size}" />
  `,
  imports: ["import { Spinner } from '@trendyol/baklava-react-native'"],
  id: 'spinner',
  metadata: { nestable: true },
};
