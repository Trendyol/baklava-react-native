// url=https://www.figma.com/design/Dkp0DYbxpt76atpJ4kkTnf/Baklava-Mobile-Component-Library?node-id=14454-7081
// source=src/components/Card/Card.tsx
// component=Card
import figma from 'figma';
import { findText } from './template-helpers';

const instance = figma.selectedInstance;

const variant = instance.getEnum('Variant', {
  Vertical: 'vertical',
  Horizontal: 'horizontal',
  Icon: 'icon',
  Placeholder: 'placeholder',
  Compact: 'compact',
});
const type = instance.getEnum('Type', {
  Default: 'default',
  Stroke: 'stroke',
  Gray: 'gray',
  Elevated: 'elevated',
});

const showHeader = instance.getBoolean('Header');
const showHeaderSlot = instance.getBoolean('Header Slot');
const showDescription = instance.getBoolean('Description');
const showBadge = instance.getBoolean('Badge');
const showActions = instance.getBoolean('Button');
const showImage = instance.getBoolean('Show Image');

const title = variant !== 'compact' ? findText(instance, 'Title') : undefined;
const description =
  variant === 'vertical' || variant === 'horizontal' || variant === 'icon'
    ? findText(instance, 'Description', { traverseInstances: true })
    : undefined;
const placeholderSlot = instance.getSlot('Slot Content');
const placeholderContent =
  placeholderSlot &&
  (placeholderSlot.connectedInstances.length > 0 ||
    placeholderSlot.some(section => section.type !== 'SLOT'))
    ? placeholderSlot
    : '';

const hasImage =
  (variant === 'vertical' || variant === 'horizontal') && showImage;
const hasBadge =
  (variant === 'vertical' || variant === 'horizontal' || variant === 'icon') &&
  showBadge;
const hasActions =
  (variant === 'vertical' || variant === 'icon') && showActions;

const compact = instance.findInstance('Compact content');
const compactLayout =
  compact && compact.type === 'INSTANCE'
    ? compact.getEnum('Layout', {
        Metric: 'metric',
        'Metric Icon': 'metric-icon',
        'Metric Trend': 'metric-trend',
        Promotion: 'promotion',
        Product: 'product',
        'Product Action': 'product-action',
        Task: 'task',
        Education: 'education',
        Shortcut: 'shortcut',
      })
    : undefined;

let compactCode;
if (
  compact &&
  compact.type === 'INSTANCE' &&
  (compactLayout === 'metric' ||
    compactLayout === 'metric-icon' ||
    compactLayout === 'metric-trend')
) {
  compactCode = compact.executeTemplate().example;
}

export default {
  example: figma.code`
    <Card
      variant="${variant}"
      type="${type}"
      ${showHeader && title ? figma.code`title="${title}"` : ''}
      ${
        showHeader && showHeaderSlot
          ? figma.code`headerSlot={<Badge text="Badge" />}`
          : ''
      }
      ${
        showDescription && description
          ? figma.code`description="${description}"`
          : ''
      }
      ${hasBadge ? figma.code`badge={<Badge text="Badge" />}` : ''}
      ${
        hasActions
          ? figma.code`actions={<>
        <Button label="Button" />
        <Button label="Button" variant="secondary" />
      </>}`
          : ''
      }
      ${hasImage ? figma.code`image="https://picsum.photos/686/514"` : ''}
      ${compactCode ? figma.code`compactContent={${compactCode}}` : ''}
    >
      ${variant === 'placeholder' ? placeholderContent : ''}
    </Card>
  `,
  imports: [
    "import { Badge, Button, Card } from '@trendyol/baklava-react-native'",
  ],
  id: 'card',
  metadata: { nestable: true },
};
