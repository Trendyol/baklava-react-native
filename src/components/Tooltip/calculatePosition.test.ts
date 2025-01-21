import { createRef } from 'react';
import { calculatePosition } from './calculatePosition';
import { TooltipData, Viewport } from './types';

describe('calculatePosition', () => {
  test('should calculate for top', async () => {
    const mockTooltipData: TooltipData = {
      position: 'top',
      overlay: true,
      hole: true,
      holePadding: 4,
      viewport: {
        x: 0,
        y: 0,
        w: 368,
        h: 60,
        px: 16,
        py: 48,
      },
      id: 'test',
      content: 'lorem ipsum dolor',
      color: 'infoKey',
      onClose: () => null,
      triggerRef: createRef(),
    };
    const mockOverlayViewport: Viewport = {
      x: 0,
      y: 0,
      w: 400,
      h: 800,
      px: 0,
      py: 32,
    };

    const result = calculatePosition(
      mockTooltipData,
      false,
      mockOverlayViewport,
    );
    const rtlResult = calculatePosition(
      mockTooltipData,
      true,
      mockOverlayViewport,
    );

    expect(result).toEqual({
      height: 1,
      top: 0,
      pinX: 193,
      pinY: 7,
      pinYOverflow: -2,
      pinXOverflow: 2,
    });
    expect(rtlResult).toEqual({
      height: 1,
      top: 0,
      pinX: -543,
      pinY: 7,
      pinYOverflow: -2,
      pinXOverflow: -2,
    });
  });

  test('should calculate for bottom', async () => {
    const mockTooltipData: TooltipData = {
      position: 'bottom',
      overlay: true,
      hole: true,
      holePadding: 4,
      viewport: {
        x: 0,
        y: 0,
        w: 0,
        h: 0,
        px: 0,
        py: 0,
      },
      id: 'test',
      content: 'lorem ipsum dolor',
      color: 'infoKey',
      onClose: () => null,
      triggerRef: createRef(),
    };
    const mockOverlayViewport: Viewport = {
      x: 0,
      y: 0,
      w: 0,
      h: 0,
      px: 0,
      py: 0,
    };

    const result = calculatePosition(
      mockTooltipData,
      false,
      mockOverlayViewport,
    );
    const rtlResult = calculatePosition(
      mockTooltipData,
      true,
      mockOverlayViewport,
    );

    expect(result).toEqual({
      height: 1323,
      top: 15,
      pinX: 19,
      pinY: -7,
      pinYOverflow: 2,
      pinXOverflow: 2,
    });
    expect(rtlResult).toEqual({
      height: 1323,
      top: 15,
      pinX: -731,
      pinY: -7,
      pinYOverflow: 2,
      pinXOverflow: -2,
    });
  });
});
