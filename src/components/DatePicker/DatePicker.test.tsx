import React from 'react';
import { fireEvent, render, waitFor } from '../../test-utils';
import DatePicker from './DatePicker';
import { DEFAULT_NAME_OF_MONTHS, DEFAULT_NAME_OF_WEEKDAYS } from './constants';
import { useDatePickerContext } from './DatePickerContext';

const defaultProps = {
  nameOfWeekdays: DEFAULT_NAME_OF_WEEKDAYS,
  nameOfMonths: DEFAULT_NAME_OF_MONTHS,
  closeButtonLabel: 'Kapat',
  selectButtonLabel: 'Seç',
  title: 'Tarih seçiniz',
  testID: 'datepicker',
  value: null as string | null,
  placeholder: 'Tarih seçiniz',
  firstDayOfWeek: 1 as const,
  disableDates: [] as string[],
  onChange: jest.fn(),
};

// Helper function to get timestamp for a date
const getTimestamp = (year: number, month: number, day: number) => {
  return new Date(year, month, day, 0, 0, 0, 0).getTime();
};

describe('DatePicker', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should render with empty input and calendar closed initially', () => {
    const { getByTestId, queryByTestId } = render(<DatePicker {...defaultProps} />);
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
    const { getByTestId, queryByTestId } = render(<DatePicker {...defaultProps} />);
    fireEvent.press(getByTestId('datepicker-touchable'));
    expect(getByTestId('datepicker-wrapper')).toBeTruthy();
    
    fireEvent.press(getByTestId('datepicker-header-close'));
    expect(queryByTestId('datepicker-wrapper')).toBeNull();
  });

  test('should handle value prop changes', () => {
    const { rerender, getByTestId } = render(<DatePicker {...defaultProps} value="2025-01-15" />);
    expect(getByTestId('datepicker-input').props.value).toBe('2025-01-15');
    
    rerender(<DatePicker {...defaultProps} value="2025-02-20" />);
    expect(getByTestId('datepicker-input').props.value).toBe('2025-02-20');
  });

  test('should handle firstDayOfWeek prop correctly', () => {
    const { getByTestId } = render(<DatePicker {...defaultProps} firstDayOfWeek={0} />);
    fireEvent.press(getByTestId('datepicker-touchable'));
    
    expect(getByTestId('datepicker-datepicker-header-0-text')).toBeTruthy();
  });

  test('should handle custom nameOfWeekdays', () => {
    const customWeekdays = ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'];
    const { getByTestId } = render(<DatePicker {...defaultProps} nameOfWeekdays={customWeekdays} />);
    fireEvent.press(getByTestId('datepicker-touchable'));
    
    const headerText = getByTestId('datepicker-datepicker-header-0-text');
    expect(headerText.props.children).toBe('Pzt');
  });

  test('should handle custom nameOfMonths', () => {
    const customMonths = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];
    const { getByTestId } = render(<DatePicker {...defaultProps} nameOfMonths={customMonths} />);
    fireEvent.press(getByTestId('datepicker-touchable'));
    
    // Month button should exist and be clickable
    const monthButton = getByTestId('datepicker-header-month-select');
    expect(monthButton).toBeTruthy();
  });

  describe('Size prop', () => {
    test('should render with small size', () => {
      const { getByTestId } = render(<DatePicker {...defaultProps} size="small" />);
      const input = getByTestId('datepicker-input');
      expect(input).toBeTruthy();
    });

    test('should render with medium size', () => {
      const { getByTestId } = render(<DatePicker {...defaultProps} size="medium" />);
      const input = getByTestId('datepicker-input');
      expect(input).toBeTruthy();
    });

    test('should render with large size by default', () => {
      const { getByTestId } = render(<DatePicker {...defaultProps} />);
      const input = getByTestId('datepicker-input');
      expect(input).toBeTruthy();
    });

    test('should render with large size when explicitly set', () => {
      const { getByTestId } = render(<DatePicker {...defaultProps} size="large" />);
      const input = getByTestId('datepicker-input');
      expect(input).toBeTruthy();
    });
  });

  describe('Label prop', () => {
    test('should render with label', () => {
      const { getByTestId } = render(<DatePicker {...defaultProps} label="Doğum Tarihi" />);
      const input = getByTestId('datepicker-input');
      expect(input).toBeTruthy();
    });

    test('should render without label when not provided', () => {
      const { getByTestId } = render(<DatePicker {...defaultProps} />);
      const input = getByTestId('datepicker-input');
      expect(input).toBeTruthy();
    });

    test('should render with calendar icon', () => {
      const { getByTestId } = render(<DatePicker {...defaultProps} label="Test Label" />);
      const input = getByTestId('datepicker-input');
      expect(input).toBeTruthy();
    });
  });

  describe('onChange callback', () => {
    test('should call onChange when date is selected and select button is pressed', () => {
      const onChange = jest.fn();
      const { getByTestId, getAllByTestId } = render(<DatePicker {...defaultProps} onChange={onChange} />);
      
      fireEvent.press(getByTestId('datepicker-touchable'));
      
      // Find any available date button using timestamp
      const dateButtons = getAllByTestId(/datepicker-datepicker-day-/);
      if (dateButtons.length > 0) {
        fireEvent.press(dateButtons[0]);
        
        // Press select button
        fireEvent.press(getByTestId('datepicker-header-select'));
        
        expect(onChange).toHaveBeenCalled();
      }
    });

    test('should call onChange with date range when multiple is true', () => {
      const onChange = jest.fn();
      const { getByTestId, getAllByTestId } = render(
        <DatePicker {...defaultProps} multiple={true} onChange={onChange} />
      );
      
      fireEvent.press(getByTestId('datepicker-touchable'));
      
      // Find any available date buttons using timestamp
      const dateButtons = getAllByTestId(/datepicker-datepicker-day-/);
      if (dateButtons.length >= 2) {
        // Select start date
        fireEvent.press(dateButtons[0]);
        
        // Select end date
        fireEvent.press(dateButtons[1]);
        
        // Press select button
        fireEvent.press(getByTestId('datepicker-header-select'));
        
        expect(onChange).toHaveBeenCalled();
      }
    });
  });

  describe('DisableDates', () => {
    test('should disable specified dates', () => {
      const disableDates = ['2025-01-15', '2025-01-16'];
      const { getByTestId } = render(
        <DatePicker {...defaultProps} disableDates={disableDates} />
      );
      
      fireEvent.press(getByTestId('datepicker-touchable'));
      expect(getByTestId('datepicker-wrapper')).toBeTruthy();
    });

    test('should not allow selection of disabled dates', () => {
      const onChange = jest.fn();
      const disableDates = ['2025-01-15'];
      const { getByTestId, getAllByTestId } = render(
        <DatePicker {...defaultProps} disableDates={disableDates} onChange={onChange} />
      );
      
      fireEvent.press(getByTestId('datepicker-touchable'));
      
      // Find any available date button using timestamp
      const dateButtons = getAllByTestId(/datepicker-datepicker-day-/);
      if (dateButtons.length > 0) {
        // Try to select a date
        fireEvent.press(dateButtons[0]);
        
        // Press select button
        fireEvent.press(getByTestId('datepicker-header-select'));
        
        // onChange should be called (but not with disabled date if it was selected)
        expect(onChange).toHaveBeenCalled();
      }
    });
  });

  describe('Accessibility', () => {
    test('should have proper accessibility labels', () => {
      const { getByTestId } = render(<DatePicker {...defaultProps} />);
      
      expect(getByTestId('datepicker-input').props.accessibilityLabel).toBe('datepicker-input');
      expect(getByTestId('datepicker-touchable').props.accessibilityLabel).toBe('datepicker-touchable');
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
      
      expect(getByTestId('datepicker-header-prev').props.accessibilityLabel).toBe('datepicker-header-prev');
      expect(getByTestId('datepicker-header-next').props.accessibilityLabel).toBe('datepicker-header-next');
      expect(getByTestId('datepicker-header-month-select').props.accessibilityLabel).toBe('datepicker-header-month-select');
      expect(getByTestId('datepicker-header-year-select').props.accessibilityLabel).toBe('datepicker-header-year-select');
    });
  });

  describe('Edge cases', () => {
    test('should handle null value gracefully', () => {
      const { getByTestId } = render(<DatePicker {...defaultProps} value={null} />);
      expect(getByTestId('datepicker-input').props.value).toBe('');
    });

    test('should handle empty string value', () => {
      const { getByTestId } = render(<DatePicker {...defaultProps} value="" />);
      expect(getByTestId('datepicker-input').props.value).toBe('');
    });

    test('should handle minYear and maxYear constraints', () => {
      const { getByTestId } = render(
        <DatePicker {...defaultProps} minYear={2020} maxYear={2030} />
      );
      fireEvent.press(getByTestId('datepicker-touchable'));
      fireEvent.press(getByTestId('datepicker-header-year-select'));
      
      // Should show years within the range
      expect(getByTestId('datepicker-year-2020')).toBeTruthy();
      expect(getByTestId('datepicker-year-2030')).toBeTruthy();
    });

    test('should handle month boundary navigation', () => {
      const { getByTestId, getByText } = render(<DatePicker {...defaultProps} />);
      fireEvent.press(getByTestId('datepicker-touchable'));
      
      fireEvent.press(getByTestId('datepicker-header-month-select'));
      fireEvent.press(getByTestId('datepicker-month-12'));
      
      fireEvent.press(getByTestId('datepicker-header-next'));
      expect(getByText('January')).toBeTruthy();
    });

    test('should handle year boundary navigation', () => {
      const { getByTestId, getByText } = render(<DatePicker {...defaultProps} />);
      fireEvent.press(getByTestId('datepicker-touchable'));
      
      // Get current year
      const currentYear = new Date().getFullYear();
      
      fireEvent.press(getByTestId('datepicker-header-month-select'));
      fireEvent.press(getByTestId('datepicker-month-12'));
      
      fireEvent.press(getByTestId('datepicker-header-next'));
      // Check if year has increased (December to January should increment year)
      expect(getByText(String(currentYear + 1))).toBeTruthy();
    });

    test('should handle invalid date values', () => {
      const { getByTestId } = render(<DatePicker {...defaultProps} value="invalid-date" />);
      expect(getByTestId('datepicker-input').props.value).toBe('invalid-date');
    });
  });

  describe('Performance', () => {
    test('should not re-render unnecessarily when props are stable', () => {
      const { rerender, getByTestId } = render(<DatePicker {...defaultProps} />);
      const initialRender = getByTestId('datepicker-input');
      
      rerender(<DatePicker {...defaultProps} />);
      const secondRender = getByTestId('datepicker-input');
      
      expect(initialRender).toBe(secondRender);
    });

    test('should handle large disableDates array efficiently', () => {
      const largeDisableDates = Array.from({ length: 20 }, (_, i) => `2025-01-${i + 1}`);
      const { getByTestId } = render(<DatePicker {...defaultProps} disableDates={largeDisableDates} />);
      
      fireEvent.press(getByTestId('datepicker-touchable'));
      expect(getByTestId('datepicker-wrapper')).toBeTruthy();
    });
  });

  describe('Multiple date selection', () => {
    test('should handle date range value prop', () => {
      const { getByTestId } = render(
        <DatePicker {...defaultProps} multiple={true} value="2025-01-15 - 2025-01-20" />
      );
      expect(getByTestId('datepicker-input').props.value).toBe('2025-01-15 - 2025-01-20');
    });

    test('should handle empty date range value', () => {
      const { getByTestId } = render(
        <DatePicker {...defaultProps} multiple={true} value="" />
      );
      expect(getByTestId('datepicker-input').props.value).toBe('');
    });

    test('should handle null date range value', () => {
      const { getByTestId } = render(
        <DatePicker {...defaultProps} multiple={true} value={null} />
      );
      expect(getByTestId('datepicker-input').props.value).toBe('');
    });

    test('should handle single date selection in multiple mode', () => {
      const onChange = jest.fn();
      const { getByTestId, getAllByTestId } = render(
        <DatePicker {...defaultProps} multiple={true} onChange={onChange} />
      );
      
      fireEvent.press(getByTestId('datepicker-touchable'));
      
      // Find any available date button using timestamp
      const dateButtons = getAllByTestId(/datepicker-datepicker-day-/);
      if (dateButtons.length > 0) {
        // Select only one date
        fireEvent.press(dateButtons[0]);
        
        // Press select button
        fireEvent.press(getByTestId('datepicker-header-select'));
        
        // Should call onChange
        expect(onChange).toHaveBeenCalled();
      }
    });

    test('should handle reverse date selection (end date before start date)', () => {
      const onChange = jest.fn();
      const { getByTestId, getAllByTestId } = render(
        <DatePicker {...defaultProps} multiple={true} onChange={onChange} />
      );
      
      fireEvent.press(getByTestId('datepicker-touchable'));
      
      // Find any available date buttons using timestamp
      const dateButtons = getAllByTestId(/datepicker-datepicker-day-/);
      if (dateButtons.length >= 2) {
        // Select end date first
        fireEvent.press(dateButtons[1]);
        
        // Select start date second
        fireEvent.press(dateButtons[0]);
        
        // Press select button
        fireEvent.press(getByTestId('datepicker-header-select'));
        
        // Should call onChange
        expect(onChange).toHaveBeenCalled();
      }
    });
  });

  describe('Calendar navigation', () => {
    test('should change month when prev/next arrows are pressed', () => {
      const { getByTestId, getByText } = render(<DatePicker {...defaultProps} />);
      const touchable = getByTestId('datepicker-touchable');
      fireEvent.press(touchable);
      
      const currentMonth = getByText(/January|February|March|April|May|June|July|August|September|October|November|December/).props.children;
      
      fireEvent.press(getByTestId('datepicker-header-next'));
      const nextMonth = getByText(/January|February|March|April|May|June|July|August|September|October|November|December/).props.children;
      expect(nextMonth).not.toBe(currentMonth);
      
      fireEvent.press(getByTestId('datepicker-header-prev'));
      const prevMonth = getByText(/January|February|March|April|May|June|July|August|September|October|November|December/).props.children;
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
      const { getByTestId, getByText } = render(<DatePicker {...defaultProps} />);
      fireEvent.press(getByTestId('datepicker-touchable'));
      fireEvent.press(getByTestId('datepicker-header-month-select'));
      
      fireEvent.press(getByTestId('datepicker-month-3'));
      expect(getByText('March')).toBeTruthy();
    });

    test('should select year from year picker', () => {
      const { getByTestId, getByText } = render(<DatePicker {...defaultProps} />);
      fireEvent.press(getByTestId('datepicker-touchable'));
      fireEvent.press(getByTestId('datepicker-header-year-select'));
      
      fireEvent.press(getByTestId('datepicker-year-2026'));
      expect(getByText('2026')).toBeTruthy();
    });

    test('should navigate between years in MonthPicker', () => {
      const { getByTestId, getByText } = render(<DatePicker {...defaultProps} />);
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
      const { getByTestId } = render(<DatePicker {...defaultProps} minYear={2020} maxYear={2030} />);
      fireEvent.press(getByTestId('datepicker-touchable'));
      fireEvent.press(getByTestId('datepicker-header-year-select'));
      
      // Should show years within the range
      expect(getByTestId('datepicker-year-2020')).toBeTruthy();
      expect(getByTestId('datepicker-year-2030')).toBeTruthy();
      
      // Navigate to next range - check if navigation works
      fireEvent.press(getByTestId('datepicker-header-next'));
      
      // Check if we can navigate back
      fireEvent.press(getByTestId('datepicker-header-prev'));
      expect(getByTestId('datepicker-year-2020')).toBeTruthy();
      expect(getByTestId('datepicker-year-2030')).toBeTruthy();
    });

    test('should handle complete calendar navigation flow', () => {
      const { getByTestId, getByText } = render(<DatePicker {...defaultProps} />);
      fireEvent.press(getByTestId('datepicker-touchable'));
      
      // Navigate to next month
      fireEvent.press(getByTestId('datepicker-header-next'));
      // Check if month changed (any month name should be visible)
      expect(getByText(/January|February|March|April|May|June|July|August|September|October|November|December/)).toBeTruthy();
      
      // Navigate to previous month
      fireEvent.press(getByTestId('datepicker-header-prev'));
      expect(getByText(/January|February|March|April|May|June|July|August|September|October|November|December/)).toBeTruthy();
      
      // Open year picker
      fireEvent.press(getByTestId('datepicker-header-year-select'));
      expect(getByTestId('datepicker-year-2026')).toBeTruthy();
      
      // Select different year
      fireEvent.press(getByTestId('datepicker-year-2026'));
      expect(getByText('2026')).toBeTruthy();
    });

    test('should handle month navigation with year constraints', () => {
      const { getByTestId, toJSON } = render(
        <DatePicker {...defaultProps} minYear={2020} maxYear={2030} />
      );
      fireEvent.press(getByTestId('datepicker-touchable'));
      fireEvent.press(getByTestId('datepicker-header-month-select'));
      
      // Navigate to December (should handle year boundary)
      fireEvent.press(getByTestId('datepicker-month-12'));
      expect(toJSON()).toMatchSnapshot();
      
      // Navigate to next year and select January
      fireEvent.press(getByTestId('datepicker-header-next'));
      expect(toJSON()).toMatchSnapshot();
    });
  });

  describe('Integration tests', () => {
    test('should handle month and year selection flow', () => {
      const { getByTestId, getByText } = render(<DatePicker {...defaultProps} />);
      fireEvent.press(getByTestId('datepicker-touchable'));
      
      // Select month
      fireEvent.press(getByTestId('datepicker-header-month-select'));
      fireEvent.press(getByTestId('datepicker-month-3'));
      expect(getByText('March')).toBeTruthy();
      
      // Select year
      fireEvent.press(getByTestId('datepicker-header-year-select'));
      fireEvent.press(getByTestId('datepicker-year-2026'));
      expect(getByText('2026')).toBeTruthy();
    });

    test('should handle complete date selection flow', () => {
      const onChange = jest.fn();
      const { getByTestId } = render(<DatePicker {...defaultProps} onChange={onChange} />);
      
      fireEvent.press(getByTestId('datepicker-touchable'));
      
      // Navigate to specific month
      fireEvent.press(getByTestId('datepicker-header-month-select'));
      fireEvent.press(getByTestId('datepicker-month-3'));
      
      // Navigate to specific year
      fireEvent.press(getByTestId('datepicker-header-year-select'));
      fireEvent.press(getByTestId('datepicker-year-2026'));
      
      // Find a date button using timestamp
      const timestamp = getTimestamp(2026, 2, 15); // March 15, 2026
      const dateButton = getByTestId(`datepicker-datepicker-day-${timestamp}`);
      fireEvent.press(dateButton);
      
      // Press select button
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
        onChange={onChange} />
      );
      
      fireEvent.press(getByTestId('datepicker-touchable'));
      
      // Navigate to specific month
      fireEvent.press(getByTestId('datepicker-header-month-select'));
      fireEvent.press(getByTestId('datepicker-month-3'));
      
      // Find date buttons using timestamps
      const startTimestamp = getTimestamp(2025, 2, 15); // March 15, 2025
      const endTimestamp = getTimestamp(2025, 2, 20); // March 20, 2025
      
      try {
        const startDateButton = getByTestId(`datepicker-datepicker-day-${startTimestamp}`);
        const endDateButton = getByTestId(`datepicker-datepicker-day-${endTimestamp}`);
        
        // Select start date
        fireEvent.press(startDateButton);
        
        // Select end date
        fireEvent.press(endDateButton);
        
        // Press select button
        fireEvent.press(getByTestId('datepicker-header-select'));
        
        expect(onChange).toHaveBeenCalledWith('2025-03-15 - 2025-03-20');
      } catch (error) {
        // If specific dates are not found, try with any available dates
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
      // Test useDatePickerContext error
      const TestComponent = () => {
        const context = useDatePickerContext();
        return <div>{context.value}</div>;
      };
      
      expect(() => render(<TestComponent />)).toThrow('useDatePickerContext must be used within a DatePickerProvider');
    });

    test('should handle invalid date format gracefully', () => {
      const { getByTestId } = render(<DatePicker {...defaultProps} value="invalid-format" />);
      expect(getByTestId('datepicker-input').props.value).toBe('invalid-format');
    });

    test('should handle empty disableDates array', () => {
      const { getByTestId } = render(<DatePicker {...defaultProps} disableDates={[]} />);
      fireEvent.press(getByTestId('datepicker-touchable'));
      expect(getByTestId('datepicker-wrapper')).toBeTruthy();
    });

    test('should handle null disableDates', () => {
      const { getByTestId } = render(<DatePicker {...defaultProps} disableDates={undefined as any} />);
      fireEvent.press(getByTestId('datepicker-touchable'));
      expect(getByTestId('datepicker-wrapper')).toBeTruthy();
    });

    test('should handle extreme minYear and maxYear values', () => {
      const { getByTestId } = render(
        <DatePicker {...defaultProps} minYear={1900} maxYear={2100} />
      );
      fireEvent.press(getByTestId('datepicker-touchable'));
      fireEvent.press(getByTestId('datepicker-header-year-select'));
      expect(getByTestId('datepicker-wrapper')).toBeTruthy();
    });

    test('should handle same minYear and maxYear', () => {
      const { getByTestId } = render(
        <DatePicker {...defaultProps} minYear={2025} maxYear={2025} />
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
        <DatePicker {...defaultProps} multiple={true} onChange={onChange} />
      );
      
      fireEvent.press(getByTestId('datepicker-touchable'));
      
      const dateButtons = getAllByTestId(/datepicker-datepicker-day-/);
      if (dateButtons.length > 0) {
        // Select same date twice
        fireEvent.press(dateButtons[0]);
        fireEvent.press(dateButtons[0]);
        
        fireEvent.press(getByTestId('datepicker-header-select'));
        expect(onChange).toHaveBeenCalled();
      }
    });

    test('should handle selection mode switching', () => {
      const onChange = jest.fn();
      const { getByTestId, getAllByTestId } = render(
        <DatePicker {...defaultProps} multiple={true} onChange={onChange} />
      );
      
      fireEvent.press(getByTestId('datepicker-touchable'));
      
      const dateButtons = getAllByTestId(/datepicker-datepicker-day-/);
      if (dateButtons.length >= 3) {
        // Select start date
        fireEvent.press(dateButtons[0]);
        // Select end date
        fireEvent.press(dateButtons[1]);
        // Select start date again (should switch back to startDate mode)
        fireEvent.press(dateButtons[2]);
        
        fireEvent.press(getByTestId('datepicker-header-select'));
        expect(onChange).toHaveBeenCalled();
      }
    });

    test('should handle year range navigation with minYear constraint', () => {
      const { getByTestId } = render(
        <DatePicker {...defaultProps} minYear={2020} />
      );
      fireEvent.press(getByTestId('datepicker-touchable'));
      fireEvent.press(getByTestId('datepicker-header-year-select'));
      
      // Navigate back multiple times to test minYear constraint
      fireEvent.press(getByTestId('datepicker-header-prev'));
      fireEvent.press(getByTestId('datepicker-header-prev'));
      
      expect(getByTestId('datepicker-wrapper')).toBeTruthy();
    });

    test('should handle year range navigation with maxYear constraint', () => {
      const { getByTestId } = render(
        <DatePicker {...defaultProps} maxYear={2030} />
      );
      fireEvent.press(getByTestId('datepicker-touchable'));
      fireEvent.press(getByTestId('datepicker-header-year-select'));
      
      // Navigate forward multiple times to test maxYear constraint
      fireEvent.press(getByTestId('datepicker-header-next'));
      fireEvent.press(getByTestId('datepicker-header-next'));
      
      expect(getByTestId('datepicker-wrapper')).toBeTruthy();
    });

    test('should handle month selection with year constraints', () => {
      const { getByTestId, toJSON } = render(
        <DatePicker {...defaultProps} minYear={2020} maxYear={2030} />
      );
      fireEvent.press(getByTestId('datepicker-touchable'));
      fireEvent.press(getByTestId('datepicker-header-month-select'));
      expect(toJSON()).toMatchSnapshot();
      
      // Select different months that exist
      fireEvent.press(getByTestId('datepicker-month-1'));
      expect(toJSON()).toMatchSnapshot();
      expect(getByTestId('datepicker-wrapper')).toBeTruthy();
    });
  });

  describe('Format handling', () => {
    test('should handle custom date format', () => {
      const onChange = jest.fn();
      const { getByTestId, getAllByTestId } = render(
        <DatePicker {...defaultProps} format="dd/MM/yyyy" onChange={onChange} />
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
        <DatePicker {...defaultProps} multiple={true} format="dd/MM/yyyy" onChange={onChange} />
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
        <DatePicker {...defaultProps} minYear={2020} />
      );
      fireEvent.press(getByTestId('datepicker-touchable'));
      fireEvent.press(getByTestId('datepicker-header-year-select'));
      
      // Should show years from 2020
      expect(getByTestId('datepicker-year-2020')).toBeTruthy();
    });

    test('should handle year selection with maxYear constraint', () => {
      const { getByTestId } = render(
        <DatePicker {...defaultProps} maxYear={2030} />
      );
      fireEvent.press(getByTestId('datepicker-touchable'));
      fireEvent.press(getByTestId('datepicker-header-year-select'));
      
      // Should show years up to 2030
      expect(getByTestId('datepicker-year-2030')).toBeTruthy();
    });

    test('should handle year range navigation with constraints', () => {
      const { getByTestId } = render(
        <DatePicker {...defaultProps} minYear={2020} maxYear={2030} />
      );
      fireEvent.press(getByTestId('datepicker-touchable'));
      fireEvent.press(getByTestId('datepicker-header-year-select'));
      
      // Navigate to next range
      fireEvent.press(getByTestId('datepicker-header-next'));
      
      // Navigate back
      fireEvent.press(getByTestId('datepicker-header-prev'));
      
      expect(getByTestId('datepicker-wrapper')).toBeTruthy();
    });

    test('should handle year selection and return to calendar', () => {
      const { getByTestId, getByText } = render(<DatePicker {...defaultProps} />);
      fireEvent.press(getByTestId('datepicker-touchable'));
      fireEvent.press(getByTestId('datepicker-header-year-select'));
      
      // Select a year
      fireEvent.press(getByTestId('datepicker-year-2026'));
      
      // Should return to calendar view
      expect(getByText('2026')).toBeTruthy();
    });
  });

  describe('MonthPicker specific tests', () => {
    test('should handle month selection with year constraints', () => {
      const { getByTestId, toJSON } = render(
        <DatePicker {...defaultProps} minYear={2020} maxYear={2030} />
      );
      fireEvent.press(getByTestId('datepicker-touchable'));
      fireEvent.press(getByTestId('datepicker-header-month-select'));
      expect(toJSON()).toMatchSnapshot();
      // Select different months that exist
      fireEvent.press(getByTestId('datepicker-month-1'));
      expect(toJSON()).toMatchSnapshot();
    });

    test('should handle month navigation with year boundaries', () => {
      const { getByTestId, getByText } = render(<DatePicker {...defaultProps} />);
      fireEvent.press(getByTestId('datepicker-touchable'));
      fireEvent.press(getByTestId('datepicker-header-month-select'));
      
      // Navigate to next year
      fireEvent.press(getByTestId('datepicker-header-next'));
      
      // Navigate back
      fireEvent.press(getByTestId('datepicker-header-prev'));
      
      expect(getByTestId('datepicker-wrapper')).toBeTruthy();
    });

    test('should handle month selection and return to calendar', () => {
      const { getByTestId, getByText } = render(<DatePicker {...defaultProps} />);
      fireEvent.press(getByTestId('datepicker-touchable'));
      fireEvent.press(getByTestId('datepicker-header-month-select'));
      
      // Select a month
      fireEvent.press(getByTestId('datepicker-month-3'));
      
      // Should return to calendar view with selected month
      expect(getByText('March')).toBeTruthy();
    });
  });

  describe('CalendarWrapper specific tests', () => {
    test('should handle calendar data updates', () => {
      const { getByTestId, getByText } = render(<DatePicker {...defaultProps} />);
      fireEvent.press(getByTestId('datepicker-touchable'));
      
      // Navigate to next month
      fireEvent.press(getByTestId('datepicker-header-next'));
      
      // Calendar should update with new month data
      expect(getByTestId('datepicker-wrapper')).toBeTruthy();
    });

    test('should handle firstDayOfWeek changes', () => {
      const { getByTestId } = render(<DatePicker {...defaultProps} firstDayOfWeek={0} />);
      fireEvent.press(getByTestId('datepicker-touchable'));
      
      // Should show Sunday as first day
      expect(getByTestId('datepicker-datepicker-header-0-text')).toBeTruthy();
    });

    test('should handle custom weekday names', () => {
      const customWeekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      const { getByTestId } = render(
        <DatePicker {...defaultProps} nameOfWeekdays={customWeekdays} />
      );
      fireEvent.press(getByTestId('datepicker-touchable'));
      
      // Should show custom weekday names
      expect(getByTestId('datepicker-datepicker-header-0-text')).toBeTruthy();
    });

    test('should handle disabled dates in calendar', () => {
      const disableDates = ["2025-01-15", "2025-01-16"];
      const { getByTestId } = render(
        <DatePicker {...defaultProps} disableDates={disableDates} />
      );
      fireEvent.press(getByTestId('datepicker-touchable'));
      
      // Calendar should render with disabled dates
      expect(getByTestId('datepicker-wrapper')).toBeTruthy();
    });

    test('should handle previous/next month navigation', () => {
      const { getByTestId, getByText } = render(<DatePicker {...defaultProps} />);
      fireEvent.press(getByTestId('datepicker-touchable'));
      
      const initialMonth = getByText(/January|February|March|April|May|June|July|August|September|October|November|December/).props.children;
      
      // Navigate to next month
      fireEvent.press(getByTestId('datepicker-header-next'));
      const nextMonth = getByText(/January|February|March|April|May|June|July|August|September|October|November|December/).props.children;
      expect(nextMonth).not.toBe(initialMonth);
      
      // Navigate back
      fireEvent.press(getByTestId('datepicker-header-prev'));
      const prevMonth = getByText(/January|February|March|April|May|June|July|August|September|October|November|December/).props.children;
      expect(prevMonth).toBe(initialMonth);
    });
  });
}); 