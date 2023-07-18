import React from 'react';
import Switch from './Switch';
import { render } from '../../test-utils';
import Theme from '../../theme';

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
});
