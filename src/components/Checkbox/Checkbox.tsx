import React from 'react';
import {
  LayoutProps,
  SpacingProps,
  SpacingShorthandProps,
  VariantProps,
  createRestyleComponent,
  createVariant,
  layout,
  spacing,
  spacingShorthand,
} from '@ergenekonyigit/restyle';
import { TouchableOpacity } from 'react-native';
import { Theme } from '../../theme';
import Box from '../Box/Box';
import Icon from '../Icon/Icon';
import FlagIcon from '../FlagIcon/FlagIcon';
import Text from '../Text/Text';
import { FlagIconNameType } from '../FlagIcon/types';

const variant = createVariant({ themeKey: 'checkboxVariants' });

type TickboxProps = VariantProps<Theme, 'checkboxVariants'> &
  React.ComponentProps<typeof Box>;

const Tickbox = createRestyleComponent<TickboxProps, Theme>([variant], Box);

type ContainerProps = React.ComponentProps<typeof TouchableOpacity> &
  LayoutProps<Theme> &
  SpacingProps<Theme> &
  SpacingShorthandProps<Theme>;

const CheckboxContainer = createRestyleComponent<ContainerProps, Theme>(
  [layout, spacing, spacingShorthand],
  TouchableOpacity,
);

type CheckboxProps = React.ComponentProps<typeof CheckboxContainer> & {
  checked: boolean;
  indeterminate?: boolean;
  label?: string;
  disabled?: boolean;
  error?: boolean;
  helperText?: string | null;
  flagIcon?: FlagIconNameType | null;
  onPress?: () => void;
};

const Checkbox = ({
  checked,
  indeterminate,
  label,
  disabled = false,
  error = false,
  helperText,
  flagIcon,
  onPress,
  ...rest
}: CheckboxProps) => {
  const showErrorState = error && !disabled && !checked;

  const tickboxVariant = React.useMemo(() => {
    if (showErrorState) {
      return 'errorUnchecked';
    }
    if (checked) {
      return disabled ? 'disabledChecked' : 'checked';
    }
    return disabled ? 'disabledUnchecked' : 'unchecked';
  }, [showErrorState, checked, disabled]);

  const checkIcon = React.useMemo(() => {
    if (!checked) {
      return null;
    }
    if (indeterminate) {
      return (
        <Icon
          size="4xs"
          name="minus"
          color={disabled ? 'neutralLight' : 'neutralFull'}
          testID="minus-icon"
        />
      );
    }
    return (
      <Icon
        size="3xs"
        name="check"
        color={disabled ? 'neutralLight' : 'neutralFull'}
        testID="check-icon"
      />
    );
  }, [checked, indeterminate, disabled]);

  const labelColor = React.useMemo(() => {
    if (disabled) {
      return 'neutralLighter';
    }
    if (checked) {
      return 'primaryKey';
    }
    return 'neutralDarker';
  }, [disabled, checked]);

  const flagIconColor = React.useMemo(() => {
    if (disabled) {
      return 'neutralLight';
    }
    if (checked) {
      return 'primaryKey';
    }
    return 'neutralDarker';
  }, [disabled, checked]);

  const helperTextColor = showErrorState ? 'dangerKey' : 'neutralDark';
  const showHelperText = Boolean(helperText && !(error && disabled));

  return (
    <Box alignSelf="flex-start">
      <CheckboxContainer
        flexDirection="row"
        alignSelf="flex-start"
        disabled={disabled}
        onPress={onPress}
        {...rest}>
        <Tickbox testID="tickbox" variant={tickboxVariant}>
          {checkIcon}
        </Tickbox>
        {flagIcon ? (
          <Box marginLeft="2xs">
            <FlagIcon
              size="s"
              name={flagIcon}
              color={flagIconColor}
              testID="flag-icon"
            />
          </Box>
        ) : null}
        {label ? (
          <Text testID="label" marginLeft="2xs" color={labelColor}>
            {label}
          </Text>
        ) : null}
      </CheckboxContainer>
      {showHelperText ? (
        <Text
          testID="helper-text"
          variant="subtitle04Regular"
          color={helperTextColor}
          marginTop="3xs">
          {helperText}
        </Text>
      ) : null}
    </Box>
  );
};

export default Checkbox;
