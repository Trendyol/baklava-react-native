import React from 'react';
import { fireEvent, render } from '../../test-utils';
import SelectBottomSheet from './SelectBottomSheet';
import { FlagIconNameType } from '../FlagIcon/types';

describe('SelectBottomSheet', () => {
  const options = [
    { id: '1', label: 'Option 1' },
    { id: '2', label: 'Option 2' },
    { id: '3', label: 'Option 3' },
  ];

  const mockOnSelect = jest.fn();
  const defaultProps = {
    options,
    type: 'checkbox' as const,
    onSelect: mockOnSelect,
    visible: true,
    closeButtonLabel: 'Close',
    selectButtonLabel: 'Select',
    flagIcon: 'TR',
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should render correctly', () => {
    // when
    const { getByTestId } = render(<SelectBottomSheet {...defaultProps} />);

    //then
    expect(getByTestId('selectBottomSheet')).toBeTruthy();
  });

  test('renders correctly with radio type', () => {
    // when
    const { getByTestId } = render(
      <SelectBottomSheet {...defaultProps} type="radio" />,
    );

    //then
    expect(getByTestId('selectBottomSheet')).toBeTruthy();
  });

  test('should render SelectBottomSheet when visible true', () => {
    // when
    const { toJSON, queryByTestId } = render(
      <SelectBottomSheet {...defaultProps} />,
    );

    // then
    expect(queryByTestId('selectBottomSheet')).not.toBeNull();
    expect(toJSON()).toMatchSnapshot();
  });

  test('should render SelectBottomSheet when visible false', () => {
    // when
    const { toJSON, queryByTestId } = render(
      <SelectBottomSheet {...defaultProps} visible={false} />,
    );

    // then
    const modalWrapper = queryByTestId('selectBottomSheet');
    expect(modalWrapper).toBeNull();
    expect(toJSON()).toMatchSnapshot();
  });

  test('should not render SelectBottomSheet when visible is false', () => {
    // when
    const { toJSON, queryByTestId } = render(
      <SelectBottomSheet {...defaultProps} />,
    );

    // then
    expect(queryByTestId('modal-wrapper')).toBeNull();
    expect(toJSON()).toMatchSnapshot();
  });

  test('should initialize with correct selected values', () => {
    // when
    const { getByTestId } = render(
      <SelectBottomSheet {...defaultProps} selectedOption={['1', '2']} />,
    );

    // then
    expect(
      getByTestId('checkbox-selectBottomSheet-1').props.children[0][0].props
        .variant,
    ).toBe('checked');
    expect(
      getByTestId('checkbox-selectBottomSheet-2').props.children[0][0].props
        .variant,
    ).toBe('checked');
    expect(
      getByTestId('checkbox-selectBottomSheet-3').props.children[0][0].props
        .variant,
    ).toBe('unchecked');
  });

  test('should update selected values on checkbox select', () => {
    // when
    const { getByTestId } = render(<SelectBottomSheet {...defaultProps} />);
    const checkbox = getByTestId('checkbox-selectBottomSheet-1');
    fireEvent.press(checkbox);

    // then
    expect(
      getByTestId('checkbox-selectBottomSheet-1').props.children[0][0].props
        .variant,
    ).toBe('checked');
  });

  test('should update selected values on checkbox unselect', () => {
    // given
    const { getByTestId } = render(
      <SelectBottomSheet {...defaultProps} selectedOption={['1', '2']} />,
    );
    const checkbox = getByTestId('checkbox-selectBottomSheet-1');

    // when
    fireEvent.press(checkbox);

    // then
    expect(
      getByTestId('checkbox-selectBottomSheet-1').props.children[0][0].props
        .variant,
    ).toBe('unchecked');
    expect(mockOnSelect).toHaveBeenCalledWith(['2']);
  });

  test('should update selected values on radio button select', () => {
    // when
    const { getByTestId } = render(
      <SelectBottomSheet {...defaultProps} type="radio" />,
    );
    const radioButton = getByTestId('radiobutton-selectBottomSheet-2');
    fireEvent.press(radioButton);

    // then
    expect(mockOnSelect).toHaveBeenCalledWith(['2']);
  });

  test('should call onSelect with selected radio button value', () => {
    // when
    const { getByText } = render(
      <SelectBottomSheet {...defaultProps} type="radio" />,
    );
    fireEvent.press(getByText('Option 3'));

    // then
    expect(mockOnSelect).toHaveBeenCalledWith(['3']);
  });

  test('should render flag icon if provided', () => {
    // given
    const optionsWithFlag = [
      { id: '1', label: 'Option 1', flagIcon: 'TR' as FlagIconNameType },
    ];

    // when
    const { getByTestId } = render(
      <SelectBottomSheet {...defaultProps} options={optionsWithFlag} />,
    );

    // then
    expect(getByTestId('flag-icon').props.title).toBe('TR');
  });

  test('should call onSelect if provided', () => {
    // when
    const { getByTestId } = render(<SelectBottomSheet {...defaultProps} />);
    const checkbox = getByTestId('checkbox-selectBottomSheet-1');
    fireEvent.press(checkbox);

    // then
    expect(mockOnSelect).toHaveBeenCalledWith(['1']);
  });

  test('should not call onSelect if not provided', () => {
    // when
    const { getByTestId } = render(
      <SelectBottomSheet {...defaultProps} onSelect={undefined} />,
    );
    const checkbox = getByTestId('checkbox-selectBottomSheet-1');
    fireEvent.press(checkbox);

    // then
    expect(mockOnSelect).not.toHaveBeenCalled();
  });
});
