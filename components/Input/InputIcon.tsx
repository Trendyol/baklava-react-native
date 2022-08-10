import React from 'react';
import { Pressable } from 'react-native';
import Box from '../Box/Box';
import Icon from '../Icon/Icon';
import { IconNameType } from '../Icon/types';

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
      <Box px={3}>
        <Pressable onPress={handlePasswordVisibility}>
          <Icon
            name={passwordVisibilityIcon}
            size="small"
            color="contentTertiary"
          />
        </Pressable>
      </Box>
    );
  }

  const iconColor = focused
    ? 'primaryColor'
    : successState
    ? 'successColor'
    : errorState
    ? 'dangerColor'
    : 'contentTertiary';

  if (!iconName && !variantIconName) {
    return null;
  }

  return (
    <Box pl={3}>
      <Icon
        name={(variantIconName as IconNameType) ?? iconName}
        size="small"
        color={iconColor}
      />
    </Box>
  );
}
