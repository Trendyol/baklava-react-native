// url=https://www.figma.com/design/Dkp0DYbxpt76atpJ4kkTnf/Baklava-Mobile-Component-Library?node-id=6986-52616
// source=src/components/Modal/Modal.tsx
// component=Modal
import figma from 'figma';
const instance = figma.selectedInstance;

const showTitle = instance.getBoolean('Title');
const title = instance.findText('Title').textContent;
const closable = instance.getBoolean('Close Button');
const slot = instance.getSlot('Slot');
const btn1 = instance.getBoolean('Button 1')
  ? instance.findInstance('Button')
  : null;
let btn1Code;
if (btn1 && btn1.type === 'INSTANCE') {
  btn1Code = btn1.executeTemplate().example;
}

export default {
  example: figma.code`
    <Modal
      visible={true}
      closable={${closable}}
      ${showTitle ? figma.code`title="${title}"` : ''}
    >
      ${slot}
      ${btn1Code}
    </Modal>
  `,
  imports: ["import { Modal } from '@trendyol/baklava-react-native'"],
  id: 'modal',
  metadata: { nestable: false },
};
