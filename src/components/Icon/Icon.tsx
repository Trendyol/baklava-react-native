import React from 'react';
import { useTheme, VariantProps } from '@ergenekonyigit/restyle';
import * as icons from '../../icons';
import { Theme } from '../../theme';
import { IconNameType } from './types';
import { toPascalCase } from './utils';
import { ColorValue } from 'react-native';
import { SvgProps } from 'react-native-svg';

const Icon = ({
  name,
  color = 'neutralDarker',
  size = 'l',
  testID = 'icon',
  ...rest
}: SvgProps & {
  name: IconNameType;
  size?: VariantProps<Theme, 'iconSizeVariants'>['variant'];
  color?: VariantProps<Theme, 'colors'>['variant'] | ColorValue;
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
      title={name}
      fill={iconColor}
      width={iconSize}
      height={iconSize}
      testID={testID}
      accessibilityLabel={testID}
    />
  );
};

export default Icon;
