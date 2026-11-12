// url=https://www.figma.com/design/Dkp0DYbxpt76atpJ4kkTnf/Baklava-Mobile-Component-Library?node-id=3179-37894
// source=src/components/ActionBar/ActionBar.tsx
// component=ActionBar
import figma from 'figma';
const instance = figma.selectedInstance;

const slot1 = instance.getSlot('Slot 1');
const btn = instance.findInstance('Button');
const checkbox = instance.findInstance('Checkbox');
let btnCode;
let checkboxCode;
if (btn && btn.type === 'INSTANCE') {
  btnCode = btn.executeTemplate().example;
}
if (checkbox && checkbox.type === 'INSTANCE') {
  checkboxCode = checkbox.executeTemplate().example;
}

export default {
  example: figma.code`
    <ActionBar>
      ${slot1}
      ${checkboxCode}
      ${btnCode}
    </ActionBar>
  `,
  imports: ["import { ActionBar } from '@trendyol/baklava-react-native'"],
  id: 'action-bar',
  metadata: { nestable: false },
};
