"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.space = exports.radii = exports.fontSizes = exports.default = exports.colors = void 0;
const space = [0, 2, 4, 8, 12, 16, 24, 32, 48, 64];
exports.space = space;
const fontSizes = [12, 14, 16, 20, 24, 28, 32];
exports.fontSizes = fontSizes;
const radii = {
  none: 0,
  small: 4,
  normal: 6,
  large: 8,
  xlarge: 16
};
exports.radii = radii;
const colors = {
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
exports.colors = colors;
var _default = {
  space,
  fontSizes,
  radii,
  colors
};
exports.default = _default;
//# sourceMappingURL=theme.js.map