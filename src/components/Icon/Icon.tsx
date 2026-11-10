import React from 'react';
import { useTheme, VariantProps } from '@ergenekonyigit/restyle';
import { I18nManager } from 'react-native';
import * as icons from '../../icons';
import { Theme } from '../../theme';
import { deprecatedIconNames, rtlFlippableIconNames } from './list';
import { IconNameType } from './types';
import { toPascalCase } from './utils';
import { ColorValue } from 'react-native';
import { SvgProps } from 'react-native-svg';

// Legacy kebab-case names keep working as aliases of the primary
// (Baklava Web) names. See scripts/icons/legacy-aliases.mjs.
const resolveIconName = (name: IconNameType) =>
  (deprecatedIconNames as Record<string, string>)[name] ?? name;

const Icon = ({
  name,
  color = 'neutralDarker',
  size = 'l',
  testID = 'icon',
  style,
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

  const primaryName = resolveIconName(name);

  const TheIcon = icons[toPascalCase(primaryName) as keyof typeof icons];

  const isFlippable = (rtlFlippableIconNames as readonly string[]).includes(
    primaryName,
  );

  return (
    <TheIcon
      {...rest}
      title={name}
      fill={iconColor}
      width={iconSize}
      height={iconSize}
      style={
        isFlippable
          ? [{ transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }] }, style]
          : style
      }
      testID={testID}
      accessibilityLabel={testID}
    />
  );
};

export default Icon;
