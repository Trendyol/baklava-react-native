import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
} from 'react';
import {
  getCurrentMonthCalendar,
  changeMonthCalendar,
  getDayFromDate,
  getDayFromDateRange,
  formatDate,
  getDateFromString,
  createDate,
  getMonthCalendar,
} from './utils';
import {
  DEFAULT_YEAR_OFFSET,
  DEFAULT_YEAR_RANGE,
  DEFAULT_NAME_OF_MONTHS,
  DEFAULT_NAME_OF_WEEKDAYS,
  ShowPickerType,
  DEFAULT_MIN_YEAR,
  DEFAULT_MAX_YEAR,
} from './constants';
import { CalendarData, Day } from './types';

export interface DatePickerContextType {
  value: string | null;
  date: Day;
  nameOfWeekdays?: string[];
  nameOfMonths?: string[];
  minYear?: number;
  maxYear?: number;
  firstDayOfWeek?: 0 | 1;
  testID?: string;
  onChange: () => void;
  handleOpen: () => void;
  handleClose: () => void;
  onSelectDate: (date: Day) => void;
  visible: boolean;
  showPickerType: ShowPickerType;
  setShowPickerType: (type: ShowPickerType) => void;
  calendarData: any;
  setCalendarData: (data: any) => void;
  yearRange: DatePickerYearRange;
  setYearRange: (range: DatePickerYearRange) => void;
  onPressPrev: () => void;
  onPressNext: () => void;
  disableDates?: number[];
  multiple?: boolean;
  dateRange: { startDate: Day; endDate: Day } | null;
  selectionMode: 'startDate' | 'endDate';
  format?: string;
  disableMonths?: number[];
  disableYears?: number[];
}

interface DatePickerProviderProps {
  value: string | null;
  nameOfWeekdays: string[];
  nameOfMonths: string[];
  minYear?: number;
  maxYear?: number;
  testID: string;
  children: ReactNode;
  firstDayOfWeek: 0 | 1;
  onChange: (date: string) => void;
  disableDates?: number[];
  multiple?: boolean;
  format?: string;
  disableMonths?: number[];
  disableYears?: number[];
}

interface DatePickerYearRange {
  min: number;
  max: number;
}

const DatePickerContext = createContext<DatePickerContextType | undefined>(
  undefined,
);

