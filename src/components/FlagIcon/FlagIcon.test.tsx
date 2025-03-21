import React from 'react';
import theme from '../../theme';
import { render } from '../../test-utils';
import FlagIcon from './FlagIcon';
import { flagIconList } from './list';

describe('FlagIcon', () => {
  beforeEach(() => {
    jest.spyOn(console, 'warn').mockImplementation(() => ({}));
  });

  test('should render icon correctly', () => {
    // when
    const { toJSON } = render(<FlagIcon name="turkey" />);

    // then
    expect(toJSON()).toMatchSnapshot();
  });

  test('should render default size correctly', () => {
    // when
    const { getByTestId } = render(
      <FlagIcon testID="flagIcon" name="turkey" />,
    );
    const iconComponent = getByTestId('flagIcon');

    // then
    expect(iconComponent.props.width).toBe(theme.iconSizeVariants.l);
    expect(iconComponent.props.height).toBe(theme.iconSizeVariants.l);
  });

  test('should render given size correctly', () => {
    // when
    const { getByTestId } = render(
      <FlagIcon testID="flagIcon" name="turkey" size="2xs" />,
    );
    const iconComponent = getByTestId('flagIcon');

    // then
    expect(iconComponent.props.width).toBe(theme.iconSizeVariants['2xs']);
    expect(iconComponent.props.height).toBe(theme.iconSizeVariants['2xs']);
  });

  test('should render iconList correctly', () => {
    // when
    const { getByTestId } = render(
      <FlagIcon testID="flagIcon" name={flagIconList[6]} />,
    );
    const iconComponent = getByTestId('flagIcon');

    // then
    expect(iconComponent).toBeTruthy();
  });

  test('should not render icon component without name', () => {
    // when
    //@ts-ignore
    const { queryByTestId } = render(<FlagIcon testID="flagIcon" />);
    const iconComponent = queryByTestId('flagIcon');

    // then
    expect(iconComponent).toBeNull();
  });
});
