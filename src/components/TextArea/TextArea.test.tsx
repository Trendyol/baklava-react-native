import React from 'react';
import { act } from 'react-test-renderer';
import { fireEvent, render } from '../../test-utils';
import theme from '../../theme';
import TextArea, { TextInputHandles } from './TextArea';

describe('TextArea', () => {
  test('should render TextArea correctly', () => {
    // when
    const { toJSON } = render(<TextArea label="label" />);

    // then
    expect(toJSON()).toMatchSnapshot();
  });

  test('should render label fixed TextArea correctly', () => {
    // when
    const { toJSON } = render(
      <TextArea label="label" labelFixed placeholder="placeholder" />,
    );

    // then
    expect(toJSON()).toMatchSnapshot();
  });

  test('should render disabled TextArea correctly', () => {
    // when
    const { toJSON } = render(<TextArea disabled label="label" />);

    // then
    expect(toJSON()).toMatchSnapshot();
  });

  test('should render TextArea with help text correctly', () => {
    // when
    const { toJSON } = render(<TextArea label="label" helpText="helpText" />);

    // then
    expect(toJSON()).toMatchSnapshot();
  });

  test('should render TextArea with error state correctly', () => {
    // when
    const { toJSON } = render(<TextArea label="label" error />);

    // then
    expect(toJSON()).toMatchSnapshot();
  });

  test('should render TextArea with error state and error text correctly', () => {
    // when
    const { toJSON } = render(
      <TextArea label="label" error errorText="errorText" />,
    );

    // then
    expect(toJSON()).toMatchSnapshot();
  });

  test('should render TextArea with small size correctly', () => {
    // when
    const { toJSON } = render(<TextArea label="label" size="small" />);

    // then
    expect(toJSON()).toMatchSnapshot();
  });

  test('should render TextArea with medium size correctly', () => {
    // when
    const { toJSON } = render(<TextArea label="label" size="medium" />);

    // then
    expect(toJSON()).toMatchSnapshot();
  });

  test('should render TextArea with large size correctly', () => {
    // when
    const { toJSON } = render(<TextArea label="label" size="large" />);

    // then
    expect(toJSON()).toMatchSnapshot();
  });

  test('should focus TextArea correctly', () => {
    // when
    const { getByTestId } = render(<TextArea label="label" />);

    // then
    expect(getByTestId('textArea-box').props.style[0].borderColor).toBe(
      theme.colors.neutralLighter,
    );

    // when
    act(() => {
      fireEvent(getByTestId('textArea'), 'onFocus');
    });

    // then
    expect(getByTestId('textArea-box').props.style[0].borderColor).toBe(
      theme.colors.primaryKey,
    );
  });

  test('should not focus and blur TextArea when TextArea is disabled', () => {
    // when
    const { getByTestId } = render(<TextArea label="label" disabled />);

    // then
    expect(getByTestId('textArea-box').props.style[0].borderColor).toBe(
      theme.colors.neutralLighter,
    );

    // when
    act(() => {
      const textArea = getByTestId('textArea');
      fireEvent(textArea, 'onFocus');
      fireEvent(textArea, 'onBlur');
    });

    // then
    expect(getByTestId('textArea-box').props.style[0].borderColor).toBe(
      theme.colors.neutralLighter,
    );
  });

  test('should blur TextArea without value correctly', () => {
    // when
    const { getByTestId } = render(<TextArea label="label" />);

    // then
    expect(getByTestId('textArea-box').props.style[0].borderColor).toBe(
      theme.colors.neutralLighter,
    );

    // when
    act(() => {
      const textArea = getByTestId('textArea');
      fireEvent(textArea, 'onFocus');
      fireEvent(textArea, 'onBlur');
    });

    // then
    expect(getByTestId('textArea-box').props.style[0].borderColor).toBe(
      theme.colors.neutralLighter,
    );
  });

  test('should blur TextArea with value correctly', () => {
    // when
    const { getByTestId } = render(<TextArea label="label" value="value" />);

    // then
    expect(getByTestId('textArea-box').props.style[0].borderColor).toBe(
      theme.colors.neutralLighter,
    );

    // when
    act(() => {
      const textArea = getByTestId('textArea');
      fireEvent(textArea, 'onFocus');
      fireEvent(textArea, 'onBlur');
    });

    // then
    expect(getByTestId('textArea-box').props.style[0].borderColor).toBe(
      theme.colors.neutralLighter,
    );
  });

  test('should change text of TextArea without value', () => {
    // when
    const { getByTestId } = render(<TextArea label="label" />);
    const textArea = getByTestId('textArea');
    fireEvent.changeText(textArea, 'e-mail@mail.com');

    // then
    expect(textArea.props.value).toBe('e-mail@mail.com');
  });

  test('should change text of textArea with value', () => {
    // when
    const { getByTestId } = render(<TextArea label="label" value="value" />);
    const textArea = getByTestId('textArea');
    fireEvent.changeText(textArea, 'e-mail@mail.com');

    // then
    expect(textArea.props.value).toBe('value');
  });

  test('should not change text of TextArea when TextArea is disabled', () => {
    // when
    const { getByTestId } = render(<TextArea label="label" disabled />);
    const textArea = getByTestId('textArea');
    fireEvent.changeText(textArea, 'e-mail@mail.com');

    // then
    expect(textArea.props.value).not.toBe('e-mail@mail.com');
  });

  test('should change text of TextArea when TextArea has defaultValue', () => {
    // when
    const { getByTestId } = render(
      <TextArea label="label" defaultValue="defaultValue" />,
    );
    const textArea = getByTestId('textArea');
    fireEvent.changeText(textArea, 'e-mail@mail.com');

    // then
    expect(textArea.props.value).toBe('e-mail@mail.com');
  });

  test('should access textAreas handle functions correctly', () => {
    // given
    const ref = React.createRef<TextInputHandles>();

    // when
    render(<TextArea label="label" ref={ref} />);

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
