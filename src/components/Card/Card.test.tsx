import React from 'react';
import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { fireEvent, render } from '../../test-utils';
import theme from '../../theme';
import Badge from '../Badge/Badge';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import Text from '../Text/Text';
import Card from './Card';

const SAMPLE_IMAGE = 'https://example.com/card-image.png';

const flattenStyle = (style: ViewStyle | TextStyle | unknown) =>
  StyleSheet.flatten(style as ViewStyle);

describe('Card', () => {
  test('should render a vertical card correctly', () => {
    const { toJSON, getByTestId } = render(
      <Card
        image={SAMPLE_IMAGE}
        description="Description"
        badge={<Badge text="Badge" />}
        actions={<Button label="Button" />}
      />,
    );

    expect(toJSON()).toMatchSnapshot();
    expect(getByTestId('card')).toBeTruthy();
    expect(getByTestId('card-image').props.source).toEqual({
      uri: SAMPLE_IMAGE,
    });
    expect(getByTestId('card-description').props.children).toBe('Description');
    expect(getByTestId('card-badge')).toBeTruthy();
    expect(getByTestId('card-actions')).toBeTruthy();
  });

  test('should render a horizontal card with a trailing arrow', () => {
    const { getByTestId, queryByTestId } = render(
      <Card
        variant="horizontal"
        image={SAMPLE_IMAGE}
        description="Description"
      />,
    );

    expect(getByTestId('card-image-wrapper').props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ width: 96, height: 48 }),
      ]),
    );
    expect(getByTestId('card-arrow')).toBeTruthy();
    expect(queryByTestId('card-actions')).toBeNull();
  });

  test('should hide the arrow when showArrow is false', () => {
    const { queryByTestId } = render(
      <Card variant="horizontal" showArrow={false} description="Description" />,
    );

    expect(queryByTestId('card-arrow')).toBeNull();
  });

  test('should render the icon layout with a leading slot', () => {
    const { getByTestId } = render(
      <Card
        variant="icon"
        icon={<Icon name="store" testID="card-leading-icon" />}
        description="Description"
        actions={<Button label="Button" />}
      />,
    );

    expect(getByTestId('card-icon').props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ width: 64, height: 64 }),
      ]),
    );
    expect(getByTestId('card-leading-icon')).toBeTruthy();
    expect(getByTestId('card-actions')).toBeTruthy();
  });

  test('should use a 200 px min height for the placeholder layout', () => {
    const { getByTestId } = render(
      <Card variant="placeholder">
        <Text>Free content</Text>
      </Card>,
    );

    const style = flattenStyle(getByTestId('card').props.style);
    expect(style.minHeight).toBe(200);
    expect(style.height).toBeUndefined();
    expect(getByTestId('card-content')).toBeTruthy();
  });

  test('should use a 54 px min height for the compact layout', () => {
    const { getByTestId } = render(
      <Card variant="compact" compactContent={<Text>1.000</Text>} />,
    );

    const style = flattenStyle(getByTestId('card').props.style);
    expect(style.minHeight).toBe(54);
    expect(style.height).toBeUndefined();
    expect(getByTestId('card-content')).toBeTruthy();
  });

  test('should let the compact layout grow with content and its stroke border', () => {
    const { getByTestId } = render(
      <Card
        variant="compact"
        type="stroke"
        compactContent={<Text>1.000</Text>}
      />,
    );

    const style = flattenStyle(getByTestId('card').props.style);
    expect(style.minHeight).toBe(54);
    expect(style.height).toBeUndefined();
    expect(style.borderWidth).toBe(1);
  });

  test('should still accept an explicit height for grid tiles', () => {
    const { getByTestId } = render(
      <Card
        variant="compact"
        height={76}
        compactContent={<Text>1.000</Text>}
      />,
    );

    const style = flattenStyle(getByTestId('card').props.style);
    expect(style.height).toBe(76);
    expect(style.minHeight).toBe(54);
  });

  test('should hide the header when header is false', () => {
    const { queryByTestId } = render(
      <Card title="Title" header={false} description="Description" />,
    );

    expect(queryByTestId('card-header')).toBeNull();
    expect(queryByTestId('card-title')).toBeNull();
  });

  test('should show the header when a title is provided', () => {
    const { getByTestId } = render(
      <Card title="Title" headerSlot={<Icon name="more-vertical" />} />,
    );

    expect(getByTestId('card-header')).toBeTruthy();
    expect(getByTestId('card-title').props.children).toBe('Title');
    expect(getByTestId('card-header-slot')).toBeTruthy();
  });

  test('should apply the default surface', () => {
    const { getByTestId } = render(<Card description="Description" />);
    const style = flattenStyle(getByTestId('card').props.style);

    expect(style.backgroundColor).toBe(theme.colors.neutralFull);
    expect(style.borderWidth).toBeUndefined();
    expect(style.shadowOpacity).toBeUndefined();
  });

  test('should apply the stroke surface', () => {
    const { getByTestId } = render(<Card type="stroke" />);
    const style = flattenStyle(getByTestId('card').props.style);

    expect(style.borderWidth).toBe(1);
    expect(style.borderColor).toBe(theme.colors.borderColor);
  });

  test('should apply the gray surface', () => {
    const { getByTestId } = render(<Card type="gray" />);
    const style = flattenStyle(getByTestId('card').props.style);

    expect(style.backgroundColor).toBe(theme.colors.neutralLightest);
  });

  test('should apply the elevated shadow', () => {
    const { getByTestId } = render(<Card type="elevated" />);
    const style = flattenStyle(getByTestId('card').props.style);

    expect(style.shadowColor).toBe(theme.colors.neutralNone);
    expect(style.shadowOffset).toEqual({ width: 0, height: 4 });
    expect(style.shadowOpacity).toBe(0.1);
    expect(style.shadowRadius).toBe(20);
    expect(style.elevation).toBe(4);
  });

  test('should not apply the elevated shadow on the icon layout', () => {
    const { getByTestId } = render(<Card variant="icon" type="elevated" />);
    const style = flattenStyle(getByTestId('card').props.style);

    expect(style.shadowOpacity).toBeUndefined();
    expect(style.elevation).toBeUndefined();
  });

  test('should call onPress when the card is pressed', () => {
    const onPress = jest.fn();
    const { getByTestId } = render(<Card onPress={onPress} />);

    fireEvent.press(getByTestId('card-pressable'));

    expect(onPress).toHaveBeenCalledTimes(1);
    expect(getByTestId('card-pressable').props.accessibilityRole).toBe(
      'button',
    );
  });

  test('should not call onPress when the card is disabled', () => {
    const onPress = jest.fn();
    const { getByTestId } = render(<Card onPress={onPress} disabled />);

    fireEvent.press(getByTestId('card-pressable'));

    expect(onPress).not.toHaveBeenCalled();
    expect(flattenStyle(getByTestId('card').props.style).opacity).toBe(0.5);
  });

  test('should not render a pressable when onPress is not provided', () => {
    const { queryByTestId } = render(<Card description="Description" />);

    expect(queryByTestId('card-pressable')).toBeNull();
  });

  test('should render a custom media node', () => {
    const { getByTestId } = render(
      <Card
        variant="horizontal"
        image={<Icon name="store" testID="media" />}
      />,
    );

    expect(getByTestId('media')).toBeTruthy();
    expect(getByTestId('card-image-wrapper')).toBeTruthy();
  });

  test('should respect a custom testID', () => {
    const { getByTestId, queryByTestId } = render(
      <Card testID="custom-card" title="Title" />,
    );

    expect(getByTestId('custom-card')).toBeTruthy();
    expect(getByTestId('custom-card-title')).toBeTruthy();
    expect(queryByTestId('card')).toBeNull();
  });

  test('should override defaults with rest props', () => {
    const { getByTestId } = render(
      <Card type="gray" backgroundColor="primaryContrast" />,
    );

    expect(flattenStyle(getByTestId('card').props.style).backgroundColor).toBe(
      theme.colors.primaryContrast,
    );
  });

  test('should align a header slot without a title to the end', () => {
    const { getByTestId } = render(
      <Card headerSlot={<Icon name="more-vertical" />} />,
    );

    expect(
      flattenStyle(getByTestId('card-header-slot').props.style).marginLeft,
    ).toBe('auto');
  });
});
