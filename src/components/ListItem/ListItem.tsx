import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Box from '../Box/Box';
import Text from '../Text/Text';
import Image from '../Image/Image';
import Icon from '../Icon/Icon';
import { ListItemProps } from './types';

const IMAGE_WIDTH = 48;
const IMAGE_HEIGHT = 72;
const IMAGE_RADIUS = 4;
const BADGE_SIZE = 20;

const DEFAULT_EXPAND_LABEL = 'Show More';
const DEFAULT_COLLAPSE_LABEL = 'Collapse';

const ListItem = ({
  leading,
  children,
  trailing,
  footer,
  collapseContent,
  image,
  imageBadge,
  onImagePress,
  selected = false,
  onPress,
  disabled = false,
  testID = 'list-item',
  collapsible = false,
  defaultExpanded = false,
  expanded: controlledExpanded,
  onExpandedChange,
  expandLabel = DEFAULT_EXPAND_LABEL,
  collapseLabel = DEFAULT_COLLAPSE_LABEL,
  collapseButtonVariant = 'filled',
  collapseButtonVisibility = 'always',
  title,
  showActionButton = false,
  onActionPress,
}: ListItemProps) => {
  const [internalExpanded, setInternalExpanded] =
    React.useState(defaultExpanded);

  const isControlled = controlledExpanded !== undefined;
  const isExpanded = isControlled ? controlledExpanded : internalExpanded;

  React.useEffect(() => {
    if (isControlled) {
      setInternalExpanded(controlledExpanded);
    }
  }, [controlledExpanded, isControlled]);

  const handleExpandedChange = React.useCallback(
    (next: boolean) => {
      if (!isControlled) {
        setInternalExpanded(next);
      }
      onExpandedChange?.(next);
    },
    [isControlled, onExpandedChange],
  );

  const handleCollapseToggle = React.useCallback(() => {
    if (disabled) {
      return;
    }
    handleExpandedChange(!isExpanded);
  }, [disabled, handleExpandedChange, isExpanded]);

  const handleBodyPress = React.useCallback(() => {
    if (disabled || !onPress) {
      return;
    }
    onPress();
  }, [disabled, onPress]);

  const handleActionPress = React.useCallback(() => {
    if (disabled) {
      return;
    }
    if (onActionPress) {
      onActionPress();
      return;
    }
    onPress?.();
  }, [disabled, onActionPress, onPress]);

  const handleImagePress = React.useCallback(() => {
    if (disabled || !onImagePress) {
      return;
    }
    onImagePress();
  }, [disabled, onImagePress]);

  const trailingNode = React.useMemo(() => {
    if (trailing) {
      return trailing;
    }
    if (!showActionButton) {
      return null;
    }
    return (
      <Icon
        name="arrow-right"
        size="s"
        color="neutralDark"
        testID={`${testID}-action-icon`}
      />
    );
  }, [trailing, showActionButton, testID]);

  const showTrailing = trailing != null || showActionButton;
  const hasBodyPress = Boolean(onPress);
  /** Default chevron is always an action target; custom trailing only if handlers exist */
  const hasActionPress =
    showActionButton || (trailing != null && Boolean(onActionPress || onPress));
  const hasImagePress = Boolean(image) && Boolean(onImagePress);

  const showCollapseButton =
    collapsible && (collapseButtonVisibility === 'always' || isExpanded);

  const imageNode = image ? (
    <Box testID={`${testID}-image-wrap`} style={styles.imageWrap}>
      <Image
        source={{ uri: image }}
        width={IMAGE_WIDTH}
        height={IMAGE_HEIGHT}
        borderRadius={IMAGE_RADIUS}
        testID={`${testID}-image`}
        accessibilityLabel={`${testID}-image`}
      />
      {imageBadge != null && imageBadge !== '' ? (
        <Box
          testID={`${testID}-image-badge`}
          backgroundColor="infoKey"
          alignItems="center"
          justifyContent="center"
          style={styles.imageBadge}>
          <Text
            variant="body3"
            color="neutralFull"
            testID={`${testID}-image-badge-text`}>
            {String(imageBadge)}
          </Text>
        </Box>
      ) : null}
    </Box>
  ) : null;

  const contentColumn = (
    <Box
      flex={1}
      shrink
      gap="2xs"
      testID={`${testID}-content`}
      accessibilityLabel={`${testID}-content`}>
      {title ? (
        <Text
          variant="subtitle3Medium"
          color="neutralDarker"
          testID={`${testID}-title`}>
          {title}
        </Text>
      ) : null}
      {children}
    </Box>
  );

  return (
    <Box
      testID={testID}
      accessibilityLabel={testID}
      backgroundColor={selected ? 'primaryContrast' : 'neutralFull'}
      opacity={disabled ? 0.5 : 1}
      padding="m"
      gap="m"
      accessibilityState={{ selected, disabled }}>
      <Box
        flexDirection="row"
        alignItems="flex-start"
        gap="m"
        testID={`${testID}-row`}>
        {leading ? (
          <Box
            testID={`${testID}-leading`}
            accessibilityLabel={`${testID}-leading`}>
            {leading}
          </Box>
        ) : null}

        {imageNode ? (
          hasImagePress ? (
            <Pressable
              onPress={handleImagePress}
              disabled={disabled}
              testID={`${testID}-image-pressable`}
              accessibilityRole="imagebutton"
              accessibilityLabel={`${testID}-image-pressable`}>
              {imageNode}
            </Pressable>
          ) : (
            imageNode
          )
        ) : null}

        {hasBodyPress ? (
          <Pressable
            onPress={handleBodyPress}
            disabled={disabled}
            style={styles.flex}
            testID={`${testID}-body-pressable`}
            accessibilityRole="button"
            accessibilityLabel={`${testID}-body-pressable`}>
            {contentColumn}
          </Pressable>
        ) : (
          contentColumn
        )}

        {showTrailing ? (
          hasActionPress ? (
            <Pressable
              onPress={handleActionPress}
              disabled={disabled}
              hitSlop={8}
              testID={`${testID}-action-pressable`}
              accessibilityRole="button"
              accessibilityLabel={`${testID}-action-pressable`}>
              <Box
                width={32}
                height={32}
                alignItems="center"
                justifyContent="center"
                borderRadius="xs">
                {trailingNode}
              </Box>
            </Pressable>
          ) : (
            <Box
              width={32}
              height={32}
              alignItems="center"
              justifyContent="center"
              testID={`${testID}-trailing`}>
              {trailingNode}
            </Box>
          )
        ) : null}
      </Box>

      {footer ? (
        <Box
          testID={`${testID}-footer`}
          accessibilityLabel={`${testID}-footer`}>
          {footer}
        </Box>
      ) : null}

      {collapsible && isExpanded && collapseContent ? (
        <Box
          testID={`${testID}-collapse-content`}
          accessibilityLabel={`${testID}-collapse-content`}>
          {collapseContent}
        </Box>
      ) : null}

      {showCollapseButton ? (
        <Pressable
          onPress={handleCollapseToggle}
          disabled={disabled}
          testID={`${testID}-collapse-toggle`}
          accessibilityRole="button"
          accessibilityState={{ expanded: isExpanded }}
          accessibilityLabel={`${testID}-collapse-toggle`}>
          <Box
            backgroundColor={
              collapseButtonVariant === 'filled'
                ? 'neutralLightest'
                : 'transparent'
            }
            borderRadius="xs"
            height={32}
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            gap="2xs"
            paddingHorizontal="m"
            testID={`${testID}-collapse-button`}>
            <Text
              variant="subtitle3Medium"
              color="primaryKey"
              testID={`${testID}-collapse-label`}>
              {isExpanded ? collapseLabel : expandLabel}
            </Text>
            <Icon
              name={isExpanded ? 'arrow-up' : 'arrow-down'}
              size="s"
              color="primaryKey"
              testID={`${testID}-collapse-icon`}
            />
          </Box>
        </Pressable>
      ) : null}
    </Box>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    minWidth: 0,
  },
  imageWrap: {
    position: 'relative',
    width: IMAGE_WIDTH,
    height: IMAGE_HEIGHT,
  },
  imageBadge: {
    position: 'absolute',
    top: -10,
    right: -6,
    width: BADGE_SIZE,
    height: BADGE_SIZE,
    borderRadius: BADGE_SIZE / 2,
    minWidth: BADGE_SIZE,
  },
});

export type { ListItemProps };
export default ListItem;
