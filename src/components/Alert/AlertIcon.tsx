import React from 'react';
import Icon from '../Icon/Icon';
import { IconNameType } from '../Icon/types';
import { VariantProps } from '@ergenekonyigit/restyle';
import { Theme } from '../../theme';

export const AlertIcon = React.memo(
  ({
    variant = 'info',
    icon,
  }: {
    icon?: IconNameType | boolean | null;
    variant?: VariantProps<Theme, 'alertVariants'>['variant'];
  }): JSX.Element | null => {
    const iconName = React.useMemo(() => {
      if (typeof icon === 'boolean' && !icon) {
        return null;
      }

      return {
        info: 'info',
        success: 'check-fill',
        warning: 'warning',
        danger: 'alert',
      }[variant];
    }, [variant, icon]) as IconNameType | null;

    const iconColor = React.useMemo(() => {
      return {
        info: 'primaryKey',
        warning: 'warningKey',
        success: 'successKey',
        danger: 'dangerKey',
      }[variant];
    }, [variant]);

    if (!iconName) {
      return null;
    }

    return (
      <Icon size="s" name={iconName} color={iconColor} testID="alert-icon" />
    );
  },
);
