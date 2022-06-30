import React from 'react';
import { Text as T } from 'react-native';
import styled from 'styled-components/native';
import {
  compose,
  color,
  space,
  typography,
  position,
  size,
  fontWeight,
  textStyle,
  variant,
  fontSize,
} from 'styled-system';
import theme from '../../src/theme';

const StyledText = styled(T)(
  compose(
    color,
    space,
    typography,
    position,
    size,
    fontSize,
    fontWeight,
    textStyle,
    variant({ variants: theme.textStyle }),
  ),
);

function Text(props: any) {
  return <StyledText {...props}>{props.children}</StyledText>;
}

Text.defaultProps = {
  variant: 'bodyText',
  color: 'contentPrimary',
};

export default Text;
