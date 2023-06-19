import React from 'react';
import Switch from './Switch';
import { render } from '../../test-utils';
import Theme from '../../theme';

describe('Switch', () => {
  test('should render switch correctly', () => {
    // when
    const { toJSON } = render(
      <Switch onChange={() => {}} accessibilityLabel={'switch'} />,
    );

    // then
    expect(toJSON()).toMatchSnapshot();
  });

  test('should render disabled switch correctly', () => {
    // when
    const { getByTestId } = render(
      <Switch onChange={() => {}} testID="switch" disabled={true} />,
    );
    const switchComponent = getByTestId('switch');

    // then
    expect(switchComponent.props.disabled).toBe(true);
  });

  test('should render disabled switch with value true correctly', () => {
    // when
    const { getByTestId } = render(
      <Switch
        onChange={() => {}}
        testID="switch"
        checked={true}
        disabled={true}
      />,
    );
    const switchComponent = getByTestId('switch');

    // then
    expect(switchComponent.props.disabled).toBe(true);
    expect(switchComponent.props.value).toBe(true);
  });

  test('should render disabled switch with value false correctly', () => {
    // when
    const { getByTestId } = render(
      <Switch
        onChange={() => {}}
        testID="switch"
        checked={false}
        disabled={true}
      />,
    );
    const switchComponent = getByTestId('switch');

    // then
    expect(switchComponent.props.disabled).toBe(true);
    expect(switchComponent.props.value).toBe(false);
  });

  test('should render given switch label correctly', () => {
    // when
    const { getByTestId } = render(
      <Switch
        onChange={() => {}}
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
        onChange={() => {}}
        testID={'switch'}
        label={'test switch label'}
        customization={{
          colorOn: Theme.colors.successColor,
          colorOff: Theme.colors.dangerColor,
        }}
      />,
    );
    const switchComponent = getByTestId('switch');

    //then
    expect(switchComponent.props.onTintColor).toBe(Theme.colors.successColor);
    expect(switchComponent.props.tintColor).toBe(Theme.colors.dangerColor);
  });
});
