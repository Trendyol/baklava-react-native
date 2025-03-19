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
  flagIcon?: FlagIconNameType | null;
  onPress?: () => void;
};

const Checkbox = ({
  checked,
  indeterminate,
  label,
  disabled = false,
  flagIcon,
  onPress,
  ...rest
}: CheckboxProps) => {
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

  return (
    <CheckboxContainer
      flexDirection="row"
      alignSelf="flex-start"
      disabled={disabled}
      onPress={onPress}
      {...rest}>
      <Tickbox
        testID="tickbox"
        variant={
          checked
            ? disabled
              ? 'disabledChecked'
              : 'checked'
            : disabled
            ? 'disabledUnchecked'
            : 'unchecked'
        }>
        {checkIcon}
      </Tickbox>
      {flagIcon ? (
        <Box marginLeft="2xs">
          <FlagIcon
            size="s"
            name={flagIcon}
            color={
              disabled
                ? 'neutralLight'
                : checked
                ? 'primaryKey'
                : 'neutralDarker'
            }
            testID="flag-icon"
          />
        </Box>
      ) : null}
      {label ? (
        <Text
          testID="label"
          marginLeft="2xs"
          color={
            disabled
              ? 'neutralLighter'
              : checked
              ? 'primaryKey'
              : 'neutralDarker'
          }>
          {label}
        </Text>
      ) : null}
    </CheckboxContainer>
  );
};

export default Checkbox;
