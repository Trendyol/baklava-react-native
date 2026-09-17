import React from 'react';
import Box from '../Box/Box';
import Button from '../Button/Button';
import Text from '../Text/Text';
import UploadItem from './UploadItem';
import { UploadFile } from './types';
import {
  DEFAULT_ACCEPTED_FORMATS,
  DEFAULT_BUTTON_LABEL,
  DEFAULT_MAX_FILES,
  DEFAULT_MAX_SIZE,
  isSelectDisabled,
  resolveUploadFiles,
} from './utils';

export type UploadProps = {
  files?: UploadFile[];
  onSelectPress?: () => void;
  onRemove?: (id: string) => void;
  label?: string;
  description?: string;
  buttonLabel?: string;
  disabled?: boolean;
  maxFiles?: number;
  maxSize?: number;
  acceptedFormats?: string[];
  testID?: string;
};

const Upload = ({
  files = [],
  onSelectPress,
  onRemove,
  label,
  description,
  buttonLabel = DEFAULT_BUTTON_LABEL,
  disabled = false,
  maxFiles = DEFAULT_MAX_FILES,
  maxSize = DEFAULT_MAX_SIZE,
  acceptedFormats = DEFAULT_ACCEPTED_FORMATS,
  testID = 'upload',
}: UploadProps) => {
  const resolvedFiles = React.useMemo(
    () =>
      resolveUploadFiles(files, {
        maxSize,
        acceptedFormats,
      }),
    [files, maxSize, acceptedFormats],
  );

  const selectDisabled = isSelectDisabled({
    disabled,
    filesCount: files.length,
    maxFiles,
  });

  return (
    <Box testID={testID}>
      {label ? (
        <Text
          testID={`${testID}-label`}
          variant="subtitle01Medium"
          color="neutralDarker"
          mb={description ? '3xs' : 'xs'}>
          {label}
        </Text>
      ) : null}

      {description ? (
        <Text
          testID={`${testID}-description`}
          variant="subtitle3Regular"
          color="neutralDark"
          mb="xs">
          {description}
        </Text>
      ) : null}

      <Button
        testID={`${testID}-selectButton`}
        variant="secondary"
        icon="upload"
        label={buttonLabel}
        disabled={selectDisabled}
        onPress={onSelectPress}
      />

      {resolvedFiles.length > 0 ? (
        <Box testID={`${testID}-fileList`} mt="xs">
          {resolvedFiles.map(file => (
            <UploadItem
              key={file.id}
              testID={`${testID}-item-${file.id}`}
              label={file.name}
              status={file.status}
              helperText={file.helperText}
              onRemove={() => onRemove?.(file.id)}
            />
          ))}
        </Box>
      ) : null}
    </Box>
  );
};

export default Upload;
