import React from 'react';
import theme from '../../theme';
import { fireEvent, render } from '../../test-utils';
import Alert from './Alert';
import Button from '../Button/Button';

describe('Alert', () => {
  test('should render alert correctly', () => {
    // when
    const { toJSON } = render(
      <Alert caption="caption" description="description" closable={true} />,
    );

    // then
    expect(toJSON()).toMatchSnapshot();
  });

  test('should render null when closed true', () => {
    // when
    const { toJSON } = render(
      <Alert
        caption="caption"
        description="description"
        closable={true}
        closed={true}
      />,
    );

    // then
    expect(toJSON()).toMatchSnapshot();
  });

  test('should render alert with given variant', () => {
    // when
    const { getByTestId } = render(<Alert testID="alert" variant="success" />);

    const alertComponent = getByTestId('alert');

    // then
    expect(alertComponent.props.style[1][0].backgroundColor).toBe(
      theme.colors.successContrast,
    );
  });

  test('should render alert with given children ', () => {
    // given
    const mockOnPress = jest.fn();

    // when
    const { getByTestId } = render(
      <Alert testID="alert" description="description">
        <Button
          label="Button"
          testID="alert-child-button"
          onPress={mockOnPress}
        />
      </Alert>,
    );
    const alertChildButton = getByTestId('alert-child-button');

    fireEvent.press(alertChildButton);

    // then
    expect(mockOnPress).toBeCalled();
  });
});
