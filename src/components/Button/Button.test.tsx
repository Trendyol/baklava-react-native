import React from 'react';
import theme from '../../theme';
import { fireEvent, render } from '../../test-utils';
import Button from './Button';
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

  test('should render loading state correctly', () => {
    // when
    const { getByTestId } = render(
      <Button testID="button" label="Loading" loading />,
    );
    const buttonComponent = getByTestId('button');
    const spinner = getByTestId('button-spinner');

    // then
    expect(spinner).toBeTruthy();
    expect(buttonComponent.props.accessibilityState.disabled).toBeTruthy();
  });

  test('should show spinner instead of icon when loading', () => {
    // when
    const { getByTestId, queryByTestId } = render(
      <Button testID="button" label="Loading" icon="check" loading />,
    );
    const spinner = getByTestId('button-spinner');
    const icon = queryByTestId('button-icon');

    // then
    expect(spinner).toBeTruthy();
    expect(icon).not.toBeTruthy();
  });

  test('should not call onPress when loading', () => {
    // given
    const onPress = jest.fn();

    // when
    const { getByTestId } = render(
      <Button testID="button" label="Loading" loading onPress={onPress} />,
    );
    const buttonComponent = getByTestId('button');
    fireEvent.press(buttonComponent);

    // then
    expect(onPress).not.toBeCalled();
  });

  test('should render loading state with spinner for small button', () => {
    // when
    const { getByTestId } = render(
      <Button testID="button" size="s" label="Small Loading" loading />,
    );
    const spinner = getByTestId('button-spinner');

    // then
    expect(spinner).toBeTruthy();
  });

  test('should render loading state with spinner for medium button', () => {
    // when
    const { getByTestId } = render(
      <Button testID="button" size="m" label="Medium Loading" loading />,
    );
    const spinner = getByTestId('button-spinner');

    // then
    expect(spinner).toBeTruthy();
  });

  test('should render loading state with spinner for large button', () => {
    // when
    const { getByTestId } = render(
      <Button testID="button" size="l" label="Large Loading" loading />,
    );
    const spinner = getByTestId('button-spinner');

    // then
    expect(spinner).toBeTruthy();
  });

  test('should render loading state with spinner for primary variant', () => {
    // when
    const { getByTestId } = render(
      <Button
        testID="button"
        variant="primary"
        label="Primary Loading"
        loading
      />,
    );
    const spinner = getByTestId('button-spinner');

    // then
    expect(spinner).toBeTruthy();
  });

  test('should render loading state with spinner for secondary variant', () => {
    // when
    const { getByTestId } = render(
      <Button
        testID="button"
        variant="secondary"
        label="Secondary Loading"
        loading
      />,
    );
    const spinner = getByTestId('button-spinner');

    // then
    expect(spinner).toBeTruthy();
  });

  test('should render loading state with spinner for tertiary variant', () => {
    // when
    const { getByTestId } = render(
      <Button
        testID="button"
        variant="tertiary"
        label="Tertiary Loading"
        loading
      />,
    );
    const spinner = getByTestId('button-spinner');

    // then
    expect(spinner).toBeTruthy();
  });

  test('should render loading state with spinner for transparent variant', () => {
    // when
    const { getByTestId } = render(
      <Button
        testID="button"
        variant="transparent"
        tintColor="#FF0000"
        label="Transparent Loading"
        loading
      />,
    );
    const spinner = getByTestId('button-spinner');

    // then
    expect(spinner).toBeTruthy();
  });

  test('should render loading state without label', () => {
    // when
    const { getByTestId, queryByTestId } = render(
      <Button testID="button" loading />,
    );
    const spinner = getByTestId('button-spinner');
    const label = queryByTestId('button-text');

    // then
    expect(spinner).toBeTruthy();
    expect(label).not.toBeTruthy();
  });

  test('should maintain label visibility during loading', () => {
    // when
    const { getByTestId } = render(
      <Button testID="button" label="Loading Text" loading />,
    );
    const spinner = getByTestId('button-spinner');
    const label = getByTestId('button-text');

    // then
    expect(spinner).toBeTruthy();
    expect(label).toBeTruthy();
    expect(label.props.children).toBe('Loading Text');
  });

  test('should apply correct margin to label when loading', () => {
    // when
    const { getByTestId } = render(
      <Button testID="button" label="Loading Text" loading />,
    );
    const label = getByTestId('button-text');

    // then
    expect(label.props.style[0].marginLeft).toBe(8); // '2xs' spacing
  });

  test('should prioritize loading over disabled state', () => {
    // when
    const { getByTestId } = render(
      <Button testID="button" label="Button" disabled={false} loading />,
    );
    const buttonComponent = getByTestId('button');

    // then
    expect(buttonComponent.props.accessibilityState.disabled).toBeTruthy();
  });

  test('should render loading with different kinds', () => {
    // when
    const { getByTestId: getByTestIdSuccess } = render(
      <Button testID="button-success" kind="success" label="Success" loading />,
    );
    const { getByTestId: getByTestIdDanger } = render(
      <Button testID="button-danger" kind="danger" label="Danger" loading />,
    );
    const { getByTestId: getByTestIdNeutral } = render(
      <Button testID="button-neutral" kind="neutral" label="Neutral" loading />,
    );

    // then
    expect(getByTestIdSuccess('button-spinner')).toBeTruthy();
    expect(getByTestIdDanger('button-spinner')).toBeTruthy();
    expect(getByTestIdNeutral('button-spinner')).toBeTruthy();
  });
});
