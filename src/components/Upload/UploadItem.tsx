import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import Box from '../Box/Box';
import Icon from '../Icon/Icon';
import Text from '../Text/Text';
import theme from '../../theme';
import { UploadFileStatus } from './types';

type UploadItemProps = {
  label: string;
  status: UploadFileStatus;
  helperText?: string;
  onRemove?: () => void;
  testID?: string;
};

const UploadItem = ({
  label,
  status,
  helperText,
  onRemove,
  testID = 'uploadItem',
}: UploadItemProps) => {
  const isError = status === 'error';

  return (
    <Box testID={testID} py="xs">
      <Box flexDirection="row" alignItems="center">
        <Box mr="2xs" testID={`${testID}-leadingIcon`}>
          {status === 'uploaded' ? (
            <Icon name="attach" size="s" color="neutralDarker" />
          ) : (
            <Icon name="alert" size="s" color="dangerKey" />
          )}
        </Box>

        <Box flex={1} mr="2xs">
          <Text
            testID={`${testID}-label`}
            variant="subtitle2Medium"
            color="neutralDarker"
            numberOfLines={1}>
            {label}
          </Text>
        </Box>

        <Pressable
          testID={`${testID}-removeButton`}
          onPress={onRemove}
          hitSlop={8}
          accessibilityRole="button"
          accessibilityLabel="remove file">
          <Icon name="delete" size="s" color="neutralDarker" />
        </Pressable>
      </Box>

      {isError ? (
        <View testID={`${testID}-errorLine`} style={styles.errorLine} />
      ) : null}

      {helperText ? (
        <Text
          testID={`${testID}-helperText`}
          variant="subtitle3Regular"
          color={isError ? 'dangerKey' : 'neutralDark'}
          mt="2xs">
          {helperText}
        </Text>
      ) : null}
    </Box>
  );
};

const styles = StyleSheet.create({
  errorLine: {
    height: 2,
    marginTop: theme.spacing['2xs'],
    backgroundColor: theme.colors.dangerKey,
  },
});

export default UploadItem;
