// url=https://www.figma.com/design/Dkp0DYbxpt76atpJ4kkTnf/Baklava-Mobile-Component-Library?node-id=3782-38572
// source=src/components/Badge/Badge.tsx
// component=Badge
import figma from 'figma';
const instance = figma.selectedInstance;

const text = instance.getString('Text');
const variant = instance.getEnum('Select Badge', {
  Blue: 'default',
  Green: 'success',
  Yellow: 'warning',
  Orange: 'warning',
  Red: 'danger',
  Purple: 'default',
  Grey: 'neutral',
});
const size = instance.getEnum('Size', {
  Large: 'large',
  Medium: 'medium',
  Small: 'small',
});
const transparent = instance.getEnum('Bakground', {
  None: true,
  Light: false,
  Dark: false,
});
export default {
  example: figma.code`
    <Badge
      variant="${variant}"
      size="${size}"
      text="${text}"
      transparent={${transparent}}
    />
  `,
  imports: ["import { Badge } from '@trendyol/baklava-react-native'"],
  id: 'badge',
  metadata: { nestable: true },
};
