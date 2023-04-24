import React from 'react';
import { render } from '../../test-utils';
import { AlertIcon } from './AlertIcon';

describe('AlertIcon', () => {
  test('should render alert icon correctly', () => {
    // when
    const { toJSON } = render(<AlertIcon />);

    // then
    expect(toJSON()).toMatchSnapshot();
  });

  test('should render null when icon false', () => {
    // when
    const { toJSON } = render(<AlertIcon icon={false} />);

    // then
    expect(toJSON()).toMatchSnapshot();
  });

  test('should render alert icon with given variant', () => {
    // when
    const { getByTestId } = render(<AlertIcon variant="success" />);

    const alertComponent = getByTestId('alert-icon');

    // then
    expect(alertComponent.props.title).toBe('check-fill');
  });
});
