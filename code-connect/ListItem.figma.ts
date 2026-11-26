// url=https://www.figma.com/design/Dkp0DYbxpt76atpJ4kkTnf/Baklava-Mobile-Component-Library?node-id=5138-49481
// source=src/components/ListItem/ListItem.tsx
// component=ListItem
import figma from 'figma';
const instance = figma.selectedInstance;

const title = instance.getString('Product Name');
const showImage = instance.getBoolean('Image');
const showTitle = instance.getBoolean('Title');
const collapsible = instance.getEnum('Collapse', {
  True: true,
  False: false,
});
const expanded = instance.getEnum('Collapse Open', {
  True: true,
  False: false,
});
const slot1 = instance.getSlot('Slot 1');
const checkbox = instance.getBoolean('Checkbox')
  ? instance.findInstance('Checkbox')
  : null;
let checkboxCode;
if (checkbox && checkbox.type === 'INSTANCE') {
  checkboxCode = checkbox.executeTemplate().example;
}

export default {
  example: figma.code`
    <ListItem
      ${showTitle ? figma.code`title="${title}"` : ''}
      ${showImage ? figma.code`image="https://picsum.photos/72/72"` : ''}
      collapsible={${collapsible}}
      expanded={${expanded}}
      ${checkboxCode ? figma.code`leading={${checkboxCode}}` : ''}
    >
      ${slot1}
    </ListItem>
  `,
  imports: ["import { ListItem } from '@trendyol/baklava-react-native'"],
  id: 'list-item',
  metadata: { nestable: true },
};
