import { createTheme } from '@ergenekonyigit/restyle';

const colors = {
  // Main Colors
  // Primary
  primaryKey: '#F27A1A',
  primaryHighlight: '#EF6114',
  primaryContrast: '#FEF2E8',
  // Success
  successKey: '#0BC15C',
  successHighlight: '#09A44E',
  successContrast: '#E7F9EF',
  // Danger
  dangerKey: '#FF5043',
  dangerHighlight: '#FF3028',
  dangerContrast: '#FFEEEC',
  // Warning
  warningKey: '#FFB600',
  warningHighlight: '#FF9800',
  warningContrast: '#FFF8E6',
  // Info
  infoKey: '#5794FF',
  infoHighlight: '#457EFF',
  infoContrast: '#EEF4FF',
  // Featured
  featuredKey: '#8C4EFF',
  featuredHighlight: '#753EFF',
  featuredContrast: '#F4EDFF',
  // Neutral
  neutralNone: '#000000',
  neutralDarkest: '#0F131A',
  neutralDarker: '#273142',
  neutralDark: '#6E7787',
  neutralLight: '#95A1B5',
  neutralLighter: '#AFBBCA',
  neutralLightest: '#F1F2F7',
  neutralFull: '#FFFFFF',
  // Transparent
  transparentHighlight: '#00000010',

  // Will Be Deprecated
  // Color
  white: '#FFFFFF',
  black: '#000000',
  transparent: 'transparent',
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
  featuredBackground: '#F4EDFF',
  // Border Color
  borderColor: '#D5D9E1',
  // Content
  contentPrimary: '#273142',
  contentSecondary: '#6E7787',
  contentTertiary: '#95A1B5',
  contentPassive: '#AFBBCA',
};

