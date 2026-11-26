import React from 'react';
import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { render, within } from '../../test-utils';
import theme from '../../theme';
import CardCompactMetric from './CardCompactMetric';

const flattenStyle = (style: unknown) =>
  StyleSheet.flatten(style as TextStyle & ViewStyle);

describe('CardCompactMetric', () => {
  test('should render label and value', () => {
    const { toJSON, getByTestId } = render(
      <CardCompactMetric label="Bugünkü Satış" value="68.875₺" />,
    );

    expect(toJSON()).toMatchSnapshot();
    expect(getByTestId('card-compact-metric-label').props.children).toBe(
      'Bugünkü Satış',
    );
    expect(getByTestId('card-compact-metric-value').props.children).toBe(
      '68.875₺',
    );
  });

  test('should not render an arrow by default', () => {
    const { queryByTestId } = render(
      <CardCompactMetric label="Bugünkü Satış" value="68.875₺" />,
    );

    expect(queryByTestId('card-compact-metric-arrow')).toBeNull();
  });

  test('should place the arrow in the value row', () => {
    const { getByTestId } = render(
      <CardCompactMetric label="Text" value="1.000" arrow="value" />,
    );

    expect(
      within(getByTestId('card-compact-metric-value-row')).getByTestId(
        'card-compact-metric-arrow',
      ),
    ).toBeTruthy();
  });

  test('should place the arrow in the label row', () => {
    const { getByTestId } = render(
      <CardCompactMetric label="Text" value="1.000" arrow="label" />,
    );

    expect(
      within(getByTestId('card-compact-metric-label-row')).getByTestId(
        'card-compact-metric-arrow',
      ),
    ).toBeTruthy();
  });

  test('should render the value with the small size by default', () => {
    const { getByTestId } = render(
      <CardCompactMetric label="Text" value="1.000" />,
    );

    expect(
      flattenStyle(getByTestId('card-compact-metric-value').props.style)
        .fontSize,
    ).toBe(16);
  });

  test('should render the value with the medium size', () => {
    const { getByTestId } = render(
      <CardCompactMetric label="Text" value="1.000" size="m" />,
    );

    expect(
      flattenStyle(getByTestId('card-compact-metric-value').props.style)
        .fontSize,
    ).toBe(20);
  });

  test('should use the primary content color for the value by default', () => {
    const { getByTestId } = render(
      <CardCompactMetric label="Text" value="1.000" />,
    );

    expect(
      flattenStyle(getByTestId('card-compact-metric-value').props.style).color,
    ).toBe(theme.colors.contentPrimary);
  });

  test('should accept a theme color token for the value', () => {
    const { getByTestId } = render(
      <CardCompactMetric label="Text" value="1.000" valueColor="primaryKey" />,
    );

    expect(
      flattenStyle(getByTestId('card-compact-metric-value').props.style).color,
    ).toBe(theme.colors.primaryKey);
  });

  test('should render an increasing trend with the success color', () => {
    const { getByTestId } = render(
      <CardCompactMetric
        label="Text"
        value="1.000"
        trend={{ value: '%4.1' }}
      />,
    );

    expect(getByTestId('card-compact-metric-trend')).toBeTruthy();
    expect(getByTestId('card-compact-metric-trend-icon')).toBeTruthy();
    expect(
      flattenStyle(getByTestId('card-compact-metric-trend-value').props.style)
        .color,
    ).toBe(theme.colors.successKey);
  });

  test('should render a decreasing trend with the danger color', () => {
    const { getByTestId } = render(
      <CardCompactMetric
        label="Text"
        value="1.000"
        trend={{ value: '%4.1', direction: 'down' }}
      />,
    );

    expect(
      flattenStyle(getByTestId('card-compact-metric-trend-value').props.style)
        .color,
    ).toBe(theme.colors.dangerKey);
  });

  test('should not render a trend when it is not provided', () => {
    const { queryByTestId } = render(
      <CardCompactMetric label="Text" value="1.000" />,
    );

    expect(queryByTestId('card-compact-metric-trend')).toBeNull();
  });

  test('should respect a custom testID', () => {
    const { getByTestId, queryByTestId } = render(
      <CardCompactMetric label="Text" value="1.000" testID="metric" />,
    );

    expect(getByTestId('metric')).toBeTruthy();
    expect(getByTestId('metric-value')).toBeTruthy();
    expect(queryByTestId('card-compact-metric')).toBeNull();
  });
});
