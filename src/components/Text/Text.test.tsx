import React from 'react';
import theme from '../../theme';
import { render } from '../../test-utils';
import Text from './Text';

describe('Text', () => {
  test('should render text correctly', () => {
    // when
    const { toJSON } = render(
      <Text accessibilityLabel="text">testtesttest</Text>,
    );

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
    expect(textComponent.props.style[0].fontSize).toBe(32);
    expect(textComponent.props.style[0].fontWeight).toBe('400');
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
    expect(textComponent.props.style[0].fontSize).toBe(28);
    expect(textComponent.props.style[0].fontWeight).toBe('400');
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

    expect(textComponent.props.style[0].fontSize).toBe(24);
    expect(textComponent.props.style[0].fontWeight).toBe('400');
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
    expect(textComponent.props.style[0].fontSize).toBe(20);
    expect(textComponent.props.style[0].fontWeight).toBe('400');
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
    expect(textComponent.props.style[0].fontSize).toBe(20);
    expect(textComponent.props.style[0].fontWeight).toBe('500');
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
    expect(textComponent.props.style[0].fontSize).toBe(20);
    expect(textComponent.props.style[0].fontWeight).toBe('600');
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
    expect(textComponent.props.style[0].fontSize).toBe(20);
    expect(textComponent.props.style[0].fontWeight).toBe('700');
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
    expect(textComponent.props.style[0].fontSize).toBe(16);
    expect(textComponent.props.style[0].fontWeight).toBe('400');
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
    expect(textComponent.props.style[0].fontSize).toBe(16);
    expect(textComponent.props.style[0].fontWeight).toBe('500');
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
    expect(textComponent.props.style[0].fontSize).toBe(16);
    expect(textComponent.props.style[0].fontWeight).toBe('600');
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
    expect(textComponent.props.style[0].fontSize).toBe(16);
    expect(textComponent.props.style[0].fontWeight).toBe('700');
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
    expect(textComponent.props.style[0].fontSize).toBe(14);
    expect(textComponent.props.style[0].fontWeight).toBe('400');
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
    expect(textComponent.props.style[0].fontSize).toBe(14);
    expect(textComponent.props.style[0].fontWeight).toBe('500');
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
    expect(textComponent.props.style[0].fontSize).toBe(14);
    expect(textComponent.props.style[0].fontWeight).toBe('600');
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
    expect(textComponent.props.style[0].fontSize).toBe(14);
    expect(textComponent.props.style[0].fontWeight).toBe('700');
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
    expect(textComponent.props.style[0].fontSize).toBe(12);
    expect(textComponent.props.style[0].fontWeight).toBe('400');
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
    expect(textComponent.props.style[0].fontSize).toBe(12);
    expect(textComponent.props.style[0].fontWeight).toBe('500');
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
    expect(textComponent.props.style[0].fontSize).toBe(12);
    expect(textComponent.props.style[0].fontWeight).toBe('600');
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
    expect(textComponent.props.style[0].fontSize).toBe(12);
    expect(textComponent.props.style[0].fontWeight).toBe('700');
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
    expect(textComponent.props.style[0].fontSize).toBe(14);
    expect(textComponent.props.style[0].fontWeight).toBe('400');
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
    expect(textComponent.props.style[0].fontSize).toBe(14);
    expect(textComponent.props.style[0].fontWeight).toBe('400');
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
    expect(textComponent.props.style[0].fontSize).toBe(14);
    expect(textComponent.props.style[0].fontWeight).toBe('500');
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
    expect(textComponent.props.style[0].fontSize).toBe(14);
    expect(textComponent.props.style[0].fontWeight).toBe('400');
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
    expect(textComponent.props.style[0].fontSize).toBe(12);
    expect(textComponent.props.style[0].fontWeight).toBe('400');
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
    expect(textComponent.props.style[0].fontSize).toBe(12);
    expect(textComponent.props.style[0].fontWeight).toBe('500');
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
    expect(textComponent.props.style[0].fontSize).toBe(12);
    expect(textComponent.props.style[0].fontWeight).toBe('400');
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
    expect(textComponent.props.style[0].fontSize).toBe(12);
    expect(textComponent.props.style[0].fontWeight).toBe('500');
    expect(textComponent.props.style[0].textDecorationLine).toBe('underline');
    expect(textComponent.props.style[0].color).toBe(
      theme.colors.contentPrimary,
    );
  });
  //
});
