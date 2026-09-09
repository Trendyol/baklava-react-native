import React from 'react';
import theme from '../../theme';
import { fireEvent, render } from '../../test-utils';
import ProgressIndicator from './ProgressIndicator';

describe('ProgressIndicator', () => {
  test('should render ProgressIndicator correctly', () => {
    // when
    const { toJSON } = render(<ProgressIndicator label="Label" />);

    // then
    expect(toJSON()).toMatchSnapshot();
  });

  test('should render default variant as inProgress', () => {
    // when
    const { getByTestId, queryByTestId } = render(
      <ProgressIndicator label="Label" progress={16} />,
    );
    const barFill = getByTestId('progressIndicator-barFill');
    const percentage = getByTestId('progressIndicator-percentage');

    // then
    expect(barFill.props.style.backgroundColor).toBe(theme.colors.primaryKey);
    expect(barFill.props.style.width).toBe('16%');
    expect(percentage.props.children).toEqual(['%', 16]);
    expect(queryByTestId('progressIndicator-icon')).toBeNull();
  });

  test('should render success variant correctly', () => {
    // when
    const { getByTestId, queryByTestId } = render(
      <ProgressIndicator variant="success" label="Label" />,
    );
    const barFill = getByTestId('progressIndicator-barFill');
    const icon = getByTestId('progressIndicator-icon');

    // then
    expect(barFill.props.style.backgroundColor).toBe(theme.colors.successKey);
    expect(barFill.props.style.width).toBe('100%');
    expect(icon.props.title).toBe('check-fill');
    expect(icon.props.fill).toBe(theme.colors.successKey);
    expect(icon.props.width).toBe(theme.iconSizeVariants.s);
    expect(queryByTestId('progressIndicator-percentage')).toBeNull();
  });

  test('should render fail variant correctly', () => {
    // when
    const { getByTestId, queryByTestId } = render(
      <ProgressIndicator variant="fail" label="Label" />,
    );
    const barFill = getByTestId('progressIndicator-barFill');
    const icon = getByTestId('progressIndicator-icon');

    // then
    expect(barFill.props.style.backgroundColor).toBe(theme.colors.dangerKey);
    expect(barFill.props.style.width).toBe('100%');
    expect(icon.props.title).toBe('alert');
    expect(icon.props.fill).toBe(theme.colors.dangerKey);
    expect(queryByTestId('progressIndicator-percentage')).toBeNull();
  });

  test('should render small size correctly', () => {
    // when
    const { getByTestId } = render(
      <ProgressIndicator size="small" label="Label" />,
    );
    const barBackground = getByTestId('progressIndicator-barBackground');
    const barFill = getByTestId('progressIndicator-barFill');

    // then
    expect(barBackground.props.style.height).toBe(
      theme.progressIndicatorSizeVariants.small.barHeight,
    );
    expect(barBackground.props.style.borderRadius).toBe(
      theme.progressIndicatorSizeVariants.small.barBorderRadius,
    );
    expect(barFill.props.style.borderRadius).toBe(
      theme.progressIndicatorSizeVariants.small.barBorderRadius,
    );
  });

  test('should render medium size correctly', () => {
    // when
    const { getByTestId } = render(
      <ProgressIndicator size="medium" label="Label" />,
    );
    const barBackground = getByTestId('progressIndicator-barBackground');

    // then
    expect(barBackground.props.style.height).toBe(
      theme.progressIndicatorSizeVariants.medium.barHeight,
    );
    expect(barBackground.props.style.borderRadius).toBe(
      theme.progressIndicatorSizeVariants.medium.barBorderRadius,
    );
    expect(barBackground.props.style.backgroundColor).toBe(
      theme.colors.neutralLightest,
    );
  });

  test('should render progress 0 correctly', () => {
    // when
    const { getByTestId } = render(
      <ProgressIndicator label="Label" progress={0} />,
    );
    const barFill = getByTestId('progressIndicator-barFill');
    const percentage = getByTestId('progressIndicator-percentage');

    // then
    expect(barFill.props.style.width).toBe('0%');
    expect(percentage.props.children).toEqual(['%', 0]);
  });

  test('should clamp progress below 0', () => {
    // when
    const { getByTestId } = render(
      <ProgressIndicator label="Label" progress={-10} />,
    );
    const barFill = getByTestId('progressIndicator-barFill');
    const percentage = getByTestId('progressIndicator-percentage');

    // then
    expect(barFill.props.style.width).toBe('0%');
    expect(percentage.props.children).toEqual(['%', 0]);
  });

  test('should clamp progress above 100', () => {
    // when
    const { getByTestId } = render(
      <ProgressIndicator label="Label" progress={150} />,
    );
    const barFill = getByTestId('progressIndicator-barFill');
    const percentage = getByTestId('progressIndicator-percentage');

    // then
    expect(barFill.props.style.width).toBe('100%');
    expect(percentage.props.children).toEqual(['%', 100]);
  });

  test('should hide percentage when showPercentage is false', () => {
    // when
    const { queryByTestId } = render(
      <ProgressIndicator label="Label" progress={50} showPercentage={false} />,
    );

    // then
    expect(queryByTestId('progressIndicator-percentage')).toBeNull();
  });

  test('should hide icon when showIcon is false', () => {
    // when
    const { queryByTestId } = render(
      <ProgressIndicator variant="success" label="Label" showIcon={false} />,
    );

    // then
    expect(queryByTestId('progressIndicator-icon')).toBeNull();
  });

  test('should hide icon when showIcon is false for fail', () => {
    // when
    const { queryByTestId } = render(
      <ProgressIndicator variant="fail" label="Label" showIcon={false} />,
    );

    // then
    expect(queryByTestId('progressIndicator-icon')).toBeNull();
  });

  test('should render given label correctly', () => {
    // when
    const { getByTestId } = render(<ProgressIndicator label="dosya.pdf" />);
    const label = getByTestId('progressIndicator-label');

    // then
    expect(label.props.children).toBe('dosya.pdf');
    expect(label.props.style[0].fontSize).toBe(
      theme.textVariants.subtitle2Medium.fontSize,
    );
    expect(label.props.style[0].fontWeight).toBe(
      theme.textVariants.subtitle2Medium.fontWeight,
    );
  });

  test('should not render label when label is not given', () => {
    // when
    const { queryByTestId } = render(<ProgressIndicator progress={16} />);

    // then
    expect(queryByTestId('progressIndicator-label')).toBeNull();
  });

  test('should render helper text with inProgress color', () => {
    // when
    const { getByTestId } = render(
      <ProgressIndicator
        label="Label"
        helperText="Optional helper text"
        progress={16}
      />,
    );
    const helperText = getByTestId('progressIndicator-helperText');

    // then
    expect(helperText.props.children).toBe('Optional helper text');
    expect(helperText.props.style[0].fontSize).toBe(
      theme.textVariants.subtitle3Regular.fontSize,
    );
    expect(helperText.props.style[0].color).toBe(theme.colors.neutralDark);
  });

  test('should render helper text with success color', () => {
    // when
    const { getByTestId } = render(
      <ProgressIndicator
        variant="success"
        label="Label"
        helperText="Optional helper text"
      />,
    );
    const helperText = getByTestId('progressIndicator-helperText');

    // then
    expect(helperText.props.style[0].color).toBe(theme.colors.successKey);
  });

  test('should render helper text with fail color', () => {
    // when
    const { getByTestId } = render(
      <ProgressIndicator
        variant="fail"
        label="Label"
        helperText="Optional helper text"
      />,
    );
    const helperText = getByTestId('progressIndicator-helperText');

    // then
    expect(helperText.props.style[0].color).toBe(theme.colors.dangerKey);
  });

  test('should not render helper text when helperText is not given', () => {
    // when
    const { queryByTestId } = render(<ProgressIndicator label="Label" />);

    // then
    expect(queryByTestId('progressIndicator-helperText')).toBeNull();
  });

  test('should call onClose when close button is pressed', () => {
    // given
    const onClose = jest.fn();

    // when
    const { getByTestId } = render(
      <ProgressIndicator label="Label" onClose={onClose} />,
    );
    fireEvent.press(getByTestId('progressIndicator-closeButton'));

    // then
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  test('should use custom testID prefix', () => {
    // when
    const { getByTestId } = render(
      <ProgressIndicator testID="upload" label="Label" progress={16} />,
    );

    // then
    expect(getByTestId('upload')).toBeTruthy();
    expect(getByTestId('upload-header')).toBeTruthy();
    expect(getByTestId('upload-label')).toBeTruthy();
    expect(getByTestId('upload-percentage')).toBeTruthy();
    expect(getByTestId('upload-closeButton')).toBeTruthy();
    expect(getByTestId('upload-barBackground')).toBeTruthy();
    expect(getByTestId('upload-barFill')).toBeTruthy();
  });

  test('should render percentage variant correctly', () => {
    // when
    const { getByTestId } = render(
      <ProgressIndicator label="Label" progress={70} />,
    );
    const percentage = getByTestId('progressIndicator-percentage');

    // then
    expect(percentage.props.style[0].fontSize).toBe(
      theme.textVariants.subtitle2Regular.fontSize,
    );
    expect(percentage.props.style[0].fontWeight).toBe(
      theme.textVariants.subtitle2Regular.fontWeight,
    );
    expect(percentage.props.style[0].color).toBe(theme.colors.neutralDark);
    expect(percentage.props.children).toEqual(['%', 70]);
  });
});
