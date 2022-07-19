import React from 'react';
import { theme } from '../../src';
import { fireEvent, render } from '../../src/testUtils';
import Button from '../Button/Button';
import CheckIco from '../../src/icons/CheckIco';
import { ReactTestInstance } from 'react-test-renderer';

describe('Button', () => {
  test('should render given text correctly', () => {
    // when
    const { getByTestId } = render(
      <Button testID="button" text="testtesttest" />,
    );
    const buttonComponent = getByTestId('button');

    // then
    expect(buttonComponent.props.text).toBe('testtesttest');
    // expect(buttonComponent.props.variant).toBe('primary');
    // expect(buttonComponent.props.size).toBe('medium');
    // expect(buttonComponent.props.type).toBe('contained');
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
      <Button testID="button" size="large" text="test" icon={CheckIco} />,
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
});
