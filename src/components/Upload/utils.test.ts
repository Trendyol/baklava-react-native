import {
  DEFAULT_ACCEPTED_FORMATS,
  DEFAULT_MAX_SIZE,
  formatAcceptedFormatsLabel,
  getFileExtension,
  getFormatErrorMessage,
  getSizeErrorMessage,
  isSelectDisabled,
  resolveUploadFile,
  resolveUploadFiles,
  validateFile,
} from './utils';
import { UploadFile } from './types';

describe('Upload/utils', () => {
  test('should get file extension correctly', () => {
    // when / then
    expect(getFileExtension('dosya_adı.jpg')).toBe('jpg');
    expect(getFileExtension('dosya_adı.PDF')).toBe('pdf');
    expect(getFileExtension('archive.tar.gz')).toBe('gz');
    expect(getFileExtension('dosya')).toBe('');
    expect(getFileExtension('')).toBe('');
  });

  test('should format accepted formats label', () => {
    // when
    const result = formatAcceptedFormatsLabel(['pdf', 'png', 'jpg']);

    // then
    expect(result).toBe('PDF, PNG, JPG');
  });

  test('should get format error message', () => {
    // when
    const result = getFormatErrorMessage(['pdf', 'png']);

    // then
    expect(result).toBe(
      'Yanlış dosya formatı, dosya formatı PDF, PNG olmalıdır.',
    );
  });

  test('should get size error message for integer mb', () => {
    // when
    const result = getSizeErrorMessage(20 * 1024 * 1024);

    // then
    expect(result).toBe('Dosya boyutu 20 MB sınırını aşıyor.');
  });

  test('should get size error message for fractional mb', () => {
    // when
    const result = getSizeErrorMessage(1.5 * 1024 * 1024);

    // then
    expect(result).toBe('Dosya boyutu 1.5 MB sınırını aşıyor.');
  });

  test('should validate file as valid', () => {
    // when
    const result = validateFile(
      { name: 'dosya.jpg', size: 1024 },
      {
        maxSize: DEFAULT_MAX_SIZE,
        acceptedFormats: DEFAULT_ACCEPTED_FORMATS,
      },
    );

    // then
    expect(result).toBeNull();
  });

  test('should validate file as invalid format', () => {
    // when
    const result = validateFile(
      { name: 'dosya.txt', size: 1024 },
      {
        maxSize: DEFAULT_MAX_SIZE,
        acceptedFormats: DEFAULT_ACCEPTED_FORMATS,
      },
    );

    // then
    expect(result).toBe(getFormatErrorMessage(DEFAULT_ACCEPTED_FORMATS));
  });

  test('should validate file as invalid when extension is missing', () => {
    // when
    const result = validateFile(
      { name: 'dosya', size: 1024 },
      {
        maxSize: DEFAULT_MAX_SIZE,
        acceptedFormats: DEFAULT_ACCEPTED_FORMATS,
      },
    );

    // then
    expect(result).toBe(getFormatErrorMessage(DEFAULT_ACCEPTED_FORMATS));
  });

  test('should validate file as invalid size', () => {
    // when
    const result = validateFile(
      { name: 'dosya.jpg', size: DEFAULT_MAX_SIZE + 1 },
      {
        maxSize: DEFAULT_MAX_SIZE,
        acceptedFormats: DEFAULT_ACCEPTED_FORMATS,
      },
    );

    // then
    expect(result).toBe(getSizeErrorMessage(DEFAULT_MAX_SIZE));
  });

  test('should skip size validation when size is not provided', () => {
    // when
    const result = validateFile(
      { name: 'dosya.jpg' },
      {
        maxSize: DEFAULT_MAX_SIZE,
        acceptedFormats: DEFAULT_ACCEPTED_FORMATS,
      },
    );

    // then
    expect(result).toBeNull();
  });

  test('should keep error file with helperText as is', () => {
    // given
    const file: UploadFile = {
      id: '1',
      name: 'dosya.jpg',
      status: 'error',
      helperText: 'Custom helper text',
    };

    // when
    const result = resolveUploadFile(file, {
      maxSize: DEFAULT_MAX_SIZE,
      acceptedFormats: DEFAULT_ACCEPTED_FORMATS,
    });

    // then
    expect(result).toEqual(file);
  });

  test('should resolve uploaded file with invalid format to error', () => {
    // given
    const file: UploadFile = {
      id: '1',
      name: 'dosya.txt',
      status: 'uploaded',
    };

    // when
    const result = resolveUploadFile(file, {
      maxSize: DEFAULT_MAX_SIZE,
      acceptedFormats: DEFAULT_ACCEPTED_FORMATS,
    });

    // then
    expect(result.status).toBe('error');
    expect(result.helperText).toBe(
      getFormatErrorMessage(DEFAULT_ACCEPTED_FORMATS),
    );
  });

  test('should resolve uploaded file with invalid size to error', () => {
    // given
    const file: UploadFile = {
      id: '1',
      name: 'dosya.jpg',
      size: DEFAULT_MAX_SIZE + 1,
      status: 'uploaded',
    };

    // when
    const result = resolveUploadFile(file, {
      maxSize: DEFAULT_MAX_SIZE,
      acceptedFormats: DEFAULT_ACCEPTED_FORMATS,
    });

    // then
    expect(result.status).toBe('error');
    expect(result.helperText).toBe(getSizeErrorMessage(DEFAULT_MAX_SIZE));
  });

  test('should resolve valid uploaded file without changes', () => {
    // given
    const file: UploadFile = {
      id: '1',
      name: 'dosya.jpg',
      size: 1024,
      status: 'uploaded',
    };

    // when
    const result = resolveUploadFile(file, {
      maxSize: DEFAULT_MAX_SIZE,
      acceptedFormats: DEFAULT_ACCEPTED_FORMATS,
    });

    // then
    expect(result).toEqual(file);
  });

  test('should resolve error file without helperText using validation message', () => {
    // given
    const file: UploadFile = {
      id: '1',
      name: 'dosya.txt',
      status: 'error',
    };

    // when
    const result = resolveUploadFile(file, {
      maxSize: DEFAULT_MAX_SIZE,
      acceptedFormats: DEFAULT_ACCEPTED_FORMATS,
    });

    // then
    expect(result.status).toBe('error');
    expect(result.helperText).toBe(
      getFormatErrorMessage(DEFAULT_ACCEPTED_FORMATS),
    );
  });

  test('should resolve multiple files', () => {
    // given
    const files: UploadFile[] = [
      { id: '1', name: 'dosya.jpg', size: 1024, status: 'uploaded' },
      { id: '2', name: 'dosya.txt', status: 'uploaded' },
    ];

    // when
    const result = resolveUploadFiles(files, {
      maxSize: DEFAULT_MAX_SIZE,
      acceptedFormats: DEFAULT_ACCEPTED_FORMATS,
    });

    // then
    expect(result[0].status).toBe('uploaded');
    expect(result[1].status).toBe('error');
  });

  test('should disable select when disabled prop is true', () => {
    // when / then
    expect(
      isSelectDisabled({ disabled: true, filesCount: 0, maxFiles: 3 }),
    ).toBe(true);
  });

  test('should disable select when files count reaches maxFiles', () => {
    // when / then
    expect(
      isSelectDisabled({ disabled: false, filesCount: 3, maxFiles: 3 }),
    ).toBe(true);
  });

  test('should not disable select when under maxFiles', () => {
    // when / then
    expect(
      isSelectDisabled({ disabled: false, filesCount: 2, maxFiles: 3 }),
    ).toBe(false);
  });
});
