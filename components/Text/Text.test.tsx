import React from 'react';
import { theme } from '../../src';
import { render } from '../../src/testUtils';
import Text from '../Text/Text';

describe('Text', () => {
  test('should render given text correctly', () => {
    // when
    const { getByTestId } = render(<Text testID="text">Test Text</Text>);
    const textComponent = getByTestId('text');
    // then
    expect(textComponent.props.children).toBe('Test Text');
  });

  // Heading
  test('should render headingBig variant correctly', () => {
    // when
    const { getByTestId } = render(
      <Text testID="text" variant="headingBig">
        Test Text
      </Text>,
    );
    const textComponent = getByTestId('text');
    // then
    expect(textComponent.props.variant).toBe('headingBig');
    expect(textComponent.props.style[0].fontSize).toBe(theme.fontSizes[6]);
    expect(textComponent.props.style[0].fontWeight).toBe(theme.fontWeights[0]);
    expect(textComponent.props.style[0].color).toBe(
      theme.colors.contentPrimary,
    );
  });
  test('should render headingMedium variant correctly', () => {
    // when
    const { getByTestId } = render(
      <Text testID="text" variant="headingMedium">
        Test Text
      </Text>,
    );
    const textComponent = getByTestId('text');
    // then
    expect(textComponent.props.variant).toBe('headingMedium');
    expect(textComponent.props.style[0].fontSize).toBe(theme.fontSizes[5]);
    expect(textComponent.props.style[0].fontWeight).toBe(theme.fontWeights[1]);
    expect(textComponent.props.style[0].color).toBe(
      theme.colors.contentPrimary,
    );
  });

  test('should render headingSmall variant correctly', () => {
    // when
    const { getByTestId } = render(
      <Text testID="text" variant="headingSmall">
        Test Text
      </Text>,
    );
    const textComponent = getByTestId('text');
    // then
    expect(textComponent.props.variant).toBe('headingSmall');
    expect(textComponent.props.style[0].fontSize).toBe(theme.fontSizes[4]);
    expect(textComponent.props.style[0].fontWeight).toBe(theme.fontWeights[1]);
    expect(textComponent.props.style[0].color).toBe(
      theme.colors.contentPrimary,
    );
  });

  // SubtitleXLarge
  test('should render subtitleXLargeRegular variant correctly', () => {
    // when
    const { getByTestId } = render(
      <Text testID="text" variant="subtitleXLargeRegular">
        Test Text
      </Text>,
    );
    const textComponent = getByTestId('text');
    // then
    expect(textComponent.props.variant).toBe('subtitleXLargeRegular');
    expect(textComponent.props.style[0].fontSize).toBe(theme.fontSizes[3]);
    expect(textComponent.props.style[0].fontWeight).toBe(theme.fontWeights[1]);
    expect(textComponent.props.style[0].color).toBe(
      theme.colors.contentPrimary,
    );
  });
  test('should render subtitleXLargeMedium variant correctly', () => {
    // when
    const { getByTestId } = render(
      <Text testID="text" variant="subtitleXLargeMedium">
        Test Text
      </Text>,
    );
    const textComponent = getByTestId('text');
    // then
    expect(textComponent.props.variant).toBe('subtitleXLargeMedium');
    expect(textComponent.props.style[0].fontSize).toBe(theme.fontSizes[3]);
    expect(textComponent.props.style[0].fontWeight).toBe(theme.fontWeights[2]);
    expect(textComponent.props.style[0].color).toBe(
      theme.colors.contentPrimary,
    );
  });
  test('should render subtitleXLargeSemibold variant correctly', () => {
    // when
    const { getByTestId } = render(
      <Text testID="text" variant="subtitleXLargeSemibold">
        Test Text
      </Text>,
    );
    const textComponent = getByTestId('text');
    // then
    expect(textComponent.props.variant).toBe('subtitleXLargeSemibold');
    expect(textComponent.props.style[0].fontSize).toBe(theme.fontSizes[3]);
    expect(textComponent.props.style[0].fontWeight).toBe(theme.fontWeights[3]);
    expect(textComponent.props.style[0].color).toBe(
      theme.colors.contentPrimary,
    );
  });
  test('should render subtitleXLargeBold variant correctly', () => {
    // when
    const { getByTestId } = render(
      <Text testID="text" variant="subtitleXLargeBold">
        Test Text
      </Text>,
    );
    const textComponent = getByTestId('text');
    // then
    expect(textComponent.props.variant).toBe('subtitleXLargeBold');
    expect(textComponent.props.style[0].fontSize).toBe(theme.fontSizes[3]);
    expect(textComponent.props.style[0].fontWeight).toBe(theme.fontWeights[4]);
    expect(textComponent.props.style[0].color).toBe(
      theme.colors.contentPrimary,
    );
  });

  // SubtitleLarge
  test('should render subtitleLargeRegular variant correctly', () => {
    // when
    const { getByTestId } = render(
      <Text testID="text" variant="subtitleLargeRegular">
        Test Text
      </Text>,
    );
    const textComponent = getByTestId('text');
    // then
    expect(textComponent.props.variant).toBe('subtitleLargeRegular');
    expect(textComponent.props.style[0].fontSize).toBe(theme.fontSizes[2]);
    expect(textComponent.props.style[0].fontWeight).toBe(theme.fontWeights[1]);
    expect(textComponent.props.style[0].color).toBe(
      theme.colors.contentPrimary,
    );
  });
  test('should render subtitleLargeMedium variant correctly', () => {
    // when
    const { getByTestId } = render(
      <Text testID="text" variant="subtitleLargeMedium">
        Test Text
      </Text>,
    );
    const textComponent = getByTestId('text');
    // then
    expect(textComponent.props.variant).toBe('subtitleLargeMedium');
    expect(textComponent.props.style[0].fontSize).toBe(theme.fontSizes[2]);
    expect(textComponent.props.style[0].fontWeight).toBe(theme.fontWeights[2]);
    expect(textComponent.props.style[0].color).toBe(
      theme.colors.contentPrimary,
    );
  });
  test('should render subtitleLargeSemibold variant correctly', () => {
    // when
    const { getByTestId } = render(
      <Text testID="text" variant="subtitleLargeSemibold">
        Test Text
      </Text>,
    );
    const textComponent = getByTestId('text');
    // then
    expect(textComponent.props.variant).toBe('subtitleLargeSemibold');
    expect(textComponent.props.style[0].fontSize).toBe(theme.fontSizes[2]);
    expect(textComponent.props.style[0].fontWeight).toBe(theme.fontWeights[3]);
    expect(textComponent.props.style[0].color).toBe(
      theme.colors.contentPrimary,
    );
  });
  test('should render subtitleLargeBold variant correctly', () => {
    // when
    const { getByTestId } = render(
      <Text testID="text" variant="subtitleLargeBold">
        Test Text
      </Text>,
    );
    const textComponent = getByTestId('text');
    // then
    expect(textComponent.props.variant).toBe('subtitleLargeBold');
    expect(textComponent.props.style[0].fontSize).toBe(theme.fontSizes[2]);
    expect(textComponent.props.style[0].fontWeight).toBe(theme.fontWeights[4]);
    expect(textComponent.props.style[0].color).toBe(
      theme.colors.contentPrimary,
    );
  });

  // SubtitleMedium
  test('should render subtitleMediumRegular variant correctly', () => {
    // when
    const { getByTestId } = render(
      <Text testID="text" variant="subtitleMediumRegular">
        Test Text
      </Text>,
    );
    const textComponent = getByTestId('text');
    // then
    expect(textComponent.props.variant).toBe('subtitleMediumRegular');
    expect(textComponent.props.style[0].fontSize).toBe(theme.fontSizes[1]);
    expect(textComponent.props.style[0].fontWeight).toBe(theme.fontWeights[1]);
    expect(textComponent.props.style[0].color).toBe(
      theme.colors.contentPrimary,
    );
  });
  test('should render subtitleMediumMedium variant correctly', () => {
    // when
    const { getByTestId } = render(
      <Text testID="text" variant="subtitleMediumMedium">
        Test Text
      </Text>,
    );
    const textComponent = getByTestId('text');
    // then
    expect(textComponent.props.variant).toBe('subtitleMediumMedium');
    expect(textComponent.props.style[0].fontSize).toBe(theme.fontSizes[1]);
    expect(textComponent.props.style[0].fontWeight).toBe(theme.fontWeights[2]);
    expect(textComponent.props.style[0].color).toBe(
      theme.colors.contentPrimary,
    );
  });
  test('should render subtitleMediumSemibold variant correctly', () => {
    // when
    const { getByTestId } = render(
      <Text testID="text" variant="subtitleMediumSemibold">
        Test Text
      </Text>,
    );
    const textComponent = getByTestId('text');
    // then
    expect(textComponent.props.variant).toBe('subtitleMediumSemibold');
    expect(textComponent.props.style[0].fontSize).toBe(theme.fontSizes[1]);
    expect(textComponent.props.style[0].fontWeight).toBe(theme.fontWeights[3]);
    expect(textComponent.props.style[0].color).toBe(
      theme.colors.contentPrimary,
    );
  });
  test('should render subtitleMediumBold variant correctly', () => {
    // when
    const { getByTestId } = render(
      <Text testID="text" variant="subtitleMediumBold">
        Test Text
      </Text>,
    );
    const textComponent = getByTestId('text');
    // then
    expect(textComponent.props.variant).toBe('subtitleMediumBold');
    expect(textComponent.props.style[0].fontSize).toBe(theme.fontSizes[1]);
    expect(textComponent.props.style[0].fontWeight).toBe(theme.fontWeights[4]);
    expect(textComponent.props.style[0].color).toBe(
      theme.colors.contentPrimary,
    );
  });

  // SubtitleSmall
  test('should render subtitleSmallRegular variant correctly', () => {
    // when
    const { getByTestId } = render(
      <Text testID="text" variant="subtitleSmallRegular">
        Test Text
      </Text>,
    );
    const textComponent = getByTestId('text');
    // then
    expect(textComponent.props.variant).toBe('subtitleSmallRegular');
    expect(textComponent.props.style[0].fontSize).toBe(theme.fontSizes[0]);
    expect(textComponent.props.style[0].fontWeight).toBe(theme.fontWeights[1]);
    expect(textComponent.props.style[0].color).toBe(
      theme.colors.contentPrimary,
    );
  });
  test('should render subtitleSmallMedium variant correctly', () => {
    // when
    const { getByTestId } = render(
      <Text testID="text" variant="subtitleSmallMedium">
        Test Text
      </Text>,
    );
    const textComponent = getByTestId('text');
    // then
    expect(textComponent.props.variant).toBe('subtitleSmallMedium');
    expect(textComponent.props.style[0].fontSize).toBe(theme.fontSizes[0]);
    expect(textComponent.props.style[0].fontWeight).toBe(theme.fontWeights[2]);
    expect(textComponent.props.style[0].color).toBe(
      theme.colors.contentPrimary,
    );
  });
  test('should render subtitleSmallSemibold variant correctly', () => {
    // when
    const { getByTestId } = render(
      <Text testID="text" variant="subtitleSmallSemibold">
        Test Text
      </Text>,
    );
    const textComponent = getByTestId('text');
    // then
    expect(textComponent.props.variant).toBe('subtitleSmallSemibold');
    expect(textComponent.props.style[0].fontSize).toBe(theme.fontSizes[0]);
    expect(textComponent.props.style[0].fontWeight).toBe(theme.fontWeights[3]);
    expect(textComponent.props.style[0].color).toBe(
      theme.colors.contentPrimary,
    );
  });
  test('should render subtitleSmallBold variant correctly', () => {
    // when
    const { getByTestId } = render(
      <Text testID="text" variant="subtitleSmallBold">
        Test Text
      </Text>,
    );
    const textComponent = getByTestId('text');
    // then
    expect(textComponent.props.variant).toBe('subtitleSmallBold');
    expect(textComponent.props.style[0].fontSize).toBe(theme.fontSizes[0]);
    expect(textComponent.props.style[0].fontWeight).toBe(theme.fontWeights[4]);
    expect(textComponent.props.style[0].color).toBe(
      theme.colors.contentPrimary,
    );
  });

  // Body
  test('should render bodyText variant correctly', () => {
    // when
    const { getByTestId } = render(
      <Text testID="text" variant="bodyText">
        Test Text
      </Text>,
    );
    const textComponent = getByTestId('text');
    // then
    expect(textComponent.props.variant).toBe('bodyText');
    expect(textComponent.props.style[0].fontSize).toBe(theme.fontSizes[1]);
    expect(textComponent.props.style[0].fontWeight).toBe(theme.fontWeights[1]);
    expect(textComponent.props.style[0].color).toBe(
      theme.colors.contentPrimary,
    );
  });
  test('should render bodyUnderline variant correctly', () => {
    // when
    const { getByTestId } = render(
      <Text testID="text" variant="bodyUnderline">
        Test Text
      </Text>,
    );
    const textComponent = getByTestId('text');
    // then
    expect(textComponent.props.variant).toBe('bodyUnderline');
    expect(textComponent.props.style[0].fontSize).toBe(theme.fontSizes[1]);
    expect(textComponent.props.style[0].fontWeight).toBe(theme.fontWeights[1]);
    expect(textComponent.props.style[0].textDecorationLine).toBe('underline');
    expect(textComponent.props.style[0].color).toBe(
      theme.colors.contentPrimary,
    );
  });
  test('should render bodyTextLink variant correctly', () => {
    // when
    const { getByTestId } = render(
      <Text testID="text" variant="bodyTextLink">
        Test Text
      </Text>,
    );
    const textComponent = getByTestId('text');
    // then
    expect(textComponent.props.variant).toBe('bodyTextLink');
    expect(textComponent.props.style[0].fontSize).toBe(theme.fontSizes[1]);
    expect(textComponent.props.style[0].fontWeight).toBe(theme.fontWeights[2]);
    expect(textComponent.props.style[0].textDecorationLine).toBe('underline');
    expect(textComponent.props.style[0].color).toBe(
      theme.colors.contentPrimary,
    );
  });
  test('should render bodyLongText variant correctly', () => {
    // when
    const { getByTestId } = render(
      <Text testID="text" variant="bodyLongText">
        Test Text
      </Text>,
    );
    const textComponent = getByTestId('text');
    // then
    expect(textComponent.props.variant).toBe('bodyLongText');
    expect(textComponent.props.style[0].fontSize).toBe(theme.fontSizes[1]);
    expect(textComponent.props.style[0].fontWeight).toBe(theme.fontWeights[1]);
    expect(textComponent.props.style[0].color).toBe(
      theme.colors.contentPrimary,
    );
  });

  // Caption
  test('should render captionText variant correctly', () => {
    // when
    const { getByTestId } = render(
      <Text testID="text" variant="captionText">
        Test Text
      </Text>,
    );
    const textComponent = getByTestId('text');
    // then
    expect(textComponent.props.variant).toBe('captionText');
    expect(textComponent.props.style[0].fontSize).toBe(theme.fontSizes[0]);
    expect(textComponent.props.style[0].fontWeight).toBe(theme.fontWeights[1]);
    expect(textComponent.props.style[0].color).toBe(
      theme.colors.contentPrimary,
    );
  });
  test('should render captionMedium variant correctly', () => {
    // when
    const { getByTestId } = render(
      <Text testID="text" variant="captionMedium">
        Test Text
      </Text>,
    );
    const textComponent = getByTestId('text');
    // then
    expect(textComponent.props.variant).toBe('captionMedium');
    expect(textComponent.props.style[0].fontSize).toBe(theme.fontSizes[0]);
    expect(textComponent.props.style[0].fontWeight).toBe(theme.fontWeights[2]);
    expect(textComponent.props.style[0].color).toBe(
      theme.colors.contentPrimary,
    );
  });
  test('should render captionLongText variant correctly', () => {
    // when
    const { getByTestId } = render(
      <Text testID="text" variant="captionLongText">
        Test Text
      </Text>,
    );
    const textComponent = getByTestId('text');
    // then
    expect(textComponent.props.variant).toBe('captionLongText');
    expect(textComponent.props.style[0].fontSize).toBe(theme.fontSizes[0]);
    expect(textComponent.props.style[0].fontWeight).toBe(theme.fontWeights[1]);
    expect(textComponent.props.style[0].color).toBe(
      theme.colors.contentPrimary,
    );
  });
  test('should render captionTextLink variant correctly', () => {
    // when
    const { getByTestId } = render(
      <Text testID="text" variant="captionTextLink">
        Test Text
      </Text>,
    );
    const textComponent = getByTestId('text');
    // then
    expect(textComponent.props.variant).toBe('captionTextLink');
    expect(textComponent.props.style[0].fontSize).toBe(theme.fontSizes[0]);
    expect(textComponent.props.style[0].fontWeight).toBe(theme.fontWeights[2]);
    expect(textComponent.props.style[0].textDecorationLine).toBe('underline');
    expect(textComponent.props.style[0].color).toBe(
      theme.colors.contentPrimary,
    );
  });
  //
});
