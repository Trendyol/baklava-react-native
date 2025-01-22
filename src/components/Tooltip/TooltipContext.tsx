import React, { createContext, ReactNode, useContext, useState } from 'react';
import { Overlay } from './Overlay';
import TooltipView from './TooltipView';
import { TooltipContextType, TooltipData, Viewport } from './types';

export const TooltipContext = createContext<TooltipContextType | undefined>(
  undefined,
);

export const TooltipProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [viewport, setViewport] = React.useState<Viewport>();
  const [stack, setStack] = useState<TooltipData[]>([]);

  const activeTooltip = React.useMemo(() => {
    return stack[0];
  }, [stack]);

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

  const value = React.useMemo<TooltipContextType>(
    () => ({
      activeTooltip,
      overlayViewport: viewport,
      show: addToStack,
      hide: removeFromStack,
      clearAll: removeAllStack,
      setOverlayViewport: setViewport,
    }),
    [activeTooltip, addToStack, removeAllStack, removeFromStack, viewport],
  );

  const render = React.useMemo(() => {
    if (!activeTooltip) {
      return null;
    }

    return (
      <>
        <Overlay />
        <TooltipView />
      </>
    );
  }, [activeTooltip]);

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
