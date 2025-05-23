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
import Text from '../Text/Text';
import FlagIcon from '../FlagIcon/FlagIcon';
import { FlagIconNameType } from '../FlagIcon/types';

const variant = createVariant({ themeKey: 'radioButtonVariants' });

type SelectboxProps = VariantProps<Theme, 'radioButtonVariants'> &
  React.ComponentProps<typeof Box>;

const Selectbox = createRestyleComponent<SelectboxProps, Theme>([variant], Box);

type ContainerProps = React.ComponentProps<typeof TouchableOpacity> &
  LayoutProps<Theme> &
  SpacingProps<Theme> &
  SpacingShorthandProps<Theme>;

const RadioButtonContainer = createRestyleComponent<ContainerProps, Theme>(
  [layout, spacing, spacingShorthand],
  TouchableOpacity,
);

type RadioButtonProps = React.ComponentProps<typeof RadioButtonContainer> & {
  selected: boolean;
  label?: string;
  disabled?: boolean;
  flagIcon?: FlagIconNameType | null;
  onPress?: () => void;
};

const RadioButton = ({
  selected,
  label,
  disabled = false,
  flagIcon,
  onPress,
  ...rest
}: RadioButtonProps) => {
  const selectedBox = React.useMemo(() => {
    if (!selected) {
      return null;
    }

    return (
      <Box
        testID="bullet"
        borderRadius="full"
        width={8}
        height={8}
        backgroundColor={disabled ? 'neutralLighter' : 'neutralFull'}
      />
    );
  }, [disabled, selected]);

  const selectVariant = React.useMemo(() => {
    if (selected) {
      return disabled ? 'disabledSelected' : 'selected';
    } else {
      return disabled ? 'disabledUnselected' : 'unselected';
    }
  }, [selected, disabled]);

  const selectLabelColor = React.useMemo(() => {
    if (disabled) {
      return 'neutralLighter';
    } else {
      return selected ? 'primaryKey' : 'neutralDarker';
    }
  }, [selected, disabled]);

  return (
    <RadioButtonContainer
      flexDirection="row"
      alignSelf="flex-start"
      disabled={disabled}
      onPress={onPress}
      {...rest}>
      <Selectbox testID="selectbox" variant={selectVariant}>
        {selectedBox}
      </Selectbox>
      {flagIcon ? (
        <Box marginLeft="2xs">
          <FlagIcon
            size="s"
            name={flagIcon}
            color={
              disabled
                ? 'neutralLight'
                : selected
                ? 'primaryKey'
                : 'neutralDarker'
            }
            testID="flag-icon"
          />
        </Box>
      ) : null}
      {label ? (
        <Text testID="label" marginLeft="2xs" color={selectLabelColor}>
          {label}
        </Text>
      ) : null}
    </RadioButtonContainer>
  );
};

export default RadioButton;
