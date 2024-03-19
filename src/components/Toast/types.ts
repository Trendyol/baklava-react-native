import { VariantProps } from '@ergenekonyigit/restyle';
import { Theme } from '../../theme';

export interface BaseToastData {
  /**
   * variant
   * what color will appear on the screen
   * @type {ToastVariant}
   * @default  ToastVariant.DEFAULT
   * @success ToastVariant.SUCCESS
   * @error - ToastVariant.ERROR
   */
  variant?: VariantProps<Theme, 'toastVariants'>['variant'];
  /**
   * message to appear in toast
   *
   * max length is 110
   */
  text?: string;
  /**
   * how long(ms) will it be visible on the screen
   * @default 7000
   */
  duration?: number;
  /**
   * offset from the bottom of the screen (in px)
   *
   */
  bottomOffset?: number;
}

export interface ToastDataWithoutAction extends BaseToastData {
  action?: never;
  actionText?: never;
}

export interface ToastDataWithAction extends BaseToastData {
  action: (close: () => void) => void;
  actionText: string;
}

export type ToastData = ToastDataWithoutAction | ToastDataWithAction;
export type ToastDataWithId = (ToastDataWithoutAction | ToastDataWithAction) & {
  id: string;
};
export type ShowMethodParams = ToastDataWithoutAction | ToastDataWithAction;

export const TostDurations = {
  SHORT: 7000,
  LONG: 10000,
} as const;

export const ToastDurations = {
  SHORT: 7000,
  LONG: 10000,
} as const;

export type DurationTypes = typeof ToastDurations;
export type Duration = DurationTypes[keyof DurationTypes];

export const ToastVariants = {
  DEFAULT: 'default',
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning',
} as const;

export type ToastVariantsTypes = typeof ToastVariants;
export type ToastVariant = ToastVariantsTypes[keyof ToastVariantsTypes];
