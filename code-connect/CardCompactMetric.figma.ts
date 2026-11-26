// url=https://www.figma.com/design/Dkp0DYbxpt76atpJ4kkTnf/Baklava-Mobile-Component-Library?node-id=14454-7312
// source=src/components/Card/CardCompactMetric.tsx
// component=CardCompactMetric
import figma from 'figma';
import { findText, getEnum } from './template-helpers';

const instance = figma.selectedInstance;

const layout = instance.getEnum('Layout', {
  Metric: 'metric',
  'Metric Icon': 'metric-icon',
  'Metric Trend': 'metric-trend',
  Promotion: 'promotion',
  Product: 'product',
  'Product Action': 'product-action',
  Task: 'task',
  Education: 'education',
  Shortcut: 'shortcut',
});

let example;

if (layout === 'metric') {
  const label = findText(instance.findInstance('Value'), 'Text');
  const value = findText(instance.findInstance('Quantity'), 'Text');
  const showArrow = instance.getBoolean('Show Arrow');
  example = figma.code`
    <CardCompactMetric
      label="${label}"
      value="${value}"
      valueColor="primaryKey"
      ${showArrow ? figma.code`arrow="value"` : ''}
    />
  `;
} else if (layout === 'metric-icon') {
  const label = findText(instance.findInstance('Value'), 'Text');
  const value = findText(instance.findInstance('Label'), 'Text');
  const showArrow = instance.getBoolean('Show Arrow');
  example = figma.code`
    <CardCompactMetric
      label="${label}"
      value="${value}"
      ${showArrow ? figma.code`arrow="label"` : ''}
    />
  `;
} else if (layout === 'metric-trend') {
  const label = findText(instance.findInstance('Value'), 'Text');
  const value = findText(instance.findInstance('Metric Value'), 'Text');
  const showArrow = instance.getBoolean('Show Arrow');
  const trend = instance.findInstance('_metric_');
  const trendValue = findText(trend, '%2.1');
  const trendDirection = getEnum(trend, 'Type', {
    Increase: 'up',
    Decrease: 'down',
    Stable: 'stable',
  });
  example = figma.code`
    <CardCompactMetric
      label="${label}"
      value="${value}"
      size="m"
      ${showArrow ? figma.code`arrow="label"` : ''}
      ${
        trendDirection === 'up' || trendDirection === 'down'
          ? figma.code`trend={{ value: "${trendValue}", direction: "${trendDirection}" }}`
          : ''
      }
    />
  `;
} else {
  example = figma.code`
    <>
      {/* This compact content layout has no dedicated Baklava React Native component yet. */}
    </>
  `;
}

export default {
  example,
  imports: [
    "import { CardCompactMetric } from '@trendyol/baklava-react-native'",
  ],
  id: 'card-compact-metric',
  metadata: { nestable: true },
};
