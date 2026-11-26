// url=https://www.figma.com/design/Dkp0DYbxpt76atpJ4kkTnf/Baklava-Mobile-Component-Library?node-id=130-21
// source=src/components/Switch/Switch.tsx
// component=Switch
import figma from 'figma';
const instance = figma.selectedInstance;

const value = instance.getEnum('Active', {
  True: true,
  False: false,
});
const disabled = instance.getEnum('Disabled', {
  True: true,
  False: false,
});

export default {
  example: figma.code`
    <Switch
      value={${value}}
      disabled={${disabled}}
      onValueChange={() => {}}
    />
  `,
  imports: ["import { Switch } from '@trendyol/baklava-react-native'"],
  id: 'switch',
  metadata: { nestable: true },
};
