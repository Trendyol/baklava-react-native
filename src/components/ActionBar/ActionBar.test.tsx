import React from 'react';
import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { ReactTestInstance } from 'react-test-renderer';
import Text from '../Text/Text';
import { render } from '../../test-utils';
import theme from '../../theme';
import ActionBar from './ActionBar';

const inset = { top: 0, right: 0, bottom: 34, left: 0 };

jest.mock('react-native-safe-area-context', () => {
  return {
    SafeAreaProvider: jest.fn().mockImplementation(({ children }) => children),
    SafeAreaConsumer: jest
      .fn()
      .mockImplementation(({ children }) => children(inset)),
    useSafeAreaInsets: jest.fn().mockImplementation(() => inset),
  };
});

const flattenStyle = (style: ViewStyle | TextStyle | unknown) =>
  StyleSheet.flatten(style as ViewStyle);

describe('ActionBar', () => {
  test('should render ActionBar correctly', () => {
    // when
    const { toJSON } = render(
      <ActionBar testID="actionBar">
        <Text>Primary Button</Text>
      </ActionBar>,
    );

    // then
    expect(toJSON()).toMatchSnapshot();
  });

  test('should render given children', () => {
    // when
    const { getByTestId } = render(
      <ActionBar testID="actionBar">
        <Text>Primary Button</Text>
      </ActionBar>,
    );
    const actionBar = getByTestId('actionBar');
    const child = actionBar.children[0] as ReactTestInstance;

    // then
    expect(child.props.children).toBe('Primary Button');
  });

  test('should apply safe area padding by default', () => {
    // when
    const { getByTestId } = render(
      <ActionBar testID="actionBar">
        <Text>Primary Button</Text>
      </ActionBar>,
    );
    const actionBar = getByTestId('actionBar');

    // then
    expect(flattenStyle(actionBar.props.style).paddingBottom).toBe(
      inset.bottom,
    );
  });

  test('should not apply safe area padding when disableSafeArea is true', () => {
    // when
    const { getByTestId } = render(
      <ActionBar testID="actionBar" disableSafeArea>
        <Text>Primary Button</Text>
      </ActionBar>,
    );
    const actionBar = getByTestId('actionBar');

    // then
    expect(flattenStyle(actionBar.props.style).paddingBottom).toBe(0);
  });

  test('should use testID as accessibilityLabel when accessibilityLabel is not provided', () => {
    // when
    const { getByTestId } = render(
      <ActionBar testID="actionBar">
        <Text>Primary Button</Text>
      </ActionBar>,
    );
    const actionBar = getByTestId('actionBar');

    // then
    expect(actionBar.props.testID).toBe('actionBar');
    expect(actionBar.props.accessibilityLabel).toBe('actionBar');
  });

  test('should use accessibilityLabel as testID when testID is not provided', () => {
    // when
    const { getByTestId } = render(
      <ActionBar accessibilityLabel="actionBarLabel">
        <Text>Primary Button</Text>
      </ActionBar>,
    );
    const actionBar = getByTestId('actionBarLabel');

    // then
    expect(actionBar.props.testID).toBe('actionBarLabel');
    expect(actionBar.props.accessibilityLabel).toBe('actionBarLabel');
  });

  test('should keep both testID and accessibilityLabel when both are provided', () => {
    // when
    const { getByTestId } = render(
      <ActionBar testID="actionBar" accessibilityLabel="actionBarLabel">
        <Text>Primary Button</Text>
      </ActionBar>,
    );
    const actionBar = getByTestId('actionBar');

    // then
    expect(actionBar.props.testID).toBe('actionBar');
    expect(actionBar.props.accessibilityLabel).toBe('actionBarLabel');
  });

  test('should not set testID or accessibilityLabel when neither is provided', () => {
    // when
    const { queryByTestId, getByText } = render(
      <ActionBar>
        <Text>Primary Button</Text>
      </ActionBar>,
    );

    // then
    expect(queryByTestId('actionBar')).toBeNull();
    expect(getByText('Primary Button')).toBeTruthy();
  });

  test('should render container styles correctly', () => {
    // when
    const { getByTestId } = render(
      <ActionBar testID="actionBar">
        <Text>Primary Button</Text>
      </ActionBar>,
    );
    const actionBar = getByTestId('actionBar');
    const style = flattenStyle(actionBar.props.style);

    // then
    expect(style.position).toBe('absolute');
    expect(style.bottom).toBe(0);
    expect(style.left).toBe(0);
    expect(style.right).toBe(0);
    expect(style.elevation).toBe(5);
    expect(style.backgroundColor).toBe(theme.colors.neutralFull);
    expect(style.paddingHorizontal).toBe(theme.spacing.m);
    expect(style.paddingTop).toBe(theme.spacing.m);
    expect(style.borderTopLeftRadius).toBe(theme.borderRadii.l);
    expect(style.borderTopRightRadius).toBe(theme.borderRadii.l);
    expect(style.shadowColor).toBe(theme.colors.neutralDarker);
    expect(style.shadowOffset).toEqual({ width: 0, height: -4 });
    expect(style.shadowOpacity).toBe(0.15);
    expect(style.shadowRadius).toBe(7.5);
    expect(style.gap).toBe(theme.spacing.m);
  });

  test('should override default styles with rest props', () => {
    // when
    const { getByTestId } = render(
      <ActionBar testID="actionBar" backgroundColor="primaryKey">
        <Text>Primary Button</Text>
      </ActionBar>,
    );
    const actionBar = getByTestId('actionBar');

    // then
    expect(flattenStyle(actionBar.props.style).backgroundColor).toBe(
      theme.colors.primaryKey,
    );
  });
});
