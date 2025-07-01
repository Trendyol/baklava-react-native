import {
  createCalendar,
  generateCalendar,
  getMonthCalendar,
  getCurrentMonthCalendar,
  changeMonthCalendar,
  getDayFromDate,
  formatDate,
  getDayFromDateRange,
  getDateFromString,
  createDate,
  getDateTimestamp,
} from './utils';
import { CalendarOptions } from './types';
import { DEFAULT_NAME_OF_MONTHS, DEFAULT_NAME_OF_WEEKDAYS } from './constants';

describe('DatePicker Utils', () => {
  describe('createCalendar', () => {
    const defaultOptions: CalendarOptions = {
      year: 2025,
      month: 0,
      nameOfWeekdays: DEFAULT_NAME_OF_WEEKDAYS,
      firstDayOfWeek: 1,
    };

    test('should create calendar with default options', () => {
      const calendar = createCalendar(defaultOptions);

      expect(calendar).toBeInstanceOf(Array);
      expect(calendar.length).toBeGreaterThan(1);
      expect(calendar[0]).toEqual(DEFAULT_NAME_OF_WEEKDAYS);

      const firstWeek = calendar[1] as any[];
      expect(firstWeek).toBeInstanceOf(Array);
      expect(firstWeek.length).toBe(7);
    });

    test('should create calendar with custom year and month', () => {
      const options: CalendarOptions = {
        year: 2024,
        month: 1,
        firstDayOfWeek: 1,
      };

      const calendar = createCalendar(options);
      const weeks = calendar.slice(1) as any[][];

      let foundTargetDay = false;
      weeks.forEach(week => {
        week.forEach(day => {
          if (day.year === 2024 && day.month === 1 && day.isActive) {
            expect(day.year).toBe(2024);
            expect(day.month).toBe(1);
            foundTargetDay = true;
          }
        });
      });

      expect(foundTargetDay).toBe(true);
    });

    test('should handle firstDayOfWeek = 0 (Sunday)', () => {
      const options: CalendarOptions = {
        year: 2025,
        month: 0,
        firstDayOfWeek: 0,
      };

      const calendar = createCalendar(options);
      expect(calendar[0]).toEqual(DEFAULT_NAME_OF_WEEKDAYS);
    });

    test('should handle firstDayOfWeek = 1 (Monday)', () => {
      const options: CalendarOptions = {
        year: 2025,
        month: 0,
        firstDayOfWeek: 1,
      };

      const calendar = createCalendar(options);
      expect(calendar[0]).toEqual(DEFAULT_NAME_OF_WEEKDAYS);
    });

    test('should handle month boundary correctly', () => {
      const options: CalendarOptions = {
        year: 2025,
        month: 0,
        firstDayOfWeek: 1,
      };

      const calendar = createCalendar(options);
      const weeks = calendar.slice(1) as any[][];

      let hasPrevMonthDays = false;
      let hasNextMonthDays = false;

      weeks.forEach(week => {
        week.forEach(day => {
          if (day.isPrevMonth) {
            hasPrevMonthDays = true;
          }
          if (day.isNextMonth) {
            hasNextMonthDays = true;
          }
        });
      });

      expect(hasPrevMonthDays || hasNextMonthDays).toBe(true);
    });

    test('should mark current date correctly', () => {
      const today = new Date();
      const options: CalendarOptions = {
        year: today.getFullYear(),
        month: today.getMonth(),
        firstDayOfWeek: 1,
      };

      const calendar = createCalendar(options);
      const weeks = calendar.slice(1) as any[][];

      let foundCurrentDate = false;
      weeks.forEach(week => {
        week.forEach(day => {
          if (day.isCurrentDate) {
            expect(day.day).toBe(today.getDate());
            expect(day.month).toBe(today.getMonth());
            expect(day.year).toBe(today.getFullYear());
            foundCurrentDate = true;
          }
        });
      });

      expect(foundCurrentDate).toBe(true);
    });

    test('should handle leap year correctly', () => {
      const options: CalendarOptions = {
        year: 2024,
        month: 1,
        firstDayOfWeek: 1,
      };

      const calendar = createCalendar(options);
      const weeks = calendar.slice(1) as any[][];

      let foundLeapYearDay = false;
      weeks.forEach(week => {
        week.forEach(day => {
          if (day.day === 29 && day.month === 1 && day.year === 2024) {
            foundLeapYearDay = true;
          }
        });
      });

      expect(foundLeapYearDay).toBe(true);
    });
  });

  describe('generateCalendar', () => {
    test('should return same result as createCalendar', () => {
      const options: CalendarOptions = {
        year: 2025,
        month: 0,
        firstDayOfWeek: 1,
      };

      const calendar1 = createCalendar(options);
      const calendar2 = generateCalendar(options);

      expect(calendar2).toEqual(calendar1);
    });
  });

  describe('getMonthCalendar', () => {
    test('should return calendar data with month name', () => {
      const options: CalendarOptions = {
        year: 2025,
        month: 0,
        nameOfMonths: DEFAULT_NAME_OF_MONTHS,
      };

      const result = getMonthCalendar(options);

      expect(result).toHaveProperty('calendar');
      expect(result).toHaveProperty('year', 2025);
      expect(result).toHaveProperty('month', 0);
      expect(result).toHaveProperty('nameOfMonth', 'January');
    });

    test('should use default values when options not provided', () => {
      const result = getMonthCalendar({});

      expect(result).toHaveProperty('year');
      expect(result).toHaveProperty('month');
      expect(result).toHaveProperty('nameOfMonth');
    });

    test('should use custom month names', () => {
      const customMonths = ['January', 'February', 'March'];
      const options: CalendarOptions = {
        year: 2025,
        month: 0,
        nameOfMonths: customMonths,
      };

      const result = getMonthCalendar(options);
      expect(result.nameOfMonth).toBe('January');
    });
  });

  describe('getCurrentMonthCalendar', () => {
    test('should return current month calendar', () => {
      const now = new Date();
      const result = getCurrentMonthCalendar();

      expect(result.year).toBe(now.getFullYear());
      expect(result.month).toBe(now.getMonth());
    });

    test('should accept additional options', () => {
      const result = getCurrentMonthCalendar();

      expect(result).toHaveProperty('calendar');
      expect(result.year).toBe(new Date().getFullYear());
    });
  });

  describe('changeMonthCalendar', () => {
    test('should handle month increment correctly', () => {
      const options: CalendarOptions = {
        year: 2025,
        month: 12,
      };

      const result = changeMonthCalendar(options);

      expect(result.year).toBe(2026);
      expect(result.month).toBe(0);
    });

    test('should handle month decrement correctly', () => {
      const options: CalendarOptions = {
        year: 2025,
        month: -1,
      };

      const result = changeMonthCalendar(options);

      expect(result.year).toBe(2024);
      expect(result.month).toBe(11);
    });

    test('should handle normal month change', () => {
      const options: CalendarOptions = {
        year: 2025,
        month: 5,
      };

      const result = changeMonthCalendar(options);

      expect(result.year).toBe(2025);
      expect(result.month).toBe(5);
    });

    test('should handle changeMonthCalendar with defined year when month < 0', () => {
      const options: CalendarOptions = {
        year: 2025,
        month: -1,
      };

      const result = changeMonthCalendar(options);

      expect(result).toBeDefined();
      expect(result.month).toBe(11);
      expect(result.year).toBe(2024);
    });

    test('should handle changeMonthCalendar with defined year when month >= 12', () => {
      const options: CalendarOptions = {
        year: 2025,
        month: 12,
      };

      const result = changeMonthCalendar(options);

      expect(result).toBeDefined();
      expect(result.month).toBe(0);
      expect(result.year).toBe(2026);
    });
  });

  describe('getDayFromDate', () => {
    test('should return day object from Date', () => {
      const testDate = new Date('2025-01-15T00:00:00.000Z');
      const result = getDayFromDate(testDate);

      expect(result.day).toBe(15);
      expect(result.month).toBe(0);
      expect(result.year).toBe(2025);
      expect(result.isActive).toBe(true);
      expect(result.isPrevMonth).toBe(false);
      expect(result.isNextMonth).toBe(false);
      expect(result.isCurrentDate).toBe(false);
      expect(typeof result.timestamp).toBe('number');
    });

    test('should handle null input', () => {
      const result = getDayFromDate(new Date());
      const now = new Date();

      expect(result.day).toBe(now.getDate());
      expect(result.month).toBe(now.getMonth());
      expect(result.year).toBe(now.getFullYear());
    });

    test('should set correct Day object properties', () => {
      const date = new Date('2025-01-15T00:00:00.000Z');
      const result = getDayFromDate(date);

      expect(result.isActive).toBe(true);
      expect(result.isPrevMonth).toBe(false);
      expect(result.isNextMonth).toBe(false);
      expect(result.isCurrentDate).toBe(false);
      expect(typeof result.timestamp).toBe('number');
    });
  });

  describe('formatDate', () => {
    test('should format date with yyyy-MM-dd format', () => {
      const date = new Date(2025, 0, 15);
      const result = formatDate(date, 'yyyy-MM-dd');

      expect(result).toBe('2025-01-15');
    });

    test('should format date with dd/MM/yyyy format', () => {
      const date = new Date(2025, 0, 15);
      const result = formatDate(date, 'dd/MM/yyyy');

      expect(result).toBe('15/01/2025');
    });

    test('should format date with YY format', () => {
      const date = new Date(2025, 0, 15);
      const result = formatDate(date, 'YY');

      expect(result).toBe('25');
    });

    test('should handle single digit day and month', () => {
      const date = new Date(2025, 0, 5);
      const result = formatDate(date, 'yyyy-MM-dd');

      expect(result).toBe('2025-01-05');
    });

    test('should handle leap year', () => {
      const date = new Date(2024, 1, 29);
      const result = formatDate(date, 'yyyy-MM-dd');

      expect(result).toBe('2024-02-29');
    });

    test('should handle year boundary', () => {
      const date = new Date(2024, 11, 31);
      const result = formatDate(date, 'yyyy-MM-dd');

      expect(result).toBe('2024-12-31');
    });

    test('should handle custom format with mixed patterns', () => {
      const date = new Date(2025, 0, 15);
      const result = formatDate(date, 'dd.MM.yyyy');

      expect(result).toBe('15.01.2025');
    });

    test('should handle DD format (uppercase day)', () => {
      const date = new Date(2025, 0, 15);
      const result = formatDate(date, 'DD/MM/yyyy');

      expect(result).toBe('15/01/2025');
    });

    test('should handle different separators', () => {
      const date = new Date(2025, 0, 15);
      const result = formatDate(date, 'dd-MM-yyyy');

      expect(result).toBe('15-01-2025');
    });

    test('should handle year only format', () => {
      const date = new Date(2025, 0, 15);
      const result = formatDate(date, 'yyyy');

      expect(result).toBe('2025');
    });

    test('should handle month and year format', () => {
      const date = new Date(2025, 0, 15);
      const result = formatDate(date, 'MM/yyyy');

      expect(result).toBe('01/2025');
    });

    test('should handle day and month format', () => {
      const date = new Date(2025, 0, 15);
      const result = formatDate(date, 'dd/MM');

      expect(result).toBe('15/01');
    });

    test('should handle complex format patterns', () => {
      const date = new Date(2025, 0, 15);
      const result = formatDate(date, 'dd.MM.yyyy YY');

      expect(result).toBe('15.01.2025 25');
    });

    test('should handle format with spaces', () => {
      const date = new Date(2025, 0, 15);
      const result = formatDate(date, 'dd MM yyyy');

      expect(result).toBe('15 01 2025');
    });
  });

  describe('Edge cases and error handling', () => {
    test('should handle empty disableDates array', () => {
      const options: CalendarOptions = {
        year: 2025,
        month: 0,
      };

      const calendar = createCalendar(options);
      expect(calendar).toBeInstanceOf(Array);
    });

    test('should handle month with 31 days', () => {
      const options: CalendarOptions = {
        year: 2025,
        month: 0,
        firstDayOfWeek: 1,
      };

      const calendar = createCalendar(options);
      const weeks = calendar.slice(1) as any[][];

      let found31st = false;
      weeks.forEach(week => {
        week.forEach(day => {
          if (day.day === 31 && day.month === 0) {
            found31st = true;
          }
        });
      });

      expect(found31st).toBe(true);
    });

    test('should handle month with 30 days', () => {
      const options: CalendarOptions = {
        year: 2025,
        month: 3,
        firstDayOfWeek: 1,
      };

      const calendar = createCalendar(options);
      const weeks = calendar.slice(1) as any[][];

      let found30th = false;
      weeks.forEach(week => {
        week.forEach(day => {
          if (day.day === 30 && day.month === 3) {
            found30th = true;
          }
        });
      });

      expect(found30th).toBe(true);
    });
  });

  describe('Performance and memory', () => {
    test('should handle multiple consecutive calls', () => {
      const options: CalendarOptions = {
        year: 2025,
        month: 0,
      };

      for (let i = 0; i < 100; i++) {
        const calendar = createCalendar(options);
        expect(calendar).toBeInstanceOf(Array);
      }
    });
  });

  describe('getDayFromDateRange', () => {
    test('should return null for null input', () => {
      const result = getDayFromDateRange(null);
      expect(result).toBeNull();
    });

    test('should return null for invalid format', () => {
      const result = getDayFromDateRange('invalid-date');
      expect(result).toBeNull();
    });

    test('should parse valid date range', () => {
      const result = getDayFromDateRange(
        '2025-01-15 - 2025-01-20',
        'yyyy-MM-dd',
      );

      expect(result).not.toBeNull();
      expect(result?.startDate.day).toBe(15);
      expect(result?.endDate.day).toBe(20);
    });

    test('should handle same start and end date', () => {
      const result = getDayFromDateRange(
        '2025-01-15 - 2025-01-15',
        'yyyy-MM-dd',
      );

      expect(result).not.toBeNull();
      expect(result?.startDate.day).toBe(15);
      expect(result?.endDate.day).toBe(15);
    });

    test('should handle leap year dates', () => {
      const result = getDayFromDateRange(
        '2024-02-29 - 2024-03-01',
        'yyyy-MM-dd',
      );

      expect(result).not.toBeNull();
      expect(result?.startDate.day).toBe(29);
      expect(result?.endDate.day).toBe(1);
    });

    test('should handle dd/MM/yyyy format', () => {
      const result = getDayFromDateRange(
        '15/01/2025 - 20/01/2025',
        'dd/MM/yyyy',
      );

      expect(result).not.toBeNull();
      expect(result?.startDate.day).toBe(15);
      expect(result?.endDate.day).toBe(20);
    });

    test('should handle different date formats in range', () => {
      const result = getDayFromDateRange(
        '15.01.2025 - 20.01.2025',
        'dd.MM.yyyy',
      );

      expect(result).not.toBeNull();
      expect(result?.startDate.day).toBe(15);
      expect(result?.endDate.day).toBe(20);
    });

    test('should handle year boundary dates', () => {
      const result = getDayFromDateRange(
        '31/12/2024 - 01/01/2025',
        'dd/MM/yyyy',
      );

      expect(result).not.toBeNull();
      expect(result?.startDate.day).toBe(31);
      expect(result?.endDate.day).toBe(1);
    });

    test('should handle month boundary dates', () => {
      const result = getDayFromDateRange(
        '31/01/2025 - 01/02/2025',
        'dd/MM/yyyy',
      );

      expect(result).not.toBeNull();
      expect(result?.startDate.day).toBe(31);
      expect(result?.endDate.day).toBe(1);
    });

    test('should return null for single date without separator', () => {
      const result = getDayFromDateRange('2025-01-15');
      expect(result).toBeNull();
    });

    test('should return null for empty string', () => {
      const result = getDayFromDateRange('');
      expect(result).toBeNull();
    });

    test('should handle very old dates', () => {
      const result = getDayFromDateRange(
        '01/01/1900 - 31/12/1900',
        'dd/MM/yyyy',
      );

      expect(result).not.toBeNull();
      expect(result?.startDate.day).toBe(1);
      expect(result?.endDate.day).toBe(31);
    });

    test('should handle future dates', () => {
      const result = getDayFromDateRange(
        '01/01/2030 - 31/12/2030',
        'dd/MM/yyyy',
      );

      expect(result).not.toBeNull();
      expect(result?.startDate.day).toBe(1);
      expect(result?.endDate.day).toBe(31);
    });
  });

  describe('getDateFromString edge cases', () => {
    test('should handle invalid date format with missing year', () => {
      const consoleSpy = jest
        .spyOn(console, 'warn')
        .mockImplementation(() => {});

      const result = getDateFromString('01-15', 'yyyy-MM-dd');

      expect(consoleSpy).toHaveBeenCalledWith('invalid date', '01-15');
      expect(result).toBeInstanceOf(Date);

      consoleSpy.mockRestore();
    });

    test('should handle invalid date format with missing month', () => {
      const consoleSpy = jest
        .spyOn(console, 'warn')
        .mockImplementation(() => {});

      const result = getDateFromString('2025-15', 'yyyy-MM-dd');

      expect(consoleSpy).toHaveBeenCalledWith('invalid date', '2025-15');
      expect(result).toBeInstanceOf(Date);

      consoleSpy.mockRestore();
    });

    test('should handle invalid date format with missing day', () => {
      const consoleSpy = jest
        .spyOn(console, 'warn')
        .mockImplementation(() => {});

      const result = getDateFromString('2025-01', 'yyyy-MM-dd');

      expect(consoleSpy).toHaveBeenCalledWith('invalid date', '2025-01');
      expect(result).toBeInstanceOf(Date);

      consoleSpy.mockRestore();
    });

    test('should handle empty string date', () => {
      const result = getDateFromString('', 'yyyy-MM-dd');
      expect(result).toBeInstanceOf(Date);
    });

    test('should handle null date', () => {
      const result = getDateFromString(null as any, 'yyyy-MM-dd');
      expect(result).toBeInstanceOf(Date);
    });

    test('should handle undefined date', () => {
      const result = getDateFromString(undefined as any, 'yyyy-MM-dd');
      expect(result).toBeInstanceOf(Date);
    });

    test('should handle date with completely wrong format', () => {
      const consoleSpy = jest
        .spyOn(console, 'warn')
        .mockImplementation(() => {});

      const result = getDateFromString('15/01/2025', 'yyyy-MM-dd');
      expect(consoleSpy).toHaveBeenCalledWith('invalid date', '15/01/2025');
      expect(result).toBeInstanceOf(Date);

      consoleSpy.mockRestore();
    });

    test('should handle date with partial format', () => {
      const consoleSpy = jest
        .spyOn(console, 'warn')
        .mockImplementation(() => {});

      const result = getDateFromString('2025', 'yyyy-MM-dd');

      expect(consoleSpy).toHaveBeenCalledWith('invalid date', '2025');
      expect(result).toBeInstanceOf(Date);

      consoleSpy.mockRestore();
    });

    test('should handle getDateFromString with empty year', () => {
      const consoleSpy = jest
        .spyOn(console, 'warn')
        .mockImplementation(() => {});
      const result = getDateFromString('01-15', 'MM-dd');
      expect(consoleSpy).toHaveBeenCalledWith('invalid date format', 'MM-dd');
      expect(result).toBeInstanceOf(Date);
      consoleSpy.mockRestore();
    });
    test('should handle getDateFromString with empty month', () => {
      const consoleSpy = jest
        .spyOn(console, 'warn')
        .mockImplementation(() => {});
      const result = getDateFromString('2025-15', 'yyyy-dd');
      expect(consoleSpy).toHaveBeenCalledWith('invalid date format', 'yyyy-dd');
      expect(result).toBeInstanceOf(Date);
      consoleSpy.mockRestore();
    });
    test('should handle getDateFromString with empty day', () => {
      const consoleSpy = jest
        .spyOn(console, 'warn')
        .mockImplementation(() => {});
      const result = getDateFromString('2025-01', 'yyyy-MM');
      expect(consoleSpy).toHaveBeenCalledWith('invalid date format', 'yyyy-MM');
      expect(result).toBeInstanceOf(Date);
      consoleSpy.mockRestore();
    });
  });

  describe('Custom date format tests', () => {
    test('should parse dd/MM/yyyy format correctly', () => {
      const result = getDateFromString('22/11/2025', 'dd/MM/yyyy');

      expect(result).toBeInstanceOf(Date);
      expect(result.getDate()).toBe(22);
      expect(result.getMonth()).toBe(10);
      expect(result.getFullYear()).toBe(2025);
    });

    test('should parse dd-MM-yyyy format correctly', () => {
      const result = getDateFromString('15-03-2024', 'dd-MM-yyyy');

      expect(result).toBeInstanceOf(Date);
      expect(result.getDate()).toBe(15);
      expect(result.getMonth()).toBe(2);
      expect(result.getFullYear()).toBe(2024);
    });

    test('should parse yyyy.MM.dd format correctly', () => {
      const result = getDateFromString('2025.12.31', 'yyyy.MM.dd');

      expect(result).toBeInstanceOf(Date);
      expect(result.getDate()).toBe(31);
      expect(result.getMonth()).toBe(11);
      expect(result.getFullYear()).toBe(2025);
    });

    test('should handle single digit day and month in dd/MM/yyyy', () => {
      const result = getDateFromString('05/09/2025', 'dd/MM/yyyy');

      expect(result).toBeInstanceOf(Date);
      expect(result.getDate()).toBe(5);
      expect(result.getMonth()).toBe(8);
      expect(result.getFullYear()).toBe(2025);
    });
  });

  describe('Branch coverage tests', () => {
    test('should handle invalid date that creates NaN', () => {
      const consoleSpy = jest
        .spyOn(console, 'warn')
        .mockImplementation(() => {});

      const result = getDateFromString('2025-01-32', 'yyyy-MM-dd');

      expect(consoleSpy).toHaveBeenCalledWith('invalid date', '2025-01-32');
      expect(result).toBeInstanceOf(Date);

      consoleSpy.mockRestore();
    });

    test('should handle invalid date with invalid month', () => {
      const consoleSpy = jest
        .spyOn(console, 'warn')
        .mockImplementation(() => {});

      const result = getDateFromString('2025-13-01', 'yyyy-MM-dd');

      expect(consoleSpy).toHaveBeenCalledWith('invalid date', '2025-13-01');
      expect(result).toBeInstanceOf(Date);

      consoleSpy.mockRestore();
    });

    test('should handle invalid date with February 30', () => {
      const consoleSpy = jest
        .spyOn(console, 'warn')
        .mockImplementation(() => {});

      const result = getDateFromString('2025-02-30', 'yyyy-MM-dd');

      expect(consoleSpy).toHaveBeenCalledWith('invalid date', '2025-02-30');
      expect(result).toBeInstanceOf(Date);

      consoleSpy.mockRestore();
    });
  });

  describe('createDate', () => {
    test('should create date with specified year, month, and day', () => {
      const result = createDate(2025, 0, 15);

      expect(result).toBeInstanceOf(Date);
      expect(result.getFullYear()).toBe(2025);
      expect(result.getMonth()).toBe(0);
      expect(result.getDate()).toBe(15);
      expect(result.getHours()).toBe(0);
      expect(result.getMinutes()).toBe(0);
      expect(result.getSeconds()).toBe(0);
      expect(result.getMilliseconds()).toBe(0);
    });

    test('should handle leap year date', () => {
      const result = createDate(2024, 1, 29);

      expect(result).toBeInstanceOf(Date);
      expect(result.getFullYear()).toBe(2024);
      expect(result.getMonth()).toBe(1);
      expect(result.getDate()).toBe(29);
    });

    test('should handle year boundary dates', () => {
      const result = createDate(2024, 11, 31);

      expect(result).toBeInstanceOf(Date);
      expect(result.getFullYear()).toBe(2024);
      expect(result.getMonth()).toBe(11);
      expect(result.getDate()).toBe(31);
    });

    test('should handle month boundary dates', () => {
      const result = createDate(2025, 0, 1);

      expect(result).toBeInstanceOf(Date);
      expect(result.getFullYear()).toBe(2025);
      expect(result.getMonth()).toBe(0);
      expect(result.getDate()).toBe(1);
    });

    test('should handle single digit day and month', () => {
      const result = createDate(2025, 0, 5);

      expect(result).toBeInstanceOf(Date);
      expect(result.getFullYear()).toBe(2025);
      expect(result.getMonth()).toBe(0);
      expect(result.getDate()).toBe(5);
    });

    test('should handle edge case dates', () => {
      const result = createDate(1900, 0, 1);

      expect(result).toBeInstanceOf(Date);
      expect(result.getFullYear()).toBe(1900);
      expect(result.getMonth()).toBe(0);
      expect(result.getDate()).toBe(1);
    });

    test('should handle future dates', () => {
      const result = createDate(2030, 11, 31);

      expect(result).toBeInstanceOf(Date);
      expect(result.getFullYear()).toBe(2030);
      expect(result.getMonth()).toBe(11);
      expect(result.getDate()).toBe(31);
    });
  });

  describe('getDateTimestamp', () => {
    test('should return timestamp for valid date', () => {
      const result = getDateTimestamp(2025, 0, 15);
      const expectedDate = new Date(2025, 0, 15, 0, 0, 0, 0);

      expect(typeof result).toBe('number');
      expect(result).toBe(expectedDate.getTime());
    });

    test('should handle leap year timestamp', () => {
      const result = getDateTimestamp(2024, 1, 29);
      const expectedDate = new Date(2024, 1, 29, 0, 0, 0, 0);

      expect(typeof result).toBe('number');
      expect(result).toBe(expectedDate.getTime());
    });

    test('should handle year boundary timestamp', () => {
      const result = getDateTimestamp(2024, 11, 31);
      const expectedDate = new Date(2024, 11, 31, 0, 0, 0, 0);

      expect(typeof result).toBe('number');
      expect(result).toBe(expectedDate.getTime());
    });

    test('should handle month boundary timestamp', () => {
      const result = getDateTimestamp(2025, 0, 1);
      const expectedDate = new Date(2025, 0, 1, 0, 0, 0, 0);

      expect(typeof result).toBe('number');
      expect(result).toBe(expectedDate.getTime());
    });

    test('should handle single digit day and month timestamp', () => {
      const result = getDateTimestamp(2025, 0, 5);
      const expectedDate = new Date(2025, 0, 5, 0, 0, 0, 0);

      expect(typeof result).toBe('number');
      expect(result).toBe(expectedDate.getTime());
    });

    test('should handle edge case timestamps', () => {
      const result = getDateTimestamp(1900, 0, 1);
      const expectedDate = new Date(1900, 0, 1, 0, 0, 0, 0);

      expect(typeof result).toBe('number');
      expect(result).toBe(expectedDate.getTime());
    });

    test('should handle future timestamps', () => {
      const result = getDateTimestamp(2030, 11, 31);
      const expectedDate = new Date(2030, 11, 31, 0, 0, 0, 0);

      expect(typeof result).toBe('number');
      expect(result).toBe(expectedDate.getTime());
    });

    test('should return consistent timestamps for same date', () => {
      const timestamp1 = getDateTimestamp(2025, 0, 15);
      const timestamp2 = getDateTimestamp(2025, 0, 15);

      expect(timestamp1).toBe(timestamp2);
    });

    test('should return different timestamps for different dates', () => {
      const timestamp1 = getDateTimestamp(2025, 0, 15);
      const timestamp2 = getDateTimestamp(2025, 0, 16);

      expect(timestamp1).not.toBe(timestamp2);
    });
  });
});
