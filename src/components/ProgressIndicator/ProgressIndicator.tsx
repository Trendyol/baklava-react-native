import React from 'react';
import { Pressable, View } from 'react-native';
import Box from '../Box/Box';
import Icon from '../Icon/Icon';
import Text from '../Text/Text';
import theme, { Theme } from '../../theme';

type ProgressIndicatorVariant = 'inProgress' | 'success' | 'fail';
type ProgressIndicatorSize = 'small' | 'medium';

type ProgressIndicatorProps = {
  variant?: ProgressIndicatorVariant;
  size?: ProgressIndicatorSize;
  label?: string;
  progress?: number;
  showPercentage?: boolean;
  showIcon?: boolean;
  helperText?: string;
  onClose?: () => void;
  testID?: string;
};

const ProgressIndicator = ({
  variant = 'inProgress',
  size = 'medium',
  label,
  progress = 0,
  showPercentage = true,
  showIcon = true,
  helperText,
  onClose,
  testID = 'progressIndicator',
}: ProgressIndicatorProps) => {
  const variantConfig = theme.progressIndicatorVariants[variant];
  const sizeConfig = theme.progressIndicatorSizeVariants[size];
  const barColor =
    theme.colors[variantConfig.barColor as keyof Theme['colors']];
  const helperTextColor =
    variantConfig.helperTextColor as keyof Theme['colors'];

  const clampedProgress = Math.min(100, Math.max(0, progress));
  const displayProgress = variant === 'inProgress' ? clampedProgress : 100;

  const renderIcon = () => {
    if (!showIcon) {
      return null;
    }

    if (variant === 'success') {
      return (
        <Icon
          testID={`${testID}-icon`}
          name="check-fill"
          size="s"
          color={theme.colors.successKey}
        />
      );
    }

    if (variant === 'fail') {
      return (
        <Icon
          testID={`${testID}-icon`}
          name="alert"
          size="s"
          color={theme.colors.dangerKey}
        />
      );
    }

    return null;
  };

  const renderPercentage = () => {
    if (variant !== 'inProgress' || !showPercentage) {
      return null;
    }

    return (
      <Text
        testID={`${testID}-percentage`}
        variant="subtitle2Regular"
        color="neutralDark">
        %{clampedProgress}
      </Text>
    );
  };

  return (
    <Box testID={testID}>
      {/* Header Row */}
      <Box
        testID={`${testID}-header`}
        flexDirection="row"
        alignItems="center"
        mb="3xs">
        {/* Icon */}
        {renderIcon()}

        {/* Label */}
        {label && (
          <Box
            flex={1}
            ml={showIcon && variant !== 'inProgress' ? '2xs' : 'none'}>
            <Text
              testID={`${testID}-label`}
              variant="subtitle2Medium"
              color="neutralDarker">
              {label}
            </Text>
          </Box>
        )}

        {/* Spacer when no label */}
        {!label && <Box flex={1} />}

        {/* Percentage */}
        {renderPercentage()}

        {/* Close Button */}
        <Pressable
          testID={`${testID}-closeButton`}
          onPress={onClose}
          hitSlop={8}>
          <Box ml="xs">
            <Icon name="close" size="s" color="neutralDarker" />
          </Box>
        </Pressable>
      </Box>

      {/* Progress Bar */}
      <View
        testID={`${testID}-barBackground`}
        style={{
          height: sizeConfig.barHeight,
          backgroundColor: theme.colors.neutralLightest,
          borderRadius: sizeConfig.barBorderRadius,
          overflow: 'hidden',
        }}>
        <View
          testID={`${testID}-barFill`}
          style={{
            height: '100%',
            width: `${displayProgress}%`,
            backgroundColor: barColor,
            borderRadius: sizeConfig.barBorderRadius,
          }}
        />
      </View>

      {/* Helper Text */}
      {helperText && (
        <Text
          testID={`${testID}-helperText`}
          variant="subtitle3Regular"
          color={helperTextColor}
          mt="3xs">
          {helperText}
        </Text>
      )}
    </Box>
  );
};

export default ProgressIndicator;
