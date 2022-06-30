export const space = [0, 2, 4, 8, 12, 16, 24, 32, 48, 64];
export const fontSizes = [12, 14, 16, 20, 24, 28, 32];
export const fontWeights = [300, 400, 500, 600, 700];
export const radii = {
  none: 0,
  small: 4,
  normal: 6,
  large: 8,
  xlarge: 16
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
  gradientOrange: ['#FFA964', '#F27A1A']
};
export const textStyle = {
  // Heading
  headingBig: {
    fontSize: fontSizes[6],
    fontWeight: fontWeights[0]
  },
  headingMedium: {
    fontSize: fontSizes[5],
    fontWeight: fontWeights[1]
  },
  headingSmall: {
    fontSize: fontSizes[4],
    fontWeight: fontWeights[1]
  },
  // SubtitleXLarge
  subtitleXLargeRegular: {
    fontSize: fontSizes[3],
    fontWeight: fontWeights[1]
  },
  subtitleXLargeMedium: {
    fontSize: fontSizes[3],
    fontWeight: fontWeights[2]
  },
  subtitleXLargeSemibold: {
    fontSize: fontSizes[3],
    fontWeight: fontWeights[3]
  },
  subtitleXLargeBold: {
    fontSize: fontSizes[3],
    fontWeight: fontWeights[4]
  },
  // SubtitleLarge
  subtitleLargeRegular: {
    fontSize: fontSizes[2],
    fontWeight: fontWeights[1]
  },
  subtitleLargeMedium: {
    fontSize: fontSizes[2],
    fontWeight: fontWeights[2]
  },
  subtitleLargeSemibold: {
    fontSize: fontSizes[2],
    fontWeight: fontWeights[3]
  },
  subtitleLargeBold: {
    fontSize: fontSizes[2],
    fontWeight: fontWeights[4]
  },
  // SubtitleMedium
  subtitleMediumRegular: {
    fontSize: fontSizes[1],
    fontWeight: fontWeights[1]
  },
  subtitleMediumMedium: {
    fontSize: fontSizes[1],
    fontWeight: fontWeights[2]
  },
  subtitleMediumSemibold: {
    fontSize: fontSizes[1],
    fontWeight: fontWeights[3]
  },
  subtitleMediumBold: {
    fontSize: fontSizes[1],
    fontWeight: fontWeights[4]
  },
  // SubtitleSmall
  subtitleSmallRegular: {
    fontSize: fontSizes[0],
    fontWeight: fontWeights[1]
  },
  subtitleSmallMedium: {
    fontSize: fontSizes[0],
    fontWeight: fontWeights[2]
  },
  subtitleSmallSemibold: {
    fontSize: fontSizes[0],
    fontWeight: fontWeights[3]
  },
  subtitleSmallBold: {
    fontSize: fontSizes[0],
    fontWeight: fontWeights[4]
  },
  // Body
  bodyText: {
    fontSize: fontSizes[1],
    fontWeight: fontWeights[1]
  },
  bodyUnderline: {
    fontSize: fontSizes[1],
    fontWeight: fontWeights[1],
    textDecorationLine: 'underline'
  },
  bodyTextLink: {
    fontSize: fontSizes[1],
    fontWeight: fontWeights[2],
    textDecorationLine: 'underline'
  },
  bodyLongText: {
    fontSize: fontSizes[1],
    fontWeight: fontWeights[1]
  },
  // Caption
  captionText: {
    fontSize: fontSizes[0],
    fontWeight: fontWeights[1]
  },
  captionMedium: {
    fontSize: fontSizes[0],
    fontWeight: fontWeights[2]
  },
  captionLongText: {
    fontSize: fontSizes[0],
    fontWeight: fontWeights[1]
  },
  captionTextLink: {
    fontSize: fontSizes[0],
    fontWeight: fontWeights[2],
    textDecorationLine: 'underline'
  }
};
export default {
  space,
  fontSizes,
  fontWeights,
  radii,
  colors,
  textStyle
};
//# sourceMappingURL=theme.js.map