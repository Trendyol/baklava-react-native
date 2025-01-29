import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import {
  VariantProps,
  createRestyleComponent,
  createVariant,
} from '@ergenekonyigit/restyle';
import Box from '../Box/Box';
import Text from '../Text/Text';
import Icon from '../Icon/Icon';
import { IconNameType } from '../Icon/types';
import theme, { Theme } from '../../theme';
import { AlertIcon } from './AlertIcon';
import { deviceWidth } from '../../utils/dimentions';

type AlertProps = React.ComponentProps<typeof Box> & {
  variant?: VariantProps<Theme, 'alertVariants'>['variant'];
  icon?: IconNameType | boolean | null;
  caption?: string | null;
  description?: string;
  closable?: boolean;
  closed?: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
};

const variantVariant = createVariant<Theme, 'alertVariants', 'variant'>({
  property: 'variant',
  themeKey: 'alertVariants',
});

const AlertContainer = createRestyleComponent<
  AlertProps & VariantProps<Theme, 'alertVariants'>,
  Theme
>([variantVariant], Box);

const Alert = ({
  variant = 'info',
  icon,
  caption,
  description,
  closable,
  closed,
  onClose,
  children,
  ...rest
}: AlertProps) => {
  if (closed) {
    return null;
  }

  return (
    <AlertContainer variant={variant} {...rest}>
      <Box p="m" flexDirection="row" width={deviceWidth - theme.spacing['2xl']}>
        <Box pr="2xs">
          <AlertIcon variant={variant} icon={icon} />
        </Box>
        <Box flex={1}>
          {caption ? (
            <Text
              variant="subtitle03Medium"
              pb="2xs"
              testID="alert-caption"
              textAlign={'left'}>
              {caption}
            </Text>
          ) : null}

          {description ? (
            <Text testID="alert-description" textAlign={'left'}>
              {description}
            </Text>
          ) : null}

          {children ? (
            <Box flexDirection="row" pt="2xs">
              {children}
            </Box>
          ) : null}
        </Box>
        <Box>
          {closable ? (
            <Pressable
              onPress={onClose}
              style={styles.closeButton}
              testID="alert-close-button">
              <Icon size="xs" name="close" />
            </Pressable>
          ) : null}
        </Box>
      </Box>
    </AlertContainer>
  );
};

const styles = StyleSheet.create({
  closeButton: {
    padding: theme.spacing['2xs'],
    marginTop: theme.spacing['-2xs'],
    marginRight: theme.spacing['-2xs'],
  },
});

export default Alert;
