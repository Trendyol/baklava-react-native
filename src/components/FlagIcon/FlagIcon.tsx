import React from 'react';
import { useTheme, VariantProps } from '@ergenekonyigit/restyle';
import * as icons from '../../icons';
import { Theme } from '../../theme';
import { FlagIconNameType } from './types';
import { toPascalCase } from './utils';
import { SvgProps } from 'react-native-svg';

const FlagIcon = ({
  name,
  size = 'l',
  testID = 'flagIcon',
  ...rest
}: SvgProps & {
  name: FlagIconNameType;
  size?: VariantProps<Theme, 'iconSizeVariants'>['variant'];
}) => {
  const theme = useTheme<Theme>();

  if (!name) {
    return null;
  }

  const iconSize = theme.iconSizeVariants[size];

  const TheIcon = icons[toPascalCase(name) as keyof typeof icons];

  return (
    <TheIcon
      {...rest}
      title={name}
      width={iconSize}
      height={iconSize}
      testID={testID}
      accessibilityLabel={testID}
    />
  );
};

export default FlagIcon;
