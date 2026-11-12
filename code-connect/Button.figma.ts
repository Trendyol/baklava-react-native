// url=https://www.figma.com/design/Dkp0DYbxpt76atpJ4kkTnf/Baklava-Mobile-Component-Library?node-id=2826-22239
// source=src/components/Button/Button.tsx
// component=Button
import figma from 'figma';
const instance = figma.selectedInstance;

const label = instance.findText('TEXT').textContent;
const kind = instance.getEnum('Kind', {
  Default: 'default',
  Neutral: 'neutral',
  Success: 'success',
  Danger: 'danger',
  Disabled: 'default',
});
const disabled = instance.getEnum('Kind', {
  Default: false,
  Neutral: false,
  Success: false,
  Danger: false,
  Disabled: true,
});
const variant = instance.getEnum('Variant', {
  Primary: 'primary',
  Secondary: 'secondary',
  Tertiary: 'tertiary',
});
const size = instance.getEnum('Size', {
  Large: 'l',
  Medium: 'm',
  Small: 's',
});
const isPressed = instance.getEnum('Pressed', {
  True: true,
  False: false,
});
const onlyIcon = instance.getEnum('Only Icon', {
  True: true,
  False: false,
});
export default {
  example: figma.code`
    <Button
      kind="${kind}"
      variant="${variant}"
      size="${size}"
      disabled={${disabled}}
      isPressed={${isPressed}}
      ${onlyIcon ? '' : figma.code`label="${label}"`}
    />
  `,
  imports: ["import { Button } from '@trendyol/baklava-react-native'"],
  id: 'button',
  metadata: { nestable: true },
};
