import React from 'react';
import theme from '../../theme';
import { fireEvent, render } from '../../test-utils';
import UploadItem from './UploadItem';

describe('UploadItem', () => {
  test('should render UploadItem correctly', () => {
    // when
    const { toJSON } = render(
      <UploadItem label="dosya_adı.jpg" status="uploaded" />,
    );

    // then
    expect(toJSON()).toMatchSnapshot();
  });

  test('should render uploaded status correctly', () => {
    // when
    const { getByTestId, queryByTestId } = render(
      <UploadItem label="dosya_adı.jpg" status="uploaded" />,
    );
    const label = getByTestId('uploadItem-label');
    const icons = getByTestId('uploadItem-leadingIcon').findAllByProps({
      title: 'attach',
    });

    // then
    expect(label.props.children).toBe('dosya_adı.jpg');
    expect(label.props.style[0].color).toBe(theme.colors.neutralDarker);
    expect(icons[0].props.fill).toBe(theme.colors.neutralDarker);
    expect(queryByTestId('uploadItem-errorLine')).toBeNull();
    expect(queryByTestId('uploadItem-helperText')).toBeNull();
  });

  test('should render error status correctly', () => {
    // when
    const { getByTestId } = render(
      <UploadItem
        label="dosya_adı.jpg"
        status="error"
        helperText="Optional helper text"
      />,
    );
    const label = getByTestId('uploadItem-label');
    const helperText = getByTestId('uploadItem-helperText');
    const errorLine = getByTestId('uploadItem-errorLine');
    const icons = getByTestId('uploadItem-leadingIcon').findAllByProps({
      title: 'alert',
    });

    // then
    expect(label.props.children).toBe('dosya_adı.jpg');
    expect(label.props.style[0].color).toBe(theme.colors.neutralDarker);
    expect(icons[0].props.fill).toBe(theme.colors.dangerKey);
    expect(errorLine.props.style).toEqual(
      expect.objectContaining({
        height: 2,
        backgroundColor: theme.colors.dangerKey,
      }),
    );
    expect(helperText.props.children).toBe('Optional helper text');
    expect(helperText.props.style[0].color).toBe(theme.colors.dangerKey);
  });

  test('should render helper text with neutral color when status is uploaded', () => {
    // when
    const { getByTestId, queryByTestId } = render(
      <UploadItem
        label="dosya_adı.jpg"
        status="uploaded"
        helperText="Optional helper text"
      />,
    );
    const helperText = getByTestId('uploadItem-helperText');

    // then
    expect(queryByTestId('uploadItem-errorLine')).toBeNull();
    expect(helperText.props.children).toBe('Optional helper text');
    expect(helperText.props.style[0].color).toBe(theme.colors.neutralDark);
  });

  test('should call onRemove when remove button is pressed', () => {
    // given
    const onRemove = jest.fn();

    // when
    const { getByTestId } = render(
      <UploadItem
        label="dosya_adı.jpg"
        status="uploaded"
        onRemove={onRemove}
      />,
    );
    fireEvent.press(getByTestId('uploadItem-removeButton'));

    // then
    expect(onRemove).toHaveBeenCalledTimes(1);
  });

  test('should use custom testID prefix', () => {
    // when
    const { getByTestId } = render(
      <UploadItem
        testID="customItem"
        label="dosya_adı.jpg"
        status="error"
        helperText="error"
      />,
    );

    // then
    expect(getByTestId('customItem')).toBeTruthy();
    expect(getByTestId('customItem-leadingIcon')).toBeTruthy();
    expect(getByTestId('customItem-label')).toBeTruthy();
    expect(getByTestId('customItem-removeButton')).toBeTruthy();
    expect(getByTestId('customItem-errorLine')).toBeTruthy();
    expect(getByTestId('customItem-helperText')).toBeTruthy();
  });

  test('should render error snapshot correctly', () => {
    // when
    const { toJSON } = render(
      <UploadItem
        label="dosya_adı.jpg"
        status="error"
        helperText="Optional helper text"
      />,
    );

    // then
    expect(toJSON()).toMatchSnapshot();
  });
});
