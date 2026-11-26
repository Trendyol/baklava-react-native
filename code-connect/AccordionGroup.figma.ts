// url=https://www.figma.com/design/Dkp0DYbxpt76atpJ4kkTnf/Baklava-Mobile-Component-Library?node-id=8548-974
// source=src/components/Accordion/AccordionGroup.tsx
// component=AccordionGroup
import figma from 'figma';
const instance = figma.selectedInstance;

const child0 = instance.findConnectedInstances(n => n.name === 'Accordion', {
  traverseInstances: true,
})[0];
const child1 = instance.findConnectedInstances(n => n.name === 'Accordion', {
  traverseInstances: true,
})[1];
let a0;
let a1;
if (child0 && child0.type === 'INSTANCE') {
  a0 = child0.executeTemplate().example;
}
if (child1 && child1.type === 'INSTANCE') {
  a1 = child1.executeTemplate().example;
}

export default {
  example: figma.code`
    <AccordionGroup>
      ${a0}
      ${a1}
    </AccordionGroup>
  `,
  imports: ["import { AccordionGroup } from '@trendyol/baklava-react-native'"],
  id: 'accordion-group',
  metadata: { nestable: false },
};
