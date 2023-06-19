import { createRestyleComponent, layout } from '@ergenekonyigit/restyle';
import React, { CSSProperties, useState } from 'react';
import { SwitchProps as RNSwitchProps, Switch as RNSwitch } from 'react-native';
import theme, { Theme } from '../../theme';
import Text from '../Text/Text';
import Box from '../Box/Box';

const SwitchContainer = createRestyleComponent<SwitchContainerProps, Theme>(
  [layout],
  Box,
);

export type SwitchContainerProps = React.ComponentProps<typeof Box>;

export type SwitchProps = RNSwitchProps & {
  onChange: (value: boolean) => void;
  label?: string;
  disabled?: boolean;
  checked?: boolean;
  customization?: {
    colorOn: CSSProperties['color'];
    colorOff: CSSProperties['color'];
  };
};

const Switch = ({
  onChange,
  label,
  disabled,
  checked,
  customization,
  testID,
  accessibilityLabel,
  accessible,
}: SwitchProps) => {
  const [isEnabled, setIsEnabled] = useState(checked ? checked : false);

  const handleValueChange = (previousState: boolean) => {
    setIsEnabled(!previousState);
    if (onChange) {
      onChange(!previousState);
    }
  };

  const testProps = React.useMemo(() => {
    const result: RNSwitchProps = {
      accessible: false,
      accessibilityLabel: undefined,
      testID: undefined,
    };

    if (!(testID || accessibilityLabel)) {
      return result;
    }

    result.accessible = accessible ?? true;
    result.accessibilityLabel = accessibilityLabel;
    result.testID = testID ?? accessibilityLabel;

    return result;
  }, [testID, accessibilityLabel, accessible]);

  return (
    <SwitchContainer flexDirection="row">
      {label && (
        <Text p="2xs" testID={'switch-label'}>
          {label}
        </Text>
      )}
      <RNSwitch
        ios_backgroundColor={customization ? customization.colorOff : undefined}
        trackColor={{
          false: customization ? customization.colorOff : undefined,
          true: customization
            ? customization.colorOn
            : theme.colors.primaryColor,
        }}
        value={isEnabled}
        disabled={disabled}
        onValueChange={() => handleValueChange(isEnabled)}
        {...testProps}
      />
    </SwitchContainer>
  );
};

export default Switch;
