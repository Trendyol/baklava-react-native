import React from 'react';
import { act } from 'react-test-renderer';
import { fireEvent, render } from '../../src/testUtils';
import Input, { TextInputHandles } from './Input';

describe('Input', () => {
  test('should render input correctly', () => {
    // when
    const { toJSON } = render(<Input label="label" />);

    // then
    expect(toJSON()).toMatchSnapshot();
  });

  test('should render label fixed input correctly', () => {
    // when
    const { toJSON } = render(
      <Input label="label" labelFixed placeholder="placeholder" />,
    );

    // then
    expect(toJSON()).toMatchSnapshot();
  });

  test('should render disabled input correctly', () => {
    // when
    const { toJSON } = render(<Input disabled label="label" />);

    // then
    expect(toJSON()).toMatchSnapshot();
  });

  test('should render input with help text correctly', () => {
    // when
    const { toJSON } = render(<Input label="label" helpText="helpText" />);

    // then
    expect(toJSON()).toMatchSnapshot();
  });

  test('should render input with icon correctly', () => {
    // when
    const { toJSON } = render(<Input label="label" icon="confetti" />);

    // then
    expect(toJSON()).toMatchSnapshot();
  });

  test('should render input with error state correctly', () => {
    // when
    const { toJSON } = render(<Input label="label" error />);

    // then
    expect(toJSON()).toMatchSnapshot();
  });

  test('should render input with error state and error text correctly', () => {
    // when
    const { toJSON } = render(
      <Input label="label" error errorText="errorText" />,
    );

    // then
    expect(toJSON()).toMatchSnapshot();
  });

  test('should render input with success state correctly', () => {
    // when
    const { toJSON } = render(<Input label="label" success />);

    // then
    expect(toJSON()).toMatchSnapshot();
  });

  test('should render input with success state and success text correctly', () => {
    // when
    const { toJSON } = render(
      <Input label="label" success successText="successText" />,
    );

    // then
    expect(toJSON()).toMatchSnapshot();
  });

  test('should render input with small size correctly', () => {
    // when
    const { toJSON } = render(<Input label="label" size="small" />);

    // then
    expect(toJSON()).toMatchSnapshot();
  });

  test('should render input with medium size correctly', () => {
    // when
    const { toJSON } = render(<Input label="label" size="medium" />);

    // then
    expect(toJSON()).toMatchSnapshot();
  });

  test('should focus input correctly', () => {
    // when
    const { getByTestId } = render(<Input label="label" />);

    // then
    expect(getByTestId('input-box').props.borderColor).toBe('borderColor');

    // when
    act(() => {
      fireEvent(getByTestId('input'), 'onFocus');
    });

    // then
    expect(getByTestId('input-box').props.borderColor).toBe('primaryColor');
  });

  test('should not focus and blur input when input is disabled', () => {
    // when
    const { getByTestId } = render(<Input label="label" disabled />);

    // then
    expect(getByTestId('input-box').props.borderColor).toBe('borderColor');

    // when
    act(() => {
      const input = getByTestId('input');
      fireEvent(input, 'onFocus');
      fireEvent(input, 'onBlur');
    });

    // then
    expect(getByTestId('input-box').props.borderColor).toBe('borderColor');
  });

  test('should blur input without value correctly', () => {
    // when
    const { getByTestId } = render(<Input label="label" />);

    // then
    expect(getByTestId('input-box').props.borderColor).toBe('borderColor');

    // when
    act(() => {
      const input = getByTestId('input');
      fireEvent(input, 'onFocus');
      fireEvent(input, 'onBlur');
    });

    // then
    expect(getByTestId('input-box').props.borderColor).toBe('borderColor');
  });

  test('should blur input with value correctly', () => {
    // when
    const { getByTestId } = render(<Input label="label" value="value" />);

    // then
    expect(getByTestId('input-box').props.borderColor).toBe('borderColor');

    // when
    act(() => {
      const input = getByTestId('input');
      fireEvent(input, 'onFocus');
      fireEvent(input, 'onBlur');
    });

    // then
    expect(getByTestId('input-box').props.borderColor).toBe('borderColor');
  });

  test('should change text of input without value', () => {
    // when
    const { getByTestId } = render(<Input label="label" />);
    const input = getByTestId('input');
    fireEvent.changeText(input, 'e-mail@mail.com');

    // then
    expect(input.props.value).toBe('e-mail@mail.com');
  });

  test('should change text of input with value', () => {
    // when
    const { getByTestId } = render(<Input label="label" value="value" />);
    const input = getByTestId('input');
    fireEvent.changeText(input, 'e-mail@mail.com');

    // then
    expect(input.props.value).toBe('value');
  });

  test('should not change text of input when input is disabled', () => {
    // when
    const { getByTestId } = render(<Input label="label" disabled />);
    const input = getByTestId('input');
    fireEvent.changeText(input, 'e-mail@mail.com');

    // then
    expect(input.props.value).not.toBe('e-mail@mail.com');
  });

  test('should change text of input when input has defaultValue', () => {
    // when
    const { getByTestId } = render(
      <Input label="label" defaultValue="defaultValue" />,
    );
    const input = getByTestId('input');
    fireEvent.changeText(input, 'e-mail@mail.com');

    // then
    expect(input.props.value).toBe('e-mail@mail.com');
  });

  test('should access inputs handle functions correctly', () => {
    // given
    const ref = React.createRef<TextInputHandles>();

    // when
    render(<Input label="label" ref={ref} />);

    act(() => {
      ref.current?.focus();
      ref.current?.blur();
      ref.current?.clear();
      ref.current?.isFocused();
      ref.current?.setNativeProps({ text: '' });
    });

    // then
    expect(ref.current?.focus).toBeTruthy();
  });
});