export const DatePickerProvider = ({
  children,
  value = null,
  nameOfWeekdays = DEFAULT_NAME_OF_WEEKDAYS,
  nameOfMonths = DEFAULT_NAME_OF_MONTHS,
  minYear = DEFAULT_MIN_YEAR,
  maxYear = DEFAULT_MAX_YEAR,
  firstDayOfWeek,
  testID,
  onChange: onChangeProp,
  disableDates = [],
  multiple = false,
  format,
  disableMonths,
  disableYears,
}: DatePickerProviderProps) => {
  const [date, setDate] = useState<Day>(
    getDayFromDate(getDateFromString(value || '', format)),
  );
  const [dateRange, setDateRange] = useState<{
    startDate: Day;
    endDate: Day;
  } | null>(getDayFromDateRange(value, format));
  const [selectionMode, setSelectionMode] = useState<'startDate' | 'endDate'>(
    'startDate',
  );

  const [visible, setVisible] = useState(false);
  const [showPickerType, setShowPickerType] = useState<ShowPickerType>(
    ShowPickerType.NONE,
  );
  const [calendarData, setCalendarData] = useState(
    getCurrentMonthCalendar({
      nameOfMonths,
      nameOfWeekdays,
      firstDayOfWeek,
    }),
  );

  const [yearRange, setYearRange] = useState<DatePickerYearRange>({
    min:
      minYear && minYear > calendarData.year - DEFAULT_YEAR_OFFSET
        ? minYear
        : calendarData.year - DEFAULT_YEAR_OFFSET,
    max:
      maxYear && maxYear < calendarData.year + DEFAULT_YEAR_OFFSET
        ? maxYear
        : calendarData.year + DEFAULT_YEAR_OFFSET,
  });

  const handleOpen = useCallback(() => setVisible(true), []);
  const handleClose = useCallback(() => setVisible(false), []);

  const updateDateRange = useCallback(
    (newDate: Day) => {
      if (!dateRange) {
        setDateRange({ startDate: newDate, endDate: newDate });
        setSelectionMode('endDate');
        return;
      }

      const { startDate, endDate } = dateRange;
      const newTimestamp = newDate.timestamp || 0;
      const startTimestamp = startDate.timestamp || 0;
      const endTimestamp = endDate.timestamp || 0;

      if (selectionMode === 'startDate') {
        if (newTimestamp > endTimestamp) {
          setDateRange({ startDate: endDate, endDate: newDate });
        } else {
          setDateRange({ startDate: newDate, endDate });
        }
        setSelectionMode('endDate');
      } else {
        if (newTimestamp < startTimestamp) {
          setDateRange({ startDate: newDate, endDate: startDate });
        } else {
          setDateRange({ startDate, endDate: newDate });
        }
        setSelectionMode('startDate');
      }
    },
    [dateRange, selectionMode],
  );

  const onSelectDate = useCallback(
    (selectedDate: Day) => {
      const isOutOfRange =
        selectedDate.year < minYear || selectedDate.year > maxYear;
      if (isOutOfRange) {
        return;
      }
      if (selectedDate.isPrevMonth || selectedDate.isNextMonth) {
        const currentCalendar = getMonthCalendar({
          year: selectedDate.year,
          month: selectedDate.month,
          nameOfMonths,
          nameOfWeekdays,
          firstDayOfWeek,
        });
        setCalendarData(currentCalendar);
      }

      if (multiple) {
        updateDateRange(selectedDate);
      } else {
        setDate(selectedDate);
      }
    },
    [
      multiple,
      updateDateRange,
      nameOfMonths,
      nameOfWeekdays,
      firstDayOfWeek,
      minYear,
      maxYear,
    ],
  );

  const onChange = useCallback(() => {
    if (multiple && dateRange) {
      const startDate = formatDate(
        createDate(
          dateRange.startDate.year,
          dateRange.startDate.month,
          dateRange.startDate.day,
        ),
        format,
      );
      const endDate = formatDate(
        createDate(
          dateRange.endDate.year,
          dateRange.endDate.month,
          dateRange.endDate.day,
        ),
        format,
      );
      const rangeString = `${startDate} - ${endDate}`;
      onChangeProp?.(rangeString);
    } else if (!multiple && date) {
      const formattedDate = formatDate(
        createDate(date.year, date.month, date.day),
        format,
      );
      onChangeProp?.(formattedDate || '');
    }
    setVisible(false);
  }, [multiple, dateRange, date, onChangeProp, format]);

  const onPressPrev = useCallback(() => {
    if (showPickerType === ShowPickerType.YEAR) {
      const offset =
        minYear && yearRange.min - minYear < DEFAULT_YEAR_RANGE
          ? yearRange.min - minYear
          : DEFAULT_YEAR_RANGE;
      setYearRange(prev => ({
        min: prev.min - offset,
        max: prev.max - offset,
      }));
    } else if (showPickerType === ShowPickerType.MONTH) {
      setCalendarData((prev: CalendarData) => ({
        ...prev,
        year: minYear && prev.year - 1 < minYear ? minYear : prev.year - 1,
      }));
    } else {
      if (calendarData.month === 0 && calendarData.year - 1 < minYear) {
        return;
      }
      setCalendarData(
        changeMonthCalendar({
          year: calendarData.year,
          month: calendarData.month - 1,
          nameOfMonths,
          nameOfWeekdays,
          firstDayOfWeek,
        }),
      );
    }
  }, [
    showPickerType,
    minYear,
    yearRange,
    calendarData,
    nameOfMonths,
    nameOfWeekdays,
    firstDayOfWeek,
  ]);

  const onPressNext = useCallback(() => {
    if (showPickerType === ShowPickerType.YEAR) {
      const offset =
        maxYear && maxYear - yearRange.max < DEFAULT_YEAR_RANGE
          ? maxYear - yearRange.max
          : DEFAULT_YEAR_RANGE;
      setYearRange(prev => ({
        min: prev.min + offset,
        max: prev.max + offset,
      }));
    } else if (showPickerType === ShowPickerType.MONTH) {
      setCalendarData((prev: CalendarData) => ({
        ...prev,
        year: maxYear && prev.year + 1 > maxYear ? maxYear : prev.year + 1,
      }));
    } else {
      if (calendarData.month === 11 && calendarData.year + 1 > maxYear) {
        return;
      }
      setCalendarData(
        changeMonthCalendar({
          year: calendarData.year,
          month: calendarData.month + 1,
          nameOfMonths,
          nameOfWeekdays,
          firstDayOfWeek,
        }),
      );
    }
  }, [
    showPickerType,
    maxYear,
    yearRange,
    calendarData,
    nameOfMonths,
    nameOfWeekdays,
    firstDayOfWeek,
  ]);

  const contextValue = React.useMemo(
    () => ({
      value,
      visible,
      date,
      nameOfWeekdays,
      nameOfMonths,
      minYear,
      maxYear,
      firstDayOfWeek,
      testID,
      handleOpen,
      handleClose,
      onSelectDate,
      onChange,
      showPickerType,
      setShowPickerType,
      calendarData,
      setCalendarData,
      yearRange,
      setYearRange,
      onPressPrev,
      onPressNext,
      multiple,
      dateRange,
      selectionMode,
      disableDates,
      disableMonths,
      disableYears,
    }),
    [
      value,
      visible,
      date,
      nameOfWeekdays,
      nameOfMonths,
      minYear,
      maxYear,
      firstDayOfWeek,
      testID,
      handleOpen,
      handleClose,
      onSelectDate,
      onChange,
      showPickerType,
      setShowPickerType,
      calendarData,
      setCalendarData,
      yearRange,
      setYearRange,
      onPressPrev,
      onPressNext,
      multiple,
      dateRange,
      selectionMode,
      disableDates,
      disableMonths,
      disableYears,
    ],
  );

  React.useEffect(() => {
    if (visible) {
      if (multiple) {
        setDateRange(getDayFromDateRange(value, format));
      } else {
        setDate(getDayFromDate(getDateFromString(value || '', format)));
      }
    }
  }, [visible, value, multiple, format]);

  return (
    <DatePickerContext.Provider value={contextValue}>
      {children}
    </DatePickerContext.Provider>
  );
};

export const useDatePickerContext = () => {
  const context = useContext(DatePickerContext);

  if (!context) {
    throw new Error(
      'useDatePickerContext must be used within a DatePickerProvider',
    );
  }
  return context;
};
