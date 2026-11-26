// url=https://www.figma.com/design/Dkp0DYbxpt76atpJ4kkTnf/Baklava-Mobile-Component-Library?node-id=7611-6396
// source=src/components/Image/Image.tsx
// component=Image
import figma from 'figma';

export default {
  example: figma.code`
    <Image source={{ uri: 'https://picsum.photos/48/72' }} />
  `,
  imports: ["import { Image } from '@trendyol/baklava-react-native'"],
  id: 'image',
  metadata: { nestable: true },
};
