import { Dimensions } from 'react-native';
import theme from '../../theme';
import { deviceWidth } from '../../utils/dimentions';
import { Calculation, TooltipData, Viewport } from './types';

export const PIN_SIZE = 10;
const PIN_HYPOT = Math.hypot(PIN_SIZE, PIN_SIZE);
const PIN_HEIGHT = PIN_HYPOT / 2;
const PIN_MARGIN = 4;

export function calculatePosition(
  tooltipData: TooltipData,
  isRTL: boolean,
  overlayViewport?: Viewport,
): Calculation {
  switch (tooltipData.position) {
    case 'top':
      return calculateTopPosition(tooltipData, isRTL, overlayViewport);
    case 'bottom':
      return calculateBottomPosition(tooltipData, isRTL, overlayViewport);
  }
}

function calculateTopPosition(
  data: TooltipData,
  isRTL: boolean,
  overlayViewport?: Viewport,
) {
  const hasHole = data.overlay && data.hole;
  return {
    height: Math.round(
      data.viewport.py -
        PIN_HEIGHT -
        PIN_MARGIN -
        (hasHole ? data.holePadding : 0) -
        (overlayViewport?.py ?? 0),
    ),
    top: 0,
    pinX: Math.round(pinX(isRTL, data)),
    pinY: Math.round(PIN_HEIGHT),
    pinYOverflow: Math.round(-(PIN_HYPOT - PIN_SIZE) / 2),
    pinXOverflow: Math.round((isRTL ? -1 : 1) * ((PIN_HYPOT - PIN_SIZE) / 2)),
  };
}

function calculateBottomPosition(
  data: TooltipData,
  isRTL: boolean,
  overlayViewport?: Viewport,
) {
  const hasHole = data.overlay && data.hole;
  return {
    height: Math.round(
      Dimensions.get('screen').height -
        data.viewport.py -
        data.viewport.h -
        PIN_HEIGHT -
        PIN_MARGIN,
    ),
    top: Math.round(
      data.viewport.py +
        data.viewport.h +
        PIN_HEIGHT +
        PIN_MARGIN +
        (hasHole ? data.holePadding : 0) -
        (overlayViewport?.py ?? 0),
    ),
    pinX: Math.round(pinX(isRTL, data)),
    pinY: Math.round(-PIN_HEIGHT),
    pinYOverflow: Math.round((PIN_HYPOT - PIN_SIZE) / 2),
    pinXOverflow: Math.round((isRTL ? -1 : 1) * ((PIN_HYPOT - PIN_SIZE) / 2)),
  };
}

function pinX(isRTL: boolean, data: TooltipData) {
  if (isRTL) {
    const pos = Math.max(
      Math.min(
        data.viewport.px + data.viewport.w / 2 + PIN_HEIGHT,
        deviceWidth + theme.spacing.m * 2 + theme.borderRadii.m / 2,
      ),
      Math.ceil(theme.spacing.m + theme.borderRadii.m / 2),
    );
    return -deviceWidth + pos;
  }
  return Math.max(
    Math.min(
      data.viewport.px + data.viewport.w / 2 - PIN_HEIGHT,
      deviceWidth - theme.spacing.m * 2 - theme.borderRadii.m / 2,
    ),
    Math.ceil(theme.spacing.m + theme.borderRadii.m / 2),
  );
}
