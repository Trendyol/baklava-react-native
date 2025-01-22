import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Box from '../Box/Box';
import { useTooltipContext } from './TooltipContext';
import { TooltipData, TooltipProps, TooltipRef } from './types';

const Tooltip = React.forwardRef<TooltipRef, TooltipProps>(
  (
    {
      children,
      id,
      pressable = true,
      content,
      overlay = false,
      hole = false,
      highlight = false,
      position = 'top',
      wrapperStyle,
      holePadding = 4,
      color = 'infoKey',
      onClose = () => null,
      onError = () => null,
    },
    ref,
  ) => {
    const { show, hide } = useTooltipContext();
    const triggerRef = React.useRef<View>(null);
    const [tooltipData, setTooltipData] =
      React.useState<Omit<TooltipData, 'viewport'>>();
    const isPending = React.useRef(false);

    React.useImperativeHandle(
      ref,
      () => {
        return {
          show: () => {
            if (tooltipData) {
              show(tooltipData);
            } else {
              isPending.current = true;
            }
          },
          hide: () => {
            if (tooltipData) {
              hide(tooltipData?.id);
            }
          },
        };
      },
      [tooltipData, show, hide],
    );

    const onLayout = React.useCallback(() => {
      const data: Omit<TooltipData, 'viewport'> = {
        id,
        position,
        content,
        overlay,
        hole,
        holePadding,
        highlight,
        color,
        onClose,
        onError,
        triggerRef,
        children,
      };
      setTooltipData(data);
      if (isPending.current) {
        show(data);
      }
    }, [
      id,
      position,
      content,
      overlay,
      hole,
      holePadding,
      highlight,
      color,
      onClose,
      onError,
      show,
      children,
    ]);

    const openTooltip = React.useCallback(() => {
      if (tooltipData) {
        show(tooltipData);
      }
    }, [tooltipData, show]);

    return (
      <TouchableOpacity
        testID={`tooltip-trigger-${id}`}
        accessibilityLabel={`tooltip-trigger-${id}`}
        disabled={!pressable}
        onPress={openTooltip}
        style={wrapperStyle}>
        <Box
          testID={`tooltip-child-wrapper-${id}`}
          ref={triggerRef}
          onLayout={onLayout}>
          {children}
        </Box>
      </TouchableOpacity>
    );
  },
);

export default Tooltip;
