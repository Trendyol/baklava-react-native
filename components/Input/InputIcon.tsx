import React from 'react';
import { Pressable } from 'react-native';
import Icon from '../Icon/Icon';
import { IconNameType } from '../Icon/types';
import { getIconColor } from './utils';

export function InputIcon({
  secureTextEntry,
  iconName,
  variantIconName,
  focused,
  successState,
  errorState,
  passwordVisibilityIcon,
  handlePasswordVisibility,
}: {
  secureTextEntry: boolean;
  iconName: string | null;
  variantIconName: string | null;
  focused: boolean;
  successState: boolean;
  errorState: boolean;
  passwordVisibilityIcon: IconNameType;
  handlePasswordVisibility: () => void;
}): JSX.Element | null {
  if (secureTextEntry) {
    return (
      <Pressable onPress={handlePasswordVisibility}>
        <Icon
          name={passwordVisibilityIcon}
          size="small"
          color="contentTertiary"
        />
      </Pressable>
    );
  }

  const iconColor = getIconColor({ focused, errorState, successState });

  if (!iconName && !variantIconName) {
    return null;
  }

  return (
    <Icon
      name={(variantIconName as IconNameType) ?? iconName}
      size="small"
      color={iconColor}
    />
  );
}
