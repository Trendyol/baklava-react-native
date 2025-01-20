import React from 'react';
import { Animated } from 'react-native';
import { render } from '../../test-utils';
import theme from '../../theme';
import Spinner from './Spinner';
import { ReactTestInstance } from 'react-test-renderer';

describe('Spinner', () => {
  test('should render Spinner correctly', () => {
    // when
    const { toJSON } = render(<Spinner />);

    // then
    expect(toJSON()).toMatchSnapshot();
  });

  test('should render given spinner', () => {
    // when
    const { getByTestId } = render(
      <Spinner testID="spinner" color="successKey" />,
    );

    const spinnerComponent = getByTestId('spinner')
      .children[0] as ReactTestInstance;

    // then
    expect(spinnerComponent.props.children[0].props.fill).toBe(
      theme.colors.successKey,
    );
    expect(spinnerComponent.props.children[0].props.opacity).toBe(0.3);
    expect(spinnerComponent.props.children[1].props.fill).toBe(
      theme.colors.successKey,
    );
  });

  test('should render custom named color', () => {
    // when
    const { getByTestId } = render(<Spinner testID="spinner" color="pink" />);

    const spinnerComponent = getByTestId('spinner')
      .children[0] as ReactTestInstance;

    // then
    expect(spinnerComponent.props.children[0].props.fill).toBe('pink');
    expect(spinnerComponent.props.children[0].props.opacity).toBe(0.3);
    expect(spinnerComponent.props.children[1].props.fill).toBe('pink');
  });

  test('should render hex color', () => {
    // when
    const { getByTestId } = render(
      <Spinner testID="spinner" color="#5C8984" />,
    );

    const spinnerComponent = getByTestId('spinner')
      .children[0] as ReactTestInstance;

    // then
    expect(spinnerComponent.props.children[0].props.fill).toBe('#5C8984');
    expect(spinnerComponent.props.children[0].props.opacity).toBe(0.3);
    expect(spinnerComponent.props.children[1].props.fill).toBe('#5C8984');
  });

  test('should start spin animation', () => {
    const mockStart = jest.fn();
    const mockStop = jest.fn();
    const mockLoop = jest
      .fn()
      .mockReturnValue({ start: mockStart, stop: mockStop });
    jest.spyOn(Animated, 'loop').mockImplementation(mockLoop);
    // when
    render(<Spinner testID="spinner" color="successKey" />);

    // then
    expect(mockLoop).toBeCalled();
    expect(mockStart).toBeCalled();
  });

  test('should stop spin animation', () => {
    const mockStart = jest.fn();
    const mockStop = jest.fn();
    const mockLoop = jest
      .fn()
      .mockReturnValue({ start: mockStart, stop: mockStop });
    jest.spyOn(Animated, 'loop').mockImplementation(mockLoop);
    // when
    const { unmount } = render(<Spinner testID="spinner" color="successKey" />);
    unmount();

    // then
    expect(mockStop).toBeCalled();
  });
});
