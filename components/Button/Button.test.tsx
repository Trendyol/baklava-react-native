import React from 'react';
import { theme } from '../../src';
import { fireEvent, render } from '../../src/testUtils';
import Button from '../Button/Button';
import { ReactTestInstance } from 'react-test-renderer';

describe('Button', () => {
  test('should render button correctly', () => {
    // when
    const { toJSON } = render(<Button text="testtesttest" />);

    // then
    expect(toJSON()).toMatchSnapshot();
  });

  test('should render given text correctly', () => {
    // when
    const { getByTestId } = render(
      <Button testID="button" text="testtesttest" />,
    );
    const buttonComponent = getByTestId('button');

    // then
    expect(buttonComponent.props.text).toBe('testtesttest');
  });

  test('should render given variant and color correctly', () => {
    // when
    const { getByTestId } = render(
      <Button testID="button" variant="success" />,
    );
    const buttonComponent = getByTestId('button');

    // then
    expect(buttonComponent.props.variant).toBe('success');
    expect(buttonComponent.props.style[0].color).toBe(theme.colors.white);
    expect(buttonComponent.props.style[0].backgroundColor).toBe(
      theme.colors.successColor,
    );
  });

  test('should render given font correctly', () => {
    // when
    const { getByTestId } = render(
      <Button testID="button" size="large" text="test" />,
    );
    const buttonComponent = getByTestId('button');

    // then
    const textComponent = buttonComponent.children[0] as ReactTestInstance;
    expect(textComponent.props.variant).toBe('subtitle02Medium');
    expect(textComponent.props.color).toBe(theme.colors.white);
  });

  test('should render icon correctly', () => {
    // when
    const { getByTestId } = render(
      <Button testID="button" size="large" text="test" icon="check" />,
    );
    const buttonIcon = getByTestId('button-icon');

    // then
    expect(buttonIcon).toBeTruthy();
  });

  test('should not render icon component', () => {
    // when
    const { queryByTestId } = render(
      <Button testID="button" size="large" text="test" />,
    );
    const buttonIcon = queryByTestId('button-icon');

    // then
    expect(buttonIcon).not.toBeTruthy();
  });

  test('should press button', () => {
    // given
    const onPress = jest.fn();

    // when
    const { getByTestId } = render(
      <Button testID="button" size="large" text="test" onPress={onPress} />,
    );
    const buttonComponent = getByTestId('button');
    fireEvent.press(buttonComponent);

    // then
    expect(onPress).toBeCalledTimes(1);
  });

  test('should render given default values correctly', () => {
    // when
    const { getByTestId } = render(
      <Button testID="button" text="testtesttest" />,
    );
    const buttonComponent = getByTestId('button');

    // then
    expect(buttonComponent.props.variant).toBe('primary');
    expect(buttonComponent.props.size).toBe('medium');
    expect(buttonComponent.props.type).toBe('contained');
  });

  test('should render given disabled correctly', () => {
    // when
    const { getByTestId } = render(
      <Button testID="button" text="testtesttest" disabled />,
    );
    const buttonComponent = getByTestId('button');
    const textComponent = getByTestId('button-text');

    // then
    expect(buttonComponent.props.accessibilityState.disabled).toBeTruthy();
    expect(textComponent.props.color).toBe(theme.colors.contentPassive);
  });

  test('should text color remain white on contained and outline type correctly', () => {
    // when
    const { getByTestId } = render(
      <Button
        testID="button"
        text="testtesttest"
        type="outline"
        isPressed={true}
        testOnly_pressed
      />,
    );
    const textComponent = getByTestId('button-text');

    // then
    expect(textComponent.props.color).toBe(theme.colors.white);
  });

  test('should render given underlineText correctly', () => {
    // when
    const { getByTestId } = render(
      <Button testID="button" text="testtesttest" type="text" />,
    );
    const textComponent = getByTestId('button-text');

    // then
    expect(textComponent.props.style[1].textDecorationLine).toBe('underline');
  });

  test('should render underline when button disabled', () => {
    // when
    const { getByTestId } = render(
      <Button testID="button" text="testtesttest" disabled type="text" />,
    );
    const textComponent = getByTestId('button-text');

    // then
    expect(textComponent.props.style[1].textDecorationLine).not.toBe(
      'underline',
    );
  });

  test('should render given filled correctly', () => {
    // when
    const { getByTestId } = render(
      <Button testID="button" text="testtesttest" disabled filled />,
    );
    const buttonComponent = getByTestId('button');

    // then
    expect(buttonComponent.props.alignSelf).toBe('stretch');
  });
});
