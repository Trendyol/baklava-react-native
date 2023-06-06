// @ts-ignore:next-line
import { toHaveStyle } from '@testing-library/jest-native';
import React from 'react';
import { cleanup, render } from '../../test-utils';
import { useKeyboard } from './hooks';
import Toast from './Toast';
import theme from '../../theme';

jest.mock('react-native-safe-area-context', () => {
  const inset = { top: 0, right: 0, bottom: 0, left: 0 };
  return {
    SafeAreaProvider: jest.fn().mockImplementation(({ children }) => children),
    SafeAreaConsumer: jest
      .fn()
      .mockImplementation(({ children }) => children(inset)),
    useSafeAreaInsets: jest.fn().mockImplementation(() => inset),
  };
});

jest.mock('./hooks', () => {
  return {
    useKeyboard: jest.fn().mockImplementation(() => ({
      keyboardHeight: 200,
      isKeyboardVisible: true,
    })),
  };
});

describe('Toast', () => {
  expect.extend({ toHaveStyle });

  beforeEach(() => {
    jest.clearAllMocks();
    jest.clearAllTimers();
    jest.restoreAllMocks();
    cleanup();
  });

  test('should print warn when no root component', () => {
    // given
    const warnSpy = jest.spyOn(console, 'warn');

    // when
    Toast.show({
      text: 'lorem ipsum dolor',
    });

    // then
    expect(warnSpy).toBeCalledWith('Please add <Toast/> to your root view');
  });

  test('should render correctly', () => {
    // when
    const { toJSON, queryByTestId } = render(<Toast />);

    // then
    expect(toJSON()).toMatchSnapshot();
    expect(queryByTestId('toast-wrapper')).toBeNull();
  });

  test('should show toast', () => {
    // when
    const { getByTestId } = render(<Toast />);

    Toast.show({
      text: 'lorem ipsum dolor',
    });

    const toastContainer = getByTestId('toast-container');

    // then
    expect(toastContainer).toBeTruthy();
  });

  test('should show toast when keyboard visible', () => {
    // given
    // @ts-ignore
    useKeyboard.mockImplementation(() => ({
      keyboardHeight: 150,
      isKeyboardVisible: true,
    }));

    // when
    const { getByTestId } = render(<Toast extraPaddingBottom={10} />);

    Toast.show({
      text: 'lorem ipsum dolor',
    });

    const toastWrapper = getByTestId('toast-wrapper');

    // then
    expect(toastWrapper).toBeTruthy();
    expect(toastWrapper).toHaveStyle({
      paddingBottom: theme.spacing['2xs'] + 150 + 10,
    });
  });

  test('should render correct bottom offset with offset 40', () => {
    const dataWithBottomOffSet: ToastData = {
      variant: 'warning',
      text: 'lorem ipsum dolor sit amet.',
      action: jest.fn(),
      actionText: 'Tamam',
      bottomOffset: 40,
    };

    useKeyboard.mockImplementation(() => ({
      keyboardHeight: 150,
      isKeyboardVisible: true,
    }));

    // when
    const { getByTestId } = render(
      <Toast ignoreKeyboard extraPaddingBottom={10} />,
    );

    Toast.show(dataWithBottomOffSet);

    const toastWrapper = getByTestId('toast-wrapper');

    // then
    expect(toastWrapper).toBeTruthy();
    expect(toastWrapper).toHaveStyle({
      paddingBottom: 10 + 40,
    });
  });

  test('should hide toast', () => {
    jest.useFakeTimers();
    // when
    const { queryByTestId } = render(<Toast />);

    Toast.show({
      text: 'lorem ipsum dolor',
    });
    jest.runAllTimers();

    const toastContainer = queryByTestId('toast-container');

    // then
    expect(toastContainer).toBeNull();
  });

  test('ignore keyboard', () => {
    // given
    // @ts-ignore
    useKeyboard.mockImplementation(() => ({
      keyboardHeight: 150,
      isKeyboardVisible: true,
    }));

    // when
    const { getByTestId } = render(
      <Toast ignoreKeyboard extraPaddingBottom={10} />,
    );

    Toast.show({
      text: 'lorem ipsum dolor',
    });

    const toastWrapper = getByTestId('toast-wrapper');

    // then
    expect(toastWrapper).toBeTruthy();
    expect(toastWrapper).toHaveStyle({
      paddingBottom: 10,
    });
  });
});
