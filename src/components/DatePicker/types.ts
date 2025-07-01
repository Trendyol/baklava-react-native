export type Day = {
  day: number;
  month: number;
  year: number;
  isActive: boolean;
  isPrevMonth: boolean;
  isNextMonth: boolean;
  isCurrentDate: boolean;
  timestamp: number;
  yearWithMonth: number;
};

export interface CalendarData {
  calendar: (string[] | Day[])[];
  year: number;
  month: number;
  nameOfMonth: string;
}

export type CalendarOptions = {
  year?: number;
  month?: number;
  nameOfWeekdays?: string[];
  nameOfMonths?: string[];
  firstDayOfWeek?: 0 | 1;
};
