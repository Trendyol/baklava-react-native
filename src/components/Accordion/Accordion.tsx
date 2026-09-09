import React from 'react';
import { Animated, Pressable, StyleSheet, View } from 'react-native';
import {
  backgroundColor,
  BackgroundColorProps,
  border,
  BorderProps,
  LayoutProps,
  layout,
  SpacingProps,
  spacing,
  SpacingShorthandProps,
  spacingShorthand,
  createRestyleComponent,
} from '@ergenekonyigit/restyle';
import Box, { BoxProps } from '../Box/Box';
import Text from '../Text/Text';
import Icon from '../Icon/Icon';
import { IconNameType } from '../Icon/types';
import { useIsPressed } from '../Button/hooks';
import { Theme } from '../../theme';

const ANIMATION_DURATION = 250;

const styles = StyleSheet.create({
  animatedWrapper: {
    overflow: 'hidden',
  },
  measureContainer: {
    position: 'absolute',
    opacity: 0,
  },
});

type AccordionProps = BoxProps & {
  title: string;
  headerIcon?: IconNameType | boolean | null;
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  fullWidth?: boolean;
  animated?: boolean;
  children?: React.ReactNode;
};

type PressableContainerProps = React.ComponentProps<typeof Pressable> &
  LayoutProps<Theme> &
  SpacingProps<Theme> &
  SpacingShorthandProps<Theme> &
  BackgroundColorProps<Theme> &
  BorderProps<Theme>;

const PressableContainer = createRestyleComponent<
  PressableContainerProps,
  Theme
>([layout, spacing, spacingShorthand, backgroundColor, border], Pressable);

const Accordion = ({
  title,
  headerIcon = true,
  defaultOpen = false,
  open: controlledOpen,
  onOpenChange,
  fullWidth = false,
  animated = false,
  children,
  ...rest
}: AccordionProps) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(defaultOpen);
  const [contentHeight, setContentHeight] = React.useState(0);
  const [isAnimating, setIsAnimating] = React.useState(false);
  const { pressableProps, isPressed } = useIsPressed();

  const animatedValue = React.useRef(new Animated.Value(defaultOpen ? 1 : 0));
  const hasInitialized = React.useRef(false);

  React.useEffect(() => {
    if (controlledOpen !== undefined) {
      setIsOpen(controlledOpen);
    }
  }, [controlledOpen]);

  React.useEffect(() => {
    if (!animated) {
      return;
    }
    if (!hasInitialized.current) {
      hasInitialized.current = true;
      return;
    }
    setIsAnimating(true);
    Animated.timing(animatedValue.current, {
      toValue: isOpen ? 1 : 0,
      duration: ANIMATION_DURATION,
      useNativeDriver: false,
    }).start(() => {
      setIsAnimating(false);
    });
  }, [isOpen, animated, animatedValue]);

  const handleToggle = () => {
    const next = !isOpen;
    if (controlledOpen === undefined) {
      setIsOpen(next);
    }
    onOpenChange?.(next);
  };

  /* istanbul ignore next */
  const onPressIn = () => pressableProps.onPressIn();
  /* istanbul ignore next */
  const onPressOut = () => pressableProps.onPressOut();

  const animatedHeight = animatedValue.current.interpolate({
    inputRange: [0, 1],
    outputRange: [0, contentHeight],
  });
  const animatedOpacity = animatedValue.current.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const contentBody = (
    <Box
      px="m"
      pt="m"
      pb="m"
      gap="m"
      testID="accordion-content"
      accessibilityLabel="accordion-content">
      {children}
    </Box>
  );

  const handleContentLayout = React.useCallback(
    (e: { nativeEvent: { layout: { height: number } } }) => {
      const newHeight = e.nativeEvent.layout.height;
      if (newHeight !== contentHeight) {
        setContentHeight(newHeight);
      }
    },
    [contentHeight],
  );

  const renderAnimatedContent = () => {
    if (contentHeight === 0) {
      return (
        <View
          style={styles.measureContainer}
          pointerEvents="none"
          onLayout={handleContentLayout}
          testID="accordion-content-measure">
          {contentBody}
        </View>
      );
    }
    const useAutoHeight = isOpen && !isAnimating;
    return (
      <Animated.View
        style={[
          styles.animatedWrapper,
          {
            height: useAutoHeight ? undefined : animatedHeight,
            opacity: useAutoHeight ? 1 : animatedOpacity,
          },
        ]}
        onLayout={useAutoHeight ? handleContentLayout : undefined}
        testID="accordion-animated-wrapper">
        {contentBody}
      </Animated.View>
    );
  };

  return (
    <Box
      testID="accordion"
      accessibilityLabel="accordion"
      borderColor="neutralLighter"
      borderTopWidth={1}
      borderBottomWidth={1}
      borderLeftWidth={fullWidth ? 0 : 1}
      borderRightWidth={fullWidth ? 0 : 1}
      borderRadius={fullWidth ? 'none' : 'l'}
      backgroundColor="neutralFull"
      {...rest}>
      <PressableContainer
        onPress={handleToggle}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        accessibilityState={{ expanded: isOpen }}
        backgroundColor={isPressed ? 'neutralLightest' : 'transparent'}
        borderBottomWidth={isOpen ? 1 : 0}
        borderBottomColor="neutralLighter"
        padding="m"
        flexDirection="row"
        alignItems="center"
        gap="2xs"
        testID="accordion-header"
        accessibilityLabel="accordion-header">
        {headerIcon ? (
          <Icon
            name={headerIcon === true ? 'info' : headerIcon}
            size="s"
            color="neutralDarker"
            testID="accordion-header-icon"
          />
        ) : null}
        <Box flex={1}>
          <Text
            variant="subtitle3Medium"
            color="neutralDarker"
            testID="accordion-title">
            {title}
          </Text>
        </Box>
        <Icon
          name={isOpen ? 'arrow-up' : 'arrow-down'}
          size="s"
          color="neutralDarker"
          testID="accordion-chevron"
        />
      </PressableContainer>
      {animated ? renderAnimatedContent() : isOpen ? contentBody : null}
    </Box>
  );
};

export default Accordion;
