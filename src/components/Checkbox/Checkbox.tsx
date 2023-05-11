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
import Text from '../Text/Text';

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
  onPress?: () => void;
};

const Checkbox = ({
  checked,
  indeterminate,
  label,
  disabled = false,
  onPress,
  ...rest
}: CheckboxProps) => {
  const icon = React.useMemo(() => {
    if (!checked) {
      return null;
    }
    if (indeterminate) {
      return (
        <Icon
          size="4xs"
          name="minus"
          color={disabled ? 'contentTertiary' : 'white'}
          testID="minus-icon"
        />
      );
    }
    return (
      <Icon
        size="3xs"
        name="check"
        color={disabled ? 'contentTertiary' : 'white'}
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
        {icon}
      </Tickbox>
      {label ? (
        <Text
          testID="label"
          marginLeft="2xs"
          color={
            disabled
              ? 'contentPassive'
              : checked
              ? 'primaryColor'
              : 'contentPrimary'
          }>
          {label}
        </Text>
      ) : null}
    </CheckboxContainer>
  );
};

export default Checkbox;
