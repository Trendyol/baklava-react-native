import React from 'react';
import theme from '../../theme';
import { fireEvent, render } from '../../test-utils';
import Checkbox from './Checkbox';

describe('Checkbox', () => {
  beforeEach(() => {});

  test('should render Checkbox correctly when checked is false', () => {
    // when
    const { toJSON, getByTestId } = render(<Checkbox checked={false} />);
    const checkboxComponent = getByTestId('tickbox');

    // then
    expect(toJSON()).toMatchSnapshot();
    expect(checkboxComponent.props.style[1][0].borderColor).toBe(
      theme.colors.neutralLighter,
    );
    expect(checkboxComponent.props.style[1][0].backgroundColor).toBe(
      theme.colors.neutralFull,
    );
  });

  test('should render Checkbox correctly when checked is true', () => {
    // when
    const { toJSON, getByTestId } = render(<Checkbox checked={true} />);
    const checkboxComponent = getByTestId('tickbox');

    // then
    expect(toJSON()).toMatchSnapshot();
    expect(checkboxComponent.props.style[1][0].borderColor).toBe(
      theme.colors.primaryKey,
    );
    expect(checkboxComponent.props.style[1][0].backgroundColor).toBe(
      theme.colors.primaryKey,
    );
  });

  test('should render Checkbox correctly when checked is true, indeterminate is false', () => {
    // when
    const { toJSON, getByTestId } = render(
      <Checkbox checked={true} indeterminate={false} />,
    );
    const checkboxComponent = getByTestId('tickbox');

    // then
    expect(toJSON()).toMatchSnapshot();
    expect(checkboxComponent.props.style[1][0].borderColor).toBe(
      theme.colors.primaryKey,
    );
    expect(checkboxComponent.props.style[1][0].backgroundColor).toBe(
      theme.colors.primaryKey,
    );
  });

  test('should render Checkbox correctly when checked is true, indeterminate is true', () => {
    // when
    const { toJSON } = render(<Checkbox checked={true} indeterminate={true} />);

    // then
    expect(toJSON()).toMatchSnapshot();
  });

  test('should render Checkbox correctly when disable, checked is false', () => {
    // when
    const { toJSON } = render(<Checkbox disabled={true} checked={false} />);

    // then
    expect(toJSON()).toMatchSnapshot();
  });

  test('should render Checkbox correctly when disable, checked is true', () => {
    // when
    const { toJSON } = render(<Checkbox disabled checked={true} />);

    // then
    expect(toJSON()).toMatchSnapshot();
  });

  test('should render Checkbox correctly when disable, checked and indeterminate is true', () => {
    // when
    const { toJSON } = render(
      <Checkbox disabled checked={true} indeterminate={true} />,
    );

    // then
    expect(toJSON()).toMatchSnapshot();
  });

  test('should press checkbox', () => {
    // given
    const onPress = jest.fn();

    // when
    const { getByTestId } = render(
      <Checkbox checked={true} testID="checkbox" onPress={onPress} />,
    );
    const checkboxComponent = getByTestId('checkbox');
    fireEvent.press(checkboxComponent);

    // then
    expect(onPress).toBeCalledTimes(1);
  });

  test('should not press checkbox when disabled', () => {
    // given
    const onPress = jest.fn();

    // when
    const { getByTestId } = render(
      <Checkbox
        checked={true}
        disabled
        testID="checkbox"
        label="lorem ipsum"
        onPress={onPress}
      />,
    );
    const checkboxComponent = getByTestId('checkbox');
    const checkboxLabelComponent = getByTestId('label');
    fireEvent.press(checkboxComponent);

    // then
    expect(onPress).not.toBeCalled();
    expect(checkboxLabelComponent.props.style[0].color).toBe(
      theme.colors.neutralLighter,
    );
  });

  test('should render without icon correctly', () => {
    // when
    const { queryByTestId } = render(<Checkbox checked={false} />);
    const checkboxCheckedIcon = queryByTestId('check-icon');
    const checkboxMinusIcon = queryByTestId('minus-icon');

    // then
    expect(checkboxCheckedIcon).toBeFalsy();
    expect(checkboxMinusIcon).toBeFalsy();
  });

  test('should render checked icon correctly', () => {
    // when
    const { getByTestId } = render(<Checkbox checked={true} />);
    const checkboxIcon = getByTestId('check-icon');

    // then
    expect(checkboxIcon).toBeTruthy();
  });

  test('should render unchecked icon correctly', () => {
    // when
    const { getByTestId } = render(
      <Checkbox checked={true} indeterminate={true} />,
    );
    const checkboxIcon = getByTestId('minus-icon');

    // then
    expect(checkboxIcon).toBeTruthy();
  });

  test('should render with label correctly when checked', () => {
    // when
    const { getByText } = render(
      <Checkbox checked={true} label="lorem ipsum" />,
    );
    const checkboxLabel = getByText('lorem ipsum');

    // then
    expect(checkboxLabel).toBeTruthy();
    expect(checkboxLabel.props.style[0].color).toBe(theme.colors.primaryKey);
  });

  test('should render with label correctly when unchecked', () => {
    // when
    const { getByText } = render(
      <Checkbox checked={false} label="lorem ipsum" />,
    );
    const checkboxLabel = getByText('lorem ipsum');

    // then
    expect(checkboxLabel).toBeTruthy();
    expect(checkboxLabel.props.style[0].color).toBe(theme.colors.neutralDarker);
  });

  test('should render without label correctly', () => {
    // when
    const { queryByTestId } = render(<Checkbox checked={true} />);
    const checkboxLabel = queryByTestId('');

    // then
    expect(checkboxLabel).toBeFalsy();
  });

  test('should render with icon correctly when checked', () => {
    // when
    const { getByTestId } = render(<Checkbox checked={true} flagIcon="TR" />);
    const icon = getByTestId('flag-icon');

    // then
    expect(icon).toBeTruthy();
  });

  test('should render with icon correctly when unchecked', () => {
    // when
    const { getByTestId } = render(<Checkbox checked={false} flagIcon="TR" />);
    const icon = getByTestId('flag-icon');

    // then
    expect(icon).toBeTruthy();
  });

  test('should render with icon correctly when disabled', () => {
    // when
    const { getByTestId } = render(
      <Checkbox checked={false} disabled flagIcon="TR" />,
    );
    const icon = getByTestId('flag-icon');

    // then
    expect(icon).toBeTruthy();
  });

  test('should render without icon correctly when icon prop is not provided', () => {
    // when
    const { queryByTestId } = render(<Checkbox checked={false} />);
    const icon = queryByTestId('flag-icon');

    // then
    expect(icon).toBeFalsy();
  });

  test('should render error unchecked tickbox with danger border', () => {
    const { getByTestId } = render(
      <Checkbox checked={false} error label="label" />,
    );
    const tickbox = getByTestId('tickbox');

    expect(tickbox.props.style[1][0].borderColor).toBe(
      theme.colors.dangerColor,
    );
  });

  test('should render helper text with danger color when error', () => {
    const { getByTestId } = render(
      <Checkbox
        checked={false}
        error
        helperText="You must agree before submitting."
      />,
    );
    const helperText = getByTestId('helper-text');

    expect(helperText.props.children).toBe('You must agree before submitting.');
    expect(helperText.props.style[0].color).toBe(theme.colors.dangerKey);
  });

  test('should not render helper text when error without helperText', () => {
    const { queryByTestId } = render(<Checkbox checked={false} error />);

    expect(queryByTestId('helper-text')).toBeFalsy();
  });

  test('should ignore error styling when checked', () => {
    const { getByTestId } = render(
      <Checkbox checked error helperText="message" />,
    );
    const tickbox = getByTestId('tickbox');

    expect(tickbox.props.style[1][0].borderColor).toBe(theme.colors.primaryKey);
    expect(getByTestId('helper-text').props.style[0].color).toBe(
      theme.colors.neutralDark,
    );
  });

  test('should ignore error styling when disabled', () => {
    const { getByTestId, queryByTestId } = render(
      <Checkbox
        checked={false}
        disabled
        error
        helperText="message"
        label="label"
      />,
    );
    const tickbox = getByTestId('tickbox');

    expect(tickbox.props.style[1][0].backgroundColor).toBe(
      theme.colors.primaryBackground,
    );
    expect(queryByTestId('helper-text')).toBeFalsy();
  });

  test('should render helper text with neutral color when not in error state', () => {
    const { getByTestId } = render(
      <Checkbox checked={false} helperText="Optional helper text" />,
    );

    expect(getByTestId('helper-text').props.style[0].color).toBe(
      theme.colors.neutralDark,
    );
  });
});
