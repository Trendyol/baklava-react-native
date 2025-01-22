import { VariantProps } from '@ergenekonyigit/restyle';
import { Theme } from '../../theme';
import { View, ViewStyle } from 'react-native';

export type Position = 'top' | 'bottom';

export type TooltipProps = React.PropsWithChildren<{
  id: string;
  content: string;
  position: Position;
  overlay?: boolean;
  hole?: boolean;
  holePadding?: number;
  highlight?: boolean;
  pressable?: boolean;
  color?: VariantProps<Theme, 'colors'>['variant'];
  wrapperStyle?: ViewStyle;
  onClose?: (id: string) => void;
  onError?: (id: string) => void;
}>;

export type TooltipRef = {
  show: () => void;
  hide: () => void;
};

export type TooltipData = {
  id: string;
  position: Position;
  viewport: Viewport;
  content: string;
  color: TooltipProps['color'];
  overlay: boolean;
  hole: boolean;
  holePadding: number;
  highlight?: boolean;
  onClose: TooltipProps['onClose'];
  onError: TooltipProps['onError'];
  triggerRef: React.RefObject<View>;
  children: React.ReactNode;
};

export interface TooltipContextType {
  activeTooltip?: TooltipData;
  overlayViewport?: Viewport;
  show: (tooltipData: Omit<TooltipData, 'viewport'>) => void;
  hide: (key: string) => void;
  clearAll: () => void;
  setOverlayViewport: (viewport: Viewport) => void;
}

export interface Viewport {
  x: number;
  y: number;
  w: number;
  h: number;
  px: number;
  py: number;
}

export type Calculation = {
  height: number;
  top: number;
  pinX: number;
  pinY: number;
  pinYOverflow: number;
  pinXOverflow: number;
};
