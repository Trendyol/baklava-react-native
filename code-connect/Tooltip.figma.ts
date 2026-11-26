// url=https://www.figma.com/design/Dkp0DYbxpt76atpJ4kkTnf/Baklava-Mobile-Component-Library?node-id=8060-5389
// source=src/components/Tooltip/Tooltip.tsx
// component=Tooltip
import figma from 'figma';
import { findText } from './template-helpers';

const instance = figma.selectedInstance;

const content = findText(instance, 'Tooltip');
const position = instance.getEnum('Position', {
  Top: 'top',
  Bottom: 'bottom',
});

export default {
  example: figma.code`
    <Tooltip id="tooltip" content="${content}" position="${position}">
      {null}
    </Tooltip>
  `,
  imports: ["import { Tooltip } from '@trendyol/baklava-react-native'"],
  id: 'tooltip',
  metadata: { nestable: true },
};
