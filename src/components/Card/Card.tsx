import React from 'react';
import {
  Image as RNImage,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
} from 'react-native';
import Box from '../Box/Box';
import Icon from '../Icon/Icon';
import Text from '../Text/Text';
import { CardProps, CardType, CardVariant } from './types';

/** Source measurements of the Figma `Card` component set (343 px wide). */
const MEDIA_ASPECT_RATIO = 311 / 257;
const HORIZONTAL_MEDIA_WIDTH = 96;
const HORIZONTAL_MEDIA_HEIGHT = 48;
const ICON_SLOT_SIZE = 64;
const PLACEHOLDER_MIN_HEIGHT = 200;
const COMPACT_MIN_HEIGHT = 54;

const hasShadow = (variant: CardVariant, type: CardType) =>
  type === 'elevated' && variant !== 'icon';

const Card = ({
  variant = 'vertical',
  type = 'default',
  header,
  title,
  headerSlot,
  description,
  badge,
  actions,
  image,
  icon,
  showArrow = true,
  compactContent,
  children,
  onPress,
  disabled = false,
  testID = 'card',
  accessibilityLabel,
  opacity,
  ...rest
}: CardProps) => {
  const showHeader = header ?? (title != null || headerSlot != null);
  const showShadow = hasShadow(variant, type);

  const handlePress = React.useCallback(() => {
    if (disabled || !onPress) {
      return;
    }
    onPress();
  }, [disabled, onPress]);

  const renderHeader = (padded = false) => (
    <Box
      flexDirection="row"
      alignItems="center"
      gap="2xs"
      padding={padded ? 'm' : undefined}
      testID={`${testID}-header`}>
      {title != null ? (
        <Text
          variant="subtitle3Medium"
          color="contentPrimary"
          truncate
          style={styles.flex}
          testID={`${testID}-title`}>
          {title}
        </Text>
      ) : null}
      {headerSlot != null ? (
        <Box
          flexDirection="row"
          alignItems="center"
          gap="2xs"
          style={title == null ? styles.pushEnd : undefined}
          testID={`${testID}-header-slot`}>
          {headerSlot}
        </Box>
      ) : null}
    </Box>
  );

  const renderContent = (grow = false) => (
    <Box
      gap="2xs"
      flex={grow ? 1 : undefined}
      shrink={grow}
      testID={`${testID}-content`}>
      {showHeader ? renderHeader() : null}
      {description != null ? (
        <Text
          variant="body2"
          color="contentPrimary"
          testID={`${testID}-description`}>
          {description}
        </Text>
      ) : null}
      {badge != null ? (
        <Box alignSelf="flex-start" testID={`${testID}-badge`}>
          {badge}
        </Box>
      ) : null}
      {children}
    </Box>
  );

  const renderMedia = () => {
    if (React.isValidElement(image)) {
      return image;
    }
    const source = (
      typeof image === 'string' ? { uri: image } : image
    ) as ImageSourcePropType;
    return (
      <RNImage
        source={source}
        resizeMode="cover"
        style={styles.fill}
        testID={`${testID}-image`}
        accessibilityLabel={`${testID}-image`}
      />
    );
  };

  const renderActions = () =>
    actions != null ? (
      <Box gap="m" testID={`${testID}-actions`}>
        {actions}
      </Box>
    ) : null;

  const renderVertical = () => (
    <>
      {image != null ? (
        <Box paddingTop="m" paddingHorizontal="m">
          <Box
            aspectRatio={MEDIA_ASPECT_RATIO}
            borderRadius="s"
            overflow="hidden"
            backgroundColor="neutralLightest"
            testID={`${testID}-image-wrapper`}>
            {renderMedia()}
          </Box>
        </Box>
      ) : null}
      <Box padding="m" gap="m">
        {renderContent()}
        {renderActions()}
      </Box>
    </>
  );

  const renderHorizontal = () => (
    <Box flexDirection="row" alignItems="center">
      {image != null ? (
        <Box paddingVertical="m" paddingLeft="m">
          <Box
            width={HORIZONTAL_MEDIA_WIDTH}
            height={HORIZONTAL_MEDIA_HEIGHT}
            borderRadius="s"
            overflow="hidden"
            backgroundColor="neutralLightest"
            testID={`${testID}-image-wrapper`}>
            {renderMedia()}
          </Box>
        </Box>
      ) : null}
      <Box
        flex={1}
        flexDirection="row"
        alignItems="center"
        gap="3xs"
        padding="m">
        {renderContent(true)}
        {showArrow ? (
          <Icon
            name="arrow-right"
            size="s"
            color="contentPrimary"
            testID={`${testID}-arrow`}
          />
        ) : null}
      </Box>
    </Box>
  );

  const renderIcon = () => (
    <Box padding="m" gap="m">
      <Box flexDirection="row" gap="2xs" alignItems="flex-start">
        <Box
          width={ICON_SLOT_SIZE}
          height={ICON_SLOT_SIZE}
          overflow="hidden"
          alignItems="center"
          justifyContent="center"
          backgroundColor="neutralLightest"
          testID={`${testID}-icon`}>
          {icon}
        </Box>
        {renderContent(true)}
      </Box>
      {renderActions()}
    </Box>
  );

  const renderPlaceholder = () => (
    <>
      {showHeader ? renderHeader(true) : null}
      <Box flexGrow={1} padding="m" gap="2xs" testID={`${testID}-content`}>
        {children}
      </Box>
    </>
  );

  const renderCompact = () => (
    <Box
      flexGrow={1}
      padding="2xs"
      alignItems="center"
      justifyContent="center"
      testID={`${testID}-content`}>
      {compactContent}
    </Box>
  );

  const renderVariant = () => {
    switch (variant) {
      case 'horizontal':
        return renderHorizontal();
      case 'icon':
        return renderIcon();
      case 'placeholder':
        return renderPlaceholder();
      case 'compact':
        return renderCompact();
      case 'vertical':
      default:
        return renderVertical();
    }
  };

  const getMinHeight = () => {
    if (variant === 'placeholder') {
      return PLACEHOLDER_MIN_HEIGHT;
    }
    if (variant === 'compact') {
      return COMPACT_MIN_HEIGHT;
    }
    return undefined;
  };

  const card = (
    <Box
      minHeight={getMinHeight()}
      borderRadius="l"
      overflow="hidden"
      opacity={disabled ? 0.5 : opacity}
      backgroundColor={type === 'gray' ? 'neutralLightest' : 'neutralFull'}
      borderWidth={type === 'stroke' ? 1 : undefined}
      borderColor={type === 'stroke' ? 'borderColor' : undefined}
      shadowColor={showShadow ? 'neutralNone' : undefined}
      shadowOffset={showShadow ? { width: 0, height: 4 } : undefined}
      shadowOpacity={showShadow ? 0.1 : undefined}
      shadowRadius={showShadow ? 20 : undefined}
      elevation={showShadow ? 4 : undefined}
      testID={testID}
      accessibilityLabel={accessibilityLabel ?? testID}
      {...rest}>
      {renderVariant()}
    </Box>
  );

  if (!onPress) {
    return card;
  }

  return (
    <Pressable
      onPress={handlePress}
      disabled={disabled}
      accessibilityRole="button"
      accessibilityState={{ disabled }}
      accessibilityLabel={accessibilityLabel ?? testID}
      testID={`${testID}-pressable`}>
      {card}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    minWidth: 0,
  },
  fill: {
    width: '100%',
    height: '100%',
  },
  pushEnd: {
    marginLeft: 'auto',
  },
});

export type { CardProps };
export default Card;
