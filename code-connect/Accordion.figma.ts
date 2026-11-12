// url=https://www.figma.com/design/Dkp0DYbxpt76atpJ4kkTnf/Baklava-Mobile-Component-Library?node-id=8025-16806
// source=src/components/Accordion/Accordion.tsx
// component=Accordion
import figma from 'figma';
const instance = figma.selectedInstance;

const title = instance.findText('Accordion Title').textContent;
const open = instance.getEnum('Open', {
  True: true,
  False: false,
});
const fullWidth = instance.getEnum('Full Width', {
  True: true,
  False: false,
});
const showIcon = instance.getBoolean('Icon');
const slot1 = instance.getSlot('Slot 1');
const btn1Visible = instance.getBoolean('Button 1');
const btn1 = btn1Visible ? instance.findInstance('Button') : null;
let btn1Code;
if (btn1 && btn1.type === 'INSTANCE') {
  btn1Code = btn1.executeTemplate().example;
}

export default {
  example: figma.code`
    <Accordion
      title="${title}"
      open={${open}}
      fullWidth={${fullWidth}}
      headerIcon={${showIcon}}
    >
      ${slot1}
      ${btn1Code}
    </Accordion>
  `,
  imports: ["import { Accordion } from '@trendyol/baklava-react-native'"],
  id: 'accordion',
  metadata: { nestable: true },
};
