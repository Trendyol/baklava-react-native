import React from 'react';
import { useTheme } from 'styled-components/native';
import * as icons from '../../icons';
import { Theme } from '../../theme';
import { IconNameType, IconSizeType } from './types';
import { toPascalCase } from './utils';

const Icon = ({
  name,
  color = 'contentPrimary',
  size = 'large',
  testID = 'icon',
  ...rest
}: {
  name: IconNameType;
  size?: IconSizeType;
  color?: keyof Theme['colors'] | string;
  testID?: string;
}) => {
  const theme = useTheme() as Theme;

  if (!name) {
    return null;
  }

  const iconName = toPascalCase(name);

  const iconSize = {
    '2xsmall': theme.iconSizes[0],
    xsmall: theme.iconSizes[1],
    small: theme.iconSizes[2],
    medium: theme.iconSizes[3],
    large: theme.iconSizes[4],
    xlarge: theme.iconSizes[5],
  }[size];

  const iconColor = theme.colors[`${color as keyof Theme['colors']}`] ?? color;

  const TheIcon = icons[iconName as keyof typeof icons];

  return (
    <TheIcon
      {...rest}
      fill={iconColor}
      width={iconSize}
      height={iconSize}
      testID={testID}
    />
  );
};

export default Icon;
