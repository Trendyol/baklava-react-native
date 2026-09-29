import React from 'react';
import theme from '../../theme';
import { fireEvent, render } from '../../test-utils';
import Upload from './Upload';
import { UploadFile } from './types';
import {
  DEFAULT_BUTTON_LABEL,
  DEFAULT_MAX_FILES,
  getFormatErrorMessage,
  getSizeErrorMessage,
  DEFAULT_ACCEPTED_FORMATS,
  DEFAULT_MAX_SIZE,
} from './utils';

describe('Upload', () => {
  test('should render Upload correctly', () => {
    // when
    const { toJSON } = render(<Upload />);

    // then
    expect(toJSON()).toMatchSnapshot();
  });

  test('should render default button label', () => {
    // when
    const { getByTestId } = render(<Upload />);
    const buttonText = getByTestId('button-text');

    // then
    expect(buttonText.props.children).toBe(DEFAULT_BUTTON_LABEL);
  });

  test('should render custom button label', () => {
    // when
    const { getByTestId } = render(<Upload buttonLabel="Select File" />);
    const buttonText = getByTestId('button-text');

    // then
    expect(buttonText.props.children).toBe('Select File');
  });

  test('should render label and description', () => {
    // when
    const { getByTestId } = render(
      <Upload label="Select File" description="Max 3 files" />,
    );

    // then
    expect(getByTestId('upload-label').props.children).toBe('Select File');
    expect(getByTestId('upload-description').props.children).toBe(
      'Max 3 files',
    );
  });

  test('should render label without description', () => {
    // when
    const { getByTestId, queryByTestId } = render(
      <Upload label="Select File" />,
    );

    // then
    expect(getByTestId('upload-label').props.children).toBe('Select File');
    expect(queryByTestId('upload-description')).toBeNull();
  });

  test('should not render label and description when not provided', () => {
    // when
    const { queryByTestId } = render(<Upload />);

    // then
    expect(queryByTestId('upload-label')).toBeNull();
    expect(queryByTestId('upload-description')).toBeNull();
  });

  test('should not render file list when files is empty', () => {
    // when
    const { queryByTestId } = render(<Upload files={[]} />);

    // then
    expect(queryByTestId('upload-fileList')).toBeNull();
  });

  test('should render uploaded files correctly', () => {
    // given
    const files: UploadFile[] = [
      { id: '1', name: 'dosya_adı.jpg', status: 'uploaded' },
      { id: '2', name: 'dosya_adı.pdf', status: 'uploaded' },
    ];

    // when
    const { getByTestId, toJSON } = render(<Upload files={files} />);

    // then
    expect(getByTestId('upload-fileList')).toBeTruthy();
    expect(getByTestId('upload-item-1-label').props.children).toBe(
      'dosya_adı.jpg',
    );
    expect(getByTestId('upload-item-2-label').props.children).toBe(
      'dosya_adı.pdf',
    );
    expect(toJSON()).toMatchSnapshot();
  });

  test('should render error file correctly', () => {
    // given
    const files: UploadFile[] = [
      {
        id: '1',
        name: 'dosya_adı.jpg',
        status: 'error',
        helperText: 'Optional helper text',
      },
    ];

    // when
    const { getByTestId, toJSON } = render(<Upload files={files} />);
    const helperText = getByTestId('upload-item-1-helperText');

    // then
    expect(getByTestId('upload-item-1-errorLine')).toBeTruthy();
    expect(helperText.props.children).toBe('Optional helper text');
    expect(helperText.props.style[0].color).toBe(theme.colors.dangerKey);
    expect(toJSON()).toMatchSnapshot();
  });

  test('should call onSelectPress when select button is pressed', () => {
    // given
    const onSelectPress = jest.fn();

    // when
    const { getByTestId } = render(<Upload onSelectPress={onSelectPress} />);
    fireEvent.press(getByTestId('upload-selectButton'));

    // then
    expect(onSelectPress).toHaveBeenCalledTimes(1);
  });

  test('should call onRemove with file id when remove is pressed', () => {
    // given
    const onRemove = jest.fn();
    const files: UploadFile[] = [
      { id: 'file-1', name: 'dosya_adı.jpg', status: 'uploaded' },
    ];

    // when
    const { getByTestId } = render(
      <Upload files={files} onRemove={onRemove} />,
    );
    fireEvent.press(getByTestId('upload-item-file-1-removeButton'));

    // then
    expect(onRemove).toHaveBeenCalledTimes(1);
    expect(onRemove).toHaveBeenCalledWith('file-1');
  });

  test('should disable select button when disabled prop is true', () => {
    // when
    const { getByTestId } = render(<Upload disabled />);
    const selectButton = getByTestId('upload-selectButton');

    // then
    expect(selectButton.props.accessibilityState.disabled).toBeTruthy();
  });

  test('should disable select button when files count reaches maxFiles', () => {
    // given
    const files: UploadFile[] = [
      { id: '1', name: 'a.jpg', status: 'uploaded' },
      { id: '2', name: 'b.jpg', status: 'uploaded' },
      { id: '3', name: 'c.jpg', status: 'uploaded' },
    ];

    // when
    const { getByTestId } = render(
      <Upload files={files} maxFiles={DEFAULT_MAX_FILES} />,
    );
    const selectButton = getByTestId('upload-selectButton');

    // then
    expect(selectButton.props.accessibilityState.disabled).toBeTruthy();
  });

  test('should not disable select button when files count is under maxFiles', () => {
    // given
    const files: UploadFile[] = [
      { id: '1', name: 'a.jpg', status: 'uploaded' },
      { id: '2', name: 'b.jpg', status: 'uploaded' },
    ];

    // when
    const { getByTestId } = render(
      <Upload files={files} maxFiles={DEFAULT_MAX_FILES} />,
    );
    const selectButton = getByTestId('upload-selectButton');

    // then
    expect(selectButton.props.accessibilityState.disabled).toBeFalsy();
  });

  test('should resolve invalid format file to error status', () => {
    // given
    const files: UploadFile[] = [
      { id: '1', name: 'dosya.txt', status: 'uploaded' },
    ];

    // when
    const { getByTestId } = render(<Upload files={files} />);
    const helperText = getByTestId('upload-item-1-helperText');

    // then
    expect(getByTestId('upload-item-1-errorLine')).toBeTruthy();
    expect(helperText.props.children).toBe(
      getFormatErrorMessage(DEFAULT_ACCEPTED_FORMATS),
    );
  });

  test('should resolve oversized file to error status', () => {
    // given
    const files: UploadFile[] = [
      {
        id: '1',
        name: 'dosya.jpg',
        size: DEFAULT_MAX_SIZE + 1,
        status: 'uploaded',
      },
    ];

    // when
    const { getByTestId } = render(<Upload files={files} />);
    const helperText = getByTestId('upload-item-1-helperText');

    // then
    expect(getByTestId('upload-item-1-errorLine')).toBeTruthy();
    expect(helperText.props.children).toBe(
      getSizeErrorMessage(DEFAULT_MAX_SIZE),
    );
  });

  test('should keep custom helperText for error file', () => {
    // given
    const files: UploadFile[] = [
      {
        id: '1',
        name: 'dosya.txt',
        status: 'error',
        helperText: 'Custom error message',
      },
    ];

    // when
    const { getByTestId } = render(<Upload files={files} />);

    // then
    expect(getByTestId('upload-item-1-helperText').props.children).toBe(
      'Custom error message',
    );
  });

  test('should use custom acceptedFormats for validation', () => {
    // given
    const files: UploadFile[] = [
      { id: '1', name: 'dosya.jpg', status: 'uploaded' },
    ];

    // when
    const { getByTestId } = render(
      <Upload files={files} acceptedFormats={['pdf']} />,
    );

    // then
    expect(getByTestId('upload-item-1-helperText').props.children).toBe(
      getFormatErrorMessage(['pdf']),
    );
  });

  test('should use custom maxSize for validation', () => {
    // given
    const maxSize = 1024;
    const files: UploadFile[] = [
      { id: '1', name: 'dosya.jpg', size: 2048, status: 'uploaded' },
    ];

    // when
    const { getByTestId } = render(<Upload files={files} maxSize={maxSize} />);

    // then
    expect(getByTestId('upload-item-1-helperText').props.children).toBe(
      getSizeErrorMessage(maxSize),
    );
  });

  test('should use custom testID prefix', () => {
    // when
    const { getByTestId } = render(
      <Upload
        testID="customUpload"
        label="Label"
        description="Description"
        files={[{ id: '1', name: 'a.jpg', status: 'uploaded' }]}
      />,
    );

    // then
    expect(getByTestId('customUpload')).toBeTruthy();
    expect(getByTestId('customUpload-label')).toBeTruthy();
    expect(getByTestId('customUpload-description')).toBeTruthy();
    expect(getByTestId('customUpload-selectButton')).toBeTruthy();
    expect(getByTestId('customUpload-fileList')).toBeTruthy();
    expect(getByTestId('customUpload-item-1')).toBeTruthy();
  });

  test('should render secondary button with upload icon', () => {
    // when
    const { getByTestId } = render(<Upload />);
    const buttonIcon = getByTestId('button-icon');

    // then
    expect(buttonIcon.props.title).toBe('upload');
  });
});
