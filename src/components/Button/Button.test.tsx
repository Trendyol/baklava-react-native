import React from 'react';
import theme from '../../theme';
import { fireEvent, render } from '../../test-utils';
import Button from './Button';
import Text from '../Text/Text';
import { ReactTestInstance } from 'react-test-renderer';

describe('Button', () => {
  test('should render button correctly', () => {
    // when
    const { toJSON } = render(<Button label="testtesttest" />);

    // then
    expect(toJSON()).toMatchSnapshot();
  });

  test('should render given text correctly', () => {
    // when
    const { getByTestId } = render(
      <Button testID="button" label="testtesttest" />,
    );
    const buttonText = getByTestId('button-text');

    // then
    expect(buttonText.props.children).toBe('testtesttest');
  });

  test('should render given kind and color correctly', () => {
    // when
    const { getByTestId } = render(<Button testID="button" kind="success" />);
    const buttonComponent = getByTestId('button')
      .children[0] as ReactTestInstance;

    // then
    expect(buttonComponent.props.kind).toBe('success');
    expect(buttonComponent.props.color).toBe('white');
    expect(buttonComponent.props.backgroundColor).toBe('successKey');
  });

  test('should render given font correctly', () => {
    // when
    const { getByTestId } = render(
      <Button testID="button" size="l" label="test" />,
    );
    const buttonComponent = getByTestId('button')
      .children[0] as ReactTestInstance;

    // then
    const textComponent = buttonComponent.props
      .children[1] as ReactTestInstance;
    expect(textComponent.props.variant).toBe('subtitle02Medium');
    expect(textComponent.props.color).toBe('white');
  });

  test('should render icon correctly', () => {
    // when
    const { getByTestId } = render(
      <Button testID="button" size="l" label="test" icon="check" />,
    );
    const buttonIcon = getByTestId('button-icon');

    // then
    expect(buttonIcon).toBeTruthy();
  });

  test('should not render icon component', () => {
    // when
    const { queryByTestId } = render(
      <Button testID="button" size="l" label="test" />,
    );
    const buttonIcon = queryByTestId('button-icon');

    // then
    expect(buttonIcon).not.toBeTruthy();
  });

  test('should render icon variant is transparent', () => {
    // when
    const { getByTestId } = render(
      <Button
        testID="button"
        variant="transparent"
        size="l"
        label="test"
        icon="check"
      />,
    );
    const buttonIcon = getByTestId('button-icon');

    // then
    expect(buttonIcon).toBeTruthy();
    expect(buttonIcon.props.style[0].backgroundColor).toBe(
      theme.colors.transparent,
    );
  });

  test('should render icon variant is transparent when clicked', () => {
    // when
    const { getByTestId } = render(
      <Button
        testID="button"
        variant="transparent"
        size="l"
        label="test"
        icon="check"
      />,
    );
    const buttonIcon = getByTestId('button');
    fireEvent(buttonIcon, 'pressIn');

    // then
    expect(buttonIcon).toBeTruthy();
    expect(buttonIcon.props.children[0].props.backgroundColor).toBe(
      'transparentHighlight',
    );
  });

  test('should press button', () => {
    // given
    const onPress = jest.fn();

    // when
    const { getByTestId } = render(
      <Button testID="button" size="l" label="test" onPress={onPress} />,
    );
    const buttonComponent = getByTestId('button');
    fireEvent.press(buttonComponent);

    // then
    expect(onPress).toBeCalledTimes(1);
  });

  test('should render given default values correctly', () => {
    // when
    const { getByTestId } = render(
      <Button testID="button" label="testtesttest" />,
    );
    const buttonComponent = getByTestId('button')
      .children[0] as ReactTestInstance;

    // then
    expect(buttonComponent.props.variant).toBe('primary');
    expect(buttonComponent.props.size).toBe('m');
    expect(buttonComponent.props.kind).toBe('default');
  });

  test('should render given disabled correctly', () => {
    // when
    const { getByTestId } = render(
      <Button testID="button" label="testtesttest" disabled />,
    );
    const buttonComponent = getByTestId('button');
    const textComponent = getByTestId('button-text');

    // then
    expect(buttonComponent.props.accessibilityState.disabled).toBeTruthy();
    expect(textComponent.props.style[0].color).toBe(
      theme.colors.neutralLighter,
    );
  });

  test('should text color remain white on default kind and secondary variant correctly', () => {
    // when
    const { getByTestId } = render(
      <Button
        testID="button"
        label="testtesttest"
        variant="secondary"
        isPressed={true}
        testOnly_pressed={true}
      />,
    );
    const textComponent = getByTestId('button-text');

    // then
    expect(textComponent.props.style[0].color).toBe(theme.colors.neutralFull);
  });

  test('should render given filled correctly', () => {
    // when
    const { getByTestId } = render(
      <Button
        testID="button"
        label="testtesttest"
        disabled={true}
        filled={true}
      />,
    );
    const buttonComponent = getByTestId('button')
      .children[0] as ReactTestInstance;

    // then
    expect(buttonComponent.props.alignSelf).toBe('stretch');
  });

  test('should render custom children correctly', () => {
    const { getByText } = render(
      <Button testID="button">
        <Text>Custom Content</Text>
      </Button>,
    );
    expect(getByText('Custom Content')).toBeTruthy();
  });
});