const theme = createTheme({
  colors: {
    ...colors,
    defaultColor: colors.primaryColor,
    defaultHover: colors.primaryHover,
    neutralColor: colors.secondaryColor,
    neutralHover: colors.secondaryHover,
  },
  spacing: {
    '-6xl': -80,
    '-5xl': -64,
    '-4xl': -48,
    '-3xl': -40,
    '-2xl': -32,
    '-xl': -24,
    '-l': -20,
    '-m': -16,
    '-s': -14,
    '-xs': -12,
    '-2xs': -8,
    '-3xs': -4,
    '-4xs': -2,
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
  zIndices: {
    layer_0: 0,
    layer_1: 1,
    layer_2: 2,
    layer_3: 3,
  },
  borderRadii: {
    none: 0,
    xs: 2,
    s: 4,
    m: 6,
    l: 8,
    full: 999,
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
      fontFamily: 'regular',
      color: 'contentPrimary',
    },
    // Heading
    heading1: {
      fontSize: 30,
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
    // Subtitle1
    /**
     * @deprecated This variant name will be removed
     */
    subtitle01Regular: {
      fontSize: 20,
      fontWeight: '400',
      fontFamily: 'regular',
      lineHeight: 24,
    },
    subtitle1Regular: {
      fontSize: 20,
      fontWeight: '400',
      fontFamily: 'regular',
      lineHeight: 24,
    },
    /**
     * @deprecated This variant name will be removed
     */
    subtitle01Medium: {
      fontSize: 20,
      fontWeight: '500',
      fontFamily: 'medium',
      lineHeight: 24,
    },
    subtitle1Medium: {
      fontSize: 20,
      fontWeight: '500',
      fontFamily: 'medium',
      lineHeight: 24,
    },
    /**
     * @deprecated This variant name will be removed
     */
    subtitle01Semibold: {
      fontSize: 20,
      fontWeight: '600',
      fontFamily: 'semiBold',
      lineHeight: 24,
    },
    subtitle1Semibold: {
      fontSize: 20,
      fontWeight: '600',
      fontFamily: 'semiBold',
      lineHeight: 24,
    },
    /**
     * @deprecated This variant name will be removed
     */
    subtitle01Bold: {
      fontSize: 20,
      fontWeight: '700',
      fontFamily: 'bold',
      lineHeight: 24,
    },
    subtitle1Bold: {
      fontSize: 20,
      fontWeight: '700',
      fontFamily: 'bold',
      lineHeight: 24,
    },
    // Subtitle1
    /**
     * @deprecated This variant name will be removed
     */
    subtitle02Regular: {
      fontSize: 16,
      fontWeight: '400',
      fontFamily: 'regular',
      lineHeight: 20,
    },
    subtitle2Regular: {
      fontSize: 16,
      fontWeight: '400',
      fontFamily: 'regular',
      lineHeight: 20,
    },
    /**
     * @deprecated This variant name will be removed
     */
    subtitle02Medium: {
      fontSize: 16,
      fontWeight: '500',
      fontFamily: 'medium',
      lineHeight: 20,
    },
    subtitle2Medium: {
      fontSize: 16,
      fontWeight: '500',
      fontFamily: 'medium',
      lineHeight: 20,
    },
    /**
     * @deprecated This variant name will be removed
     */
    subtitle02Semibold: {
      fontSize: 16,
      fontWeight: '600',
      fontFamily: 'semiBold',
      lineHeight: 20,
    },
    subtitle2Semibold: {
      fontSize: 16,
      fontWeight: '600',
      fontFamily: 'semiBold',
      lineHeight: 20,
    },
    /**
     * @deprecated This variant name will be removed
     */
    subtitle02Bold: {
      fontSize: 16,
      fontWeight: '700',
      fontFamily: 'bold',
      lineHeight: 20,
    },
    subtitle2Bold: {
      fontSize: 16,
      fontWeight: '700',
      fontFamily: 'bold',
      lineHeight: 20,
    },
    // Subtitle3
    /**
     * @deprecated This variant name will be removed
     */
    subtitle03Regular: {
      fontSize: 14,
      fontWeight: '400',
      fontFamily: 'regular',
      lineHeight: 16,
    },
    subtitle3Regular: {
      fontSize: 14,
      fontWeight: '400',
      fontFamily: 'regular',
      lineHeight: 16,
    },
    /**
     * @deprecated This variant name will be removed
     */
    subtitle03Medium: {
      fontSize: 14,
      fontWeight: '500',
      fontFamily: 'medium',
      lineHeight: 16,
    },
    subtitle3Medium: {
      fontSize: 14,
      fontWeight: '500',
      fontFamily: 'medium',
      lineHeight: 16,
    },
    /**
     * @deprecated This variant name will be removed
     */
    subtitle03Semibold: {
      fontSize: 14,
      fontWeight: '600',
      fontFamily: 'semiBold',
      lineHeight: 16,
    },
    subtitle3Semibold: {
      fontSize: 14,
      fontWeight: '600',
      fontFamily: 'semiBold',
      lineHeight: 16,
    },
    /**
     * @deprecated This variant name will be removed
     */
    subtitle03Bold: {
      fontSize: 14,
      fontWeight: '700',
      fontFamily: 'bold',
      lineHeight: 16,
    },
    subtitle3Bold: {
      fontSize: 14,
      fontWeight: '700',
      fontFamily: 'bold',
      lineHeight: 16,
    },
    // Subtitle4
    /**
     * @deprecated This variant name will be removed
     */
    subtitle04Regular: {
      fontSize: 12,
      fontWeight: '400',
      fontFamily: 'regular',
      lineHeight: 14,
    },
    subtitle4Regular: {
      fontSize: 12,
      fontWeight: '400',
      fontFamily: 'regular',
      lineHeight: 14,
    },
    /**
     * @deprecated This variant name will be removed
     */
    subtitle04Medium: {
      fontSize: 12,
      fontWeight: '500',
      fontFamily: 'medium',
      lineHeight: 14,
    },
    subtitle4Medium: {
      fontSize: 12,
      fontWeight: '500',
      fontFamily: 'medium',
      lineHeight: 14,
    },
    /**
     * @deprecated This variant name will be removed
     */
    subtitle04Semibold: {
      fontSize: 12,
      fontWeight: '600',
      fontFamily: 'semiBold',
      lineHeight: 14,
    },
    subtitle4Semibold: {
      fontSize: 12,
      fontWeight: '600',
      fontFamily: 'semiBold',
      lineHeight: 14,
    },
    /**
     * @deprecated This variant name will be removed
     */
    subtitle04Bold: {
      fontSize: 12,
      fontWeight: '700',
      fontFamily: 'bold',
      lineHeight: 14,
    },
    subtitle4Bold: {
      fontSize: 12,
      fontWeight: '700',
      fontFamily: 'bold',
      lineHeight: 14,
    },
    // Body
    /**
     * @deprecated This variant name will be removed
     */
    bodyText: {
      fontSize: 14,
      fontWeight: '400',
      fontFamily: 'regular',
      lineHeight: 16,
    },
    body1: {
      fontSize: 16,
      fontWeight: '400',
      fontFamily: 'regular',
      lineHeight: 18,
    },
    body2: {
      fontSize: 14,
      fontWeight: '400',
      fontFamily: 'regular',
      lineHeight: 16,
    },
    body3: {
      fontSize: 12,
      fontWeight: '400',
      fontFamily: 'regular',
      lineHeight: 14,
    },
    /**
     * @deprecated This variant name will be removed
     */
    bodyUnderline: {
      fontSize: 14,
      fontWeight: '400',
      fontFamily: 'regular',
      lineHeight: 16,
      textDecorationLine: 'underline',
    },
    /**
     * @deprecated This variant name will be removed
     */
    bodyTextLink: {
      fontSize: 14,
      fontWeight: '500',
      fontFamily: 'medium',
      lineHeight: 16,
      textDecorationLine: 'underline',
    },
    /**
     * @deprecated This variant name will be removed
     */
    bodyLongText: {
      fontSize: 14,
      fontWeight: '400',
      fontFamily: 'regular',
      lineHeight: 16,
    },
    // Caption
    caption: {
      fontSize: 12,
      fontWeight: '500',
      fontFamily: 'regular',
      lineHeight: 14,
    },
    /**
     * @deprecated This variant name will be removed
     */
    captionText: {
      fontSize: 12,
      fontWeight: '500',
      fontFamily: 'regular',
      lineHeight: 14,
    },
    /**
     * @deprecated This variant name will be removed
     */
    captionMedium: {
      fontSize: 12,
      fontWeight: '500',
      fontFamily: 'medium',
      lineHeight: 12,
    },
    /**
     * @deprecated This variant name will be removed
     */
    captionLongText: {
      fontSize: 12,
      fontWeight: '400',
      fontFamily: 'regular',
      lineHeight: 12,
    },
    /**
     * @deprecated This variant name will be removed
     */
    captionTextLink: {
      fontSize: 12,
      fontWeight: '500',
      fontFamily: 'medium',
      lineHeight: 12,
      textDecorationLine: 'underline',
    },
  },
  iconSizeVariants: {
    '4xs': 8,
    '3xs': 10,
    '2xs': 12,
    xs: 14,
    s: 16,
    m: 20,
    l: 24,
    xl: 32,
  },
  buttonSizeVariants: {
    defaults: {
      height: 40,
    },
    s: {
      height: 32,
    },
    m: {
      height: 40,
    },
    l: {
      height: 48,
    },
  },
  buttonKindVariants: {
    defaults: {
      backgroundColor: 'primaryKey',
    },
    default: {
      backgroundColor: 'primaryKey',
    },
    neutral: {
      backgroundColor: 'neutralDarker',
    },
    success: {
      backgroundColor: 'successKey',
    },
    danger: {
      backgroundColor: 'dangerKey',
    },
  },
  buttonVariants: {
    defaults: {
      borderWidth: 1,
      borderRadius: 'm',
    },
    primary: {},
    secondary: {},
    tertiary: {},
    transparent: {
      backgroundColor: 'transparent',
      borderWidth: 0,
    },
  },
  inputSizeVariants: {
    defaults: {},
    small: {
      height: 32,
    },
    medium: {
      height: 40,
    },
    large: {
      height: 48,
    },
  },
  alertVariants: {
    defaults: {
      borderWidth: 1,
      borderRadius: 'l',
      backgroundColor: 'accentBackground',
      borderColor: 'primaryColor',
    },
    info: {
      backgroundColor: 'accentBackground',
      borderColor: 'primaryColor',
    },
    warning: {
      backgroundColor: 'warningBackground',
      borderColor: 'warningColor',
    },
    success: {
      backgroundColor: 'successBackground',
      borderColor: 'successColor',
    },
    danger: {
      backgroundColor: 'alertBackground',
      borderColor: 'dangerColor',
    },
  },
  toastVariants: {
    defaults: {
      borderWidth: 1,
      borderRadius: 'm',
      backgroundColor: 'accentBackground',
      borderColor: 'primaryColor',
      flexDirection: 'row',
      minHeight: 40,
      paddingHorizontal: 'xs',
      paddingVertical: '2xs',
      alignItems: 'center',

      shadowColor: 'black',
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.25,
      shadowRadius: 10,

      elevation: 5,
    },
    default: {
      backgroundColor: 'accentBackground',
      borderColor: 'primaryColor',
    },
    success: {
      backgroundColor: 'successBackground',
      borderColor: 'successColor',
    },
    error: {
      backgroundColor: 'alertBackground',
      borderColor: 'dangerColor',
    },
    warning: {
      backgroundColor: 'warningBackground',
      borderColor: 'warningColor',
    },
  },
  checkboxVariants: {
    defaults: {
      borderWidth: 1,
      borderRadius: 'xs',
      backgroundColor: 'white',
      borderColor: 'neutralLighter',
      height: 16,
      width: 16,
      justifyContent: 'center',
      alignItems: 'center',
    },
    unchecked: {
      backgroundColor: 'white',
      borderColor: 'neutralLighter',
    },
    checked: {
      backgroundColor: 'primaryColor',
      borderColor: 'primaryColor',
    },
    disabledChecked: {
      backgroundColor: 'primaryBackground',
      borderColor: 'primaryBackground',
    },
    disabledUnchecked: {
      backgroundColor: 'primaryBackground',
    },
  },
  badgeVariants: {
    defaults: {
      backgroundColor: 'primaryContrast',
      color: 'primaryKey',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    },
    default: {
      backgroundColor: 'primaryContrast',
      color: 'primaryKey',
    },
    neutral: {
      backgroundColor: 'neutralLightest',
      color: 'neutralDarker',
    },
    success: {
      backgroundColor: 'successContrast',
      color: 'successKey',
    },
    warning: {
      backgroundColor: 'warningContrast',
      color: 'warningKey',
    },
    danger: {
      backgroundColor: 'dangerContrast',
      color: 'dangerKey',
    },
    transparent: {
      color: 'primaryKey',
    },
  },
  badgeSizeVariants: {
    defaults: {
      paddingHorizontal: '3xs',
      paddingVertical: '3xs',
      fontSize: 12,
    },
    small: {
      paddingHorizontal: '3xs',
      paddingVertical: '4xs',
      fontSize: 10,
    },
    medium: {
      paddingHorizontal: '3xs',
      paddingVertical: '3xs',
      fontSize: 12,
    },
    large: {
      paddingHorizontal: '2xs',
      paddingVertical: '2xs',
      fontSize: 14,
    },
  },
  spinnerSizeVariants: {
    '2xs': 14,
    xs: 16,
    s: 20,
    m: 24,
    l: 32,
    xl: 40,
    '2xl': 48,
  },
  textAreaSizeVariants: {
    defaults: {},
    small: {
      height: 80,
    },
    medium: {
      height: 88,
    },
    large: {
      height: 104,
    },
  },
});

export type Theme = typeof theme;
export default theme;
