// url=https://www.figma.com/design/Dkp0DYbxpt76atpJ4kkTnf/Baklava-Mobile-Component-Library?node-id=3383-34313
// source=src/components/Tabs/Tabs.tsx
// component=Tabs
import figma from 'figma';
const instance = figma.selectedInstance;

const tabs = instance.findConnectedInstances(n => n.name === 'Tab', {
  traverseInstances: true,
});
const t0 = tabs[0];
const t1 = tabs[1];
let opt0;
let opt1;
if (t0 && t0.type === 'INSTANCE') {
  opt0 = t0.executeTemplate().example;
}
if (t1 && t1.type === 'INSTANCE') {
  opt1 = t1.executeTemplate().example;
}

export default {
  example: figma.code`
    <Tabs value="1" onValueChange={() => {}}>
      <Tabs.List>
        ${opt0}
        ${opt1}
      </Tabs.List>
    </Tabs>
  `,
  imports: ["import { Tabs } from '@trendyol/baklava-react-native'"],
  id: 'tabs',
  metadata: { nestable: false },
};
