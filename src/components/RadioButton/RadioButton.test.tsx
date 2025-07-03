import React from 'react';
import theme from '../../theme';
import { fireEvent, render } from '../../test-utils';
import RadioButton from './RadioButton';

describe('RadioButton', () => {
  beforeEach(() => {});

  test('should render RadioButton correctly when selected is false', () => {
    // when
    const { toJSON, getByTestId } = render(<RadioButton selected={false} />);
    const radiobuttonComponent = getByTestId('selectbox');

    // then
    expect(toJSON()).toMatchSnapshot();
    expect(radiobuttonComponent.props.style[1][0].borderColor).toBe(
      theme.colors.neutralLighter,
    );
    expect(radiobuttonComponent.props.style[1][0].backgroundColor).toBe(
      theme.colors.neutralFull,
    );
  });

  test('should render RadioButton correctly when selected is true', () => {
    // when
    const { toJSON, getByTestId } = render(<RadioButton selected={true} />);
    const radiobuttonComponent = getByTestId('selectbox');

    // then
    expect(toJSON()).toMatchSnapshot();
    expect(radiobuttonComponent.props.style[1][0].borderColor).toBe(
      theme.colors.primaryKey,
    );
    expect(radiobuttonComponent.props.style[1][0].backgroundColor).toBe(
      theme.colors.primaryKey,
    );
  });

  test('should render RadioButton correctly when disable, selected is false', () => {
    // when
    const { toJSON } = render(<RadioButton disabled={true} selected={false} />);

    // then
    expect(toJSON()).toMatchSnapshot();
  });

  test('should render RadioButton correctly when disable, selected is true', () => {
    // when
    const { toJSON } = render(<RadioButton disabled selected={true} />);

    // then
    expect(toJSON()).toMatchSnapshot();
  });

  test('should press RadioButton', () => {
    // given
    const onPress = jest.fn();

    // when
    const { getByTestId } = render(
      <RadioButton selected={true} testID="radioButton" onPress={onPress} />,
    );
    const radiobuttonComponent = getByTestId('radioButton');
    fireEvent.press(radiobuttonComponent);

    // then
    expect(onPress).toBeCalledTimes(1);
  });

  test('should not press radiobutton when disabled', () => {
    // given
    const onPress = jest.fn();

    // when
    const { getByTestId } = render(
      <RadioButton
        selected={true}
        disabled
        testID="radiobuttonbox"
        label="lorem ipsum"
        onPress={onPress}
      />,
    );
    const radiobuttonComponent = getByTestId('radiobuttonbox');
    const radiobuttonLabelComponent = getByTestId('label');
    fireEvent.press(radiobuttonComponent);

    // then
    expect(onPress).not.toBeCalled();
    expect(radiobuttonLabelComponent.props.style[0].color).toBe(
      theme.colors.neutralLighter,
    );
  });

  test('should render without selectbox correctly', () => {
    // when
    const { queryByTestId } = render(<RadioButton selected={false} />);
    const radiobuttonSelectbox = queryByTestId('selectbox');

    // then
    expect(radiobuttonSelectbox.props.style[1][0].backgroundColor).toBe(
      theme.colors.neutralFull,
    );
  });

  test('should render with label correctly when selected', () => {
    // when
    const { getByText } = render(
      <RadioButton selected={true} label="lorem ipsum" />,
    );
    const radiobuttonLabel = getByText('lorem ipsum');

    // then
    expect(radiobuttonLabel).toBeTruthy();
    expect(radiobuttonLabel.props.style[0].color).toBe(theme.colors.primaryKey);
  });

  test('should render with label correctly when unselected', () => {
    // when
    const { getByText } = render(
      <RadioButton selected={false} label="lorem ipsum" />,
    );
    const radiobuttonLabel = getByText('lorem ipsum');

    // then
    expect(radiobuttonLabel).toBeTruthy();
    expect(radiobuttonLabel.props.style[0].color).toBe(
      theme.colors.neutralDarker,
    );
  });

  test('should render without label correctly', () => {
    // when
    const { queryByTestId } = render(<RadioButton selected={true} />);
    const radioButtonLabel = queryByTestId('');

    // then
    expect(radioButtonLabel).toBeFalsy();
  });

  test('should render with icon correctly when selected', () => {
    // when
    const { getByTestId } = render(
      <RadioButton selected={true} flagIcon="TR" />,
    );
    const iconComponent = getByTestId('flag-icon');

    // then
    expect(iconComponent).toBeTruthy();
  });

  test('should render with icon correctly when unselected', () => {
    // when
    const { getByTestId } = render(
      <RadioButton selected={false} flagIcon="TR" />,
    );
    const iconComponent = getByTestId('flag-icon');

    // then
    expect(iconComponent).toBeTruthy();
  });

  test('should render with icon correctly when disabled', () => {
    // when
    const { getByTestId } = render(
      <RadioButton selected={false} disabled flagIcon="TR" />,
    );
    const iconComponent = getByTestId('flag-icon');

    // then
    expect(iconComponent).toBeTruthy();
  });

  test('should render without icon correctly', () => {
    // when
    const { queryByTestId } = render(<RadioButton selected={true} />);
    const iconComponent = queryByTestId('flag-icon');

    // then
    expect(iconComponent).toBeFalsy();
  });
});
