import React from 'react';
import { VariantProps } from '@ergenekonyigit/restyle';
import Box from '../Box/Box';
import Icon from '../Icon/Icon';
import Text from '../Text/Text';
import { Theme } from '../../theme';

type ThemeColor = VariantProps<Theme, 'colors'>['variant'];

export type CardCompactMetricDirection = 'up' | 'down';

export interface CardCompactMetricTrend {
  value: React.ReactNode;
  /**
   * Direction of the trend. `up` uses `successKey`, `down` uses `dangerKey`.
   * @default 'up'
   */
  direction?: CardCompactMetricDirection;
}

export interface CardCompactMetricProps {
  /** Metric label, rendered with `body3`. */
  label: React.ReactNode;
  /** Metric value, rendered with `subtitle2Medium` or `subtitle1Medium`. */
  value: React.ReactNode;
  /** Optional trend row below the value. */
  trend?: CardCompactMetricTrend;
  /**
   * Arrow placement. The source design uses `value` for Metric and `label` for
   * Metric Trend.
   * @default false
   */
  arrow?: false | 'label' | 'value';
  /**
   * Value size. `s` is 16 / 20, `m` is 20 / 24.
   * @default 's'
   */
  size?: 's' | 'm';
  /**
   * Theme color token of the value.
   * @default 'contentPrimary'
   */
  valueColor?: ThemeColor;
  /** Test id of the root element. Defaults to `card-compact-metric`. */
  testID?: string;
}

const VALUE_VARIANTS = {
  s: 'subtitle2Medium',
  m: 'subtitle1Medium',
} as const;

/**
 * Metric content of the Card compact layout. It has no surface, so it can be
 * used inside `Card` (`compactContent`) or in any custom container.
 */
const CardCompactMetric = ({
  label,
  value,
  trend,
  arrow = false,
  size = 's',
  valueColor = 'contentPrimary',
  testID = 'card-compact-metric',
}: CardCompactMetricProps) => {
  const trendColor = trend?.direction === 'down' ? 'dangerKey' : 'successKey';

  return (
    <Box alignItems="center" gap="3xs" testID={testID}>
      <Box
        flexDirection="row"
        alignItems="center"
        gap="4xs"
        testID={`${testID}-label-row`}>
        <Text variant="body3" color="contentPrimary" testID={`${testID}-label`}>
          {label}
        </Text>
        {arrow === 'label' ? (
          <Icon
            name="arrow-right"
            size="2xs"
            color="contentPrimary"
            testID={`${testID}-arrow`}
          />
        ) : null}
      </Box>

      <Box
        flexDirection="row"
        alignItems="center"
        gap="3xs"
        testID={`${testID}-value-row`}>
        <Text
          variant={VALUE_VARIANTS[size]}
          color={valueColor}
          testID={`${testID}-value`}>
          {value}
        </Text>
        {arrow === 'value' ? (
          <Icon
            name="arrow-right"
            size="2xs"
            color={valueColor}
            testID={`${testID}-arrow`}
          />
        ) : null}
      </Box>

      {trend ? (
        <Box
          flexDirection="row"
          alignItems="center"
          gap="3xs"
          testID={`${testID}-trend`}>
          <Text
            variant="subtitle4Medium"
            color={trendColor}
            testID={`${testID}-trend-value`}>
            {trend.value}
          </Text>
          <Icon
            name={
              trend.direction === 'down'
                ? 'metric-status-down'
                : 'metric-status-up'
            }
            size="xs"
            color={trendColor}
            testID={`${testID}-trend-icon`}
          />
        </Box>
      ) : null}
    </Box>
  );
};

export default CardCompactMetric;
