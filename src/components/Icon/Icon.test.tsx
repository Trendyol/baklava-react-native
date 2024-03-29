import React from 'react';
import theme from '../../theme';
import { render } from '../../test-utils';
import Icon from './Icon';
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
    expect(iconComponent.props.width).toBe(theme.iconSizeVariants.l);
    expect(iconComponent.props.height).toBe(theme.iconSizeVariants.l);
  });

  test('should render given size correctly', () => {
    // when
    const { getByTestId } = render(
      <Icon testID="icon" name="confetti" size="2xs" />,
    );
    const iconComponent = getByTestId('icon');

    // then
    expect(iconComponent.props.width).toBe(theme.iconSizeVariants['2xs']);
    expect(iconComponent.props.height).toBe(theme.iconSizeVariants['2xs']);
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
      <Icon testID="icon" name="confetti" color="successKey" />,
    );
    const iconComponent = getByTestId('icon');

    // then
    expect(iconComponent.props.fill).toBe(theme.colors.successKey);
  });

  test('should render invalid color correctly', () => {
    // when
    const { getByTestId } = render(
      <Icon testID="icon" name="confetti" color="testtest" />,
    );
    const iconComponent = getByTestId('icon');

    // then
    expect(iconComponent.props.fill).not.toBe(theme.colors.neutralDarker);
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
