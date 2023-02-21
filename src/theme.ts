import { createTheme } from '@shopify/restyle';

const theme = createTheme({
  colors: {
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
  },
  spacing: {
    none: 0,
    '4xs': 2,
    '3xs': 4,
    '2xs': 8,
    xs: 12,
    s: 14,
    m: 16,
    l: 20,
    xl: 24,
    '2xl': 32,
    '3xl': 40,
    '4xl': 48,
    '5xl': 64,
    '6xl': 80,
  },
  borderRadii: {
    none: 0,
    xs: 2,
    s: 4,
    m: 6,
    l: 8,
    xl: 16,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  fonts: {
    light: 'System',
    regular: 'System',
    medium: 'System',
    semiBold: 'System',
    bold: 'System',
  },
  textVariants: {
    defaults: {
      fontSize: 14,
      fontWeight: '400',
      fontFamily: 'regular',
      lineHeight: 16,
      color: 'contentPrimary',
    },
    // Heading
    heading1: {
      fontSize: 32,
      fontWeight: '400',
      fontFamily: 'regular',
      lineHeight: 36,
    },
    heading2: {
      fontSize: 28,
      fontWeight: '400',
      fontFamily: 'regular',
      lineHeight: 32,
    },
    heading3: {
      fontSize: 24,
      fontWeight: '400',
      fontFamily: 'regular',
      lineHeight: 28,
    },
    // Subtitle01
    subtitle01Regular: {
      fontSize: 20,
      fontWeight: '400',
      fontFamily: 'regular',
      lineHeight: 24,
    },
    subtitle01Medium: {
      fontSize: 20,
      fontWeight: '500',
      fontFamily: 'medium',
      lineHeight: 24,
    },
    subtitle01Semibold: {
      fontSize: 20,
      fontWeight: '600',
      fontFamily: 'semiBold',
      lineHeight: 24,
    },
    subtitle01Bold: {
      fontSize: 20,
      fontWeight: '700',
      fontFamily: 'bold',
      lineHeight: 24,
    },
    // Subtitle02
    subtitle02Regular: {
      fontSize: 16,
      fontWeight: '400',
      fontFamily: 'regular',
      lineHeight: 20,
    },
    subtitle02Medium: {
      fontSize: 16,
      fontWeight: '500',
      fontFamily: 'medium',
      lineHeight: 20,
    },
    subtitle02Semibold: {
      fontSize: 16,
      fontWeight: '600',
      fontFamily: 'semiBold',
      lineHeight: 20,
    },
    subtitle02Bold: {
      fontSize: 16,
      fontWeight: '700',
      fontFamily: 'bold',
      lineHeight: 20,
    },
    // Subtitle03
    subtitle03Regular: {
      fontSize: 14,
      fontWeight: '400',
      fontFamily: 'regular',
      lineHeight: 16,
    },
    subtitle03Medium: {
      fontSize: 14,
      fontWeight: '500',
      fontFamily: 'medium',
      lineHeight: 16,
    },
    subtitle03Semibold: {
      fontSize: 14,
      fontWeight: '600',
      fontFamily: 'semiBold',
      lineHeight: 16,
    },
    subtitle03Bold: {
      fontSize: 14,
      fontWeight: '700',
      fontFamily: 'bold',
      lineHeight: 16,
    },
    // Subtitle04
    subtitle04Regular: {
      fontSize: 12,
      fontWeight: '400',
      fontFamily: 'regular',
      lineHeight: 14,
    },
    subtitle04Medium: {
      fontSize: 12,
      fontWeight: '500',
      fontFamily: 'medium',
      lineHeight: 14,
    },
    subtitle04Semibold: {
      fontSize: 12,
      fontWeight: '600',
      fontFamily: 'semiBold',
      lineHeight: 14,
    },
    subtitle04Bold: {
      fontSize: 12,
      fontWeight: '700',
      fontFamily: 'bold',
      lineHeight: 14,
    },
    // Body
    bodyText: {
      fontSize: 14,
      fontWeight: '400',
      fontFamily: 'regular',
      lineHeight: 16,
    },
    bodyUnderline: {
      fontSize: 14,
      fontWeight: '400',
      fontFamily: 'regular',
      lineHeight: 16,
      textDecorationLine: 'underline',
    },
    bodyTextLink: {
      fontSize: 14,
      fontWeight: '500',
      fontFamily: 'medium',
      lineHeight: 16,
      textDecorationLine: 'underline',
    },
    bodyLongText: {
      fontSize: 14,
      fontWeight: '400',
      fontFamily: 'regular',
      lineHeight: 16,
    },
    // Caption
    captionText: {
      fontSize: 12,
      fontWeight: '400',
      fontFamily: 'regular',
      lineHeight: 12,
    },
    captionMedium: {
      fontSize: 12,
      fontWeight: '500',
      fontFamily: 'medium',
      lineHeight: 12,
    },
    captionLongText: {
      fontSize: 12,
      fontWeight: '400',
      fontFamily: 'regular',
      lineHeight: 12,
    },
    captionTextLink: {
      fontSize: 12,
      fontWeight: '500',
      fontFamily: 'medium',
      lineHeight: 12,
      textDecorationLine: 'underline',
    },
  },
});

export type Theme = typeof theme;
export default theme;
