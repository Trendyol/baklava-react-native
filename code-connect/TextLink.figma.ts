// url=https://www.figma.com/design/Dkp0DYbxpt76atpJ4kkTnf/Baklava-Mobile-Component-Library?node-id=12882-4781
// source=src/components/TextLink/TextLink.tsx
// component=TextLink
import figma from 'figma';
const instance = figma.selectedInstance;

const children = instance.findText('Link').textContent;
const isPressed = instance.getEnum('Hover', {
  True: true,
  False: false,
});
const variant = instance.getEnum('Size', {
  Large: 'body1',
  Medium: 'body2',
  Small: 'body3',
});

export default {
  example: figma.code`
    <TextLink
      variant="${variant}"
      isPressed={${isPressed}}
    >
      ${children}
    </TextLink>
  `,
  imports: ["import { TextLink } from '@trendyol/baklava-react-native'"],
  id: 'text-link',
  metadata: { nestable: true },
};
