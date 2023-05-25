import React from 'react';
import { ReactTestInstance } from 'react-test-renderer';
import theme from '../../theme';
import { render } from '../../test-utils';
import Box from './Box';
import Text from '../Text/Text';

describe('Box', () => {
  test('should render box correctly', () => {
    // when
    const { toJSON } = render(<Box />);

    // then
    expect(toJSON()).toMatchSnapshot();
  });

  test('should render given box', () => {
    // when
    const { getByTestId } = render(
      <Box testID="box" backgroundColor="primaryKey" />,
    );

    const boxComponent = getByTestId('box');

    // then
    expect(boxComponent.props.style[0].backgroundColor).toBe(
      theme.colors.primaryKey,
    );
  });

  test('should render given box children ', () => {
    // when
    const { getByTestId } = render(
      <Box testID="box" backgroundColor="primaryKey">
        <Text>testtest</Text>
      </Box>,
    );
    const boxComponent = getByTestId('box');

    // then
    const textComponent = boxComponent.children[0] as ReactTestInstance;
    expect(textComponent.props.children).toBe('testtest');
  });
});
