import React from 'react';
import theme from '../../theme';
import { fireEvent, render } from '../../test-utils';
import TextLink from './TextLink';

describe('TextLink', () => {
  test('should render textLink correctly', () => {
    // when
    const { toJSON } = render(
      <TextLink accessibilityLabel="text">test</TextLink>,
    );

    // then
    expect(toJSON()).toMatchSnapshot();
  });

  test('should not render given textLink correctly', () => {
    // when
    const { queryByTestId } = render(<TextLink testID="textLink" />);
    const textLinkComponent = queryByTestId('textLink');
    // then
    expect(textLinkComponent).toBe(null);
  });

  test('should render given textLink correctly', () => {
    // when
    const { getByTestId } = render(
      <TextLink testID="textLink">Test Text</TextLink>,
    );
    const textLinkComponent = getByTestId('textLink');
    // then
    expect(textLinkComponent.props.children).toBe('Test Text');
  });

  test('should render variant correctly when isPressed true', () => {
    // when
    const { getByTestId } = render(
      <TextLink testID="textLink" variant="heading1" isPressed>
        Test Text
      </TextLink>,
    );
    const textLinkComponent = getByTestId('textLink');
    // then
    expect(textLinkComponent.props.style[0].fontSize).toBe(30);
    expect(textLinkComponent.props.style[0].lineHeight).toBe(36);
    expect(textLinkComponent.props.style[0].fontWeight).toBe('400');
    expect(textLinkComponent.props.style[0].color).toBe(
      theme.colors.primaryColor,
    );
  });

  test('should clicked when pressed', () => {
    // given
    const onPress = jest.fn();

    // when
    const { getByTestId } = render(
      <TextLink
        testID="textLink"
        variant="heading1"
        isPressed
        onPress={onPress}>
        Test Text
      </TextLink>,
    );

    const textLinkComponent = getByTestId('textLink');
    fireEvent.press(textLinkComponent);

    // then
    expect(textLinkComponent.props.style[0].fontSize).toBe(30);
    expect(textLinkComponent.props.style[0].lineHeight).toBe(36);
    expect(textLinkComponent.props.style[0].fontWeight).toBe('400');
    expect(textLinkComponent.props.style[0].color).toBe(
      theme.colors.primaryColor,
    );
    expect(onPress).toBeCalledTimes(1);
  });

  // Heading
  test('should render heading1 variant correctly', () => {
    // when
    const { getByTestId } = render(
      <TextLink testID="textLink" variant="heading1">
        Test Text
      </TextLink>,
    );
    const textLinkComponent = getByTestId('textLink');
    // then
    expect(textLinkComponent.props.style[0].fontSize).toBe(30);
    expect(textLinkComponent.props.style[0].lineHeight).toBe(36);
    expect(textLinkComponent.props.style[0].fontWeight).toBe('400');
    expect(textLinkComponent.props.style[0].color).toBe(
      theme.colors.neutralDarker,
    );
  });
  test('should render heading2 variant correctly', () => {
    // when
    const { getByTestId } = render(
      <TextLink testID="textLink" variant="heading2">
        Test Text
      </TextLink>,
    );
    const textLinkComponent = getByTestId('textLink');
    // then
    expect(textLinkComponent.props.style[0].fontSize).toBe(28);
    expect(textLinkComponent.props.style[0].lineHeight).toBe(32);
    expect(textLinkComponent.props.style[0].fontWeight).toBe('400');
    expect(textLinkComponent.props.style[0].color).toBe(
      theme.colors.neutralDarker,
    );
  });

  test('should render heading3 variant correctly', () => {
    // when
    const { getByTestId } = render(
      <TextLink testID="textLink" variant="heading3">
        Test Text
      </TextLink>,
    );
    const textLinkComponent = getByTestId('textLink');
    // then

    expect(textLinkComponent.props.style[0].fontSize).toBe(24);
    expect(textLinkComponent.props.style[0].lineHeight).toBe(28);
    expect(textLinkComponent.props.style[0].fontWeight).toBe('400');
    expect(textLinkComponent.props.style[0].color).toBe(
      theme.colors.neutralDarker,
    );
  });

  // Subtitle01
  test('should render subtitle01Regular variant correctly', () => {
    // when
    const { getByTestId } = render(
      <TextLink testID="textLink" variant="subtitle01Regular">
        Test Text
      </TextLink>,
    );
    const textLinkComponent = getByTestId('textLink');
    // then
    expect(textLinkComponent.props.style[0].fontSize).toBe(20);
    expect(textLinkComponent.props.style[0].fontWeight).toBe('400');
    expect(textLinkComponent.props.style[0].color).toBe(
      theme.colors.neutralDarker,
    );
  });
  test('should render subtitle01Medium variant correctly', () => {
    // when
    const { getByTestId } = render(
      <TextLink testID="textLink" variant="subtitle01Medium">
        Test Text
      </TextLink>,
    );
    const textLinkComponent = getByTestId('textLink');
    // then
    expect(textLinkComponent.props.style[0].fontSize).toBe(20);
    expect(textLinkComponent.props.style[0].fontWeight).toBe('500');
    expect(textLinkComponent.props.style[0].color).toBe(
      theme.colors.neutralDarker,
    );
  });
  test('should render subtitle01Semibold variant correctly', () => {
    // when
    const { getByTestId } = render(
      <TextLink testID="textLink" variant="subtitle01Semibold">
        Test Text
      </TextLink>,
    );
    const textLinkComponent = getByTestId('textLink');
    // then
    expect(textLinkComponent.props.style[0].fontSize).toBe(20);
    expect(textLinkComponent.props.style[0].fontWeight).toBe('600');
    expect(textLinkComponent.props.style[0].color).toBe(
      theme.colors.neutralDarker,
    );
  });
  test('should render subtitle01Bold variant correctly', () => {
    // when
    const { getByTestId } = render(
      <TextLink testID="textLink" variant="subtitle01Bold">
        Test Text
      </TextLink>,
    );
    const textLinkComponent = getByTestId('textLink');
    // then
    expect(textLinkComponent.props.style[0].fontSize).toBe(20);
    expect(textLinkComponent.props.style[0].fontWeight).toBe('700');
    expect(textLinkComponent.props.style[0].color).toBe(
      theme.colors.neutralDarker,
    );
  });

  // Subtitle1
  test('should render subtitle1Regular variant correctly', () => {
    // when
    const { getByTestId } = render(
      <TextLink testID="textLink" variant="subtitle1Regular">
        Test Text
      </TextLink>,
    );
    const textLinkComponent = getByTestId('textLink');
    // then
    expect(textLinkComponent.props.style[0].fontSize).toBe(20);
    expect(textLinkComponent.props.style[0].fontWeight).toBe('400');
    expect(textLinkComponent.props.style[0].color).toBe(
      theme.colors.neutralDarker,
    );
  });
  test('should render subtitle1Medium variant correctly', () => {
    // when
    const { getByTestId } = render(
      <TextLink testID="textLink" variant="subtitle1Medium">
        Test Text
      </TextLink>,
    );
    const textLinkComponent = getByTestId('textLink');
    // then
    expect(textLinkComponent.props.style[0].fontSize).toBe(20);
    expect(textLinkComponent.props.style[0].fontWeight).toBe('500');
    expect(textLinkComponent.props.style[0].color).toBe(
      theme.colors.neutralDarker,
    );
  });
  test('should render subtitle1Semibold variant correctly', () => {
    // when
    const { getByTestId } = render(
      <TextLink testID="textLink" variant="subtitle1Semibold">
        Test Text
      </TextLink>,
    );
    const textLinkComponent = getByTestId('textLink');
    // then
    expect(textLinkComponent.props.style[0].fontSize).toBe(20);
    expect(textLinkComponent.props.style[0].fontWeight).toBe('600');
    expect(textLinkComponent.props.style[0].color).toBe(
      theme.colors.neutralDarker,
    );
  });
  test('should render subtitle1Bold variant correctly', () => {
    // when
    const { getByTestId } = render(
      <TextLink testID="textLink" variant="subtitle1Bold">
        Test Text
      </TextLink>,
    );
    const textLinkComponent = getByTestId('textLink');
    // then
    expect(textLinkComponent.props.style[0].fontSize).toBe(20);
    expect(textLinkComponent.props.style[0].fontWeight).toBe('700');
    expect(textLinkComponent.props.style[0].color).toBe(
      theme.colors.neutralDarker,
    );
  });

  // Subtitle02
  test('should render subtitle02Regular variant correctly', () => {
    // when
    const { getByTestId } = render(
      <TextLink testID="textLink" variant="subtitle02Regular">
        Test Text
      </TextLink>,
    );
    const textLinkComponent = getByTestId('textLink');
    // then
    expect(textLinkComponent.props.style[0].fontSize).toBe(16);
    expect(textLinkComponent.props.style[0].fontWeight).toBe('400');
    expect(textLinkComponent.props.style[0].color).toBe(
      theme.colors.neutralDarker,
    );
  });
  test('should render subtitle02Medium variant correctly', () => {
    // when
    const { getByTestId } = render(
      <TextLink testID="textLink" variant="subtitle02Medium">
        Test Text
      </TextLink>,
    );
    const textLinkComponent = getByTestId('textLink');
    // then
    expect(textLinkComponent.props.style[0].fontSize).toBe(16);
    expect(textLinkComponent.props.style[0].fontWeight).toBe('500');
    expect(textLinkComponent.props.style[0].color).toBe(
      theme.colors.neutralDarker,
    );
  });
  test('should render subtitle02Semibold variant correctly', () => {
    // when
    const { getByTestId } = render(
      <TextLink testID="textLink" variant="subtitle02Semibold">
        Test Text
      </TextLink>,
    );
    const textLinkComponent = getByTestId('textLink');
    // then
    expect(textLinkComponent.props.style[0].fontSize).toBe(16);
    expect(textLinkComponent.props.style[0].fontWeight).toBe('600');
    expect(textLinkComponent.props.style[0].color).toBe(
      theme.colors.neutralDarker,
    );
  });
  test('should render subtitle02Bold variant correctly', () => {
    // when
    const { getByTestId } = render(
      <TextLink testID="textLink" variant="subtitle02Bold">
        Test Text
      </TextLink>,
    );
    const textLinkComponent = getByTestId('textLink');
    // then
    expect(textLinkComponent.props.style[0].fontSize).toBe(16);
    expect(textLinkComponent.props.style[0].fontWeight).toBe('700');
    expect(textLinkComponent.props.style[0].color).toBe(
      theme.colors.neutralDarker,
    );
  });

  // Subtitle2
  test('should render subtitle2Regular variant correctly', () => {
    // when
    const { getByTestId } = render(
      <TextLink testID="textLink" variant="subtitle2Regular">
        Test Text
      </TextLink>,
    );
    const textLinkComponent = getByTestId('textLink');
    // then
    expect(textLinkComponent.props.style[0].fontSize).toBe(16);
    expect(textLinkComponent.props.style[0].fontWeight).toBe('400');
    expect(textLinkComponent.props.style[0].color).toBe(
      theme.colors.neutralDarker,
    );
  });
  test('should render subtitle2Medium variant correctly', () => {
    // when
    const { getByTestId } = render(
      <TextLink testID="textLink" variant="subtitle2Medium">
        Test Text
      </TextLink>,
    );
    const textLinkComponent = getByTestId('textLink');
    // then
    expect(textLinkComponent.props.style[0].fontSize).toBe(16);
    expect(textLinkComponent.props.style[0].fontWeight).toBe('500');
    expect(textLinkComponent.props.style[0].color).toBe(
      theme.colors.neutralDarker,
    );
  });
  test('should render subtitle2Semibold variant correctly', () => {
    // when
    const { getByTestId } = render(
      <TextLink testID="textLink" variant="subtitle2Semibold">
        Test Text
      </TextLink>,
    );
    const textLinkComponent = getByTestId('textLink');
    // then
    expect(textLinkComponent.props.style[0].fontSize).toBe(16);
    expect(textLinkComponent.props.style[0].fontWeight).toBe('600');
    expect(textLinkComponent.props.style[0].color).toBe(
      theme.colors.neutralDarker,
    );
  });
  test('should render subtitle2Bold variant correctly', () => {
    // when
    const { getByTestId } = render(
      <TextLink testID="textLink" variant="subtitle2Bold">
        Test Text
      </TextLink>,
    );
    const textLinkComponent = getByTestId('textLink');
    // then
    expect(textLinkComponent.props.style[0].fontSize).toBe(16);
    expect(textLinkComponent.props.style[0].fontWeight).toBe('700');
    expect(textLinkComponent.props.style[0].color).toBe(
      theme.colors.neutralDarker,
    );
  });

  // Subtitle03
  test('should render subtitle03Regular variant correctly', () => {
    // when
    const { getByTestId } = render(
      <TextLink testID="textLink" variant="subtitle03Regular">
        Test Text
      </TextLink>,
    );
    const textLinkComponent = getByTestId('textLink');
    // then
    expect(textLinkComponent.props.style[0].fontSize).toBe(14);
    expect(textLinkComponent.props.style[0].fontWeight).toBe('400');
    expect(textLinkComponent.props.style[0].color).toBe(
      theme.colors.neutralDarker,
    );
  });
  test('should render subtitle03Medium variant correctly', () => {
    // when
    const { getByTestId } = render(
      <TextLink testID="textLink" variant="subtitle03Medium">
        Test Text
      </TextLink>,
    );
    const textLinkComponent = getByTestId('textLink');
    // then
    expect(textLinkComponent.props.style[0].fontSize).toBe(14);
    expect(textLinkComponent.props.style[0].fontWeight).toBe('500');
    expect(textLinkComponent.props.style[0].color).toBe(
      theme.colors.neutralDarker,
    );
  });
  test('should render subtitle03Semibold variant correctly', () => {
    // when
    const { getByTestId } = render(
      <TextLink testID="textLink" variant="subtitle03Semibold">
        Test Text
      </TextLink>,
    );
    const textLinkComponent = getByTestId('textLink');
    // then
    expect(textLinkComponent.props.style[0].fontSize).toBe(14);
    expect(textLinkComponent.props.style[0].fontWeight).toBe('600');
    expect(textLinkComponent.props.style[0].color).toBe(
      theme.colors.neutralDarker,
    );
  });
  test('should render subtitle03Bold variant correctly', () => {
    // when
    const { getByTestId } = render(
      <TextLink testID="textLink" variant="subtitle03Bold">
        Test Text
      </TextLink>,
    );
    const textLinkComponent = getByTestId('textLink');
    // then
    expect(textLinkComponent.props.style[0].fontSize).toBe(14);
    expect(textLinkComponent.props.style[0].fontWeight).toBe('700');
    expect(textLinkComponent.props.style[0].color).toBe(
      theme.colors.neutralDarker,
    );
  });

  // Subtitle3
  test('should render subtitle3Regular variant correctly', () => {
    // when
    const { getByTestId } = render(
      <TextLink testID="textLink" variant="subtitle3Regular">
        Test Text
      </TextLink>,
    );
    const textLinkComponent = getByTestId('textLink');
    // then
    expect(textLinkComponent.props.style[0].fontSize).toBe(14);
    expect(textLinkComponent.props.style[0].fontWeight).toBe('400');
    expect(textLinkComponent.props.style[0].color).toBe(
      theme.colors.neutralDarker,
    );
  });
  test('should render subtitle3Medium variant correctly', () => {
    // when
    const { getByTestId } = render(
      <TextLink testID="textLink" variant="subtitle3Medium">
        Test Text
      </TextLink>,
    );
    const textLinkComponent = getByTestId('textLink');
    // then
    expect(textLinkComponent.props.style[0].fontSize).toBe(14);
    expect(textLinkComponent.props.style[0].fontWeight).toBe('500');
    expect(textLinkComponent.props.style[0].color).toBe(
      theme.colors.neutralDarker,
    );
  });
  test('should render subtitle3Semibold variant correctly', () => {
    // when
    const { getByTestId } = render(
      <TextLink testID="textLink" variant="subtitle3Semibold">
        Test Text
      </TextLink>,
    );
    const textLinkComponent = getByTestId('textLink');
    // then
    expect(textLinkComponent.props.style[0].fontSize).toBe(14);
    expect(textLinkComponent.props.style[0].fontWeight).toBe('600');
    expect(textLinkComponent.props.style[0].color).toBe(
      theme.colors.neutralDarker,
    );
  });
  test('should render subtitle3Bold variant correctly', () => {
    // when
    const { getByTestId } = render(
      <TextLink testID="textLink" variant="subtitle3Bold">
        Test Text
      </TextLink>,
    );
    const textLinkComponent = getByTestId('textLink');
    // then
    expect(textLinkComponent.props.style[0].fontSize).toBe(14);
    expect(textLinkComponent.props.style[0].fontWeight).toBe('700');
    expect(textLinkComponent.props.style[0].color).toBe(
      theme.colors.neutralDarker,
    );
  });

  // Subtitle04
  test('should render subtitle04Regular variant correctly', () => {
    // when
    const { getByTestId } = render(
      <TextLink testID="textLink" variant="subtitle04Regular">
        Test Text
      </TextLink>,
    );
    const textLinkComponent = getByTestId('textLink');
    // then
    expect(textLinkComponent.props.style[0].fontSize).toBe(12);
    expect(textLinkComponent.props.style[0].fontWeight).toBe('400');
    expect(textLinkComponent.props.style[0].color).toBe(
      theme.colors.neutralDarker,
    );
  });
  test('should render subtitle04Medium variant correctly', () => {
    // when
    const { getByTestId } = render(
      <TextLink testID="textLink" variant="subtitle04Medium">
        Test Text
      </TextLink>,
    );
    const textLinkComponent = getByTestId('textLink');
    // then
    expect(textLinkComponent.props.style[0].fontSize).toBe(12);
    expect(textLinkComponent.props.style[0].fontWeight).toBe('500');
    expect(textLinkComponent.props.style[0].color).toBe(
      theme.colors.neutralDarker,
    );
  });
  test('should render subtitle04Semibold variant correctly', () => {
    // when
    const { getByTestId } = render(
      <TextLink testID="textLink" variant="subtitle04Semibold">
        Test Text
      </TextLink>,
    );
    const textLinkComponent = getByTestId('textLink');
    // then
    expect(textLinkComponent.props.style[0].fontSize).toBe(12);
    expect(textLinkComponent.props.style[0].fontWeight).toBe('600');
    expect(textLinkComponent.props.style[0].color).toBe(
      theme.colors.neutralDarker,
    );
  });
  test('should render subtitle04Bold variant correctly', () => {
    // when
    const { getByTestId } = render(
      <TextLink testID="textLink" variant="subtitle04Bold">
        Test Text
      </TextLink>,
    );
    const textLinkComponent = getByTestId('textLink');
    // then
    expect(textLinkComponent.props.style[0].fontSize).toBe(12);
    expect(textLinkComponent.props.style[0].fontWeight).toBe('700');
    expect(textLinkComponent.props.style[0].color).toBe(
      theme.colors.neutralDarker,
    );
  });

  // Subtitle4
  test('should render subtitle4Regular variant correctly', () => {
    // when
    const { getByTestId } = render(
      <TextLink testID="textLink" variant="subtitle4Regular">
        Test Text
      </TextLink>,
    );
    const textLinkComponent = getByTestId('textLink');
    // then
    expect(textLinkComponent.props.style[0].fontSize).toBe(12);
    expect(textLinkComponent.props.style[0].fontWeight).toBe('400');
    expect(textLinkComponent.props.style[0].color).toBe(
      theme.colors.neutralDarker,
    );
  });
  test('should render subtitle4Medium variant correctly', () => {
    // when
    const { getByTestId } = render(
      <TextLink testID="textLink" variant="subtitle4Medium">
        Test Text
      </TextLink>,
    );
    const textLinkComponent = getByTestId('textLink');
    // then
    expect(textLinkComponent.props.style[0].fontSize).toBe(12);
    expect(textLinkComponent.props.style[0].fontWeight).toBe('500');
    expect(textLinkComponent.props.style[0].color).toBe(
      theme.colors.neutralDarker,
    );
  });
  test('should render subtitle4Semibold variant correctly', () => {
    // when
    const { getByTestId } = render(
      <TextLink testID="textLink" variant="subtitle4Semibold">
        Test Text
      </TextLink>,
    );
    const textLinkComponent = getByTestId('textLink');
    // then
    expect(textLinkComponent.props.style[0].fontSize).toBe(12);
    expect(textLinkComponent.props.style[0].fontWeight).toBe('600');
    expect(textLinkComponent.props.style[0].color).toBe(
      theme.colors.neutralDarker,
    );
  });
  test('should render subtitle4Bold variant correctly', () => {
    // when
    const { getByTestId } = render(
      <TextLink testID="textLink" variant="subtitle4Bold">
        Test Text
      </TextLink>,
    );
    const textLinkComponent = getByTestId('textLink');
    // then
    expect(textLinkComponent.props.style[0].fontSize).toBe(12);
    expect(textLinkComponent.props.style[0].fontWeight).toBe('700');
    expect(textLinkComponent.props.style[0].color).toBe(
      theme.colors.neutralDarker,
    );
  });

  // Body
  test('should render bodyText variant correctly', () => {
    // when
    const { getByTestId } = render(
      <TextLink testID="textLink" variant="bodyText">
        Test Text
      </TextLink>,
    );
    const textLinkComponent = getByTestId('textLink');
    // then
    expect(textLinkComponent.props.style[0].fontSize).toBe(14);
    expect(textLinkComponent.props.style[0].fontWeight).toBe('400');
    expect(textLinkComponent.props.style[0].color).toBe(
      theme.colors.neutralDarker,
    );
  });

  test('should render body1 variant correctly', () => {
    // when
    const { getByTestId } = render(
      <TextLink testID="textLink" variant="body1">
        Test Text
      </TextLink>,
    );
    const textLinkComponent = getByTestId('textLink');
    // then
    expect(textLinkComponent.props.style[0].fontSize).toBe(16);
    expect(textLinkComponent.props.style[0].lineHeight).toBe(18);
    expect(textLinkComponent.props.style[0].fontWeight).toBe('400');
    expect(textLinkComponent.props.style[0].color).toBe(
      theme.colors.neutralDarker,
    );
  });

  test('should render body2 variant correctly', () => {
    // when
    const { getByTestId } = render(
      <TextLink testID="textLink" variant="body2">
        Test Text
      </TextLink>,
    );
    const textLinkComponent = getByTestId('textLink');
    // then
    expect(textLinkComponent.props.style[0].fontSize).toBe(14);
    expect(textLinkComponent.props.style[0].lineHeight).toBe(16);
    expect(textLinkComponent.props.style[0].fontWeight).toBe('400');
    expect(textLinkComponent.props.style[0].color).toBe(
      theme.colors.neutralDarker,
    );
  });

  test('should render body3 variant correctly', () => {
    // when
    const { getByTestId } = render(
      <TextLink testID="textLink" variant="body3">
        Test Text
      </TextLink>,
    );
    const textLinkComponent = getByTestId('textLink');
    // then
    expect(textLinkComponent.props.style[0].fontSize).toBe(12);
    expect(textLinkComponent.props.style[0].lineHeight).toBe(14);
    expect(textLinkComponent.props.style[0].fontWeight).toBe('400');
    expect(textLinkComponent.props.style[0].color).toBe(
      theme.colors.neutralDarker,
    );
  });

  test('should render bodyUnderline variant correctly', () => {
    // when
    const { getByTestId } = render(
      <TextLink testID="textLink" variant="bodyUnderline">
        Test Text
      </TextLink>,
    );
    const textLinkComponent = getByTestId('textLink');
    // then
    expect(textLinkComponent.props.style[0].fontSize).toBe(14);
    expect(textLinkComponent.props.style[0].fontWeight).toBe('400');
    expect(textLinkComponent.props.style[0].textDecorationLine).toBe(
      'underline',
    );
    expect(textLinkComponent.props.style[0].color).toBe(
      theme.colors.neutralDarker,
    );
  });
  test('should render bodyTextLink variant correctly', () => {
    // when
    const { getByTestId } = render(
      <TextLink testID="textLink" variant="bodyTextLink">
        Test Text
      </TextLink>,
    );
    const textLinkComponent = getByTestId('textLink');
    // then
    expect(textLinkComponent.props.style[0].fontSize).toBe(14);
    expect(textLinkComponent.props.style[0].fontWeight).toBe('500');
    expect(textLinkComponent.props.style[0].textDecorationLine).toBe(
      'underline',
    );
    expect(textLinkComponent.props.style[0].color).toBe(
      theme.colors.neutralDarker,
    );
  });
  test('should render bodyLongText variant correctly', () => {
    // when
    const { getByTestId } = render(
      <TextLink testID="textLink" variant="bodyLongText">
        Test Text
      </TextLink>,
    );
    const textLinkComponent = getByTestId('textLink');
    // then
    expect(textLinkComponent.props.style[0].fontSize).toBe(14);
    expect(textLinkComponent.props.style[0].fontWeight).toBe('400');
    expect(textLinkComponent.props.style[0].color).toBe(
      theme.colors.neutralDarker,
    );
  });

  // Caption
  test('should render caption variant correctly', () => {
    // when
    const { getByTestId } = render(
      <TextLink testID="textLink" variant="caption">
        Test Text
      </TextLink>,
    );
    const textLinkComponent = getByTestId('textLink');
    // then
    expect(textLinkComponent.props.style[0].fontSize).toBe(12);
    expect(textLinkComponent.props.style[0].lineHeight).toBe(14);
    expect(textLinkComponent.props.style[0].fontWeight).toBe('500');
    expect(textLinkComponent.props.style[0].color).toBe(
      theme.colors.neutralDarker,
    );
  });
  test('should render captionText variant correctly', () => {
    // when
    const { getByTestId } = render(
      <TextLink testID="textLink" variant="captionText">
        Test Text
      </TextLink>,
    );
    const textLinkComponent = getByTestId('textLink');
    // then
    expect(textLinkComponent.props.style[0].fontSize).toBe(12);
    expect(textLinkComponent.props.style[0].lineHeight).toBe(14);
    expect(textLinkComponent.props.style[0].fontWeight).toBe('500');
    expect(textLinkComponent.props.style[0].color).toBe(
      theme.colors.neutralDarker,
    );
  });
  test('should render captionMedium variant correctly', () => {
    // when
    const { getByTestId } = render(
      <TextLink testID="textLink" variant="captionMedium">
        Test Text
      </TextLink>,
    );
    const textLinkComponent = getByTestId('textLink');
    // then
    expect(textLinkComponent.props.style[0].fontSize).toBe(12);
    expect(textLinkComponent.props.style[0].fontWeight).toBe('500');
    expect(textLinkComponent.props.style[0].color).toBe(
      theme.colors.neutralDarker,
    );
  });
  test('should render captionLongText variant correctly', () => {
    // when
    const { getByTestId } = render(
      <TextLink testID="textLink" variant="captionLongText">
        Test Text
      </TextLink>,
    );
    const textLinkComponent = getByTestId('textLink');
    // then
    expect(textLinkComponent.props.style[0].fontSize).toBe(12);
    expect(textLinkComponent.props.style[0].fontWeight).toBe('400');
    expect(textLinkComponent.props.style[0].color).toBe(
      theme.colors.neutralDarker,
    );
  });
  test('should render captionTextLink variant correctly', () => {
    // when
    const { getByTestId } = render(
      <TextLink testID="textLink" variant="captionTextLink">
        Test Text
      </TextLink>,
    );
    const textLinkComponent = getByTestId('textLink');
    // then
    expect(textLinkComponent.props.style[0].fontSize).toBe(12);
    expect(textLinkComponent.props.style[0].fontWeight).toBe('500');
    expect(textLinkComponent.props.style[0].textDecorationLine).toBe(
      'underline',
    );
    expect(textLinkComponent.props.style[0].color).toBe(
      theme.colors.neutralDarker,
    );
  });
  //
});
