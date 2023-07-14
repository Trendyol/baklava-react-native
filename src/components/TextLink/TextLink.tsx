import Text from '../Text/Text';
import React from 'react';
import { VariantProps } from '@ergenekonyigit/restyle';
import { Theme } from '../../theme';

type TextLinkProps = React.ComponentProps<typeof Text> & {
  variant?: VariantProps<Theme, 'textVariants'>['variant'];
  onPress?: () => void;
  children?: string;
  isPressed?: boolean;
};

const TextLink = ({
  variant = 'body2',
  children,
  onPress,
  isPressed,
  ...rest
}: TextLinkProps) => {
  const typeColor = isPressed ? 'primaryColor' : 'neutralDarker';

  if (!children) {
    return null;
  }

  return (
    <Text
      onPress={onPress}
      color={typeColor}
      variant={variant}
      testID="button-text"
      textDecorationLine="underline"
      {...rest}>
      {children}
    </Text>
  );
};

export default TextLink;
