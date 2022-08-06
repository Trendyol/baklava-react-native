import { variant } from 'styled-system';
import {
  ButtonTypeTypes,
  ButtonVariantTypes,
} from '../components/Button/types';

export const space = [0, 2, 4, 8, 12, 16, 24, 32, 48, 64];

export const fontSizes = [12, 14, 16, 20, 24, 28, 32];

export const fontWeights = ['300', '400', '500', '600', '700'];

export const fontNames = [
  'Rubik-Light',
  'Rubik-Regular',
  'Rubik-Medium',
  'Rubik-SemiBold',
  'Rubik-Bold',
];

export const iconSizes = [12, 14, 16, 20, 24, 32];

export const radii = {
  none: 0,
  small: 4,
  normal: 6,
  large: 8,
  xlarge: 16,
};

export const colors: { [key: string]: string | string[] } = {
  white: '#ffffff',
  black: '#000000',
  transparent: 'transparent',
  // Color
  primaryColor: '#F27A1A',
  secondaryColor: '#273142',
  tertiaryColor: '#F1F2F7',
  successColor: '#0BC15C',
  dangerColor: '#FF5043',
  warningColor: '#FFB600',
  alternativeColor: '#5794FF',
  featuredColor: '#8C4EFF',
  // Hover
  primaryHover: '#EF6114',
  secondaryHover: '#0F131A',
  tertiaryHover: '#D5D9E1',
  successHover: '#09A44E',
  dangerHover: '#FF3028',
  warningHover: '#FF9800',
  alternativeHover: '#457EFF',
  featuredHover: '#753EFF',
  // Background
  primaryBackground: '#F1F2F7',
  accentBackground: '#FEF2E8',
  secondaryBackground: '#FFFFFF',
  tertiaryBackground: '#F7F7FA',
  successBackground: '#E7F9EF',
  alertBackground: '#FFEEEC',
  warningBackground: '#FFF8E6',
  infoBackground: '#EEF4FF',
  featuredCBackground: '#F4EDFF',
  // Border Color
  borderColor: '#D5D9E1',
  // Content
  contentPrimary: '#273142',
  contentSecondary: '#6E7787',
  contentTertiary: '#95A1B5',
  contentPassive: '#AFBBCA',
  // Gradient
  gradientPurple: ['#8C4EFF', '#5794FF'],
  gradientOrange: ['#FFA964', '#F27A1A'],
};

export const textStyle = {
  // Heading
  heading1: {
    fontSize: fontSizes[6],
    fontWeight: fontWeights[1],
    fontFamily: fontNames[1],
    lineHeight: '36px',
  },
  heading2: {
    fontSize: fontSizes[5],
    fontWeight: fontWeights[1],
    fontFamily: fontNames[1],
    lineHeight: '32px',
  },
  heading3: {
    fontSize: fontSizes[4],
    fontWeight: fontWeights[1],
    fontFamily: fontNames[1],
    lineHeight: '28px',
  },
  // Subtitle01
  subtitle01Regular: {
    fontSize: fontSizes[3],
    fontWeight: fontWeights[1],
    fontFamily: fontNames[1],
    lineHeight: '24px',
  },
  subtitle01Medium: {
    fontSize: fontSizes[3],
    fontWeight: fontWeights[2],
    fontFamily: fontNames[2],
    lineHeight: '24px',
  },
  subtitle01Semibold: {
    fontSize: fontSizes[3],
    fontWeight: fontWeights[3],
    fontFamily: fontNames[3],
    lineHeight: '24px',
  },
  subtitle01Bold: {
    fontSize: fontSizes[3],
    fontWeight: fontWeights[4],
    fontFamily: fontNames[4],
    lineHeight: '24px',
  },
  // Subtitle02
  subtitle02Regular: {
    fontSize: fontSizes[2],
    fontWeight: fontWeights[1],
    fontFamily: fontNames[1],
    lineHeight: '20px',
  },
  subtitle02Medium: {
    fontSize: fontSizes[2],
    fontWeight: fontWeights[2],
    fontFamily: fontNames[2],
    lineHeight: '20px',
  },
  subtitle02Semibold: {
    fontSize: fontSizes[2],
    fontWeight: fontWeights[3],
    fontFamily: fontNames[3],
    lineHeight: '20px',
  },
  subtitle02Bold: {
    fontSize: fontSizes[2],
    fontWeight: fontWeights[4],
    fontFamily: fontNames[4],
    lineHeight: '20px',
  },
  // Subtitle03
  subtitle03Regular: {
    fontSize: fontSizes[1],
    fontWeight: fontWeights[1],
    fontFamily: fontNames[1],
    lineHeight: '16px',
  },
  subtitle03Medium: {
    fontSize: fontSizes[1],
    fontWeight: fontWeights[2],
    fontFamily: fontNames[2],
    lineHeight: '16px',
  },
  subtitle03Semibold: {
    fontSize: fontSizes[1],
    fontWeight: fontWeights[3],
    fontFamily: fontNames[3],
    lineHeight: '16px',
  },
  subtitle03Bold: {
    fontSize: fontSizes[1],
    fontWeight: fontWeights[4],
    fontFamily: fontNames[4],
    lineHeight: '16px',
  },
  // Subtitle04
  subtitle04Regular: {
    fontSize: fontSizes[0],
    fontWeight: fontWeights[1],
    fontFamily: fontNames[1],
    lineHeight: '14px',
  },
  subtitle04Medium: {
    fontSize: fontSizes[0],
    fontWeight: fontWeights[2],
    fontFamily: fontNames[2],
    lineHeight: '14px',
  },
  subtitle04Semibold: {
    fontSize: fontSizes[0],
    fontWeight: fontWeights[3],
    fontFamily: fontNames[3],
    lineHeight: '14px',
  },
  subtitle04Bold: {
    fontSize: fontSizes[0],
    fontWeight: fontWeights[4],
    fontFamily: fontNames[4],
    lineHeight: '14px',
  },
  // Body
  bodyText: {
    fontSize: fontSizes[1],
    fontWeight: fontWeights[1],
    fontFamily: fontNames[1],
    lineHeight: '16px',
  },
  bodyUnderline: {
    fontSize: fontSizes[1],
    fontWeight: fontWeights[1],
    fontFamily: fontNames[1],
    textDecorationLine: 'underline',
    lineHeight: '16px',
  },
  bodyTextLink: {
    fontSize: fontSizes[1],
    fontWeight: fontWeights[2],
    fontFamily: fontNames[2],
    textDecorationLine: 'underline',
    lineHeight: '16px',
  },
  bodyLongText: {
    fontSize: fontSizes[1],
    fontWeight: fontWeights[1],
    fontFamily: fontNames[1],
    lineHeight: '16px',
  },
  // Caption
  captionText: {
    fontSize: fontSizes[0],
    fontWeight: fontWeights[1],
    fontFamily: fontNames[1],
    lineHeight: '12px',
  },
  captionMedium: {
    fontSize: fontSizes[0],
    fontWeight: fontWeights[2],
    fontFamily: fontNames[2],
    lineHeight: '12px',
  },
  captionLongText: {
    fontSize: fontSizes[0],
    fontWeight: fontWeights[1],
    fontFamily: fontNames[1],
    lineHeight: '12px',
  },
  captionTextLink: {
    fontSize: fontSizes[0],
    fontWeight: fontWeights[2],
    fontFamily: fontNames[2],
    textDecorationLine: 'underline',
    lineHeight: '12px',
  },
};

