import React from 'react';
import Switch from './Switch';
import { fireEvent, render } from '../../test-utils';
import Theme from '../../theme';
import { Animated } from 'react-native';

describe('Switch', () => {
  test('should render switch correctly', () => {
    // when
    const { toJSON } = render(
      <Switch onValueChange={() => {}} accessibilityLabel={'switch'} />,
    );

    // then
    expect(toJSON()).toMatchSnapshot();
  });

  test('should render disabled switch correctly', () => {
    // when
    const { getByTestId } = render(
      <Switch onValueChange={() => {}} testID="switch" disabled={true} />,
    );
    const switchComponent = getByTestId('switch');

    // then
    expect(switchComponent.props.style[0].opacity).toBe(0.5);
  });

  test('should render disabled switch with value true correctly', () => {
    // when
    const { getByTestId } = render(
      <Switch
        onValueChange={() => {}}
        testID="switch"
        value={true}
        disabled={true}
      />,
    );
    const switchComponent = getByTestId('switch');
    const switchOuterView = getByTestId('switch-outer-view');

    // then
    expect(switchComponent.props.style[0].opacity).toBe(0.5);
    expect(switchOuterView._fiber.pendingProps.backgroundColor).toBe(
      'rgba(242, 122, 26, 1)',
    );
  });

  test('should render disabled switch with value false correctly', () => {
    // when
    const { getByTestId } = render(
      <Switch
        onValueChange={() => {}}
        testID="switch"
        value={false}
        disabled={true}
        onColor={undefined}
        offColor={undefined}
      />,
    );
    const switchComponent = getByTestId('switch');
    const switchOuterView = getByTestId('switch-outer-view');

    // then
    expect(switchOuterView._fiber.pendingProps.backgroundColor).toBe(
      'rgba(175, 187, 202, 1)',
    );
    expect(switchComponent.props.style[0].opacity).toBe(0.5);
  });

  test('should render given switch label correctly', () => {
    // when
    const { getByTestId } = render(
      <Switch
        onValueChange={() => {}}
        testID={'switch'}
        label={'test switch label'}
      />,
    );
    const switchComponent = getByTestId('switch-label');

    // then
    expect(switchComponent.props.children).toBe('test switch label');
  });

  test('should render customized switch correctly', () => {
    // when
    const { getByTestId } = render(
      <Switch
        onValueChange={() => {}}
        testID={'switch'}
        label={'test switch label'}
        onColor={Theme.colors.successColor}
        offColor={Theme.colors.dangerColor}
      />,
    );
    const switchOuterView = getByTestId('switch-outer-view');

    //then
    expect(switchOuterView._fiber.pendingProps.backgroundColor).toBe(
      'rgba(255, 80, 67, 1)',
    );
  });

  test('should trigger switch when pressed', () => {
    // given
    const onPress = jest.fn();

    // when
    const { getByTestId } = render(
      <Switch testID="switch" onValueChange={onPress} />,
    );
    const switchComponent = getByTestId('switch');
    fireEvent.press(switchComponent);

    // then
    expect(onPress).toBeCalled();
  });

  test('should trigger the animation and call Animated.timing with correct parameters when pressIn', () => {
    // given
    const onStartAnimationMock = jest.fn();

    //@ts-ignore
    Animated.timing = jest.fn((value, config) => {
      return {
        start: jest.fn(callback => {
          value.setValue(config.toValue);
          callback && callback({ finished: true });
        }),
      };
    });

    // when
    const { getByTestId } = render(
      <Switch onValueChange={onStartAnimationMock} testID="switch" />,
    );
    const switchComponent = getByTestId('switch');
    fireEvent(switchComponent, 'pressIn');

    // then
    expect(Animated.timing).toHaveBeenNthCalledWith(1, expect.anything(), {
      toValue: 0,
      duration: 130,
      useNativeDriver: false,
      easing: expect.anything(),
    });

    expect(Animated.timing).toHaveBeenNthCalledWith(2, expect.anything(), {
      toValue: 0,
      duration: 90,
      useNativeDriver: false,
      easing: expect.anything(),
    });

    expect(Animated.timing).toHaveBeenNthCalledWith(3, expect.anything(), {
      toValue: -1,
      duration: 200,
      useNativeDriver: false,
      easing: expect.anything(),
    });

    expect(Animated.timing).toHaveBeenNthCalledWith(4, expect.anything(), {
      toValue: 24,
      duration: 200,
      useNativeDriver: false,
      easing: expect.anything(),
    });

    expect(onStartAnimationMock).toHaveBeenCalledTimes(1);
  });

  test('should trigger the animation and call Animated.timing with correct parameters when pressIn and value is true', () => {
    // given
    const onStartAnimationMock = jest.fn();

    //@ts-ignore
    Animated.timing = jest.fn((value, config) => {
      return {
        start: jest.fn(callback => {
          value.setValue(config.toValue);
          callback && callback({ finished: true });
        }),
      };
    });

    // when
    const { getByTestId } = render(
      <Switch
        onValueChange={onStartAnimationMock}
        testID="switch"
        value={true}
      />,
    );
    const switchComponent = getByTestId('switch');
    fireEvent(switchComponent, 'pressIn');

    // then
    expect(Animated.timing).toHaveBeenNthCalledWith(1, expect.anything(), {
      toValue: 1,
      duration: 130,
      useNativeDriver: false,
      easing: expect.anything(),
    });

    expect(Animated.timing).toHaveBeenNthCalledWith(2, expect.anything(), {
      toValue: 0,
      duration: 90,
      useNativeDriver: false,
      easing: expect.anything(),
    });

    expect(Animated.timing).toHaveBeenNthCalledWith(3, expect.anything(), {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
      easing: expect.anything(),
    });

    expect(Animated.timing).toHaveBeenNthCalledWith(4, expect.anything(), {
      toValue: 24,
      duration: 200,
      useNativeDriver: false,
      easing: expect.anything(),
    });

    expect(onStartAnimationMock).toHaveBeenCalledTimes(1);
  });

  test('should trigger the animation and call Animated.timing with correct parameters when pressOut', () => {
    // given
    const onStartAnimationMock = jest.fn();

    //@ts-ignore
    Animated.timing = jest.fn((value, config) => {
      return {
        start: jest.fn(callback => {
          value.setValue(config.toValue);
          callback && callback({ finished: true });
        }),
      };
    });

    // when
    const { getByTestId } = render(
      <Switch onValueChange={onStartAnimationMock} testID="switch" />,
    );
    const switchComponent = getByTestId('switch');
    fireEvent(switchComponent, 'pressOut');

    // then
    expect(Animated.timing).toHaveBeenNthCalledWith(1, expect.anything(), {
      toValue: 0,
      duration: 130,
      useNativeDriver: false,
      easing: expect.anything(),
    });

    expect(Animated.timing).toHaveBeenNthCalledWith(2, expect.anything(), {
      toValue: 0,
      duration: 90,
      useNativeDriver: false,
      easing: expect.anything(),
    });

    expect(Animated.timing).toHaveBeenNthCalledWith(3, expect.anything(), {
      toValue: 20,
      duration: 130,
      useNativeDriver: false,
      easing: expect.anything(),
    });

    expect(onStartAnimationMock).toHaveBeenCalledTimes(1);
  });

  test('should trigger the animation and call Animated.timing with correct parameters when pressOut and value is true', () => {
    // given
    const onStartAnimationMock = jest.fn();

    //@ts-ignore
    Animated.timing = jest.fn((value, config) => {
      return {
        start: jest.fn(callback => {
          value.setValue(config.toValue);
          callback && callback({ finished: true });
        }),
      };
    });

    // when
    const { getByTestId } = render(
      <Switch
        onValueChange={onStartAnimationMock}
        testID="switch"
        value={true}
      />,
    );
    const switchComponent = getByTestId('switch');
    fireEvent(switchComponent, 'pressOut');

    // then
    expect(Animated.timing).toHaveBeenNthCalledWith(1, expect.anything(), {
      toValue: 1,
      duration: 130,
      useNativeDriver: false,
      easing: expect.anything(),
    });

    expect(Animated.timing).toHaveBeenNthCalledWith(2, expect.anything(), {
      toValue: 0,
      duration: 90,
      useNativeDriver: false,
      easing: expect.anything(),
    });

    expect(Animated.timing).toHaveBeenNthCalledWith(3, expect.anything(), {
      toValue: 20,
      duration: 130,
      useNativeDriver: false,
      easing: expect.anything(),
    });

    expect(onStartAnimationMock).toHaveBeenCalledTimes(1);
  });

  test('should render correctly when testID is not present', () => {
    // when
    const { getByTestId } = render(
      <Switch onValueChange={() => {}} label={'test switch label'} />,
    );
    const switchComponent = getByTestId('switch-outer-view');

    // then
    expect(switchComponent.props.accessibilityLabel).toBeUndefined();
    expect(switchComponent.props.accessible).toBeUndefined();
  });
});
