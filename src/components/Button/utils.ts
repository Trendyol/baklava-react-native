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
      color: 'neutralDarker',
      backgroundColor: 'neutralLightest',
      borderColor: 'neutralLightest',
    } as {
      color: ColorVariantProps;
      backgroundColor: ColorVariantProps;
      borderColor: ColorVariantProps;
    };
  }

  const kindColor = {
    default: 'primaryKey',
    neutral: 'neutralDarker',
    success: 'successKey',
    danger: 'dangerKey',
  }[kind];

  const kindHighlightColor = {
    default: 'primaryHighlight',
    neutral: 'neutralDarkest',
    success: 'successHighlight',
    danger: 'dangerHighlight',
  }[kind];

  let variants = isPressed
    ? {
        primary: {
          color: 'white',
          backgroundColor: kindHighlightColor,
          borderColor: kindHighlightColor,
        },
        secondary: {
          color: 'white',
          backgroundColor: kindHighlightColor,
          borderColor: kindHighlightColor,
        },
        tertiary: {
          color: kindHighlightColor,
          backgroundColor: 'neutralLightest',
          borderColor: 'neutralLightest',
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
