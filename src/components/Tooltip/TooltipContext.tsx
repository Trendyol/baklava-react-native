import React, { createContext, ReactNode, useContext, useState } from 'react';
import { Dimensions, TouchableWithoutFeedback, View } from 'react-native';
import Svg, { Defs, G, Mask, Rect } from 'react-native-svg';
import Box from '../Box/Box';
import TooltipView from './TooltipView';
import { Viewport, TooltipContextType, TooltipData } from './types';

export const TooltipContext = createContext<TooltipContextType | undefined>(
  undefined,
);

export const TooltipProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const overlayRef = React.useRef<View>(null);
  const [viewport, setViewport] = React.useState<Viewport>();
  const [stack, setStack] = useState<TooltipData[]>([]);

  const activeTooltip = React.useMemo(() => {
    return stack[0];
  }, [stack]);

  const onLayout = React.useCallback(() => {
    overlayRef.current?.measure((x, y, w, h, px, py) => {
      setViewport({
        x,
        y,
        w,
        h,
        px,
        py,
      });
    });
  }, []);

  const addToStack = React.useCallback(
    (tooltipData: Omit<TooltipData, 'viewport'>) => {
      if (tooltipData) {
        tooltipData.triggerRef.current?.measure?.((x, y, w, h, px, py) => {
          if (x ?? w ?? px === undefined) {
            tooltipData.onError?.(tooltipData.id);
            return;
          }
          const _viewport: Viewport = {
            x,
            y,
            w,
            h,
            px,
            py,
          };
          setStack(s => [...s, { ...tooltipData, viewport: _viewport }]);
        });
      }
    },
    [],
  );

  const removeFromStack = React.useCallback(
    (id: string) => {
      const temp = stack.find(t => t.id === id);
      if (temp) {
        setStack(stack.filter(t => t.id !== temp?.id));
        temp?.onClose?.(id);
      }
    },
    [stack],
  );

  const removeAllStack = React.useCallback(() => {
    setStack([]);
  }, []);

  const removeActiveTooltip = React.useCallback(() => {
    removeFromStack(activeTooltip?.id);
  }, [activeTooltip, removeFromStack]);

  const render = React.useMemo(() => {
    if (!activeTooltip) {
      return null;
    }

    return (
      <>
        <TouchableWithoutFeedback
          onPress={removeActiveTooltip}
          accessibilityLabel={`tooltip-overlay-wrapper-${activeTooltip.id}`}
          testID={`tooltip-overlay-wrapper-${activeTooltip.id}`}>
          <Box
            position="absolute"
            flex={1}
            height={'100%'}
            width={'100%'}
            onLayout={onLayout}
            ref={overlayRef}>
            {activeTooltip.highlight ? (
              <Box
                testID={`tooltip-highlight-${activeTooltip.id}`}
                bg="white"
                position="absolute"
                borderRadius="m"
                justifyContent="center"
                alignItems="center"
                top={
                  activeTooltip.viewport.py -
                  (viewport?.py ?? 0) -
                  activeTooltip.holePadding
                }
                left={activeTooltip.viewport.px - activeTooltip.holePadding}
                width={activeTooltip.viewport.w + activeTooltip.holePadding * 2}
                height={
                  activeTooltip.viewport.h + activeTooltip.holePadding * 2
                }>
                {activeTooltip.children}
              </Box>
            ) : null}
            <Svg height="100%" width="100%" pointerEvents="none">
              {activeTooltip.overlay ? (
                <G>
                  <Defs>
                    <Mask id="clip">
                      <Rect fill="#ffffff" width="100%" height="100%" />
                      {/* hole */}
                      {viewport && activeTooltip.hole ? (
                        <Rect
                          accessibilityLabel={`tooltip-hole-${activeTooltip.id}`}
                          testID={`tooltip-hole-${activeTooltip.id}`}
                          fill="#000"
                          ry={6}
                          rx={6}
                          x={
                            activeTooltip.viewport.px -
                            activeTooltip.holePadding
                          }
                          y={
                            activeTooltip.viewport.py -
                            activeTooltip.holePadding -
                            (viewport?.py ?? 0)
                          }
                          width={
                            activeTooltip.viewport.w +
                            activeTooltip.holePadding * 2
                          }
                          height={
                            activeTooltip.viewport.h +
                            activeTooltip.holePadding * 2
                          }
                        />
                      ) : undefined}
                    </Mask>
                  </Defs>
                  <Rect
                    accessibilityLabel={`tooltip-overlay-${activeTooltip.id}`}
                    testID={`tooltip-overlay-${activeTooltip.id}`}
                    width={Dimensions.get('screen').width}
                    height={Dimensions.get('screen').height}
                    clipRule={'evenodd'}
                    fillRule={'nonzero'}
                    vectorEffect="inherit"
                    fill="#273142"
                    fillOpacity=".7"
                    mask={activeTooltip.hole ? 'url(#clip)' : undefined}
                  />
                </G>
              ) : undefined}
            </Svg>
          </Box>
        </TouchableWithoutFeedback>
        <TooltipView />
      </>
    );
  }, [activeTooltip, onLayout, removeActiveTooltip, viewport]);

  const value = React.useMemo<TooltipContextType>(
    () => ({
      activeTooltip,
      overlayViewport: viewport,
      show: addToStack,
      hide: removeFromStack,
      clearAll: removeAllStack,
    }),
    [activeTooltip, addToStack, removeAllStack, removeFromStack, viewport],
  );

  return (
    <TooltipContext.Provider value={value}>
      {children}
      {render}
    </TooltipContext.Provider>
  );
};

export const useTooltipContext = () => {
  const context = useContext(TooltipContext);
  if (!context) {
    throw new Error('useTooltipContext must be used within a TooltipProvider');
  }
  return context;
};
