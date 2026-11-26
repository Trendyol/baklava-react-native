// url=https://www.figma.com/design/Dkp0DYbxpt76atpJ4kkTnf/Baklava-Mobile-Component-Library?node-id=14454-7312
// source=src/components/Card/CardCompactMetric.tsx
// component=CardCompactMetric
import figma from 'figma';
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
  const label = instance.findInstance('Value').findText('Text').textContent;
  const value = instance.findInstance('Quantity').findText('Text').textContent;
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
  const label = instance.findInstance('Value').findText('Text').textContent;
  const value = instance.findInstance('Label').findText('Text').textContent;
  const showArrow = instance.getBoolean('Show Arrow');
  example = figma.code`
    <CardCompactMetric
      label="${label}"
      value="${value}"
      ${showArrow ? figma.code`arrow="label"` : ''}
    />
  `;
} else if (layout === 'metric-trend') {
  const label = instance.findInstance('Value').findText('Text').textContent;
  const value = instance
    .findInstance('Metric Value')
    .findText('Text').textContent;
  const showArrow = instance.getBoolean('Show Arrow');
  const trend = instance.findInstance('_metric_');
  const trendValue = trend.findText('%2.1').textContent;
  const trendDirection = trend.getEnum('Type', {
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
