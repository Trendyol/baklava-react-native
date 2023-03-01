import { ColorProps, VariantProps } from '@ergenekonyigit/restyle';
import { Theme } from '../../theme';

type ColorVariantProps = ColorProps<Theme>['color'];

export const variantColorSelector = ({
  kind = 'default',
  variant = 'primary',
  isPressed = false,
  disabled = false,
}: {
  kind?: VariantProps<Theme, 'buttonKindVariants'>['variant'];
  variant?: VariantProps<Theme, 'buttonVariants'>['variant'];
  isPressed?: boolean;
  disabled?: boolean;
}) => {
  if (disabled) {
    return {
      color: 'secondaryColor',
      backgroundColor: 'tertiaryColor',
      borderColor: 'tertiaryColor',
    } as {
      color: ColorVariantProps;
      backgroundColor: ColorVariantProps;
      borderColor: ColorVariantProps;
    };
  }

  const kindColor = `${kind}Color`;
  const kindHoverColor = `${kind}Hover`;

  let variants = isPressed
    ? {
        primary: {
          color: 'white',
          backgroundColor: kindHoverColor,
          borderColor: kindHoverColor,
        },
        secondary: {
          color: 'white',
          backgroundColor: kindHoverColor,
          borderColor: kindHoverColor,
        },
        tertiary: {
          color: kindHoverColor,
          backgroundColor: 'tertiaryColor',
          borderColor: 'tertiaryColor',
        },
      }
    : {
        primary: {
          color: 'white',
          backgroundColor: kindColor,
          borderColor: kindColor,
        },
        secondary: {
          color: kindColor,
          backgroundColor: 'transparent',
          borderColor: kindColor,
        },
        tertiary: {
          color: kindColor,
          backgroundColor: 'transparent',
          borderColor: 'transparent',
        },
      };

  return variants[variant] as {
    color: ColorVariantProps;
    backgroundColor: ColorVariantProps;
    borderColor: ColorVariantProps;
  };
};
