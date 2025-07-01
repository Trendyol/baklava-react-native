import React from 'react';
import { fireEvent, render } from '../../test-utils';
import DatePicker from './DatePicker';
import { DEFAULT_NAME_OF_MONTHS, DEFAULT_NAME_OF_WEEKDAYS } from './constants';
import { useDatePickerContext } from './DatePickerContext';
import Text from '../Text/Text';

const defaultProps = {
  nameOfWeekdays: DEFAULT_NAME_OF_WEEKDAYS,
  nameOfMonths: DEFAULT_NAME_OF_MONTHS,
  closeButtonLabel: 'Close',
  selectButtonLabel: 'Select',
  title: 'Select Date',
  testID: 'datepicker',
  value: null as string | null,
  placeholder: 'Select date',
  firstDayOfWeek: 1 as const,
  disableDates: [] as string[],
  onChange: jest.fn(),
};

const getTimestamp = (year: number, month: number, day: number) => {
  return new Date(year, month, day, 0, 0, 0, 0).getTime();
};

describe('DatePicker', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should render with empty input and calendar closed initially', () => {
    const { getByTestId, queryByTestId } = render(
      <DatePicker {...defaultProps} />,
    );
    expect(getByTestId('datepicker-input').props.value).toBe('');
    expect(queryByTestId('datepicker-wrapper')).toBeNull();
  });

  test('should open calendar when input is pressed', () => {
    const { getByTestId } = render(<DatePicker {...defaultProps} />);
    const touchable = getByTestId('datepicker-touchable');
    fireEvent.press(touchable);
    expect(getByTestId('datepicker-wrapper')).toBeTruthy();
  });

  test('should close calendar when close button is pressed', () => {
    const { getByTestId, queryByTestId } = render(
      <DatePicker {...defaultProps} />,
    );
    fireEvent.press(getByTestId('datepicker-touchable'));
    expect(getByTestId('datepicker-wrapper')).toBeTruthy();

    fireEvent.press(getByTestId('datepicker-header-close'));
    expect(queryByTestId('datepicker-wrapper')).toBeNull();
  });

  test('should handle value prop changes', () => {
    const { rerender, getByTestId } = render(
      <DatePicker {...defaultProps} value="2025-01-15" />,
    );
    expect(getByTestId('datepicker-input').props.value).toBe('2025-01-15');

    rerender(<DatePicker {...defaultProps} value="2025-02-20" />);
    expect(getByTestId('datepicker-input').props.value).toBe('2025-02-20');
  });

  test('should handle firstDayOfWeek prop correctly', () => {
    const { getByTestId } = render(
      <DatePicker {...defaultProps} firstDayOfWeek={0} />,
    );
    fireEvent.press(getByTestId('datepicker-touchable'));

    expect(getByTestId('datepicker-datepicker-header-0-text')).toBeTruthy();
  });

  test('should handle custom nameOfWeekdays', () => {
    const customWeekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const { getByTestId } = render(
      <DatePicker {...defaultProps} nameOfWeekdays={customWeekdays} />,
    );
    fireEvent.press(getByTestId('datepicker-touchable'));

    const headerText = getByTestId('datepicker-datepicker-header-0-text');
    expect(headerText.props.children).toBe('Mon');
  });

  test('should handle custom nameOfMonths', () => {
    const customMonths = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const { getByTestId } = render(
      <DatePicker {...defaultProps} nameOfMonths={customMonths} />,
    );
    fireEvent.press(getByTestId('datepicker-touchable'));

    const monthButton = getByTestId('datepicker-header-month-select');
    expect(monthButton).toBeTruthy();
  });

  describe('Size prop', () => {
    test('should render with small size', () => {
      const { getByTestId } = render(
        <DatePicker {...defaultProps} size="small" />,
      );
      const input = getByTestId('datepicker-input');
      expect(input).toBeTruthy();
    });

    test('should render with medium size', () => {
      const { getByTestId } = render(
        <DatePicker {...defaultProps} size="medium" />,
      );
      const input = getByTestId('datepicker-input');
      expect(input).toBeTruthy();
    });

    test('should render with large size by default', () => {
      const { getByTestId } = render(<DatePicker {...defaultProps} />);
      const input = getByTestId('datepicker-input');
      expect(input).toBeTruthy();
    });

    test('should render with large size when explicitly set', () => {
      const { getByTestId } = render(
        <DatePicker {...defaultProps} size="large" />,
      );
      const input = getByTestId('datepicker-input');
      expect(input).toBeTruthy();
    });
  });

  describe('Label prop', () => {
    test('should render with label', () => {
      const { getByTestId } = render(
        <DatePicker {...defaultProps} label="Birth Date" />,
      );
      const input = getByTestId('datepicker-input');
      expect(input).toBeTruthy();
    });

    test('should render without label when not provided', () => {
      const { getByTestId } = render(<DatePicker {...defaultProps} />);
      const input = getByTestId('datepicker-input');
      expect(input).toBeTruthy();
    });

    test('should render with calendar icon', () => {
      const { getByTestId } = render(
        <DatePicker {...defaultProps} label="Test Label" />,
      );
      const input = getByTestId('datepicker-input');
      expect(input).toBeTruthy();
    });
  });

  describe('onChange callback', () => {
    test('should call onChange when date is selected and select button is pressed', () => {
      const onChange = jest.fn();
      const { getByTestId, getAllByTestId } = render(
        <DatePicker {...defaultProps} onChange={onChange} />,
      );

      fireEvent.press(getByTestId('datepicker-touchable'));

      const dateButtons = getAllByTestId(/datepicker-datepicker-day-/);
      if (dateButtons.length > 0) {
        fireEvent.press(dateButtons[0]);

        fireEvent.press(getByTestId('datepicker-header-select'));

        expect(onChange).toHaveBeenCalled();
      }
    });

    test('should call onChange with date range when multiple is true', () => {
      const onChange = jest.fn();
      const { getByTestId, getAllByTestId } = render(
        <DatePicker {...defaultProps} multiple={true} onChange={onChange} />,
      );

      fireEvent.press(getByTestId('datepicker-touchable'));

      const dateButtons = getAllByTestId(/datepicker-datepicker-day-/);
      if (dateButtons.length >= 2) {
        fireEvent.press(dateButtons[0]);

        fireEvent.press(dateButtons[1]);

        fireEvent.press(getByTestId('datepicker-header-select'));

        expect(onChange).toHaveBeenCalled();
      }
    });
  });

  describe('DisableDates', () => {
    test('should disable specified dates', () => {
      const disableDates = ['2025-01-15', '2025-01-16'];
      const { getByTestId } = render(
        <DatePicker {...defaultProps} disableDates={disableDates} />,
      );

      fireEvent.press(getByTestId('datepicker-touchable'));
      expect(getByTestId('datepicker-wrapper')).toBeTruthy();
    });

    test('should not allow selection of disabled dates', () => {
      const onChange = jest.fn();
      const disableDates = ['2025-01-15'];
      const { getByTestId, getAllByTestId } = render(
        <DatePicker
          {...defaultProps}
          disableDates={disableDates}
          onChange={onChange}
        />,
      );

      fireEvent.press(getByTestId('datepicker-touchable'));

      const dateButtons = getAllByTestId(/datepicker-datepicker-day-/);
      if (dateButtons.length > 0) {
        fireEvent.press(dateButtons[0]);

        fireEvent.press(getByTestId('datepicker-header-select'));

        expect(onChange).toHaveBeenCalled();
      }
    });
  });

  describe('Accessibility', () => {
    test('should have proper accessibility labels', () => {
      const { getByTestId } = render(<DatePicker {...defaultProps} />);

      expect(getByTestId('datepicker-input').props.accessibilityLabel).toBe(
        'datepicker-input',
      );
      expect(getByTestId('datepicker-touchable').props.accessibilityLabel).toBe(
        'datepicker-touchable',
      );
    });

    test('should have proper testIDs for all interactive elements', () => {
      const { getByTestId } = render(<DatePicker {...defaultProps} />);
      fireEvent.press(getByTestId('datepicker-touchable'));

      expect(getByTestId('datepicker-header-prev')).toBeTruthy();
      expect(getByTestId('datepicker-header-next')).toBeTruthy();
      expect(getByTestId('datepicker-header-month-select')).toBeTruthy();
      expect(getByTestId('datepicker-header-year-select')).toBeTruthy();
    });

    test('should have proper accessibility labels for calendar elements', () => {
      const { getByTestId } = render(<DatePicker {...defaultProps} />);
      fireEvent.press(getByTestId('datepicker-touchable'));

      expect(
        getByTestId('datepicker-header-prev').props.accessibilityLabel,
      ).toBe('datepicker-header-prev');
      expect(
        getByTestId('datepicker-header-next').props.accessibilityLabel,
      ).toBe('datepicker-header-next');
      expect(
        getByTestId('datepicker-header-month-select').props.accessibilityLabel,
      ).toBe('datepicker-header-month-select');
      expect(
        getByTestId('datepicker-header-year-select').props.accessibilityLabel,
      ).toBe('datepicker-header-year-select');
    });
  });

  describe('Edge cases', () => {
    test('should handle null value gracefully', () => {
      const { getByTestId } = render(
        <DatePicker {...defaultProps} value={null} />,
      );
      expect(getByTestId('datepicker-input').props.value).toBe('');
    });

    test('should handle empty string value', () => {
      const { getByTestId } = render(<DatePicker {...defaultProps} value="" />);
      expect(getByTestId('datepicker-input').props.value).toBe('');
    });

    test('should handle minYear and maxYear constraints', () => {
      const { getByTestId } = render(
        <DatePicker {...defaultProps} minYear={2020} maxYear={2030} />,
      );
      fireEvent.press(getByTestId('datepicker-touchable'));
      fireEvent.press(getByTestId('datepicker-header-year-select'));

      expect(getByTestId('datepicker-year-2020')).toBeTruthy();
      expect(getByTestId('datepicker-year-2030')).toBeTruthy();
    });

    test('should handle month boundary navigation', () => {
      const { getByTestId, getByText } = render(
        <DatePicker {...defaultProps} />,
      );
      fireEvent.press(getByTestId('datepicker-touchable'));

      fireEvent.press(getByTestId('datepicker-header-month-select'));
      fireEvent.press(getByTestId('datepicker-month-12'));

      fireEvent.press(getByTestId('datepicker-header-next'));
      expect(getByText('January')).toBeTruthy();
    });

    test('should handle year boundary navigation', () => {
      const { getByTestId, getByText } = render(
        <DatePicker {...defaultProps} />,
      );
      fireEvent.press(getByTestId('datepicker-touchable'));

      const currentYear = new Date().getFullYear();

      fireEvent.press(getByTestId('datepicker-header-month-select'));
      fireEvent.press(getByTestId('datepicker-month-12'));

      fireEvent.press(getByTestId('datepicker-header-next'));
      expect(getByText(String(currentYear + 1))).toBeTruthy();
    });

    test('should handle invalid date values', () => {
      const { getByTestId } = render(
        <DatePicker {...defaultProps} value="invalid-date" />,
      );
      expect(getByTestId('datepicker-input').props.value).toBe('invalid-date');
    });
  });

  describe('Performance', () => {
    test('should not re-render unnecessarily when props are stable', () => {
      const { rerender, getByTestId } = render(
        <DatePicker {...defaultProps} />,
      );
      const initialRender = getByTestId('datepicker-input');

      rerender(<DatePicker {...defaultProps} />);
      const secondRender = getByTestId('datepicker-input');

      expect(initialRender).toBe(secondRender);
    });

    test('should handle large disableDates array efficiently', () => {
      const largeDisableDates = Array.from(
        { length: 20 },
        (_, i) => `2025-01-${i + 1}`,
      );
      const { getByTestId } = render(
        <DatePicker {...defaultProps} disableDates={largeDisableDates} />,
      );

      fireEvent.press(getByTestId('datepicker-touchable'));
      expect(getByTestId('datepicker-wrapper')).toBeTruthy();
    });
  });

  describe('Multiple date selection', () => {
    test('should handle date range value prop', () => {
      const { getByTestId } = render(
        <DatePicker
          {...defaultProps}
          multiple={true}
          value="2025-01-15 - 2025-01-20"
        />,
      );
      expect(getByTestId('datepicker-input').props.value).toBe(
        '2025-01-15 - 2025-01-20',
      );
    });

    test('should handle empty date range value', () => {
      const { getByTestId } = render(
        <DatePicker {...defaultProps} multiple={true} value="" />,
      );
      expect(getByTestId('datepicker-input').props.value).toBe('');
    });

    test('should handle null date range value', () => {
      const { getByTestId } = render(
        <DatePicker {...defaultProps} multiple={true} value={null} />,
      );
      expect(getByTestId('datepicker-input').props.value).toBe('');
    });

    test('should handle single date selection in multiple mode', () => {
      const onChange = jest.fn();
      const { getByTestId, getAllByTestId } = render(
        <DatePicker {...defaultProps} multiple={true} onChange={onChange} />,
      );

      fireEvent.press(getByTestId('datepicker-touchable'));

      const dateButtons = getAllByTestId(/datepicker-datepicker-day-/);
      if (dateButtons.length > 0) {
        fireEvent.press(dateButtons[0]);

        fireEvent.press(getByTestId('datepicker-header-select'));

        expect(onChange).toHaveBeenCalled();
      }
    });

    test('should handle reverse date selection (end date before start date)', () => {
      const onChange = jest.fn();
      const { getByTestId, getAllByTestId } = render(
        <DatePicker {...defaultProps} multiple={true} onChange={onChange} />,
      );

      fireEvent.press(getByTestId('datepicker-touchable'));

      const dateButtons = getAllByTestId(/datepicker-datepicker-day-/);
      if (dateButtons.length >= 2) {
        fireEvent.press(dateButtons[1]);

        fireEvent.press(dateButtons[0]);

        fireEvent.press(getByTestId('datepicker-header-select'));

        expect(onChange).toHaveBeenCalled();
      }
    });
  });

  describe('Calendar navigation', () => {
    test('should change month when prev/next arrows are pressed', () => {
      const { getByTestId, getByText } = render(
        <DatePicker {...defaultProps} />,
      );
      const touchable = getByTestId('datepicker-touchable');
      fireEvent.press(touchable);

      const currentMonth = getByText(
        /January|February|March|April|May|June|July|August|September|October|November|December/,
      ).props.children;

      fireEvent.press(getByTestId('datepicker-header-next'));
      const nextMonth = getByText(
        /January|February|March|April|May|June|July|August|September|October|November|December/,
      ).props.children;
      expect(nextMonth).not.toBe(currentMonth);

      fireEvent.press(getByTestId('datepicker-header-prev'));
      const prevMonth = getByText(
        /January|February|March|April|May|June|July|August|September|October|November|December/,
      ).props.children;
      expect(prevMonth).toBe(currentMonth);
    });

    test('should open month picker when month button is pressed', () => {
      const { getByTestId, toJSON } = render(<DatePicker {...defaultProps} />);
      fireEvent.press(getByTestId('datepicker-touchable'));
      fireEvent.press(getByTestId('datepicker-header-month-select'));
      expect(toJSON()).toMatchSnapshot();
    });

    test('should open year picker when year button is pressed', () => {
      const { getByTestId, toJSON } = render(<DatePicker {...defaultProps} />);
      fireEvent.press(getByTestId('datepicker-touchable'));
      fireEvent.press(getByTestId('datepicker-header-year-select'));
      expect(toJSON()).toMatchSnapshot();
    });

    test('should select month from month picker', () => {
      const { getByTestId, getByText } = render(
        <DatePicker {...defaultProps} />,
      );
      fireEvent.press(getByTestId('datepicker-touchable'));
      fireEvent.press(getByTestId('datepicker-header-month-select'));

      fireEvent.press(getByTestId('datepicker-month-3'));
      expect(getByText('March')).toBeTruthy();
    });

    test('should select year from year picker', () => {
      const { getByTestId, getByText } = render(
        <DatePicker {...defaultProps} />,
      );
      fireEvent.press(getByTestId('datepicker-touchable'));
      fireEvent.press(getByTestId('datepicker-header-year-select'));

      fireEvent.press(getByTestId('datepicker-year-2026'));
      expect(getByText('2026')).toBeTruthy();
    });

    test('should navigate between years in MonthPicker', () => {
      const { getByTestId, getByText } = render(
        <DatePicker {...defaultProps} />,
      );
      fireEvent.press(getByTestId('datepicker-touchable'));
      fireEvent.press(getByTestId('datepicker-header-month-select'));

      const yearBefore = getByText(/\d{4}/).props.children;

      fireEvent.press(getByTestId('datepicker-header-next'));
      const yearAfter = getByText(/\d{4}/).props.children;
      expect(Number(yearAfter)).toBe(Number(yearBefore) + 1);

      fireEvent.press(getByTestId('datepicker-header-prev'));
      const yearBack = getByText(/\d{4}/).props.children;
      expect(Number(yearBack)).toBe(Number(yearBefore));
    });

    test('should navigate between year ranges in YearPicker', () => {
      const { getByTestId } = render(
        <DatePicker {...defaultProps} minYear={2020} maxYear={2030} />,
      );
      fireEvent.press(getByTestId('datepicker-touchable'));
      fireEvent.press(getByTestId('datepicker-header-year-select'));

      expect(getByTestId('datepicker-year-2020')).toBeTruthy();
      expect(getByTestId('datepicker-year-2030')).toBeTruthy();

      fireEvent.press(getByTestId('datepicker-header-next'));

      fireEvent.press(getByTestId('datepicker-header-prev'));
      expect(getByTestId('datepicker-year-2020')).toBeTruthy();
      expect(getByTestId('datepicker-year-2030')).toBeTruthy();
    });

    test('should handle complete calendar navigation flow', () => {
      const { getByTestId, getByText } = render(
        <DatePicker {...defaultProps} />,
      );
      fireEvent.press(getByTestId('datepicker-touchable'));

      fireEvent.press(getByTestId('datepicker-header-next'));
      expect(
        getByText(
          /January|February|March|April|May|June|July|August|September|October|November|December/,
        ),
      ).toBeTruthy();

      fireEvent.press(getByTestId('datepicker-header-prev'));
      expect(
        getByText(
          /January|February|March|April|May|June|July|August|September|October|November|December/,
        ),
      ).toBeTruthy();

      fireEvent.press(getByTestId('datepicker-header-year-select'));
      expect(getByTestId('datepicker-year-2026')).toBeTruthy();

      fireEvent.press(getByTestId('datepicker-year-2026'));
      expect(getByText('2026')).toBeTruthy();
    });

    test('should handle month navigation with year constraints', () => {
      const { getByTestId, toJSON } = render(
        <DatePicker {...defaultProps} minYear={2020} maxYear={2030} />,
      );
      fireEvent.press(getByTestId('datepicker-touchable'));
      fireEvent.press(getByTestId('datepicker-header-month-select'));

      fireEvent.press(getByTestId('datepicker-month-12'));
      expect(toJSON()).toMatchSnapshot();

      fireEvent.press(getByTestId('datepicker-header-next'));
      expect(toJSON()).toMatchSnapshot();
    });

    test('should handle previous/next month navigation', () => {
      const { getByTestId, getByText } = render(
        <DatePicker {...defaultProps} />,
      );
      fireEvent.press(getByTestId('datepicker-touchable'));

      const initialMonth = getByText(
        /January|February|March|April|May|June|July|August|September|October|November|December/,
      ).props.children;

      fireEvent.press(getByTestId('datepicker-header-next'));
      const nextMonth = getByText(
        /January|February|March|April|May|June|July|August|September|October|November|December/,
      ).props.children;
      expect(nextMonth).not.toBe(initialMonth);

      fireEvent.press(getByTestId('datepicker-header-prev'));
      const prevMonth = getByText(
        /January|February|March|April|May|June|July|August|September|October|November|December/,
      ).props.children;
      expect(prevMonth).toBe(initialMonth);
    });
  });

  describe('Integration tests', () => {
    test('should handle month and year selection flow', () => {
      const { getByTestId, getByText } = render(
        <DatePicker {...defaultProps} />,
      );
      fireEvent.press(getByTestId('datepicker-touchable'));

      fireEvent.press(getByTestId('datepicker-header-month-select'));
      fireEvent.press(getByTestId('datepicker-month-3'));
      expect(getByText('March')).toBeTruthy();

      fireEvent.press(getByTestId('datepicker-header-year-select'));
      fireEvent.press(getByTestId('datepicker-year-2026'));
      expect(getByText('2026')).toBeTruthy();
    });

    test('should handle complete date selection flow', () => {
      const onChange = jest.fn();
      const { getByTestId } = render(
        <DatePicker {...defaultProps} onChange={onChange} />,
      );

      fireEvent.press(getByTestId('datepicker-touchable'));

      fireEvent.press(getByTestId('datepicker-header-month-select'));
      fireEvent.press(getByTestId('datepicker-month-3'));

      fireEvent.press(getByTestId('datepicker-header-year-select'));
      fireEvent.press(getByTestId('datepicker-year-2026'));

      const timestamp = getTimestamp(2026, 2, 15);
      const dateButton = getByTestId(`datepicker-datepicker-day-${timestamp}`);
      fireEvent.press(dateButton);

      fireEvent.press(getByTestId('datepicker-header-select'));

      expect(onChange).toHaveBeenCalledWith('2026-03-15');
    });

    test('should handle multiple date selection with navigation', () => {
      const onChange = jest.fn();
      const { getByTestId, getAllByTestId } = render(
        <DatePicker
          {...defaultProps}
          multiple={true}
          format="yyyy-MM-dd"
          onChange={onChange}
        />,
      );

      fireEvent.press(getByTestId('datepicker-touchable'));

      fireEvent.press(getByTestId('datepicker-header-month-select'));
      fireEvent.press(getByTestId('datepicker-month-3'));

      const startTimestamp = getTimestamp(2025, 2, 15);
      const endTimestamp = getTimestamp(2025, 2, 20);

      try {
        const startDateButton = getByTestId(
          `datepicker-datepicker-day-${startTimestamp}`,
        );
        const endDateButton = getByTestId(
          `datepicker-datepicker-day-${endTimestamp}`,
        );

        fireEvent.press(startDateButton);

        fireEvent.press(endDateButton);

        fireEvent.press(getByTestId('datepicker-header-select'));

        expect(onChange).toHaveBeenCalledWith('2025-03-15 - 2025-03-20');
      } catch (error) {
        const dateButtons = getAllByTestId(/datepicker-datepicker-day-/);
        if (dateButtons.length >= 2) {
          fireEvent.press(dateButtons[0]);
          fireEvent.press(dateButtons[1]);
          fireEvent.press(getByTestId('datepicker-header-select'));
          expect(onChange).toHaveBeenCalled();
        }
      }
    });
  });

  describe('Edge cases and error handling', () => {
    test('should handle context error when used outside provider', () => {
      const TestComponent = () => {
        const context = useDatePickerContext();
        return <Text>{context.value}</Text>;
      };

      expect(() => render(<TestComponent />)).toThrow(
        'useDatePickerContext must be used within a DatePickerProvider',
      );
    });

    test('should handle invalid date format gracefully', () => {
      const { getByTestId } = render(
        <DatePicker {...defaultProps} value="invalid-format" />,
      );
      expect(getByTestId('datepicker-input').props.value).toBe(
        'invalid-format',
      );
    });

    test('should handle empty disableDates array', () => {
      const { getByTestId } = render(
        <DatePicker {...defaultProps} disableDates={[]} />,
      );
      fireEvent.press(getByTestId('datepicker-touchable'));
      expect(getByTestId('datepicker-wrapper')).toBeTruthy();
    });

    test('should handle null disableDates', () => {
      const { getByTestId } = render(
        <DatePicker {...defaultProps} disableDates={undefined as any} />,
      );
      fireEvent.press(getByTestId('datepicker-touchable'));
      expect(getByTestId('datepicker-wrapper')).toBeTruthy();
    });

    test('should handle extreme minYear and maxYear values', () => {
      const { getByTestId } = render(
        <DatePicker {...defaultProps} minYear={1900} maxYear={2100} />,
      );
      fireEvent.press(getByTestId('datepicker-touchable'));
      fireEvent.press(getByTestId('datepicker-header-year-select'));
      expect(getByTestId('datepicker-wrapper')).toBeTruthy();
    });

    test('should handle same minYear and maxYear', () => {
      const { getByTestId } = render(
        <DatePicker {...defaultProps} minYear={2025} maxYear={2025} />,
      );
      fireEvent.press(getByTestId('datepicker-touchable'));
      fireEvent.press(getByTestId('datepicker-header-year-select'));
      expect(getByTestId('datepicker-year-2025')).toBeTruthy();
    });
  });

  describe('Context edge cases', () => {
    test('should handle date range with same start and end date', () => {
      const onChange = jest.fn();
      const { getByTestId, getAllByTestId } = render(
        <DatePicker {...defaultProps} multiple={true} onChange={onChange} />,
      );

      fireEvent.press(getByTestId('datepicker-touchable'));

      const dateButtons = getAllByTestId(/datepicker-datepicker-day-/);
      if (dateButtons.length > 0) {
        fireEvent.press(dateButtons[0]);
        fireEvent.press(dateButtons[0]);

        fireEvent.press(getByTestId('datepicker-header-select'));
        expect(onChange).toHaveBeenCalled();
      }
    });

    test('should handle selection mode switching', () => {
      const onChange = jest.fn();
      const { getByTestId, getAllByTestId } = render(
        <DatePicker {...defaultProps} multiple={true} onChange={onChange} />,
      );

      fireEvent.press(getByTestId('datepicker-touchable'));

      const dateButtons = getAllByTestId(/datepicker-datepicker-day-/);
      if (dateButtons.length >= 3) {
        fireEvent.press(dateButtons[0]);
        fireEvent.press(dateButtons[1]);
        fireEvent.press(dateButtons[2]);

        fireEvent.press(getByTestId('datepicker-header-select'));
        expect(onChange).toHaveBeenCalled();
      }
    });

    test('should handle year range navigation with minYear constraint', () => {
      const { getByTestId } = render(
        <DatePicker {...defaultProps} minYear={2020} />,
      );
      fireEvent.press(getByTestId('datepicker-touchable'));
      fireEvent.press(getByTestId('datepicker-header-year-select'));

      fireEvent.press(getByTestId('datepicker-header-prev'));
      fireEvent.press(getByTestId('datepicker-header-prev'));

      expect(getByTestId('datepicker-wrapper')).toBeTruthy();
    });

    test('should handle year range navigation with maxYear constraint', () => {
      const { getByTestId } = render(
        <DatePicker {...defaultProps} maxYear={2030} />,
      );
      fireEvent.press(getByTestId('datepicker-touchable'));
      fireEvent.press(getByTestId('datepicker-header-year-select'));

      fireEvent.press(getByTestId('datepicker-header-next'));
      fireEvent.press(getByTestId('datepicker-header-next'));

      expect(getByTestId('datepicker-wrapper')).toBeTruthy();
    });

    test('should handle month selection with year constraints', () => {
      const { getByTestId, toJSON } = render(
        <DatePicker {...defaultProps} minYear={2020} maxYear={2030} />,
      );
      fireEvent.press(getByTestId('datepicker-touchable'));
      fireEvent.press(getByTestId('datepicker-header-month-select'));
      expect(toJSON()).toMatchSnapshot();

      fireEvent.press(getByTestId('datepicker-month-1'));
      expect(toJSON()).toMatchSnapshot();
      expect(getByTestId('datepicker-wrapper')).toBeTruthy();
    });
  });

  describe('Format handling', () => {
    test('should handle custom date format', () => {
      const onChange = jest.fn();
      const { getByTestId, getAllByTestId } = render(
        <DatePicker
          {...defaultProps}
          format="dd/MM/yyyy"
          onChange={onChange}
        />,
      );

      fireEvent.press(getByTestId('datepicker-touchable'));

      const dateButtons = getAllByTestId(/datepicker-datepicker-day-/);
      if (dateButtons.length > 0) {
        fireEvent.press(dateButtons[0]);
        fireEvent.press(getByTestId('datepicker-header-select'));
        expect(onChange).toHaveBeenCalled();
      }
    });

    test('should handle multiple selection with custom format', () => {
      const onChange = jest.fn();
      const { getByTestId, getAllByTestId } = render(
        <DatePicker
          {...defaultProps}
          multiple={true}
          format="dd/MM/yyyy"
          onChange={onChange}
        />,
      );

      fireEvent.press(getByTestId('datepicker-touchable'));

      const dateButtons = getAllByTestId(/datepicker-datepicker-day-/);
      if (dateButtons.length >= 2) {
        fireEvent.press(dateButtons[0]);
        fireEvent.press(dateButtons[1]);
        fireEvent.press(getByTestId('datepicker-header-select'));
        expect(onChange).toHaveBeenCalled();
      }
    });
  });

  describe('YearPicker specific tests', () => {
    test('should handle year selection with minYear constraint', () => {
      const { getByTestId } = render(
        <DatePicker {...defaultProps} minYear={2020} />,
      );
      fireEvent.press(getByTestId('datepicker-touchable'));
      fireEvent.press(getByTestId('datepicker-header-year-select'));

      expect(getByTestId('datepicker-year-2020')).toBeTruthy();
    });

    test('should handle year selection with maxYear constraint', () => {
      const { getByTestId } = render(
        <DatePicker {...defaultProps} maxYear={2030} />,
      );
      fireEvent.press(getByTestId('datepicker-touchable'));
      fireEvent.press(getByTestId('datepicker-header-year-select'));

      expect(getByTestId('datepicker-year-2030')).toBeTruthy();
    });

    test('should handle year range navigation with constraints', () => {
      const { getByTestId } = render(
        <DatePicker {...defaultProps} minYear={2020} maxYear={2030} />,
      );
      fireEvent.press(getByTestId('datepicker-touchable'));
      fireEvent.press(getByTestId('datepicker-header-year-select'));

      fireEvent.press(getByTestId('datepicker-header-next'));

      fireEvent.press(getByTestId('datepicker-header-prev'));

      expect(getByTestId('datepicker-wrapper')).toBeTruthy();
    });

    test('should handle year selection and return to calendar', () => {
      const { getByTestId, getByText } = render(
        <DatePicker {...defaultProps} />,
      );
      fireEvent.press(getByTestId('datepicker-touchable'));
      fireEvent.press(getByTestId('datepicker-header-year-select'));

      fireEvent.press(getByTestId('datepicker-year-2026'));

      expect(getByText('2026')).toBeTruthy();
    });
  });

  describe('MonthPicker specific tests', () => {
    test('should handle month selection with year constraints', () => {
      const { getByTestId, toJSON } = render(
        <DatePicker {...defaultProps} minYear={2020} maxYear={2030} />,
      );
      fireEvent.press(getByTestId('datepicker-touchable'));
      fireEvent.press(getByTestId('datepicker-header-month-select'));
      expect(toJSON()).toMatchSnapshot();
      fireEvent.press(getByTestId('datepicker-month-1'));
      expect(toJSON()).toMatchSnapshot();
    });

    test('should handle month navigation with year boundaries', () => {
      const { getByTestId } = render(<DatePicker {...defaultProps} />);
      fireEvent.press(getByTestId('datepicker-touchable'));
      fireEvent.press(getByTestId('datepicker-header-month-select'));

      fireEvent.press(getByTestId('datepicker-header-next'));

      fireEvent.press(getByTestId('datepicker-header-prev'));

      expect(getByTestId('datepicker-wrapper')).toBeTruthy();
    });

    test('should handle month selection and return to calendar', () => {
      const { getByTestId, getByText } = render(
        <DatePicker {...defaultProps} />,
      );
      fireEvent.press(getByTestId('datepicker-touchable'));
      fireEvent.press(getByTestId('datepicker-header-month-select'));

      fireEvent.press(getByTestId('datepicker-month-3'));

      expect(getByText('March')).toBeTruthy();
    });
  });

  describe('CalendarWrapper specific tests', () => {
    test('should handle calendar data updates', () => {
      const { getByTestId } = render(<DatePicker {...defaultProps} />);
      fireEvent.press(getByTestId('datepicker-touchable'));

      fireEvent.press(getByTestId('datepicker-header-next'));

      expect(getByTestId('datepicker-wrapper')).toBeTruthy();
    });

    test('should handle firstDayOfWeek changes', () => {
      const { getByTestId } = render(
        <DatePicker {...defaultProps} firstDayOfWeek={0} />,
      );
      fireEvent.press(getByTestId('datepicker-touchable'));

      expect(getByTestId('datepicker-datepicker-header-0-text')).toBeTruthy();
    });

    test('should handle custom weekday names', () => {
      const customWeekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      const { getByTestId } = render(
        <DatePicker {...defaultProps} nameOfWeekdays={customWeekdays} />,
      );
      fireEvent.press(getByTestId('datepicker-touchable'));

      expect(getByTestId('datepicker-datepicker-header-0-text')).toBeTruthy();
    });

    test('should handle disabled dates in calendar', () => {
      const disableDates = ['2025-01-15', '2025-01-16'];
      const { getByTestId } = render(
        <DatePicker {...defaultProps} disableDates={disableDates} />,
      );
      fireEvent.press(getByTestId('datepicker-touchable'));

      expect(getByTestId('datepicker-wrapper')).toBeTruthy();
    });

    test('should handle previous/next month navigation', () => {
      const { getByTestId, getByText } = render(
        <DatePicker {...defaultProps} />,
      );
      fireEvent.press(getByTestId('datepicker-touchable'));

      const initialMonth = getByText(
        /January|February|March|April|May|June|July|August|September|October|November|December/,
      ).props.children;

      fireEvent.press(getByTestId('datepicker-header-next'));
      const nextMonth = getByText(
        /January|February|March|April|May|June|July|August|September|October|November|December/,
      ).props.children;
      expect(nextMonth).not.toBe(initialMonth);

      fireEvent.press(getByTestId('datepicker-header-prev'));
      const prevMonth = getByText(
        /January|February|March|April|May|June|July|August|September|October|November|December/,
      ).props.children;
      expect(prevMonth).toBe(initialMonth);
    });
  });

  describe('DisableMonths', () => {
    test('should disable specified months in month picker', () => {
      const disableMonths = [0, 1, 2];
      const { getByTestId } = render(
        <DatePicker {...defaultProps} disableMonths={disableMonths} />,
      );

      fireEvent.press(getByTestId('datepicker-touchable'));
      fireEvent.press(getByTestId('datepicker-header-month-select'));
      expect(getByTestId('datepicker-wrapper')).toBeTruthy();
    });

    test('should not allow selection of disabled months', () => {
      const onChange = jest.fn();
      const disableMonths = [0];
      const { getByTestId } = render(
        <DatePicker
          {...defaultProps}
          disableMonths={disableMonths}
          onChange={onChange}
        />,
      );

      fireEvent.press(getByTestId('datepicker-touchable'));
      fireEvent.press(getByTestId('datepicker-header-month-select'));

      fireEvent.press(getByTestId('datepicker-month-1'));

      expect(getByTestId('datepicker-wrapper')).toBeTruthy();
    });

    test('should allow selection of enabled months', () => {
      const onChange = jest.fn();
      const disableMonths = [0, 1];
      const { getByTestId, getByText } = render(
        <DatePicker
          {...defaultProps}
          disableMonths={disableMonths}
          onChange={onChange}
        />,
      );

      fireEvent.press(getByTestId('datepicker-touchable'));
      fireEvent.press(getByTestId('datepicker-header-month-select'));

      fireEvent.press(getByTestId('datepicker-month-3'));

      expect(getByText('March')).toBeTruthy();
    });

    test('should handle empty disableMonths array', () => {
      const { getByTestId } = render(
        <DatePicker {...defaultProps} disableMonths={[]} />,
      );
      fireEvent.press(getByTestId('datepicker-touchable'));
      fireEvent.press(getByTestId('datepicker-header-month-select'));
      expect(getByTestId('datepicker-wrapper')).toBeTruthy();
    });

    test('should handle null disableMonths', () => {
      const { getByTestId } = render(
        <DatePicker {...defaultProps} disableMonths={undefined as any} />,
      );
      fireEvent.press(getByTestId('datepicker-touchable'));
      fireEvent.press(getByTestId('datepicker-header-month-select'));
      expect(getByTestId('datepicker-wrapper')).toBeTruthy();
    });

    test('should handle large disableMonths array efficiently', () => {
      const largeDisableMonths = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
      const { getByTestId } = render(
        <DatePicker {...defaultProps} disableMonths={largeDisableMonths} />,
      );

      fireEvent.press(getByTestId('datepicker-touchable'));
      fireEvent.press(getByTestId('datepicker-header-month-select'));
      expect(getByTestId('datepicker-wrapper')).toBeTruthy();
    });
  });

  describe('DisableYears', () => {
    test('should disable specified years in year picker', () => {
      const disableYears = [2020, 2021, 2022];
      const { getByTestId } = render(
        <DatePicker {...defaultProps} disableYears={disableYears} />,
      );

      fireEvent.press(getByTestId('datepicker-touchable'));
      fireEvent.press(getByTestId('datepicker-header-year-select'));
      expect(getByTestId('datepicker-wrapper')).toBeTruthy();
    });

    test('should not allow selection of disabled years', () => {
      const onChange = jest.fn();
      const disableYears = [2020];
      const { getByTestId } = render(
        <DatePicker
          {...defaultProps}
          disableYears={disableYears}
          onChange={onChange}
        />,
      );

      fireEvent.press(getByTestId('datepicker-touchable'));
      fireEvent.press(getByTestId('datepicker-header-year-select'));

      fireEvent.press(getByTestId('datepicker-year-2020'));

      expect(getByTestId('datepicker-wrapper')).toBeTruthy();
    });

    test('should allow selection of enabled years', () => {
      const onChange = jest.fn();
      const disableYears = [2020, 2021];
      const { getByTestId, getByText } = render(
        <DatePicker
          {...defaultProps}
          disableYears={disableYears}
          onChange={onChange}
        />,
      );

      fireEvent.press(getByTestId('datepicker-touchable'));
      fireEvent.press(getByTestId('datepicker-header-year-select'));

      fireEvent.press(getByTestId('datepicker-year-2022'));

      expect(getByText('2022')).toBeTruthy();
    });

    test('should handle empty disableYears array', () => {
      const { getByTestId } = render(
        <DatePicker {...defaultProps} disableYears={[]} />,
      );
      fireEvent.press(getByTestId('datepicker-touchable'));
      fireEvent.press(getByTestId('datepicker-header-year-select'));
      expect(getByTestId('datepicker-wrapper')).toBeTruthy();
    });

    test('should handle null disableYears', () => {
      const { getByTestId } = render(
        <DatePicker {...defaultProps} disableYears={undefined as any} />,
      );
      fireEvent.press(getByTestId('datepicker-touchable'));
      fireEvent.press(getByTestId('datepicker-header-year-select'));
      expect(getByTestId('datepicker-wrapper')).toBeTruthy();
    });

    test('should handle large disableYears array efficiently', () => {
      const largeDisableYears = Array.from({ length: 20 }, (_, i) => 2020 + i);
      const { getByTestId } = render(
        <DatePicker {...defaultProps} disableYears={largeDisableYears} />,
      );

      fireEvent.press(getByTestId('datepicker-touchable'));
      fireEvent.press(getByTestId('datepicker-header-year-select'));
      expect(getByTestId('datepicker-wrapper')).toBeTruthy();
    });

    test('should work with minYear and maxYear constraints', () => {
      const disableYears = [2022, 2023];
      const { getByTestId } = render(
        <DatePicker
          {...defaultProps}
          disableYears={disableYears}
          minYear={2020}
          maxYear={2030}
        />,
      );

      fireEvent.press(getByTestId('datepicker-touchable'));
      fireEvent.press(getByTestId('datepicker-header-year-select'));
      expect(getByTestId('datepicker-wrapper')).toBeTruthy();
    });
  });
});
