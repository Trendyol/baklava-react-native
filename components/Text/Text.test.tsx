import React from 'react';
import { theme } from '../../src';
import { render } from '../../src/testUtils';
import Text from '../Text/Text';

describe('Text', () => {
  test('should render text correctly', () => {
    // when
    const { toJSON } = render(<Text>testtesttest</Text>);

    // then
    expect(toJSON()).toMatchSnapshot();
  });

  test('should render given text correctly', () => {
    // when
    const { getByTestId } = render(<Text testID="text">Test Text</Text>);
    const textComponent = getByTestId('text');
    // then
    expect(textComponent.props.children).toBe('Test Text');
  });

  // Heading
  test('should render heading1 variant correctly', () => {
    // when
    const { getByTestId } = render(
      <Text testID="text" variant="heading1">
        Test Text
      </Text>,
    );
    const textComponent = getByTestId('text');
    // then
    expect(textComponent.props.variant).toBe('heading1');
    expect(textComponent.props.style[0].fontSize).toBe(theme.fontSizes[6]);
    expect(textComponent.props.style[0].fontWeight).toBe(theme.fontWeights[0]);
    expect(textComponent.props.style[0].color).toBe(
      theme.colors.contentPrimary,
    );
  });
  test('should render heading2 variant correctly', () => {
    // when
    const { getByTestId } = render(
      <Text testID="text" variant="heading2">
        Test Text
      </Text>,
    );
    const textComponent = getByTestId('text');
    // then
    expect(textComponent.props.variant).toBe('heading2');
    expect(textComponent.props.style[0].fontSize).toBe(theme.fontSizes[5]);
    expect(textComponent.props.style[0].fontWeight).toBe(theme.fontWeights[1]);
    expect(textComponent.props.style[0].color).toBe(
      theme.colors.contentPrimary,
    );
  });

  test('should render heading3 variant correctly', () => {
    // when
    const { getByTestId } = render(
      <Text testID="text" variant="heading3">
        Test Text
      </Text>,
    );
    const textComponent = getByTestId('text');
    // then
    expect(textComponent.props.variant).toBe('heading3');
    expect(textComponent.props.style[0].fontSize).toBe(theme.fontSizes[4]);
    expect(textComponent.props.style[0].fontWeight).toBe(theme.fontWeights[1]);
    expect(textComponent.props.style[0].color).toBe(
      theme.colors.contentPrimary,
    );
  });

  // Subtitle01
  test('should render subtitle01Regular variant correctly', () => {
    // when
    const { getByTestId } = render(
      <Text testID="text" variant="subtitle01Regular">
        Test Text
      </Text>,
    );
    const textComponent = getByTestId('text');
    // then
    expect(textComponent.props.variant).toBe('subtitle01Regular');
    expect(textComponent.props.style[0].fontSize).toBe(theme.fontSizes[3]);
    expect(textComponent.props.style[0].fontWeight).toBe(theme.fontWeights[1]);
    expect(textComponent.props.style[0].color).toBe(
      theme.colors.contentPrimary,
    );
  });
  test('should render subtitle01Medium variant correctly', () => {
    // when
    const { getByTestId } = render(
      <Text testID="text" variant="subtitle01Medium">
        Test Text
      </Text>,
    );
    const textComponent = getByTestId('text');
    // then
    expect(textComponent.props.variant).toBe('subtitle01Medium');
    expect(textComponent.props.style[0].fontSize).toBe(theme.fontSizes[3]);
    expect(textComponent.props.style[0].fontWeight).toBe(theme.fontWeights[2]);
    expect(textComponent.props.style[0].color).toBe(
      theme.colors.contentPrimary,
    );
  });
  test('should render subtitle01Semibold variant correctly', () => {
    // when
    const { getByTestId } = render(
      <Text testID="text" variant="subtitle01Semibold">
        Test Text
      </Text>,
    );
    const textComponent = getByTestId('text');
    // then
    expect(textComponent.props.variant).toBe('subtitle01Semibold');
    expect(textComponent.props.style[0].fontSize).toBe(theme.fontSizes[3]);
    expect(textComponent.props.style[0].fontWeight).toBe(theme.fontWeights[3]);
    expect(textComponent.props.style[0].color).toBe(
      theme.colors.contentPrimary,
    );
  });
  test('should render subtitle01Bold variant correctly', () => {
    // when
    const { getByTestId } = render(
      <Text testID="text" variant="subtitle01Bold">
        Test Text
      </Text>,
    );
    const textComponent = getByTestId('text');
    // then
    expect(textComponent.props.variant).toBe('subtitle01Bold');
    expect(textComponent.props.style[0].fontSize).toBe(theme.fontSizes[3]);
    expect(textComponent.props.style[0].fontWeight).toBe(theme.fontWeights[4]);
    expect(textComponent.props.style[0].color).toBe(
      theme.colors.contentPrimary,
    );
  });

  // Subtitle02
  test('should render subtitle02Regular variant correctly', () => {
    // when
    const { getByTestId } = render(
      <Text testID="text" variant="subtitle02Regular">
        Test Text
      </Text>,
    );
    const textComponent = getByTestId('text');
    // then
    expect(textComponent.props.variant).toBe('subtitle02Regular');
    expect(textComponent.props.style[0].fontSize).toBe(theme.fontSizes[2]);
    expect(textComponent.props.style[0].fontWeight).toBe(theme.fontWeights[1]);
    expect(textComponent.props.style[0].color).toBe(
      theme.colors.contentPrimary,
    );
  });
  test('should render subtitle02Medium variant correctly', () => {
    // when
    const { getByTestId } = render(
      <Text testID="text" variant="subtitle02Medium">
        Test Text
      </Text>,
    );
    const textComponent = getByTestId('text');
    // then
    expect(textComponent.props.variant).toBe('subtitle02Medium');
    expect(textComponent.props.style[0].fontSize).toBe(theme.fontSizes[2]);
    expect(textComponent.props.style[0].fontWeight).toBe(theme.fontWeights[2]);
    expect(textComponent.props.style[0].color).toBe(
      theme.colors.contentPrimary,
    );
  });
  test('should render subtitle02Semibold variant correctly', () => {
    // when
    const { getByTestId } = render(
      <Text testID="text" variant="subtitle02Semibold">
        Test Text
      </Text>,
    );
    const textComponent = getByTestId('text');
    // then
    expect(textComponent.props.variant).toBe('subtitle02Semibold');
    expect(textComponent.props.style[0].fontSize).toBe(theme.fontSizes[2]);
    expect(textComponent.props.style[0].fontWeight).toBe(theme.fontWeights[3]);
    expect(textComponent.props.style[0].color).toBe(
      theme.colors.contentPrimary,
    );
  });
  test('should render subtitle02Bold variant correctly', () => {
    // when
    const { getByTestId } = render(
      <Text testID="text" variant="subtitle02Bold">
        Test Text
      </Text>,
    );
    const textComponent = getByTestId('text');
    // then
    expect(textComponent.props.variant).toBe('subtitle02Bold');
    expect(textComponent.props.style[0].fontSize).toBe(theme.fontSizes[2]);
    expect(textComponent.props.style[0].fontWeight).toBe(theme.fontWeights[4]);
    expect(textComponent.props.style[0].color).toBe(
      theme.colors.contentPrimary,
    );
  });

  // Subtitle03
  test('should render subtitle03Regular variant correctly', () => {
    // when
    const { getByTestId } = render(
      <Text testID="text" variant="subtitle03Regular">
        Test Text
      </Text>,
    );
    const textComponent = getByTestId('text');
    // then
    expect(textComponent.props.variant).toBe('subtitle03Regular');
    expect(textComponent.props.style[0].fontSize).toBe(theme.fontSizes[1]);
    expect(textComponent.props.style[0].fontWeight).toBe(theme.fontWeights[1]);
    expect(textComponent.props.style[0].color).toBe(
      theme.colors.contentPrimary,
    );
  });
  test('should render subtitle03Medium variant correctly', () => {
    // when
    const { getByTestId } = render(
      <Text testID="text" variant="subtitle03Medium">
        Test Text
      </Text>,
    );
    const textComponent = getByTestId('text');
    // then
    expect(textComponent.props.variant).toBe('subtitle03Medium');
    expect(textComponent.props.style[0].fontSize).toBe(theme.fontSizes[1]);
    expect(textComponent.props.style[0].fontWeight).toBe(theme.fontWeights[2]);
    expect(textComponent.props.style[0].color).toBe(
      theme.colors.contentPrimary,
    );
  });
  test('should render subtitle03Semibold variant correctly', () => {
    // when
    const { getByTestId } = render(
      <Text testID="text" variant="subtitle03Semibold">
        Test Text
      </Text>,
    );
    const textComponent = getByTestId('text');
    // then
    expect(textComponent.props.variant).toBe('subtitle03Semibold');
    expect(textComponent.props.style[0].fontSize).toBe(theme.fontSizes[1]);
    expect(textComponent.props.style[0].fontWeight).toBe(theme.fontWeights[3]);
    expect(textComponent.props.style[0].color).toBe(
      theme.colors.contentPrimary,
    );
  });
  test('should render subtitle03Bold variant correctly', () => {
    // when
    const { getByTestId } = render(
      <Text testID="text" variant="subtitle03Bold">
        Test Text
      </Text>,
    );
    const textComponent = getByTestId('text');
    // then
    expect(textComponent.props.variant).toBe('subtitle03Bold');
    expect(textComponent.props.style[0].fontSize).toBe(theme.fontSizes[1]);
    expect(textComponent.props.style[0].fontWeight).toBe(theme.fontWeights[4]);
    expect(textComponent.props.style[0].color).toBe(
      theme.colors.contentPrimary,
    );
  });

  // Subtitle04
  test('should render subtitle04Regular variant correctly', () => {
    // when
    const { getByTestId } = render(
      <Text testID="text" variant="subtitle04Regular">
        Test Text
      </Text>,
    );
    const textComponent = getByTestId('text');
    // then
    expect(textComponent.props.variant).toBe('subtitle04Regular');
    expect(textComponent.props.style[0].fontSize).toBe(theme.fontSizes[0]);
    expect(textComponent.props.style[0].fontWeight).toBe(theme.fontWeights[1]);
    expect(textComponent.props.style[0].color).toBe(
      theme.colors.contentPrimary,
    );
  });
  test('should render subtitle04Medium variant correctly', () => {
    // when
    const { getByTestId } = render(
      <Text testID="text" variant="subtitle04Medium">
        Test Text
      </Text>,
    );
    const textComponent = getByTestId('text');
    // then
    expect(textComponent.props.variant).toBe('subtitle04Medium');
    expect(textComponent.props.style[0].fontSize).toBe(theme.fontSizes[0]);
    expect(textComponent.props.style[0].fontWeight).toBe(theme.fontWeights[2]);
    expect(textComponent.props.style[0].color).toBe(
      theme.colors.contentPrimary,
    );
  });
  test('should render subtitle04Semibold variant correctly', () => {
    // when
    const { getByTestId } = render(
      <Text testID="text" variant="subtitle04Semibold">
        Test Text
      </Text>,
    );
    const textComponent = getByTestId('text');
    // then
    expect(textComponent.props.variant).toBe('subtitle04Semibold');
    expect(textComponent.props.style[0].fontSize).toBe(theme.fontSizes[0]);
    expect(textComponent.props.style[0].fontWeight).toBe(theme.fontWeights[3]);
    expect(textComponent.props.style[0].color).toBe(
      theme.colors.contentPrimary,
    );
  });
  test('should render subtitle04Bold variant correctly', () => {
    // when
    const { getByTestId } = render(
      <Text testID="text" variant="subtitle04Bold">
        Test Text
      </Text>,
    );
    const textComponent = getByTestId('text');
    // then
    expect(textComponent.props.variant).toBe('subtitle04Bold');
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
