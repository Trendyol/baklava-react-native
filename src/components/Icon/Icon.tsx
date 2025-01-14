import React from 'react';
import { useTheme, VariantProps } from '@ergenekonyigit/restyle';
import * as icons from '../../icons';
import { Theme } from '../../theme';
import { IconNameType } from './types';
import { toPascalCase } from './utils';
import { ColorValue, ViewProps } from 'react-native';

const Icon = ({
  name,
  color = 'neutralDarker',
  size = 'l',
  testID = 'icon',
  ...rest
}: ViewProps & {
  name: IconNameType;
  size?: VariantProps<Theme, 'iconSizeVariants'>['variant'];
  color?: VariantProps<Theme, 'colors'>['variant'] | ColorValue;
  testID?: string;
}) => {
  const theme = useTheme<Theme>();

  if (!name) {
    return null;
  }

  const iconColor = theme.colors[`${color as keyof Theme['colors']}`] ?? color;

  const iconSize = theme.iconSizeVariants[size];

  const TheIcon = icons[toPascalCase(name) as keyof typeof icons];

  return (
    <TheIcon
      {...rest}
      hitSlop={rest.hitSlop || undefined}
      title={name}
      fill={iconColor}
      width={iconSize}
      height={iconSize}
      testID={testID}
    />
  );
};

export default Icon;
