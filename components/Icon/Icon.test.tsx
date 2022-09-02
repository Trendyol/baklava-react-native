import React from 'react';
import { theme } from '../../src';
import { render } from '../../src/testUtils';
import Icon from '../Icon/Icon';
import { iconList } from './list';

describe('Icon', () => {
  beforeEach(() => {
    jest.spyOn(console, 'warn').mockImplementation(() => ({}));
  });

  test('should render icon correctly', () => {
    // when
    const { toJSON } = render(<Icon name="academy" />);

    // then
    expect(toJSON()).toMatchSnapshot();
  });

  test('should render default size correctly', () => {
    // when
    const { getByTestId } = render(<Icon testID="icon" name="confetti" />);
    const iconComponent = getByTestId('icon');

    // then
    expect(iconComponent.props.width).toBe(theme.iconSizes[4]);
    expect(iconComponent.props.height).toBe(theme.iconSizes[4]);
  });

  test('should render given size correctly', () => {
    // when
    const { getByTestId } = render(
      <Icon testID="icon" name="confetti" size="2xsmall" />,
    );
    const iconComponent = getByTestId('icon');

    // then
    expect(iconComponent.props.width).toBe(theme.iconSizes[0]);
    expect(iconComponent.props.height).toBe(theme.iconSizes[0]);
  });

  test('should render default color correctly', () => {
    // when
    const { getByTestId } = render(<Icon testID="icon" name="confetti" />);
    const iconComponent = getByTestId('icon');

    // then
    expect(iconComponent.props.fill).toBe('#273142');
  });

  test('should render given color correctly', () => {
    // when
    const { getByTestId } = render(
      <Icon testID="icon" name="confetti" color="successColor" />,
    );
    const iconComponent = getByTestId('icon');

    // then
    expect(iconComponent.props.fill).toBe(theme.colors.successColor);
  });

  test('should render invalid color correctly', () => {
    // when
    const { getByTestId } = render(
      <Icon testID="icon" name="confetti" color="testtest" />,
    );
    const iconComponent = getByTestId('icon');

    // then
    expect(iconComponent.props.fill).not.toBe(theme.colors.contentPrimary);
    expect(iconComponent.props.fill).not.toBe('#273142');
  });

  test('should render iconList correctly', () => {
    // when
    const { getByTestId } = render(<Icon testID="icon" name={iconList[6]} />);
    const iconComponent = getByTestId('icon');

    // then
    expect(iconComponent).toBeTruthy();
  });

  test('should not render icon component without name', () => {
    // when
    //@ts-ignore
    const { queryByTestId } = render(<Icon testID="icon" />);
    const iconComponent = queryByTestId('icon');

    // then
    expect(iconComponent).toBeNull();
  });
});
