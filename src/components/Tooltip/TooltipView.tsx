import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { deviceHeight, deviceWidth } from '../../utils/dimentions';
import Box from '../Box/Box';
import Icon from '../Icon/Icon';
import Text from '../Text/Text';
import { calculatePosition, PIN_SIZE } from './calculatePosition';
import { useTooltipContext } from './TooltipContext';

const TooltipView = () => {
  const tooltipRef = React.useRef<View>(null);
  const { top, bottom } = useSafeAreaInsets();
  const {
    hide: hideTooltip,
    overlayViewport,
    activeTooltip: data,
  } = useTooltipContext();
  const [position, setPosition] = React.useState(data.position);

  const onLayout = React.useCallback(() => {
    tooltipRef.current?.measure((x, y, w, h, px, py) => {
      switch (data.position) {
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
  }, [bottom, data.position, tooltipRef, top]);

  const calc = React.useMemo(() => {
    return calculatePosition(
      {
        ...data,
        position,
      },
      overlayViewport,
    );
  }, [data, overlayViewport, position]);

  const hide = React.useCallback(() => {
    hideTooltip(data.id);
  }, [data.id, hideTooltip]);

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

  if (!overlayViewport) {
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
        testID={`tooltip-area-${data.id}`}>
        <Box
          testID={`tooltip-${data.id}`}
          bg={data.color}
          onLayout={onLayout}
          ref={tooltipRef}
          borderRadius="m"
          marginHorizontal="m"
          pointerEvents="auto"
          accessibilityHint={position}>
          <Box flexDirection="row">
            <Box flex={1} padding="m">
              <Text color="neutralFull" testID={`tooltip-content-${data.id}`}>
                {data.content}
              </Text>
            </Box>
            <Box>
              <TouchableOpacity
                onPress={hide}
                testID={`tooltip-close-${data.id}`}
                accessibilityLabel={`tooltip-close-${data.id}`}>
                <Box padding="m">
                  <Icon name="close" size="s" color="neutralFull" />
                </Box>
              </TouchableOpacity>
            </Box>
          </Box>
        </Box>
        <Box
          testID={`tooltip-pin-${data.id}`}
          position="absolute"
          bg={data.color}
          height={PIN_SIZE}
          width={PIN_SIZE}
          style={pinPos}
        />
      </Box>
    </Box>
  );
};

export default TooltipView;
