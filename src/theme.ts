export const space = [0, 2, 4, 8, 12, 16, 24, 32, 48, 64];

export const fontSizes = [12, 14, 16, 20, 24, 28, 32];

export const fontWeights = ['300', '400', '500', '600', '700'];

export const radii = {
  none: 0,
  small: 4,
  normal: 6,
  large: 8,
  xlarge: 16,
};

export const colors = {
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
    fontWeight: fontWeights[0],
    fontFamily: 'Rubik-Light',
  },
  heading2: {
    fontSize: fontSizes[5],
    fontWeight: fontWeights[1],
    fontFamily: 'Rubik-Light',
  },
  heading3: {
    fontSize: fontSizes[4],
    fontWeight: fontWeights[1],
    fontFamily: 'Rubik-Light',
  },
  // Subtitle01
  subtitle01Regular: {
    fontSize: fontSizes[3],
    fontWeight: fontWeights[1],
    fontFamily: 'Rubik-Regular',
  },
  subtitle01Medium: {
    fontSize: fontSizes[3],
    fontWeight: fontWeights[2],
    fontFamily: 'Rubik-Medium',
  },
  subtitle01Semibold: {
    fontSize: fontSizes[3],
    fontWeight: fontWeights[3],
    fontFamily: 'Rubik-SemiBold',
  },
  subtitle01Bold: {
    fontSize: fontSizes[3],
    fontWeight: fontWeights[4],
    fontFamily: 'Rubik-Bold',
  },
  // Subtitle02
  subtitle02Regular: {
    fontSize: fontSizes[2],
    fontWeight: fontWeights[1],
    fontFamily: 'Rubik-Regular',
  },
  subtitle02Medium: {
    fontSize: fontSizes[2],
    fontWeight: fontWeights[2],
    fontFamily: 'Rubik-Medium',
  },
  subtitle02Semibold: {
    fontSize: fontSizes[2],
    fontWeight: fontWeights[3],
    fontFamily: 'Rubik-SemiBold',
  },
  subtitle02Bold: {
    fontSize: fontSizes[2],
    fontWeight: fontWeights[4],
    fontFamily: 'Rubik-Bold',
  },
  // Subtitle03
  subtitle03Regular: {
    fontSize: fontSizes[1],
    fontWeight: fontWeights[1],
    fontFamily: 'Rubik-Regular',
  },
  subtitle03Medium: {
    fontSize: fontSizes[1],
    fontWeight: fontWeights[2],
    fontFamily: 'Rubik-Medium',
  },
  subtitle03Semibold: {
    fontSize: fontSizes[1],
    fontWeight: fontWeights[3],
    fontFamily: 'Rubik-SemiBold',
  },
  subtitle03Bold: {
    fontSize: fontSizes[1],
    fontWeight: fontWeights[4],
    fontFamily: 'Rubik-Bold',
  },
  // Subtitle04
  subtitle04Regular: {
    fontSize: fontSizes[0],
    fontWeight: fontWeights[1],
    fontFamily: 'Rubik-Regular',
  },
  subtitle04Medium: {
    fontSize: fontSizes[0],
    fontWeight: fontWeights[2],
    fontFamily: 'Rubik-Medium',
  },
  subtitle04Semibold: {
    fontSize: fontSizes[0],
    fontWeight: fontWeights[3],
    fontFamily: 'Rubik-SemiBold',
  },
  subtitle04Bold: {
    fontSize: fontSizes[0],
    fontWeight: fontWeights[4],
    fontFamily: 'Rubik-Bold',
  },
  // Body
  bodyText: {
    fontSize: fontSizes[1],
    fontWeight: fontWeights[1],
    fontFamily: 'Rubik-Regular',
  },
  bodyUnderline: {
    fontSize: fontSizes[1],
    fontWeight: fontWeights[1],
    fontFamily: 'Rubik-Regular',
    textDecorationLine: 'underline',
  },
  bodyTextLink: {
    fontSize: fontSizes[1],
    fontWeight: fontWeights[2],
    fontFamily: 'Rubik-Medium',
    textDecorationLine: 'underline',
  },
  bodyLongText: {
    fontSize: fontSizes[1],
    fontWeight: fontWeights[1],
    fontFamily: 'Rubik-Regular',
  },
  // Caption
  captionText: {
    fontSize: fontSizes[0],
    fontWeight: fontWeights[1],
    fontFamily: 'Rubik-Regular',
  },
  captionMedium: {
    fontSize: fontSizes[0],
    fontWeight: fontWeights[2],
    fontFamily: 'Rubik-Medium',
  },
  captionLongText: {
    fontSize: fontSizes[0],
    fontWeight: fontWeights[1],
    fontFamily: 'Rubik-Regular',
  },
  captionTextLink: {
    fontSize: fontSizes[0],
    fontWeight: fontWeights[2],
    fontFamily: 'Rubik-Medium',
    textDecorationLine: 'underline',
  },
};

export default {
  space,
  fontSizes,
  fontWeights,
  radii,
  colors,
  textStyle,
};
