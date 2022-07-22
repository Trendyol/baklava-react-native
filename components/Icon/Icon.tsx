import React from 'react';
import * as icons from '../../src/icons';
import theme from '../../src/theme';
import { IconNameType, IconSizeType } from './types';
import { toPascalCase } from './utils';

const Icon = ({
  name,
  color = 'contentPrimary',
  size = 'large',
  ...rest
}: {
  name: IconNameType;
  size?: IconSizeType;
  color?: string;
}) => {
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

  const iconColor = (theme.colors[`${color}`] as string) ?? color;

  const TheIcon = icons[iconName as keyof typeof icons];

  return (
    <TheIcon {...rest} fill={iconColor} width={iconSize} height={iconSize} />
  );
};

Icon.defaultProps = {
  testID: 'icon',
};

export default Icon;
