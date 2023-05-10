// @ts-ignore
import { toHaveStyle } from '@testing-library/jest-native';
import React from 'react';
import { cleanup, fireEvent, mockPanResponder, render } from '../../test-utils';
import ToastView, { ToastViewRef } from './ToastView';
import { ToastData } from './types';

describe('ToastView', () => {
  expect.extend({ toHaveStyle });

  beforeEach(() => {
    cleanup();
    jest.clearAllMocks();
    jest.clearAllTimers();
  });

  test('should render toast correctly', () => {
    // given
    const data: ToastData = {
      text: 'lorem ipsum dolor sit amet.',
    };

    // when
    const { toJSON } = render(
      <ToastView variant={data?.variant} text={data?.text} />,
    );

    // then
    expect(toJSON()).toMatchSnapshot();
  });

  test('should render toast with action correctly', () => {
    // given
    const data: ToastData = {
      variant: 'default',
      text: 'lorem ipsum dolor sit amet.',
      action: () => null,
      actionText: 'Tamam',
    };

    // when
    const { toJSON } = render(
      <ToastView
        variant={data?.variant}
        text={data?.text}
        action={data.action}
        actionText={data.actionText}
      />,
    );

    // then
    expect(toJSON()).toMatchSnapshot();
  });

  test('should render given text correctly', () => {
    // given
    const data: ToastData = {
      variant: 'default',
      text: 'lorem ipsum dolor sit amet.',
    };

    // when
    const { getByText, queryByTestId } = render(
      <ToastView variant={data?.variant} text={data?.text} />,
    );
    const text = getByText('lorem ipsum dolor sit amet.');
    const actionBtn = queryByTestId('toast-action');

    // then
    expect(actionBtn).toBeFalsy();
    expect(text).toBeTruthy();
  });

  test('should render given text and action text correctly', () => {
    // given
    const data: ToastData = {
      variant: 'default',
      text: 'lorem ipsum dolor sit amet.',
      action: jest.fn(),
      actionText: 'Tamam',
    };

    // when
    const { getByText, queryByTestId } = render(
      <ToastView
        variant={data?.variant}
        text={data?.text}
        action={data.action}
        actionText={data.actionText}
      />,
    );
    const text = getByText('lorem ipsum dolor sit amet.');
    const actionText = getByText('Tamam');
    const actionBtn = queryByTestId('toast-action');

    // then
    expect(actionBtn).toBeTruthy();
    expect(text).toBeTruthy();
    expect(actionText).toBeTruthy();
  });

  test('should render the default toast with color #FEF2E8', () => {
    // given
    const data: ToastData = {
      variant: 'default',
      text: 'lorem ipsum dolor sit amet.',
      action: jest.fn(),
      actionText: 'Tamam',
    };

    // when
    const { getByTestId } = render(
      <ToastView
        variant={data?.variant}
        text={data?.text}
        action={data.action}
        actionText={data.actionText}
      />,
    );
    const toastContainer = getByTestId('toast-container');
    // then
    expect(toastContainer).toHaveStyle({
      backgroundColor: '#FEF2E8',
    });
  });

  test('should render the success toast with color #E7F9EF', () => {
    // given
    const data: ToastData = {
      variant: 'success',
      text: 'lorem ipsum dolor sit amet.',
      action: jest.fn(),
      actionText: 'Tamam',
    };

    // when
    const { getByTestId } = render(
      <ToastView
        variant={data?.variant}
        text={data?.text}
        action={data.action}
        actionText={data.actionText}
      />,
    );
    const toastContainer = getByTestId('toast-container');
    // then
    expect(toastContainer).toHaveStyle({
      backgroundColor: '#E7F9EF',
    });
  });

  test('should render the error toast with color #FFEEEC', () => {
    // given
    const data: ToastData = {
      variant: 'error',
      text: 'lorem ipsum dolor sit amet.',
      action: jest.fn(),
      actionText: 'Tamam',
    };

    // when
    const { getByTestId } = render(
      <ToastView
        variant={data?.variant}
        text={data?.text}
        action={data.action}
        actionText={data.actionText}
      />,
    );
    const toastContainer = getByTestId('toast-container');
    // then
    expect(toastContainer).toHaveStyle({
      backgroundColor: '#FFEEEC',
    });
  });

  test('should render the warning toast with color #FFF8E6', () => {
    // given
    const data: ToastData = {
      variant: 'warning',
      text: 'lorem ipsum dolor sit amet.',
      action: jest.fn(),
      actionText: 'Tamam',
    };

    // when
    const { getByTestId } = render(
      <ToastView
        variant={data?.variant}
        text={data?.text}
        action={data.action}
        actionText={data.actionText}
      />,
    );
    const toastContainer = getByTestId('toast-container');
    // then
    expect(toastContainer).toHaveStyle({
      backgroundColor: '#FFF8E6',
    });
  });

  test('should handle the action button press event', () => {
    const mockAction = jest.fn();
    // given
    const data: ToastData = {
      variant: 'error',
      text: 'lorem ipsum dolor sit amet.',
      action: mockAction,
      actionText: 'Tamam',
    };

    // when
    const { getByTestId } = render(
      <ToastView
        variant={data?.variant}
        text={data?.text}
        action={data.action}
        actionText={data.actionText}
      />,
    );
    const toastAction = getByTestId('toast-action');
    fireEvent.press(toastAction);
    // then
    expect(mockAction).toBeCalled();
  });

  test('should handle onLayout', () => {
    const mockAction = jest.fn();
    // given
    const data: ToastData = {
      variant: 'default',
      text: 'lorem ipsum dolor sit amet.',
      action: mockAction,
      actionText: 'Tamam',
    };

    // when
    const { getByTestId } = render(
      <ToastView
        variant={data?.variant}
        text={data?.text}
        action={data.action}
        actionText={data.actionText}
      />,
    );
    const toastContainer = getByTestId('toast-container');
    fireEvent(toastContainer, 'layout', {
      nativeEvent: { layout: { height: 200 } },
    });
  });

  test('should play hide anim after 7 seconds', () => {
    jest.useFakeTimers();
    const mockAction = jest.fn();
    const mockOnDisappared = jest.fn();
    // given
    const data: ToastData = {
      variant: 'default',
      text: 'lorem ipsum dolor sit amet.',
      action: mockAction,
      actionText: 'Tamam',
    };

    // when
    render(
      <ToastView
        variant={data?.variant}
        text={data?.text}
        duration={data.duration!}
        action={data.action}
        actionText={data.actionText}
        onDisappared={mockOnDisappared}
      />,
    );
    jest.runAllTimers();
    expect(mockOnDisappared).toBeCalled();
  });

  test('should handle ref show method', () => {
    const toastRef = React.createRef<ToastViewRef>();
    const mockAction = jest.fn();
    const mockOnDisappared = jest.fn();
    // given
    const data: ToastData = {
      variant: 'default',
      text: 'lorem ipsum dolor sit amet.',
      action: mockAction,
      actionText: 'Tamam',
    };

    // when
    render(
      <ToastView
        ref={toastRef}
        variant={data?.variant}
        text={data?.text}
        duration={data.duration!}
        action={data.action}
        actionText={data.actionText}
        onDisappared={mockOnDisappared}
      />,
    );
    toastRef.current?.show();
  });

  test('should handle ref hide method', () => {
    const toastRef = React.createRef<ToastViewRef>();
    const mockAction = jest.fn();
    const mockOnDisappared = jest.fn();
    // given
    const data: ToastData = {
      variant: 'default',
      text: 'lorem ipsum dolor sit amet.',
      action: mockAction,
      actionText: 'Tamam',
    };

    // when
    render(
      <ToastView
        ref={toastRef}
        variant={data?.variant}
        text={data?.text}
        duration={data.duration!}
        action={data.action}
        actionText={data.actionText}
        onDisappared={mockOnDisappared}
      />,
    );
    toastRef.current?.hide();
  });

  test('should handle onStartShouldSetPanResponderCapture', async () => {
    // given
    mockPanResponder();
    const data: ToastData = {
      variant: 'default',
      text: 'lorem ipsum dolor sit amet.',
      action: jest.fn(),
      actionText: 'Tamam',
    };

    // when
    const { getByTestId } = render(
      <ToastView
        variant={data?.variant}
        text={data?.text}
        action={data.action}
        actionText={data.actionText}
      />,
    );

    const panHandler = getByTestId('toast-container');
    panHandler?.props.onStartShouldSetResponderCapture({}, { dx: 0, dy: 0 });
  });

  test('should handle onResponderGrant', async () => {
    // given
    mockPanResponder();
    const data: ToastData = {
      variant: 'default',
      text: 'lorem ipsum dolor sit amet.',
      action: jest.fn(),
      actionText: 'Tamam',
    };

    // when
    const { getByTestId } = render(
      <ToastView variant={data?.variant} text={data?.text} />,
    );

    const panHandler = getByTestId('toast-container');
    panHandler?.props.onResponderGrant();
  });

  test('should handle onResponderMove', async () => {
    // given
    mockPanResponder();
    const data: ToastData = {
      variant: 'default',
      text: 'lorem ipsum dolor sit amet.',
      action: jest.fn(),
      actionText: 'Tamam',
    };

    // when
    const { getByTestId } = render(
      <ToastView variant={data?.variant} text={data?.text} />,
    );

    const panHandler = getByTestId('toast-container');
    panHandler?.props.onResponderMove({}, { dy: 10 });
  });

  test('should handle onResponderRelease swipe bigger than height', async () => {
    jest.useFakeTimers();
    // given
    const mockOnDisappared = jest.fn();
    mockPanResponder();
    const data: ToastData = {
      variant: 'default',
      text: 'lorem ipsum dolor sit amet.',
      action: jest.fn(),
      actionText: 'Tamam',
    };

    // when
    const { getByTestId } = render(
      <ToastView
        variant={data?.variant}
        text={data?.text}
        onDisappared={mockOnDisappared}
      />,
    );

    const toastContainer = getByTestId('toast-container');

    fireEvent(toastContainer, 'layout', {
      nativeEvent: { layout: { height: 100 } },
    });

    toastContainer?.props.onResponderRelease({}, { dy: 110 });
    jest.advanceTimersByTime(350);
    expect(mockOnDisappared).toBeCalled();
  });

  test('should handle onResponderRelease swipe lower than height', async () => {
    jest.useFakeTimers();
    // given
    const mockOnDisappared = jest.fn();
    mockPanResponder();
    const data: ToastData = {
      variant: 'default',
      text: 'lorem ipsum dolor sit amet.',
      action: jest.fn(),
      actionText: 'Tamam',
    };

    // when
    const { getByTestId } = render(
      <ToastView
        variant={data?.variant}
        text={data?.text}
        onDisappared={mockOnDisappared}
      />,
    );

    const toastContainer = getByTestId('toast-container');

    fireEvent(toastContainer, 'layout', {
      nativeEvent: { layout: { height: 100 } },
    });

    toastContainer?.props.onResponderRelease({}, { dy: 90 });
    jest.advanceTimersByTime(350);
    expect(mockOnDisappared).not.toBeCalled();
  });

  test('should handle onResponderRelease high velocity', async () => {
    jest.useFakeTimers();
    // given
    const mockOnDisappared = jest.fn();
    mockPanResponder();
    const data: ToastData = {
      variant: 'default',
      text: 'lorem ipsum dolor sit amet.',
      action: jest.fn(),
      actionText: 'Tamam',
    };

    // when
    const { getByTestId } = render(
      <ToastView
        variant={data?.variant}
        text={data?.text}
        onDisappared={mockOnDisappared}
      />,
    );

    const toastContainer = getByTestId('toast-container');

    fireEvent(toastContainer, 'layout', {
      nativeEvent: { layout: { height: 100 } },
    });

    toastContainer?.props.onResponderRelease({}, { dy: 10, vy: 0.051 });
    jest.advanceTimersByTime(350);
    expect(mockOnDisappared).toBeCalled();
  });

  test('should handle onResponderRelease low velocity', async () => {
    jest.useFakeTimers();
    // given
    const mockOnDisappared = jest.fn();
    mockPanResponder();
    const data: ToastData = {
      variant: 'default',
      text: 'lorem ipsum dolor sit amet.',
      action: jest.fn(),
      actionText: 'Tamam',
    };

    // when
    const { getByTestId } = render(
      <ToastView
        variant={data?.variant}
        text={data?.text}
        onDisappared={mockOnDisappared}
      />,
    );

    const toastContainer = getByTestId('toast-container');

    fireEvent(toastContainer, 'layout', {
      nativeEvent: { layout: { height: 100 } },
    });

    toastContainer?.props.onResponderRelease({}, { dy: 10, vy: 0.049 });
    jest.advanceTimersByTime(350);
    expect(mockOnDisappared).not.toBeCalled();
  });
});
