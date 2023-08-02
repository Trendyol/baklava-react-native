import React from 'react';
import { IconNameType } from '../Icon/types';
import {
  createRestyleComponent,
  createVariant,
  VariantProps,
} from '@ergenekonyigit/restyle';
import theme, { Theme } from '../../theme';
import Box from '../Box/Box';
import Icon from '../Icon/Icon';
import Text, { TextProps } from '../Text/Text';
import { ColorValue, Platform } from 'react-native';

type ThemeColor = VariantProps<Theme, 'colors'>['variant'];

type BadgeProps = {
  variant?: VariantProps<Theme, 'badgeVariants'>['variant'];
  icon?: IconNameType | null;
  color?: ColorValue;
  backgroundColor?: string;
  text?: string;
  size?: VariantProps<Theme, 'badgeSizeVariants'>['variant'];
  transparent?: boolean;
};

const variantVariant = createVariant<Theme, 'badgeVariants', 'variant'>({
  property: 'variant',
  themeKey: 'badgeVariants',
});

const BadgeBackground = createRestyleComponent<
  React.ComponentProps<typeof Box> & VariantProps<Theme, 'badgeVariants'>,
  Theme
>([variantVariant], Box);

const sizeVariant = createVariant<Theme, 'badgeSizeVariants', 'size'>({
  property: 'size',
  themeKey: 'badgeSizeVariants',
});

const BadgeText = createRestyleComponent<
  TextProps & VariantProps<Theme, 'badgeSizeVariants', 'size'>,
  Theme
>([sizeVariant], Text);

const Badge = ({
  variant = 'default',
  icon,
  color,
  backgroundColor,
  text,
  size,
  transparent,
}: BadgeProps) => {
  const iconView = React.useMemo(() => {
    let iconName: IconNameType | undefined;
    switch (variant) {
      case 'neutral':
        iconName = 'alert';
        break;
      case 'success':
        iconName = 'check-fill';
        break;
      case 'warning':
        iconName = 'warning';
        break;
      case 'danger':
        iconName = 'close-fill';
        break;
      default:
        iconName = undefined;
    }
    if (icon) {
      iconName = icon;
    }
    if (!iconName) {
      return null;
    }
    return (
      <Box testID="badgeIconBox" pl="3xs" py="3xs" pr={!text ? '3xs' : 'none'}>
        <Icon
          testID="badgeIcon"
          size="xs"
          name={iconName}
          color={color ?? theme.badgeVariants[variant].color}
        />
      </Box>
    );
  }, [icon, color, variant, text]);

  const textStyle = React.useMemo(() => {
    if (!color) {
      return undefined;
    } else {
      return { color };
    }
  }, [color]);

  return (
    <Box
      testID="badge"
      borderRadius="xs"
      justifyContent="center"
      alignSelf="flex-start"
      flexDirection="row"
      alignItems="center"
      style={{ backgroundColor }}>
      {!transparent && (
        <BadgeBackground testID="badgeBackground" variant={variant} />
      )}
      {iconView}
      {text && (
        <BadgeText
          testID="badgeText"
          color={theme.badgeVariants[variant].color as ThemeColor}
          size={size}
          fontWeight={Platform.OS == 'ios' ? '500' : 'bold'}
          style={textStyle}>
          {text}
        </BadgeText>
      )}
    </Box>
  );
};

export default Badge;
