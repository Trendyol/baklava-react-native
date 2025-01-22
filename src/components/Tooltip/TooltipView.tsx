import React from 'react';
import { I18nManager, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { deviceHeight, deviceWidth } from '../../utils/dimentions';
import Box from '../Box/Box';
import Icon from '../Icon/Icon';
import Text from '../Text/Text';
import { calculatePosition, PIN_SIZE } from './calculatePosition';
import { useTooltipContext } from './TooltipContext';

const isRTL = I18nManager.isRTL;

const TooltipView = () => {
  const tooltipRef = React.useRef<View>(null);
  const { top, bottom } = useSafeAreaInsets();
  const { hide, overlayViewport, activeTooltip } = useTooltipContext();
  const [position, setPosition] = React.useState(activeTooltip!.position);

  const onLayout = React.useCallback(() => {
    tooltipRef.current?.measure?.((x, y, w, h, px, py) => {
      switch (activeTooltip!.position) {
        case 'top':
          if (Math.abs(py) - PIN_SIZE < top) {
            setPosition('bottom');
          }
          break;
        case 'bottom':
          if (py + h + bottom > deviceHeight - Math.abs(y)) {
            setPosition('top');
          }
          break;
      }
    });
  }, [bottom, activeTooltip, tooltipRef, top]);

  const calc = React.useMemo(() => {
    return calculatePosition(
      {
        ...activeTooltip!,
        position,
      },
      isRTL,
      overlayViewport,
    );
  }, [activeTooltip, overlayViewport, position]);

  const _hide = React.useCallback(() => {
    if (activeTooltip) {
      hide(activeTooltip.id);
    }
  }, [activeTooltip, hide]);

  const pinPos = React.useMemo(() => {
    return {
      transform: [
        {
          translateX: calc.pinX,
        },
        {
          translateY: calc.pinYOverflow,
        },
        {
          translateX: calc.pinXOverflow,
        },
        {
          translateY: calc.pinY,
        },
        { rotate: '45deg' },
      ],
    };
  }, [calc]);

  if (!overlayViewport || !activeTooltip) {
    return null;
  }

  return (
    <Box
      flex={1}
      height={deviceHeight}
      width={deviceWidth}
      position="absolute"
      pointerEvents="box-none">
      <Box
        pointerEvents="box-none"
        top={calc.top}
        height={calc.height}
        justifyContent={position === 'top' ? 'flex-end' : 'flex-start'}
        testID={`tooltip-area-${activeTooltip.id}`}>
        <Box
          testID={`tooltip-${activeTooltip.id}`}
          bg={activeTooltip.color}
          onLayout={onLayout}
          ref={tooltipRef}
          borderRadius="m"
          marginHorizontal="m"
          pointerEvents="auto"
          accessibilityHint={position}>
          <Box flexDirection="row">
            <Box flex={1} padding="m">
              <Text
                color="neutralFull"
                variant="body2"
                testID={`tooltip-content-${activeTooltip.id}`}
                textAlign={'left'}>
                {activeTooltip.content}
              </Text>
            </Box>
            <Box>
              <TouchableOpacity
                onPress={_hide}
                testID={`tooltip-close-${activeTooltip.id}`}
                accessibilityLabel={`tooltip-close-${activeTooltip.id}`}>
                <Box padding="m">
                  <Icon name="close" size="xs" color="neutralFull" />
                </Box>
              </TouchableOpacity>
            </Box>
          </Box>
        </Box>
        <Box
          testID={`tooltip-pin-${activeTooltip.id}`}
          position="absolute"
          bg={activeTooltip.color}
          height={PIN_SIZE}
          width={PIN_SIZE}
          style={pinPos}
        />
      </Box>
    </Box>
  );
};

export default TooltipView;
