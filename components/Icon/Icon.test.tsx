import React from 'react';
import { theme } from '../../src';
import { render } from '../../src/testUtils';
import Icon from '../Icon/Icon';

describe('Icon', () => {
  test('should render icon correctly', () => {
    // when
    const { toJSON } = render(<Icon name="academy" />);

    // then
    expect(toJSON()).toMatchSnapshot();
  });
});
