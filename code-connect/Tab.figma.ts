// url=https://www.figma.com/design/Dkp0DYbxpt76atpJ4kkTnf/Baklava-Mobile-Component-Library?node-id=3369-36320
// source=src/components/Tabs/Tabs.tsx
// component=Tabs.Option
import figma from 'figma';
const instance = figma.selectedInstance;

const title = instance.getString('Tab Title');
const showCaption = instance.getBoolean('Show Caption');
const caption = instance.getString('Caption Text');
const showBadge = instance.getBoolean('Badge');
const redDot = instance.getBoolean('Dot');
const disabled = instance.getEnum('State', {
  Active: false,
  Inactive: false,
  Disabled: true,
});

export default {
  example: figma.code`
    <Tabs.Option
      value="${title}"
      title="${title}"
      disabled={${disabled}}
      redDot={${redDot}}
      ${showCaption ? figma.code`caption="${caption}"` : ''}
      ${showBadge ? figma.code`badgeText="1"` : ''}
    />
  `,
  imports: ["import { Tabs } from '@trendyol/baklava-react-native'"],
  id: 'tab',
  metadata: { nestable: true },
};