const buttonCommon = {
  borderRadius: radii.normal,
};

export const buttonStyles = {
  height: [32, 40, 48],
  padding: [8, 12, 14, 16, 24, 32],
  variant: {
    primary: {
      color: colors.white,
      backgroundColor: colors.primaryColor,
      ...buttonCommon,
    },
    secondary: {
      color: colors.white,
      backgroundColor: colors.secondaryColor,
      ...buttonCommon,
    },
    success: {
      color: colors.white,
      backgroundColor: colors.successColor,
      ...buttonCommon,
    },
    danger: {
      color: colors.white,
      backgroundColor: colors.dangerColor,
      ...buttonCommon,
    },
    passive: {
      color: colors.contentPassive,
      backgroundColor: colors.tertiaryColor,
      ...buttonCommon,
    },
  },
  type: (props: {
    variant: ButtonVariantTypes;
    isPressed: boolean;
    disabled: boolean;
    type: ButtonTypeTypes;
  }) => {
    const variantColor =
      colors[`${props.variant}Color`] ?? colors.primaryBackground;
    const variantHoverColor =
      colors[`${props.variant}Hover`] ?? colors.primaryBackground;

    return {
      contained: {
        color: props.disabled ? colors.secondaryColor : colors.white,
        backgroundColor: props.isPressed ? variantHoverColor : variantColor,
        borderWidth: 1,
        borderColor: variantColor,
        ...buttonCommon,
      },
      outline: {
        color: props.isPressed ? colors.white : variantColor,
        backgroundColor: props.disabled
          ? variantColor
          : props.isPressed
          ? variantHoverColor
          : colors.transparent,
        borderWidth: 1,
        borderColor: variantColor,
        ...buttonCommon,
      },
      text: {
        color: props.isPressed ? variantHoverColor : variantColor,
        backgroundColor: colors.transparent,
        borderWidth: 1,
        borderColor: colors.transparent,
        textDecorationLine: 'underline',
        ...buttonCommon,
      },
    };
  },
  size: (props: { text: string }) => {
    return {
      large: {
        paddingVertical: buttonStyles.padding[2],
        paddingHorizontal: props.text
          ? buttonStyles.padding[5]
          : buttonStyles.padding[2],
      },
      medium: {
        paddingVertical: buttonStyles.padding[1],
        paddingHorizontal: props.text
          ? buttonStyles.padding[4]
          : buttonStyles.padding[1],
      },
      small: {
        paddingVertical: buttonStyles.padding[0],
        paddingHorizontal: props.text
          ? buttonStyles.padding[3]
          : buttonStyles.padding[0],
      },
    };
  },
};

export const buttonVariant = variant({
  prop: 'variant',
  variants: buttonStyles.variant,
});

export const buttonType = (props: any) =>
  variant({
    prop: 'type',
    variants: buttonStyles.type(props),
  });

export const buttonSize = (props: any) =>
  variant({
    prop: 'size',
    variants: buttonStyles.size(props),
  });

export const inputStyle = {
  height: [32, 40, 48],
};

export default {
  space,
  fontSizes,
  fontWeights,
  radii,
  colors,
  textStyle,
  buttonStyles,
  iconSizes,
  inputStyle,
};
