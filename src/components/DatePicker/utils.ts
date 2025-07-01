import { CalendarData, CalendarOptions, Day } from './types';
import {
  DEFAULT_DATE_FORMAT,
  DEFAULT_DAY_COUNT,
  DEFAULT_FIRST_DAY_OF_WEEK,
  DEFAULT_MONTH,
  DEFAULT_MONTH_COUNT,
  DEFAULT_NAME_OF_MONTHS,
  DEFAULT_NAME_OF_WEEKDAYS,
  DEFAULT_YEAR,
} from './constants';

export function createCalendar({
  year = DEFAULT_YEAR,
  month = DEFAULT_MONTH,
  nameOfWeekdays = DEFAULT_NAME_OF_WEEKDAYS,
  firstDayOfWeek = DEFAULT_FIRST_DAY_OF_WEEK,
}: CalendarOptions): (string[] | Day[])[] {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();
  const prevMonth = month === 0 ? DEFAULT_MONTH_COUNT - 1 : month - 1;
  const prevMonthYear = month === 0 ? year - 1 : year;

  const nextMonth = month === 11 ? 0 : month + 1;
  const nextMonthYear = month === 11 ? year + 1 : year;

  const prevMonthLastDay = new Date(prevMonthYear, prevMonth + 1, 0);
  const prevMonthDays = prevMonthLastDay.getDate();

  const calendar: (string[] | Day[])[] = [nameOfWeekdays];
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  let startingDayIndex = firstDay.getDay();
  if (firstDayOfWeek === 1) {
    startingDayIndex = startingDayIndex === 0 ? 6 : startingDayIndex - 1;
  }
  let dayCounter = 1;
  let nextMonthDay = 1;
  const totalDays = startingDayIndex + daysInMonth;
  const weekCount = Math.ceil(totalDays / DEFAULT_DAY_COUNT);

  for (let week = 0; week < weekCount; week++) {
    const currentWeek: Day[] = [];

    for (let day = 0; day < DEFAULT_DAY_COUNT; day++) {
      if (week === 0 && day < startingDayIndex) {
        const d = prevMonthDays - startingDayIndex + day + 1;
        const timestamp = getDateTimestamp(prevMonthYear, prevMonth, d);
        const yearWithMonth = getYearWithMonth(prevMonthYear, prevMonth);
        currentWeek.push({
          day: d,
          month: prevMonth,
          year: prevMonthYear,
          isActive: false,
          isPrevMonth: true,
          isNextMonth: false,
          isCurrentDate: false,
          timestamp: timestamp,
          yearWithMonth: yearWithMonth,
        });
      } else if (dayCounter <= daysInMonth) {
        const d = dayCounter++;
        const timestamp = getDateTimestamp(year, month, d);
        const isCurrentDate = timestamp === today.getTime();
        const yearWithMonth = getYearWithMonth(year, month);

        currentWeek.push({
          day: d,
          month: month,
          year: year,
          isActive: true,
          isPrevMonth: false,
          isNextMonth: false,
          isCurrentDate: isCurrentDate,
          timestamp: timestamp,
          yearWithMonth: yearWithMonth,
        });
      } else {
        const d = nextMonthDay++;
        const timestamp = getDateTimestamp(nextMonthYear, nextMonth, d);
        const yearWithMonth = getYearWithMonth(nextMonthYear, nextMonth);
        currentWeek.push({
          day: d,
          month: nextMonth,
          year: nextMonthYear,
          isActive: false,
          isPrevMonth: false,
          isNextMonth: true,
          isCurrentDate: false,
          timestamp: timestamp,
          yearWithMonth: yearWithMonth,
        });
      }
    }
    calendar.push(currentWeek);
  }
  return calendar;
}

export function generateCalendar(
  options: CalendarOptions,
): (string[] | Day[])[] {
  return createCalendar(options);
}

