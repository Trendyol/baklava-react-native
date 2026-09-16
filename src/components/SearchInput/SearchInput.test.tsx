import React from 'react';
import { Animated, StyleSheet } from 'react-native';
import { act, fireEvent, render } from '../../test-utils';
import theme from '../../theme';
import type { TextInputHandles } from '../Input/Input';
import SearchInput from './SearchInput';

describe('SearchInput', () => {
  test('renders the default search state', () => {
    const { getByTestId, queryByTestId } = render(<SearchInput />);

    const boxStyle = StyleSheet.flatten(
      getByTestId('search-input-box').props.style,
    );

    expect(boxStyle.height).toBe(48);
    expect(boxStyle.borderRadius).toBe(theme.borderRadii.m);
    expect(boxStyle.borderColor).toBe(theme.colors.neutralLighter);
    expect(getByTestId('search-input').props.placeholder).toBe('Search');
    expect(getByTestId('search-input').props.returnKeyType).toBe('search');
    expect(getByTestId('search-input-icon').props.width).toBe(16);
    expect(getByTestId('search-input-icon').props.height).toBe(16);
    expect(queryByTestId('search-input-clear')).toBeNull();
  });

  test.each([
    ['small', 32, theme.borderRadii.s, 14, 16],
    ['medium', 40, theme.borderRadii.m, 14, 16],
    ['large', 48, theme.borderRadii.m, 16, 20],
  ] as const)(
    'renders the %s size with matching dimensions',
    (size, height, borderRadius, fontSize, lineHeight) => {
      const { getByTestId } = render(<SearchInput size={size} />);

      const boxStyle = StyleSheet.flatten(
        getByTestId('search-input-box').props.style,
      );
      const inputStyle = StyleSheet.flatten(
        getByTestId('search-input').props.style,
      );

      expect(boxStyle.height).toBe(height);
      expect(boxStyle.borderRadius).toBe(borderRadius);
      expect(inputStyle.fontSize).toBe(fontSize);
      expect(inputStyle.lineHeight).toBe(lineHeight);
    },
  );

  test('uses focused styles and restores default styles on blur', () => {
    const onFocus = jest.fn();
    const onBlur = jest.fn();
    const { getByTestId } = render(
      <SearchInput onFocus={onFocus} onBlur={onBlur} />,
    );
    const input = getByTestId('search-input');

    fireEvent(input, 'focus', {});

    expect(
      StyleSheet.flatten(getByTestId('search-input-box').props.style)
        .borderColor,
    ).toBe(theme.colors.primaryKey);
    expect(getByTestId('search-input-icon').props.fill).toBe(
      theme.colors.primaryKey,
    );
    expect(onFocus).toHaveBeenCalledTimes(1);

    fireEvent(input, 'blur', {});

    expect(
      StyleSheet.flatten(getByTestId('search-input-box').props.style)
        .borderColor,
    ).toBe(theme.colors.neutralLighter);
    expect(onBlur).toHaveBeenCalledTimes(1);
  });

  test('shows the clear action while typing and clears an uncontrolled value', () => {
    const onChangeText = jest.fn();
    const onClear = jest.fn();
    const { getByTestId, queryByTestId } = render(
      <SearchInput onChangeText={onChangeText} onClear={onClear} />,
    );
    const input = getByTestId('search-input');

    fireEvent.changeText(input, 'Baklava');

    expect(onChangeText).toHaveBeenCalledWith('Baklava');
    expect(
      StyleSheet.flatten(getByTestId('search-input-clear').props.style),
    ).toMatchObject({ width: 32, height: 32 });
    expect(getByTestId('search-input-clear-icon').props.width).toBe(16);
    expect(getByTestId('search-input-clear-icon').props.height).toBe(16);
    expect(queryByTestId('search-input-icon')).toBeNull();

    fireEvent(getByTestId('search-input-clear'), 'pressIn');

    expect(onChangeText).toHaveBeenLastCalledWith('');
    expect(onClear).toHaveBeenCalledTimes(1);
    expect(queryByTestId('search-input-clear')).toBeNull();
    expect(getByTestId('search-input-icon')).toBeTruthy();
  });

  test('leaves the text of an uncontrolled input to the native view', () => {
    const { getByTestId } = render(<SearchInput defaultValue="Baklava" />);
    const input = getByTestId('search-input');

    expect(input.props.value).toBeUndefined();
    expect(input.props.defaultValue).toBe('Baklava');

    fireEvent.changeText(input, 'Baklava sever');

    expect(getByTestId('search-input').props.value).toBeUndefined();
  });

  test('passes a controlled value straight through to the input', () => {
    const { getByTestId } = render(<SearchInput value="Baklava" />);

    expect(getByTestId('search-input').props.value).toBe('Baklava');

    fireEvent.changeText(getByTestId('search-input'), 'Baklava sever');

    expect(getByTestId('search-input').props.value).toBe('Baklava');
  });

  test('hides the clear action once the text is emptied', () => {
    const { getByTestId, queryByTestId } = render(
      <SearchInput defaultValue="Baklava" />,
    );

    fireEvent.changeText(getByTestId('search-input'), '');

    expect(queryByTestId('search-input-clear')).toBeNull();
    expect(getByTestId('search-input-icon')).toBeTruthy();
  });

  test('reports typing to its owner without waiting for a new value', () => {
    const onChangeText = jest.fn();
    const { getByTestId } = render(
      <SearchInput value="Baklava" size="medium" onChangeText={onChangeText} />,
    );

    fireEvent.changeText(getByTestId('search-input'), 'New value');

    expect(onChangeText).toHaveBeenCalledWith('New value');
    expect(getByTestId('search-input-clear')).toBeTruthy();

    fireEvent(getByTestId('search-input-clear'), 'pressIn');

    expect(onChangeText).toHaveBeenLastCalledWith('');
  });

  test('applies value changes that come from its owner', () => {
    const { getByTestId, queryByTestId, rerender } = render(
      <SearchInput value="" />,
    );

    expect(queryByTestId('search-input-clear')).toBeNull();

    rerender(<SearchInput value="Baklava" />);

    expect(getByTestId('search-input-clear')).toBeTruthy();

    rerender(<SearchInput value="" />);

    expect(queryByTestId('search-input-clear')).toBeNull();
    expect(getByTestId('search-input-icon')).toBeTruthy();
  });

  test('shows a loader instead of the clear action', () => {
    const animation = { start: jest.fn(), stop: jest.fn() };
    const loopSpy = jest
      .spyOn(Animated, 'loop')
      .mockReturnValue(animation as unknown as Animated.CompositeAnimation);
    const { getByTestId, queryByTestId, unmount } = render(
      <SearchInput defaultValue="Baklava" loading />,
    );

    expect(getByTestId('search-input-loading').props.width).toBe(16);
    expect(getByTestId('search-input-loading').props.height).toBe(16);
    expect(queryByTestId('search-input-clear')).toBeNull();
    expect(queryByTestId('search-input-icon')).toBeNull();
    expect(
      StyleSheet.flatten(getByTestId('search-input-box').props.style)
        .borderColor,
    ).toBe(theme.colors.primaryKey);

    unmount();
    loopSpy.mockRestore();
  });

  test('prevents editing and clearing when disabled', () => {
    const onChangeText = jest.fn();
    const { getByTestId, queryByTestId } = render(
      <SearchInput
        defaultValue="Baklava"
        disabled
        onChangeText={onChangeText}
      />,
    );
    const input = getByTestId('search-input');

    fireEvent.changeText(input, 'New value');
    fireEvent(input, 'focus', {});
    fireEvent(input, 'blur', {});

    expect(input.props.defaultValue).toBe('Baklava');
    expect(input.props.editable).toBe(false);
    expect(input.props.accessibilityState.disabled).toBe(true);
    expect(queryByTestId('search-input-clear')).toBeNull();
    expect(onChangeText).not.toHaveBeenCalled();
    expect(
      StyleSheet.flatten(getByTestId('search-input-box').props.style)
        .borderColor,
    ).toBe(theme.colors.neutralLighter);
  });

  test('supports a custom font family and clear accessibility label', () => {
    const { getByTestId } = render(
      <SearchInput
        defaultValue="Baklava"
        fontFamily="bold"
        clearAccessibilityLabel="Aramayı temizle"
        accessibilityLabel="Arama alanı"
        returnKeyType="done"
      />,
    );

    expect(
      StyleSheet.flatten(getByTestId('search-input').props.style).fontFamily,
    ).toBe('Rubik-Bold');
    expect(getByTestId('search-input').props.accessibilityLabel).toBe(
      'Arama alanı',
    );
    expect(getByTestId('search-input').props.returnKeyType).toBe('done');
    expect(getByTestId('search-input-clear').props.accessibilityLabel).toBe(
      'Aramayı temizle',
    );
  });

  test('exposes text input handles and clears an uncontrolled value', () => {
    const ref = React.createRef<TextInputHandles>();
    const { getByTestId, queryByTestId } = render(
      <SearchInput ref={ref} defaultValue="Baklava" />,
    );

    expect(getByTestId('search-input-clear')).toBeTruthy();

    act(() => {
      ref.current?.focus();
      ref.current?.blur();
      ref.current?.clear();
      ref.current?.isFocused();
      ref.current?.setNativeProps({ text: '' });
    });

    expect(ref.current).toBeTruthy();
    expect(queryByTestId('search-input-clear')).toBeNull();
  });

  test('leaves the owner in charge when a controlled input is cleared', () => {
    const ref = React.createRef<TextInputHandles>();
    const onChangeText = jest.fn();
    const { getByTestId } = render(
      <SearchInput ref={ref} value="Baklava" onChangeText={onChangeText} />,
    );

    act(() => ref.current?.clear());

    expect(getByTestId('search-input').props.value).toBe('Baklava');
    expect(getByTestId('search-input-clear')).toBeTruthy();
    expect(onChangeText).not.toHaveBeenCalled();
  });
});
