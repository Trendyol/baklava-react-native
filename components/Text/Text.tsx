import React from 'react';
import { Text as T } from 'react-native';
import styled from 'styled-components/native';
import {
  compose,
  color as styledColor,
  space,
  typography,
  position,
  size,
  fontFamily,
  fontWeight,
  textStyle,
  variant as styledVariant,
  fontSize,
} from 'styled-system';
import theme from '../../src/theme';
import { TextVariantTypes } from './types';

const StyledText = styled(T)(
  compose(
    styledColor,
    space,
    typography,
    position,
    size,
    fontSize,
    fontWeight,
    fontFamily,
    textStyle,
    styledVariant({ variants: theme.textStyle }),
  ),
);

function Text({
  variant = 'bodyText',
  color = 'contentPrimary',
  ...rest
}: {
  variant?: TextVariantTypes;
  color?: string;
  [key: string]: any;
}) {
  return (
    <StyledText
      //@ts-ignore
      variant={variant}
      color={color}
      {...rest}>
      {rest.children}
    </StyledText>
  );
}

export default Text;
