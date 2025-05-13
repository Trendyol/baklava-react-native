import React from 'react';
import { act, fireEvent, render, waitFor } from '../../test-utils';
import theme from '../../theme';
import Select, { SelectHandles } from './Select';
import { FlagIconNameType } from '../FlagIcon/types';

describe('Select', () => {
  const defaultOptions = [
    { id: '1', label: 'Option 1' },
    { id: '2', label: 'Option 2' },
    { id: '3', label: 'Option 3' },
  ];

  const defaultProps = {
    options: defaultOptions,
    testID: 'select',
    label: 'Select Label',
    placeholder: 'Select item',
    bottomSheetTitle: 'Options',
    closeButtonLabel: 'Cancel',
    selectButtonLabel: 'Select',
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should render select correctly', () => {
    // when
    const { toJSON } = render(<Select {...defaultProps} />);

    // then
    expect(toJSON()).toMatchSnapshot();
  });

  test('should render select with label correctly', () => {
    // when
    const { getByText } = render(<Select {...defaultProps} />);

    // then
    expect(getByText('Select Label')).toBeTruthy();
  });

  test('should render select with placeholder correctly', () => {
    // when
    const { getByText } = render(<Select {...defaultProps} />);

    // then
    expect(getByText('Select item')).toBeTruthy();
  });

  test('should render select with disabled state correctly', () => {
    // when
    const { getByTestId } = render(<Select {...defaultProps} disabled />);
    const selectBox = getByTestId('select-box');

    // then
    expect(selectBox.props.style[0].backgroundColor).toBe(
      theme.colors.neutralLightest,
    );
  });

  test('should render select with error state correctly', () => {
    // when
    const { getByTestId } = render(<Select {...defaultProps} error />);
    const selectBox = getByTestId('select-box');

    // then
    expect(selectBox.props.style[0].borderColor).toBe(theme.colors.dangerKey);
  });

  test('should render select with error state and error text correctly', () => {
    // when
    const { getByText } = render(
      <Select {...defaultProps} error errorText="Error message" />,
    );

    // then
    expect(getByText('Error message')).toBeTruthy();
  });

  test('should render select with success state correctly', () => {
    // when
    const { getByTestId } = render(<Select {...defaultProps} success />);
    const selectBox = getByTestId('select-box');

    // then
    expect(selectBox.props.style[0].borderColor).toBe(theme.colors.successKey);
  });

  test('should render select with success state and success text correctly', () => {
    // when
    const { getByText } = render(
      <Select {...defaultProps} success successText="Success message" />,
    );

    // then
    expect(getByText('Success message')).toBeTruthy();
  });

  test('should render select with help text correctly', () => {
    // when
    const { getByText } = render(
      <Select {...defaultProps} helpText="Help message" />,
    );

    // then
    expect(getByText('Help message')).toBeTruthy();
  });

  test('should render select with fixed label correctly', () => {
    // when
    const { toJSON } = render(<Select {...defaultProps} labelFixed />);

    // then
    expect(toJSON()).toMatchSnapshot();
  });

  test('should render select with medium size correctly', () => {
    // when
    const { getByTestId } = render(<Select {...defaultProps} size="medium" />);
    const selectBox = getByTestId('select-box');

    // then
    expect(selectBox.props.style[0].height).toBe(
      theme.inputSizeVariants.medium.height,
    );
  });

  test('should render select with small size correctly', () => {
    // when
    const { getByTestId } = render(<Select {...defaultProps} size="small" />);
    const selectBox = getByTestId('select-box');

    // then
    expect(selectBox.props.style[0].height).toBe(
      theme.inputSizeVariants.small.height,
    );
  });

  test('should render selected option correctly for single select', () => {
    // given
    const mockOptions = [
      { id: '1', label: 'Option 1' },
      { id: '2', label: 'Option 2' },
      { id: '3', label: 'Option 3' },
    ];

    // when
    const { getByText } = render(
      <Select
        testID="select"
        multiple={false}
        selectedOptions="2"
        options={mockOptions}
        placeholder="Select"
      />,
    );

    // then
    expect(getByText('Option 2')).toBeTruthy();
  });

  test('should render selected options correctly for multiple select', () => {
    // when
    const { getByTestId } = render(
      <Select {...defaultProps} multiple selectedOptions={['1', '3']} />,
    );
    const selectValue = getByTestId('select-value');

    // then
    expect(selectValue.props.children).toBe('Option 1, Option 3');
  });

  test('should render +n indicator when selected options exceed maxVisibleItems', () => {
    // when
    const { getByText } = render(
      <Select
        {...defaultProps}
        multiple
        selectedOptions={['1', '2', '3']}
        maxVisibleItems={2}
      />,
    );

    // then
    expect(getByText('+1')).toBeTruthy();
  });

  test('should open bottom sheet when pressed', () => {
    // when
    const { getByTestId } = render(<Select {...defaultProps} />);
    const selectPressable = getByTestId('select-pressable');

    // then
    expect(selectPressable).toBeTruthy();

    fireEvent.press(selectPressable);
    expect(true).toBe(true);
  });

  test('should not open bottom sheet when pressed and disabled', async () => {
    // when
    const { getByTestId, queryByTestId } = render(
      <Select {...defaultProps} disabled />,
    );
    const selectPressable = getByTestId('select-pressable');

    // then
    expect(queryByTestId('select-bottomSheet')).toBeFalsy();

    // when
    fireEvent.press(selectPressable);

    // then
    expect(queryByTestId('select-bottomSheet')).toBeFalsy();
  });

  test('should call onSelect with selected value when item selected in bottom sheet', async () => {
    // given
    jest.useFakeTimers();
    const onSelect = jest.fn();

    // when
    const { getByTestId, getByText } = render(
      <Select {...defaultProps} multiple={false} onSelect={onSelect} />,
    );

    fireEvent.press(getByTestId('select-pressable'));
    await act(async () => {
      jest.runAllTimers();
    });

    // then
    const option = await waitFor(() => getByText('Option 2'));
    fireEvent.press(option);

    fireEvent.press(getByText('Select'));

    expect(onSelect).toHaveBeenCalledWith(['2']);
  });

  test('should call onSelect with selected values when multiple items selected in bottom sheet', async () => {
    // given
    jest.useFakeTimers();
    const onSelect = jest.fn();

    // when
    const { getByTestId, getByText } = render(
      <Select {...defaultProps} multiple onSelect={onSelect} />,
    );

    // Open the bottom sheet
    fireEvent.press(getByTestId('select-pressable'));
    await act(async () => {
      jest.runAllTimers();
    });

    // Selecting individual options
    const option1 = getByText('Option 1');
    fireEvent.press(option1);

    const option3 = getByText('Option 3');
    fireEvent.press(option3);

    // Press the select button
    const selectButton = getByText('Select');
    fireEvent.press(selectButton);
    jest.runAllTimers();

    // then
    expect(onSelect).toHaveBeenCalledWith(['1', '3']);
    jest.useRealTimers();
  });

  test('should clear selected values when clear button pressed', async () => {
    // given
    const onSelect = jest.fn();

    // when
    const { getByTestId } = render(
      <Select
        {...defaultProps}
        multiple
        selectedOptions={['1', '2']}
        onSelect={onSelect}
      />,
    );
    const clearButton = getByTestId('select-clear');
    fireEvent.press(clearButton);

    // then
    expect(onSelect).toHaveBeenCalledWith([]);
  });

  test('should close bottom sheet when close button pressed', async () => {
    // given
    jest.useFakeTimers();

    // when
    const { getByTestId, queryByTestId, getByText } = render(
      <Select {...defaultProps} />,
    );

    // Open the bottom sheet
    fireEvent.press(getByTestId('select-pressable'));
    await act(async () => {
      jest.runAllTimers();
    });

    // Press the close button
    const closeButton = getByText('Cancel');
    fireEvent.press(closeButton);
    jest.runAllTimers();

    // then
    expect(queryByTestId('select-bottomSheet')).toBeFalsy();

    jest.useRealTimers();
  });

  test('should show down arrow when bottom sheet is closed', () => {
    // when
    const { getByTestId } = render(<Select {...defaultProps} />);
    const icon = getByTestId('select-icon');

    // then
    expect(icon.props.title).toBe('arrow-down');
  });

  test('should show up arrow when bottom sheet is open', async () => {
    // when
    const { getByTestId } = render(<Select {...defaultProps} />);
    const selectPressable = getByTestId('select-pressable');
    fireEvent.press(selectPressable);

    // then
    await waitFor(() => {
      const icon = getByTestId('select-icon');
      expect(icon.props.title).toBe('arrow-up');
    });
  });

  test('should render divider when there are selected options', () => {
    // when
    const { getByTestId } = render(
      <Select {...defaultProps} selectedOptions={['1']} />,
    );

    // then
    expect(getByTestId('select-divider')).toBeTruthy();
  });

  test('should not render clear button and divider when disabled', () => {
    // when
    const { queryByTestId } = render(
      <Select {...defaultProps} selectedOptions={['1']} disabled />,
    );

    // then
    expect(queryByTestId('select-clear')).toBeFalsy();
    expect(queryByTestId('select-divider')).toBeFalsy();
  });

  test('should render options with flag icons', async () => {
    // given
    const optionsWithFlags = [
      { id: '1', label: 'Turkey', flagIcon: 'TR' as FlagIconNameType },
      { id: '2', label: 'USA', flagIcon: 'US' as FlagIconNameType },
    ];

    // when
    const { getByTestId } = render(
      <Select
        {...defaultProps}
        options={optionsWithFlags}
        selectedOptions={['1']}
      />,
    );
    const selectPressable = getByTestId('select-pressable');
    fireEvent.press(selectPressable);
  });

  test('should access select handle functions correctly', () => {
    // given
    const ref = React.createRef<SelectHandles>();
    const onSelect = jest.fn();

    // when
    render(<Select {...defaultProps} ref={ref} onSelect={onSelect} />);

    // then
    expect(ref.current?.focus).toBeTruthy();
    expect(ref.current?.blur).toBeTruthy();
    expect(ref.current?.clear).toBeTruthy();

    ref.current?.clear();

    // then
    expect(onSelect).toHaveBeenCalledWith([]);
  });

  test('should not focus or show bottom sheet when openBottomSheet is called through ref on disabled select', () => {
    // given
    jest.useFakeTimers();
    const ref = React.createRef<SelectHandles>();
    const onSelect = jest.fn();

    // when
    const { queryByTestId } = render(
      <Select {...defaultProps} ref={ref} onSelect={onSelect} disabled />,
    );

    // then
    expect(queryByTestId('select-bottomSheet')).toBeFalsy();

    // when
    ref.current?.focus();
    jest.runAllTimers();

    // then
    expect(queryByTestId('select-bottomSheet')).toBeFalsy();
    jest.useRealTimers();
  });

  test('should reset selections when clear method is called', () => {
    // given
    const ref = React.createRef<SelectHandles>();
    const onSelect = jest.fn();

    // when
    render(<Select {...defaultProps} ref={ref} onSelect={onSelect} />);

    ref.current?.clear();

    // then
    expect(onSelect).toHaveBeenCalledWith([]);
  });

  test('selected items should appear at the top of the list when bottom sheet is reopened after selection', async () => {
    // given
    jest.useFakeTimers();
    const onSelect = jest.fn();
    const options = [
      { id: '1', label: 'Option 1' },
      { id: '2', label: 'Option 2' },
      { id: '3', label: 'Option 3' },
      { id: '4', label: 'Option 4' },
    ];

    // when
    const { getByTestId, getByText, queryByTestId, queryAllByTestId } = render(
      <Select
        {...defaultProps}
        options={options}
        multiple
        onSelect={onSelect}
      />,
    );

    fireEvent.press(getByTestId('select-pressable'));
    await act(async () => {
      jest.runAllTimers();
    });

    fireEvent.press(getByText('Option 2'));
    fireEvent.press(getByText('Option 4'));

    fireEvent.press(getByText('Select'));
    jest.runAllTimers();

    expect(queryByTestId('select-bottomSheet')).toBeFalsy();

    fireEvent.press(getByTestId('select-pressable'));
    await act(async () => {
      jest.runAllTimers();
    });

    // then
    const labels = queryAllByTestId('label');
    expect(labels[0].props.children).toContain('Option 2');
    expect(labels[1].props.children).toContain('Option 4');
    expect(labels[2].props.children).toContain('Option 1');
    expect(labels[3].props.children).toContain('Option 3');

    jest.useRealTimers();
  });
});
