import React from 'react';
import { LayoutChangeEvent, TouchableOpacity, View } from 'react-native';
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
      contour = false,
      position = 'top',
      wrapperStyle,
      holePadding = 4,
      color = 'infoKey',
      onClose = () => null,
    },
    ref,
  ) => {
    const { show, hide, activeTooltip } = useTooltipContext();
    const triggerRef = React.useRef<View>(null);
    const [tooltipData, setTooltipData] =
      React.useState<Omit<TooltipData, 'viewport'>>();
    const isPending = React.useRef(false);
    const [boxSize, setBoxSize] = React.useState<{
      width: number;
      height: number;
    }>();

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

    const onLayout = React.useCallback(
      (event: LayoutChangeEvent) => {
        const data: Omit<TooltipData, 'viewport'> = {
          id,
          position,
          content,
          overlay,
          hole,
          holePadding,
          contour,
          color,
          onClose,
          triggerRef,
        };
        setBoxSize({
          width: event.nativeEvent.layout.width,
          height: event.nativeEvent.layout.height,
        });
        setTooltipData(data);
        if (isPending.current) {
          show(data);
        }
      },
      [
        id,
        position,
        content,
        overlay,
        hole,
        holePadding,
        contour,
        color,
        onClose,
        show,
      ],
    );

    const openTooltip = React.useCallback(() => {
      if (tooltipData) {
        show(tooltipData);
      }
    }, [tooltipData, show]);

    const contourView = React.useMemo(() => {
      if (!contour || !boxSize || activeTooltip?.id !== id) {
        return null;
      }

      return (
        <Box
          testID={`tooltip-contour-${id}`}
          position="absolute"
          bg="white"
          borderRadius="s"
          height={boxSize?.height + holePadding * 2}
          width={boxSize?.width + holePadding * 2}
          top={-holePadding}
          left={-holePadding}
        />
      );
    }, [activeTooltip, boxSize, contour, holePadding, id]);

    return (
      <TouchableOpacity
        testID={`tooltip-trigger-${id}`}
        accessibilityLabel={`tooltip-trigger-${id}`}
        disabled={!pressable}
        onPress={openTooltip}
        style={wrapperStyle}>
        {contourView}
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
