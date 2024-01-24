import { Animated, Easing } from 'react-native';
import theme from '../../theme';
import { renderHook } from '../../test-utils';
import { useInputRef, useInputValue, useOutlineLabelVisibility } from './hooks';

describe('TextArea Hooks', () => {
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

  test('useOutlineLabelVisibility has value and focused, disabled false', () => {
    // when
    const { result } = renderHook(() =>
      useOutlineLabelVisibility({
        theme,
        easing: Easing.inOut(Easing.ease),
        textAreaHeight: 88,
        focused: false,
        value: 'value',
        disabled: false,
        helpText: null,
        errorText: null,
        errorState: false,
      }),
    );

    // then
    expect(result.current.animatedViewProps).toEqual({
      style: {
        bottom: new Animated.Value(18),
        height: 94,
        left: 12,
        position: 'absolute',
        zIndex: 2,
      },
    });
    expect(result.current.animatedTextProps).toEqual({
      style: {
        backgroundColor: theme.colors.neutralFull,
        color: '#95A1B5',
        fontFamily: 'Rubik-Regular',
        fontSize: new Animated.Value(12),
        height: new Animated.Value(14),
        lineHeight: new Animated.Value(14),
        paddingLeft: 4,
        paddingRight: 4,
        top: 8,
      },
    });
  });

  test('useOutlineLabelVisibility has value, focused and disabled', () => {
    // when
    const { result } = renderHook(() =>
      useOutlineLabelVisibility({
        theme,
        easing: Easing.inOut(Easing.ease),
        textAreaHeight: 88,
        focused: true,
        value: 'value',
        disabled: true,
        helpText: null,
        errorText: null,
        errorState: false,
      }),
    );

    // then
    expect(result.current.animatedViewProps).toEqual({
      style: {
        bottom: new Animated.Value(18),
        height: 94,
        left: 12,
        position: 'absolute',
        zIndex: 2,
      },
    });
    expect(result.current.animatedTextProps).toEqual({
      style: {
        backgroundColor: 'transparent',
        color: '#6E7787',
        fontFamily: 'Rubik-Regular',
        fontSize: new Animated.Value(12),
        height: new Animated.Value(14),
        lineHeight: new Animated.Value(14),
        paddingLeft: 4,
        paddingRight: 4,
        top: 8,
      },
    });
  });

  test('useOutlineLabelVisibility has helpTextContent', () => {
    // when
    const { result } = renderHook(() =>
      useOutlineLabelVisibility({
        theme,
        easing: Easing.inOut(Easing.ease),
        textAreaHeight: 88,
        focused: true,
        value: 'value',
        disabled: true,
        helpText: 'helpText',
        errorText: 'errorText',
        errorState: false,
      }),
    );

    // then
    expect(result.current.animatedViewProps).toEqual({
      style: {
        bottom: new Animated.Value(18),
        height: 112,
        left: 12,
        position: 'absolute',
        zIndex: 2,
      },
    });
    expect(result.current.animatedTextProps).toEqual({
      style: {
        backgroundColor: 'transparent',
        color: '#6E7787',
        fontFamily: 'Rubik-Regular',
        fontSize: new Animated.Value(12),
        height: new Animated.Value(14),
        lineHeight: new Animated.Value(14),
        paddingLeft: 4,
        paddingRight: 4,
        top: 8,
      },
    });
  });

  // test('useOutlineLabelVisibility has counterTextContent', () => {
  //   // when
  //   const { result } = renderHook(() =>
  //     useOutlineLabelVisibility({
  //       theme,
  //       easing: Easing.inOut(Easing.ease),
  //       textAreaHeight: 88,
  //       focused: true,
  //       value: 'value',
  //       disabled: true,
  //       helpText: 'helpText',
  //       counterText: 0,
  //       errorText: 'errorText',
  //       errorState: false,
  //     }),
  //   );

  //   // then
  //   expect(result.current.animatedViewProps).toEqual({
  //     style: {
  //       bottom: new Animated.Value(18),
  //       height: 112,
  //       left: 12,
  //       position: 'absolute',
  //       zIndex: 2,
  //     },
  //   });
  //   expect(result.current.animatedTextProps).toEqual({
  //     style: {
  //       backgroundColor: 'transparent',
  //       color: '#6E7787',
  //       fontFamily: 'Rubik-Regular',
  //       fontSize: new Animated.Value(12),
  //       height: new Animated.Value(14),
  //       lineHeight: new Animated.Value(14),
  //       paddingLeft: 4,
  //       paddingRight: 4,
  //       top: 8,
  //     },
  //   });
  // });

  test('useOutlineLabelVisibility has no value', () => {
    // when
    const { result } = renderHook(() =>
      useOutlineLabelVisibility({
        theme,
        easing: Easing.inOut(Easing.ease),
        textAreaHeight: 48,
        focused: false,
        disabled: false,
        helpText: 'helpText',
        errorText: 'errorText',
        errorState: false,
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
        backgroundColor: theme.colors.neutralFull,
        color: '#95A1B5',
        fontFamily: 'Rubik-Regular',
        fontSize: new Animated.Value(14),
        height: new Animated.Value(16),
        lineHeight: new Animated.Value(16),
        paddingLeft: 4,
        paddingRight: 4,
        top: 8,
      },
    });
  });
});
