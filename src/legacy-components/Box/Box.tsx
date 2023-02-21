import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import {
  flexbox,
  color,
  size,
  space,
  borders,
  borderRadius,
} from 'styled-system';

const BaseBox = styled(View)`
  ${flexbox}
  ${color}
  ${size}
  ${space}
  ${borders}
  ${borderRadius}
`;

const Box = ({
  testID = 'box',
  ...rest
}: {
  testID?: string;
  [key: string]: any;
}) => {
  return <BaseBox testID={testID} {...rest} />;
};

export default Box;
