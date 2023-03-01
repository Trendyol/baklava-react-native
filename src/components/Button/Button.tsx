import React from 'react';
import { Pressable } from 'react-native';
import {
  backgroundColor,
  border,
  createRestyleComponent,
  createVariant,
  layout,
  LayoutProps,
  spacing,
  spacingShorthand,
  SpacingProps,
  SpacingShorthandProps,
  VariantProps,
} from '@ergenekonyigit/restyle';
import Text, { TextVariants } from '../Text/Text';
import { useIsPressed } from './hooks';
import { IconNameType } from '../Icon/types';
import Icon from '../Icon/Icon';
import { Theme } from '../../theme';
import Box from '../Box/Box';
import { variantColorSelector } from './utils';

type ButtonProps = React.ComponentProps<typeof Box> &
  React.ComponentProps<typeof Pressable> & {
    children?: React.ReactNode;
    onPress?: () => void;
    label?: string;
    icon?: IconNameType | null;
    disabled?: boolean;
    isPressed?: boolean;
    filled?: boolean;
    size?: VariantProps<Theme, 'buttonSizeVariants'>['variant'];
    kind?: VariantProps<Theme, 'buttonKindVariants'>['variant'];
    variant?: VariantProps<Theme, 'buttonVariants'>['variant'];
  };

const sizeVariant = createVariant<Theme, 'buttonSizeVariants', 'size'>({
  property: 'size',
  themeKey: 'buttonSizeVariants',
});

const kindVariant = createVariant<Theme, 'buttonKindVariants', 'kind'>({
  property: 'kind',
  themeKey: 'buttonKindVariants',
});

const variantVariant = createVariant<Theme, 'buttonVariants', 'variant'>({
  property: 'variant',
  themeKey: 'buttonVariants',
});

const ButtonContainer = createRestyleComponent<
  ButtonProps &
    VariantProps<Theme, 'buttonSizeVariants'> &
    VariantProps<Theme, 'buttonKindVariants'> &
    VariantProps<Theme, 'buttonVariants'>,
  Theme
>(
  [
    layout,
    spacing,
    border,
    backgroundColor,
    sizeVariant,
    kindVariant,
    variantVariant,
  ],
  Box,
);

type PressableProps = React.ComponentProps<typeof Pressable> &
  LayoutProps<Theme> &
  SpacingProps<Theme> &
  SpacingShorthandProps<Theme>;

const PressableContainer = createRestyleComponent<PressableProps, Theme>(
  [layout, spacing, spacingShorthand],
  Pressable,
);

const Button = ({
  size = 'm',
  kind = 'default',
  variant = 'primary',
  icon,
  label,
  disabled = false,
  filled = false,
  ...rest
}: ButtonProps) => {
  const { pressableProps, isPressed } = useIsPressed(rest.isPressed);

  /* istanbul ignore next */
  const onPressIn = () => pressableProps.onPressIn();
  /* istanbul ignore next */
  const onPressOut = () => pressableProps.onPressOut();

  const buttonHorizontalPadding = label
    ? ({
        s: 'm',
        m: 'xl',
        l: '2xl',
      }[size] as SpacingProps<Theme>['paddingHorizontal'])
    : ({
        s: '2xs',
        m: 'xs',
        l: 's',
      }[size] as SpacingProps<Theme>['paddingHorizontal']);

  const textVariant = {
    s: 'subtitle03Medium',
    m: 'subtitle03Medium',
    l: 'subtitle02Medium',
  }[size] as TextVariants;

  const variantColors = variantColorSelector({
    variant,
    kind,
    isPressed,
    disabled,
  });

  const typeColor = disabled
    ? 'contentPassive'
    : isPressed && variant !== 'tertiary'
    ? 'white'
    : variantColors.color;

  return (
    <PressableContainer
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      disabled={disabled}
      {...rest}>
      <ButtonContainer
        size={size}
        kind={kind}
        variant={variant}
        paddingHorizontal={buttonHorizontalPadding}
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        alignSelf={filled ? 'stretch' : 'flex-start'}
        {...variantColors}>
        {icon ? (
          <Icon name={icon} size="s" color={typeColor} testID="button-icon" />
        ) : null}
        {label ? (
          <Text
            variant={textVariant}
            color={typeColor}
            marginLeft={icon ? '2xs' : 'none'}
            testID="button-text">
            {label}
          </Text>
        ) : null}
      </ButtonContainer>
    </PressableContainer>
  );
};

export default Button;