export function getMonthCalendar(options: CalendarOptions): CalendarData {
  const monthNamesParam = options.nameOfMonths || DEFAULT_NAME_OF_MONTHS;
  const calendar = generateCalendar(options);
  return {
    calendar,
    year: options.year || DEFAULT_YEAR,
    month: options.month || DEFAULT_MONTH,
    nameOfMonth: monthNamesParam[options.month || DEFAULT_MONTH],
  };
}

export function getCurrentMonthCalendar(
  options?: Omit<CalendarOptions, 'year' | 'month'>,
): CalendarData {
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth();
  return getMonthCalendar({
    year: currentYear,
    month: currentMonth,
    ...options,
  });
}

export function changeMonthCalendar(options: CalendarOptions): CalendarData {
  if (options.month && options.month < 0) {
    options.month = 11;
    if (options.year) {
      options.year = options.year - 1;
    }
  } else if (options.month && options.month > 11) {
    options.month = 0;
    if (options.year) {
      options.year = options.year + 1;
    }
  }
  return getMonthCalendar(options);
}

export const createDate = (year: number, month: number, day: number): Date => {
  return new Date(year, month, day, 0, 0, 0, 0);
};

export function getDateFromString(
  date: string,
  format: string = DEFAULT_DATE_FORMAT,
): Date {
  if (!date) {
    return new Date();
  }

  const yearIndex = format.indexOf('yyyy');
  const monthIndex = format.indexOf('MM');
  const dayIndex = format.indexOf('dd');

  if (yearIndex === -1 || monthIndex === -1 || dayIndex === -1) {
    // eslint-disable-next-line no-console
    console.warn('invalid date format', format);
    return new Date();
  }

  const year = date.substring(yearIndex, yearIndex + 4);
  const month = date.substring(monthIndex, monthIndex + 2);
  const day = date.substring(dayIndex, dayIndex + 2);

  if (!year || !month || !day) {
    // eslint-disable-next-line no-console
    console.warn('invalid date', date);
    return new Date();
  }

  const _date = createDate(Number(year), Number(month) - 1, Number(day));
  if (
    isNaN(_date.getTime()) ||
    _date.getFullYear() !== Number(year) ||
    _date.getMonth() !== Number(month) - 1 ||
    _date.getDate() !== Number(day)
  ) {
    // eslint-disable-next-line no-console
    console.warn('invalid date', date);
    return new Date();
  }

  return _date;
}

export function getDayFromDate(date: Date): Day {
  return {
    day: date.getDate(),
    month: date.getMonth(),
    year: date.getFullYear(),
    timestamp: date.getTime(),
    isActive: true,
    isPrevMonth: false,
    isNextMonth: false,
    isCurrentDate: false,
    yearWithMonth: Number(
      `${date.getFullYear()}${(date.getMonth() + 1)
        .toString()
        .padStart(2, '0')}`,
    ),
  };
}

export function getDayFromDateRange(
  dateRange: string | null,
  format: string = DEFAULT_DATE_FORMAT,
): { startDate: Day; endDate: Day } | null {
  if (!dateRange) {
    return null;
  }

  const parts = dateRange.split(' - ');
  if (parts.length !== 2) {
    return null;
  }

  if (!parts[0].trim() || !parts[1].trim()) {
    return null;
  }

  const startDate = getDayFromDate(getDateFromString(parts[0], format));
  const endDate = getDayFromDate(getDateFromString(parts[1], format));

  return { startDate, endDate };
}

export function getDateTimestamp(
  year: number,
  month: number,
  day: number,
): number {
  return createDate(year, month, day).getTime();
}

export function formatDate(
  date: Date,
  format: string = DEFAULT_DATE_FORMAT,
): string {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = String(date.getFullYear());
  const yearShort = year.slice(-2);

  return format
    .replace(/dd|DD/g, day)
    .replace(/MM/g, month)
    .replace(/yyyy/g, year)
    .replace(/YY/g, yearShort);
}

const getYearWithMonth = (year: number, month: number) => {
  const _monthString = month.toString().padStart(2, '0');
  const _yearString = year.toString();

  return Number(`${_yearString}${_monthString}`);
};
