import { Animated, Easing } from 'react-native';
import theme from '../../theme';
import { act, renderHook } from '../../legacy-test-utils';
import {
  useInputRef,
  useInputValue,
  useTogglePasswordVisibility,
  useOutlineLabelVisibility,
} from './hooks';

describe('Input Hooks', () => {
  test('useInputRef', () => {
    // when
    const { result } = renderHook(() => useInputRef());

    // then
    expect(result.current).toEqual({ current: null });
  });

  test('useInputValue value', () => {
    // when
    const { result } = renderHook(() =>
      useInputValue({ value: 'value', defaultValue: undefined }),
    );

    // then
    expect(result.current).toEqual({
      isControlled: true,
      setUncontrolledValue: expect.any(Function),
      value: 'value',
    });
  });

  test('useInputValue defaultValue', () => {
    // when
    const { result } = renderHook(() =>
      useInputValue({ value: undefined, defaultValue: 'defaultValue' }),
    );

    // then
    expect(result.current).toEqual({
      isControlled: false,
      setUncontrolledValue: expect.any(Function),
      value: 'defaultValue',
    });
  });

  test('useTogglePasswordVisibility secureTextEntry true', () => {
    // when
    const { result } = renderHook(() => useTogglePasswordVisibility(true));

    // then
    expect(result.current.passwordVisibility).toBe(true);
    expect(result.current.passwordVisibilityIcon).toBe('eye-on');

    // when
    act(() => {
      result.current.handlePasswordVisibility();
    });

    // then
    expect(result.current.passwordVisibility).toBe(false);
    expect(result.current.passwordVisibilityIcon).toBe('eye-off');
  });

  test('useTogglePasswordVisibility secureTextEntry false', () => {
    // when
    const { result } = renderHook(() => useTogglePasswordVisibility(false));

    // then
    expect(result.current.passwordVisibility).toBe(false);
    expect(result.current.passwordVisibilityIcon).toBe('eye-on');

    // when
    act(() => {
      result.current.handlePasswordVisibility();
    });

    // then
    expect(result.current.passwordVisibility).toBe(true);
    expect(result.current.passwordVisibilityIcon).toBe('eye-on');
  });

  test('useOutlineLabelVisibility has value and focused, disabled false', () => {
    // when
    const { result } = renderHook(() =>
      useOutlineLabelVisibility({
        theme,
        easing: Easing.inOut(Easing.ease),
        inputHeight: 48,
        focused: false,
        value: 'value',
        disabled: false,
        helpText: null,
        errorText: null,
        successText: null,
        errorState: false,
        successState: false,
      }),
    );

    // then
    expect(result.current.animatedViewProps).toEqual({
      style: {
        bottom: new Animated.Value(23),
        height: 54,
        left: 12,
        position: 'absolute',
        zIndex: 2,
      },
    });
    expect(result.current.animatedTextProps).toEqual({
      style: {
        backgroundColor: 'white',
        color: '#95A1B5',
        fontFamily: 'System',
        fontSize: new Animated.Value(12),
        height: new Animated.Value(14),
        lineHeight: new Animated.Value(14),
        paddingLeft: 4,
        paddingRight: 4,
        top: 13,
      },
    });
  });

  test('useOutlineLabelVisibility has value, focused and disabled', () => {
    // when
    const { result } = renderHook(() =>
      useOutlineLabelVisibility({
        theme,
        easing: Easing.inOut(Easing.ease),
        inputHeight: 48,
        focused: true,
        value: 'value',
        disabled: true,
        helpText: null,
        errorText: null,
        successText: null,
        errorState: false,
        successState: false,
      }),
    );

    // then
    expect(result.current.animatedViewProps).toEqual({
      style: {
        bottom: new Animated.Value(23),
        height: 54,
        left: 12,
        position: 'absolute',
        zIndex: 2,
      },
    });
    expect(result.current.animatedTextProps).toEqual({
      style: {
        backgroundColor: 'transparent',
        color: '#6E7787',
        fontFamily: 'System',
        fontSize: new Animated.Value(12),
        height: new Animated.Value(14),
        lineHeight: new Animated.Value(14),
        paddingLeft: 4,
        paddingRight: 4,
        top: 13,
      },
    });
  });

  test('useOutlineLabelVisibility has helpTextContent', () => {
    // when
    const { result } = renderHook(() =>
      useOutlineLabelVisibility({
        theme,
        easing: Easing.inOut(Easing.ease),
        inputHeight: 48,
        focused: true,
        value: 'value',
        disabled: true,
        helpText: 'helpText',
        errorText: 'errorText',
        successText: 'successText',
        errorState: false,
        successState: true,
      }),
    );

    // then
    expect(result.current.animatedViewProps).toEqual({
      style: {
        bottom: new Animated.Value(23),
        height: 72,
        left: 12,
        position: 'absolute',
        zIndex: 2,
      },
    });
    expect(result.current.animatedTextProps).toEqual({
      style: {
        backgroundColor: 'transparent',
        color: '#6E7787',
        fontFamily: 'System',
        fontSize: new Animated.Value(12),
        height: new Animated.Value(14),
        lineHeight: new Animated.Value(14),
        paddingLeft: 4,
        paddingRight: 4,
        top: 13,
      },
    });
  });

  test('useOutlineLabelVisibility has no value', () => {
    // when
    const { result } = renderHook(() =>
      useOutlineLabelVisibility({
        theme,
        easing: Easing.inOut(Easing.ease),
        inputHeight: 48,
        focused: false,
        disabled: false,
        helpText: 'helpText',
        errorText: 'errorText',
        successText: 'successText',
        errorState: false,
        successState: true,
      }),
    );

    // then
    expect(result.current.animatedViewProps).toEqual({
      style: {
        bottom: new Animated.Value(0),
        height: 72,
        left: 12,
        position: 'absolute',
        zIndex: 2,
      },
    });
    expect(result.current.animatedTextProps).toEqual({
      style: {
        backgroundColor: 'white',
        color: '#95A1B5',
        fontFamily: 'System',
        fontSize: new Animated.Value(14),
        height: new Animated.Value(16),
        lineHeight: new Animated.Value(16),
        paddingLeft: 4,
        paddingRight: 4,
        top: 13,
      },
    });
  });
});
