import React from 'react';
import { Pressable } from 'react-native';
import Icon from '../Icon/Icon';
import { IconNameType } from '../Icon/types';
import { getIconColor } from './utils';

export const InputIcon = React.memo(
  ({
    secureTextEntry,
    icon,
    variantIconName,
    focused,
    successState,
    errorState,
    passwordVisibilityIcon,
    handlePasswordVisibility,
  }: {
    secureTextEntry: boolean;
    icon?: IconNameType | null;
    variantIconName: string | null;
    focused: boolean;
    successState: boolean;
    errorState: boolean;
    passwordVisibilityIcon: IconNameType;
    handlePasswordVisibility: () => void;
  }): JSX.Element | null => {
    if (secureTextEntry) {
      return (
        <Pressable
          testID="password-visibility-button"
          onPress={handlePasswordVisibility}>
          <Icon
            name={passwordVisibilityIcon}
            size="s"
            color="contentTertiary"
            testID="secure-input-icon"
          />
        </Pressable>
      );
    }

    const iconColor = getIconColor({
      focused,
      errorState,
      successState,
    });

    if (!icon && !variantIconName) {
      return null;
    }

    return (
      <Icon
        name={(variantIconName as IconNameType) ?? icon}
        size="s"
        color={iconColor}
        testID="input-icon"
      />
    );
  },
);
