import { UploadFile, UploadValidationOptions } from './types';

export const DEFAULT_MAX_FILES = 3;
export const DEFAULT_MAX_SIZE = 20 * 1024 * 1024;
export const DEFAULT_ACCEPTED_FORMATS = ['pdf', 'png', 'jpg', 'jpeg'];
export const DEFAULT_BUTTON_LABEL = 'Dosya Seç';

export const getFileExtension = (fileName: string): string => {
  const parts = fileName.split('.');
  if (parts.length < 2) {
    return '';
  }
  return parts[parts.length - 1].toLowerCase();
};

export const formatAcceptedFormatsLabel = (formats: string[]): string =>
  formats.map(format => format.toUpperCase()).join(', ');

export const getFormatErrorMessage = (formats: string[]): string =>
  `Yanlış dosya formatı, dosya formatı ${formatAcceptedFormatsLabel(
    formats,
  )} olmalıdır.`;

export const getSizeErrorMessage = (maxSize: number): string => {
  const maxSizeInMb = maxSize / (1024 * 1024);
  const formattedSize = Number.isInteger(maxSizeInMb)
    ? `${maxSizeInMb}`
    : maxSizeInMb.toFixed(1);
  return `Dosya boyutu ${formattedSize} MB sınırını aşıyor.`;
};

export const validateFile = (
  file: Pick<UploadFile, 'name' | 'size'>,
  options: Pick<UploadValidationOptions, 'maxSize' | 'acceptedFormats'>,
): string | null => {
  const extension = getFileExtension(file.name);
  const normalizedFormats = options.acceptedFormats.map(format =>
    format.toLowerCase(),
  );

  if (!extension || !normalizedFormats.includes(extension)) {
    return getFormatErrorMessage(options.acceptedFormats);
  }

  if (typeof file.size === 'number' && file.size > options.maxSize) {
    return getSizeErrorMessage(options.maxSize);
  }

  return null;
};

export const resolveUploadFile = (
  file: UploadFile,
  options: Pick<UploadValidationOptions, 'maxSize' | 'acceptedFormats'>,
): UploadFile => {
  if (file.status === 'error' && file.helperText) {
    return file;
  }

  const validationError = validateFile(file, options);

  if (validationError) {
    return {
      ...file,
      status: 'error',
      helperText: file.helperText ?? validationError,
    };
  }

  return file;
};

export const resolveUploadFiles = (
  files: UploadFile[],
  options: Pick<UploadValidationOptions, 'maxSize' | 'acceptedFormats'>,
): UploadFile[] => files.map(file => resolveUploadFile(file, options));

export const isSelectDisabled = ({
  disabled,
  filesCount,
  maxFiles,
}: {
  disabled?: boolean;
  filesCount: number;
  maxFiles: number;
}): boolean => Boolean(disabled) || filesCount >= maxFiles;
