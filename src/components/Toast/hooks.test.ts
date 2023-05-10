/* eslint-env jest */

import { act, renderHook } from '@testing-library/react-hooks';
import { Platform } from 'react-native';
import { useKeyboard } from './hooks';
// @ts-ignore
import RCTDeviceEventEmitter from 'react-native/Libraries/EventEmitter/RCTDeviceEventEmitter';

const setup = (platform: 'ios' | 'android' = 'ios') => {
  Platform.OS = platform;
  const utils = renderHook(useKeyboard);
  return {
    ...utils,
  };
};

describe('test useKeyboard hook', () => {
  it('returns defaults', () => {
    const { result } = setup();
    expect(result.current.isKeyboardVisible).toBe(false);
    expect(result.current.keyboardHeight).toBe(0);
  });

  it('updates keyboard height on show', () => {
    const { result } = setup();
    expect(result.current.isKeyboardVisible).toBe(false);
    expect(result.current.keyboardHeight).toBe(0);
    act(() => {
      RCTDeviceEventEmitter.emit('keyboardDidShow', {
        endCoordinates: {
          height: 425,
        },
      });
    });
    expect(result.current.isKeyboardVisible).toBe(true);
    expect(result.current.keyboardHeight).toBe(425);
  });

  it('updates keyboard height on hide', () => {
    const { result } = setup();
    expect(result.current.isKeyboardVisible).toBe(false);
    expect(result.current.keyboardHeight).toBe(0);
    act(() => {
      RCTDeviceEventEmitter.emit('keyboardDidShow', {
        endCoordinates: {
          height: 425,
        },
      });
    });
    expect(result.current.isKeyboardVisible).toBe(true);
    expect(result.current.keyboardHeight).toBe(425);
    act(() => {
      RCTDeviceEventEmitter.emit('keyboardDidHide');
    });
    expect(result.current.isKeyboardVisible).toBe(false);
    expect(result.current.keyboardHeight).toBe(0);
  });

  it('does nothing on Android', () => {
    const { result } = setup('android');
    expect(result.current.isKeyboardVisible).toBe(false);
    expect(result.current.keyboardHeight).toBe(0);
  });
});
