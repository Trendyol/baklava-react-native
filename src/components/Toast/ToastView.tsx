import React from 'react';
import {
  Animated,
  LayoutChangeEvent,
  LayoutRectangle,
  PanResponder,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import Text from '../Text/Text';
import { TostDurations } from './types';
import { capitalizeFirstLetter, getFirstNChar, pausableTimer } from './utils';
import Box from '../Box/Box';
import {
  createRestyleComponent,
  createVariant,
  VariantProps,
} from '@ergenekonyigit/restyle';
import { Theme } from '../../theme';

type ToastViewProps = React.ComponentProps<typeof Animated.View> & {
  variant?: VariantProps<Theme, 'toastVariants'>['variant'];
  text?: string;
  onDisappared?: () => void;
  duration?: number;
  action?: (close: () => void) => void;
  actionText?: string;
};

const variantVariant = createVariant<Theme, 'toastVariants', 'variant'>({
  property: 'variant',
  themeKey: 'toastVariants',
});

const ToastViewContainer = createRestyleComponent<
  ToastViewProps & VariantProps<Theme, 'toastVariants'>,
  Theme
>([variantVariant], Animated.View);

export type ToastViewRef = {
  show: () => void;
  hide: () => void;
};

const ToastView = React.forwardRef<ToastViewRef, ToastViewProps>(
  (
    {
      variant = 'default',
      text,
      duration = TostDurations.SHORT,
      onDisappared,
      action,
      actionText,
      ...rest
    },
    ref,
  ) => {
    const dims = useWindowDimensions();
    const anim = React.useRef(new Animated.Value(dims.height / 2)).current;
    const layoutSizesRef = React.useRef<LayoutRectangle>();
    const timerRef = React.useRef(
      pausableTimer(() => {
        playHideAnim();
      }, duration),
    );

    const panResponderRef = React.useRef(
      PanResponder.create({
        onStartShouldSetPanResponderCapture: (e, gestureState) => {
          return !action || !(gestureState.dx === 0 && gestureState.dy === 0);
        },
        onMoveShouldSetPanResponder: () => true,
        onPanResponderGrant: () => {
          timerRef.current.pause();
        },
        onPanResponderMove: (e, gestureState) => {
          if (gestureState.dy >= 0) {
            Animated.event([null, { dy: anim }], { useNativeDriver: false })(
              e,
              gestureState,
            );
          }
        },
        onPanResponderRelease: (e, gestureState) => {
          if (
            gestureState.dy > (layoutSizesRef.current?.height ?? 0) ||
            gestureState.vy > 0.05
          ) {
            playHideAnim();
          } else {
            playShowAnim();
            timerRef.current.resume(2000);
          }
        },
      }),
    );

    React.useImperativeHandle(ref, () => ({
      show() {
        playShowAnim();
      },
      hide() {
        playHideAnim();
      },
    }));

    const playShowAnim = React.useCallback(() => {
      Animated.timing(anim, {
        toValue: 0,
        duration: 333,
        useNativeDriver: true,
      }).start();
    }, [anim]);

    const playHideAnim = React.useCallback(() => {
      Animated.timing(anim, {
        toValue: dims.height / 2,
        duration: 333,
        useNativeDriver: true,
      }).start(onDisappared);
    }, [anim, dims.height, onDisappared]);

    React.useEffect(() => {
      playShowAnim();
      return () => {
        timerRef!.current.kill();
      };
    }, [playShowAnim, timerRef]);

    const onLayout = React.useCallback((event: LayoutChangeEvent) => {
      layoutSizesRef.current = event.nativeEvent.layout;
    }, []);

    const actionView = React.useMemo(() => {
      if (!action) {
        return null;
      }
      return (
        <TouchableOpacity
          onPress={() => action(playHideAnim)}
          testID="toast-action"
          accessibilityLabel="toast-action">
          <Text
            variant="subtitle03Medium"
            color="contentPrimary"
            testID="toast-action-text"
            accessibilityLabel="toast-action-text"
            p="2xs">
            {capitalizeFirstLetter(actionText)}
          </Text>
        </TouchableOpacity>
      );
    }, [action, actionText, playHideAnim]);

    return (
      <ToastViewContainer
        {...panResponderRef.current.panHandlers}
        variant={variant}
        onLayout={onLayout}
        testID="toast-container"
        accessibilityLabel="toast-container"
        style={{ transform: [{ translateY: anim }] }}
        {...rest}>
        <Box flex={1} shadowRadius={30}>
          <Text
            variant="bodyText"
            color="contentPrimary"
            testID="toast-text"
            accessibilityLabel="toast-text"
            textAlign="left">
            {getFirstNChar(text!, 110, '...')}
          </Text>
        </Box>
        {actionView}
      </ToastViewContainer>
    );
  },
);

export default ToastView;
