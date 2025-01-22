import React from 'react';
import {
  Dimensions,
  I18nManager,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Svg, { Defs, G, Mask, Rect } from 'react-native-svg';
import theme from '../../theme';
import Box from '../Box/Box';
import { useTooltipContext } from './TooltipContext';

const isRTL = I18nManager.isRTL;

export const Overlay = () => {
  const overlayRef = React.useRef<View>(null);
  const { activeTooltip, hide, overlayViewport, setOverlayViewport } =
    useTooltipContext();

  const onLayout = React.useCallback(() => {
    overlayRef.current?.measure((x, y, w, h, px, py) => {
      setOverlayViewport({
        x,
        y,
        w,
        h,
        px,
        py,
      });
    });
  }, [setOverlayViewport]);

  const close = React.useCallback(() => {
    if (activeTooltip) {
      hide(activeTooltip.id);
    }
  }, [activeTooltip, hide]);

  const highlightView = React.useMemo(() => {
    if (!activeTooltip) {
      return null;
    }

    const { id, overlay, hole, highlight, viewport, holePadding } =
      activeTooltip;

    if (!(overlay && hole && highlight)) {
      return null;
    }

    return (
      <Box
        testID={`tooltip-highlight-${id}`}
        bg="white"
        position="absolute"
        borderRadius="m"
        justifyContent="center"
        alignItems="center"
        top={viewport.py - (overlayViewport?.py ?? 0) - holePadding}
        left={isRTL ? undefined : viewport.px - holePadding}
        right={isRTL ? viewport.px - holePadding : undefined}
        width={viewport.w + holePadding * 2}
        height={viewport.h + holePadding * 2}>
        {activeTooltip.children}
      </Box>
    );
  }, [activeTooltip, overlayViewport]);

  if (!activeTooltip) {
    return null;
  }

  const { id, overlay, hole } = activeTooltip;

  return (
    <TouchableWithoutFeedback
      onPress={close}
      accessibilityLabel={`tooltip-overlay-wrapper-${id}`}
      testID={`tooltip-overlay-wrapper-${id}`}>
      <Box
        position="absolute"
        flex={1}
        height={'100%'}
        width={'100%'}
        onLayout={onLayout}
        ref={overlayRef}>
        {highlightView}
        <Svg height="100%" width="100%" pointerEvents="none">
          {overlay ? (
            <G>
              <Defs>
                <Mask id="clip">
                  <Rect fill="#ffffff" width="100%" height="100%" />
                  {/* hole */}
                  {overlayViewport && hole ? (
                    <Rect
                      accessibilityLabel={`tooltip-hole-${id}`}
                      testID={`tooltip-hole-${id}`}
                      fill="#000"
                      ry={6}
                      rx={6}
                      x={activeTooltip.viewport.px - activeTooltip.holePadding}
                      y={
                        activeTooltip.viewport.py -
                        activeTooltip.holePadding -
                        (overlayViewport?.py ?? 0)
                      }
                      width={
                        activeTooltip.viewport.w + activeTooltip.holePadding * 2
                      }
                      height={
                        activeTooltip.viewport.h + activeTooltip.holePadding * 2
                      }
                    />
                  ) : undefined}
                </Mask>
              </Defs>
              <Rect
                accessibilityLabel={`tooltip-overlay-${id}`}
                testID={`tooltip-overlay-${id}`}
                width={Dimensions.get('screen').width}
                height={Dimensions.get('screen').height}
                clipRule={'evenodd'}
                fillRule={'nonzero'}
                vectorEffect="inherit"
                fill={theme.colors.neutralDarker}
                fillOpacity=".7"
                mask={hole ? 'url(#clip)' : undefined}
              />
            </G>
          ) : undefined}
        </Svg>
      </Box>
    </TouchableWithoutFeedback>
  );
};
