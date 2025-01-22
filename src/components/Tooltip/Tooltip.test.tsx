import React from 'react';
import { cleanup, fireEvent, render, waitFor } from '../../test-utils';
import Text from '../Text/Text';
import Tooltip from './Tooltip';
import { TooltipProvider, useTooltipContext } from './TooltipContext';
import Box from '../Box/Box';
import Button from '../Button/Button';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { TooltipRef } from './types';
import { deviceHeight } from '../../utils/dimentions';

describe('Tooltip', () => {
  const mockOverlayMeasure = jest.fn();
  const mockChildWrapperTopMeasure = jest.fn();
  const mockChildWrapperBottomMeasure = jest.fn();
  const mockChildWrapperOnLayoutParam = {
    nativeEvent: {
      layout: {
        width: 200,
        height: 30,
      },
    },
  };

  beforeEach(() => {
    mockChildWrapperTopMeasure.mockImplementation(f => {
      // x,y,w,h,px,py
      f(0, 0, 200, 30, 16, 16);
    });
    mockChildWrapperBottomMeasure.mockImplementation(f => {
      // x,y,w,h,px,py
      f(0, 0, 200, 30, 16, 800);
    });
    mockOverlayMeasure.mockImplementation(f => {
      // x,y,w,h,px,py
      f(0, 0, 400, 800, 0, 62);
    });
  });

  afterEach(() => {
    jest.resetAllMocks();
    jest.clearAllMocks();
    cleanup();
  });
  test('should render top correctly', async () => {
    // when
    const { toJSON } = render(
      <SafeAreaProvider>
        <TooltipProvider>
          <Tooltip
            id={'test'}
            content={'content Lorem ipsum dolor sit amet'}
            position={'top'}>
            <Text>trigger text</Text>
          </Tooltip>
        </TooltipProvider>
      </SafeAreaProvider>,
    );

    // then
    expect(toJSON()).toMatchSnapshot();
  });

  test('should render bottom correctly', async () => {
    // when
    const { toJSON } = render(
      <SafeAreaProvider>
        <TooltipProvider>
          <Tooltip
            id={'test'}
            content={'content Lorem ipsum dolor sit amet'}
            position={'bottom'}>
            <Text>trigger text</Text>
          </Tooltip>
        </TooltipProvider>
      </SafeAreaProvider>,
    );

    // then
    expect(toJSON()).toMatchSnapshot();
  });

  test('should not render without provider', async () => {
    try {
      render(
        <SafeAreaProvider>
          <Tooltip
            id={'test'}
            content={'content Lorem ipsum dolor sit amet'}
            position={'top'}>
            <Text>trigger text</Text>
          </Tooltip>
        </SafeAreaProvider>,
      );
    } catch (error: any) {
      expect(error.message).toBe(
        'useTooltipContext must be used within a TooltipProvider',
      );
    }
  });

  test('should show top and hide tooltip via trigger', async () => {
    // when
    const mockOnClose = jest.fn();
    const { queryByTestId } = render(
      <SafeAreaProvider>
        <TooltipProvider>
          <Tooltip
            id={'test'}
            content={'content Lorem ipsum dolor sit amet'}
            position={'top'}
            onClose={mockOnClose}>
            <Text>trigger text</Text>
          </Tooltip>
        </TooltipProvider>
      </SafeAreaProvider>,
    );

    // then
    const trigger = queryByTestId('tooltip-trigger-test');
    const childWrapper = queryByTestId('tooltip-child-wrapper-test');
    childWrapper!.parent!.instance.measure = mockChildWrapperTopMeasure;
    fireEvent(childWrapper, 'layout', mockChildWrapperOnLayoutParam);
    fireEvent.press(trigger);

    const overlayLayout = queryByTestId('tooltip-overlay-wrapper-test');
    overlayLayout!.parent!.instance.measure = mockOverlayMeasure;
    fireEvent(overlayLayout!, 'layout', {});

    const content = queryByTestId('tooltip-content-test');
    expect(content).not.toBeNull();

    const close = queryByTestId('tooltip-close-test');
    fireEvent.press(close!);
    expect(queryByTestId('tooltip-content-test')).toBeNull();
    expect(mockOnClose).toHaveBeenCalledWith('test');
  });

  test('should show bottom and hide tooltip via trigger', async () => {
    // when
    const mockOnClose = jest.fn();
    const { queryByTestId } = render(
      <SafeAreaProvider>
        <TooltipProvider>
          <Tooltip
            id={'test'}
            overlay
            hole
            content={'content Lorem ipsum dolor sit amet'}
            position={'bottom'}
            onClose={mockOnClose}>
            <Text>trigger text</Text>
          </Tooltip>
        </TooltipProvider>
      </SafeAreaProvider>,
    );

    // then
    const trigger = queryByTestId('tooltip-trigger-test');
    const childWrapper = queryByTestId('tooltip-child-wrapper-test');

    childWrapper!.parent!.instance.measure = mockChildWrapperTopMeasure;

    fireEvent(childWrapper, 'layout', mockChildWrapperOnLayoutParam);
    fireEvent.press(trigger);

    const overlayLayout = queryByTestId('tooltip-overlay-wrapper-test');
    overlayLayout!.parent!.instance.measure = mockOverlayMeasure;
    fireEvent(overlayLayout!, 'layout', {});

    const content = queryByTestId('tooltip-content-test');
    expect(content).not.toBeNull();

    const close = queryByTestId('tooltip-close-test');
    fireEvent.press(close!);
    expect(queryByTestId('tooltip-content-test')).toBeNull();
    expect(mockOnClose).toHaveBeenCalledWith('test');
  });

  test('should show bottom when there is no space at top', async () => {
    // when
    const mockOnClose = jest.fn();

    const { queryByTestId, getByTestId, getByA11yHint } = render(
      <SafeAreaProvider>
        <TooltipProvider>
          <Tooltip
            id={'test'}
            content={'content Lorem ipsum dolor sit amet'}
            overlay
            hole
            position={'top'}
            onClose={mockOnClose}>
            <Text>trigger text</Text>
          </Tooltip>
        </TooltipProvider>
      </SafeAreaProvider>,
    );

    // then
    const trigger = queryByTestId('tooltip-trigger-test');
    const childWrapper = queryByTestId('tooltip-child-wrapper-test');
    childWrapper!.parent!.instance.measure = mockChildWrapperTopMeasure;
    fireEvent(childWrapper, 'layout', mockChildWrapperOnLayoutParam);
    fireEvent.press(trigger);

    const overlayLayout = queryByTestId('tooltip-overlay-wrapper-test');
    overlayLayout!.parent!.instance.measure = mockOverlayMeasure;
    fireEvent(overlayLayout!, 'layout', {});

    await waitFor(() => getByTestId('tooltip-content-test'));

    const popup = queryByTestId('tooltip-test');
    popup!.parent!.instance.measure = jest.fn().mockImplementation(f => {
      // x,y,w,h,px,py
      f(0, 0, 360, 200, 32, 62);
    });
    fireEvent(popup!, 'layout', {});
    expect(getByA11yHint('bottom')).not.toBeNull();
  });

  test('should show top when there is no space at bottom', async () => {
    // when
    const mockOnClose = jest.fn();

    const { queryByTestId, getByTestId, getByA11yHint } = render(
      <SafeAreaProvider>
        <TooltipProvider>
          <Tooltip
            id={'test'}
            content={'content Lorem ipsum dolor sit amet'}
            overlay
            hole
            position={'bottom'}
            onClose={mockOnClose}>
            <Text>trigger text</Text>
          </Tooltip>
        </TooltipProvider>
      </SafeAreaProvider>,
    );

    // then
    const trigger = queryByTestId('tooltip-trigger-test');
    const childWrapper = queryByTestId('tooltip-child-wrapper-test');
    childWrapper!.parent!.instance.measure = mockChildWrapperBottomMeasure;
    fireEvent(childWrapper, 'layout', mockChildWrapperOnLayoutParam);
    fireEvent.press(trigger);

    const overlayLayout = queryByTestId('tooltip-overlay-wrapper-test');
    overlayLayout!.parent!.instance.measure = mockOverlayMeasure;
    fireEvent(overlayLayout!, 'layout', {});

    await waitFor(() => getByTestId('tooltip-content-test'));

    const popup = queryByTestId('tooltip-test');
    popup!.parent!.instance.measure = jest.fn().mockImplementation(f => {
      // x,y,w,h,px,py
      f(0, 0, 360, 100, 32, deviceHeight - 100 - 21); // component height, inset bottom
    });
    fireEvent(popup!, 'layout', {});
    expect(getByA11yHint('top')).not.toBeNull();
  });

  test('should render overlay and hole', async () => {
    // when
    const { queryByTestId } = render(
      <SafeAreaProvider>
        <TooltipProvider>
          <Tooltip
            id={'test'}
            overlay
            hole
            position={undefined as any}
            content={'content Lorem ipsum dolor sit amet'}>
            <Text>trigger text</Text>
          </Tooltip>
        </TooltipProvider>
      </SafeAreaProvider>,
    );

    // then
    const trigger = queryByTestId('tooltip-trigger-test');
    const childWrapper = queryByTestId('tooltip-child-wrapper-test');
    childWrapper!.parent!.instance.measure = mockChildWrapperTopMeasure;

    fireEvent(childWrapper, 'layout', mockChildWrapperOnLayoutParam);
    fireEvent.press(trigger);

    const overlayLayout = queryByTestId('tooltip-overlay-wrapper-test');
    overlayLayout!.parent!.instance.measure = mockOverlayMeasure;
    fireEvent(overlayLayout, 'layout', {});

    const content = queryByTestId('tooltip-content-test');
    const overlay = queryByTestId('tooltip-overlay-test');
    const hole = queryByTestId('tooltip-hole-test');
    const contour = queryByTestId('tooltip-contour-test');
    expect(content).not.toBeNull();
    expect(overlay).not.toBeNull();
    expect(hole).not.toBeNull();
    expect(contour).toBeNull();
  });

  test('should render overlay and hole and contour', async () => {
    // when
    const { queryByTestId } = render(
      <SafeAreaProvider>
        <TooltipProvider>
          <Tooltip
            id={'test'}
            overlay
            hole
            contour
            position="bottom"
            content={'content Lorem ipsum dolor sit amet'}>
            <Text>trigger text</Text>
          </Tooltip>
        </TooltipProvider>
      </SafeAreaProvider>,
    );

    // then
    const trigger = queryByTestId('tooltip-trigger-test');
    const childWrapper = queryByTestId('tooltip-child-wrapper-test');
    childWrapper!.parent!.instance.measure = mockChildWrapperTopMeasure;

    fireEvent(childWrapper, 'layout', mockChildWrapperOnLayoutParam);
    fireEvent.press(trigger);

    const overlayLayout = queryByTestId('tooltip-overlay-wrapper-test');
    overlayLayout!.parent!.instance.measure = mockOverlayMeasure;
    fireEvent(overlayLayout, 'layout', {});

    const content = queryByTestId('tooltip-content-test');
    const overlay = queryByTestId('tooltip-overlay-test');
    const hole = queryByTestId('tooltip-hole-test');
    const contour = queryByTestId('tooltip-contour-test');
    expect(content).not.toBeNull();
    expect(overlay).not.toBeNull();
    expect(hole).not.toBeNull();
    expect(contour).not.toBeNull();
  });

  test('should show and hide via ref', async () => {
    // given
    const ref = React.createRef<TooltipRef>();
    const mockOnClose = jest.fn();
    // when
    const { queryByTestId } = render(
      <SafeAreaProvider>
        <TooltipProvider>
          <Tooltip
            id={'test'}
            ref={ref}
            overlay
            content={'content Lorem ipsum dolor sit amet'}
            position={'top'}
            onClose={mockOnClose}>
            <Text>trigger text</Text>
          </Tooltip>
        </TooltipProvider>
      </SafeAreaProvider>,
    );

    // then
    const childWrapper = queryByTestId('tooltip-child-wrapper-test');
    childWrapper!.parent!.instance.measure = mockChildWrapperTopMeasure;
    fireEvent(childWrapper, 'layout', mockChildWrapperOnLayoutParam);

    ref.current?.show();

    const overlayLayout = queryByTestId('tooltip-overlay-wrapper-test');
    overlayLayout!.parent!.instance.measure = mockOverlayMeasure;
    fireEvent(overlayLayout, 'layout', {});

    const content = queryByTestId('tooltip-content-test');
    expect(content).not.toBeNull();

    ref.current?.hide();
    expect(queryByTestId('tooltip-content-test')).toBeNull();
    expect(mockOnClose).toHaveBeenCalledWith('test');
  });

  test('should clear all tooltips', async () => {
    const ref1 = React.createRef<TooltipRef>();
    const ref2 = React.createRef<TooltipRef>();

    const Comp = () => {
      const { clearAll } = useTooltipContext();

      return (
        <Box>
          <Tooltip
            id={'test1'}
            ref={ref1}
            overlay
            hole
            content={'content 1'}
            position={'top'}>
            <Text>trigger text 1</Text>
          </Tooltip>
          <Tooltip
            id={'test2'}
            ref={ref2}
            overlay
            hole
            content={'content 2'}
            position={'top'}>
            <Text>trigger text 2</Text>
          </Tooltip>

          <Button testID="clear_all_btn" onPress={clearAll} label="Clear All" />
        </Box>
      );
    };
    // when
    const { queryByTestId } = render(
      <SafeAreaProvider>
        <TooltipProvider>
          <Comp />
        </TooltipProvider>
      </SafeAreaProvider>,
    );

    // then
    const childWrapper1 = queryByTestId('tooltip-child-wrapper-test1');
    const childWrapper2 = queryByTestId('tooltip-child-wrapper-test2');
    childWrapper1!.parent!.instance.measure = mockChildWrapperTopMeasure;
    childWrapper2!.parent!.instance.measure = jest
      .fn()
      .mockImplementation(f => {
        // x,y,w,h,px,py
        f(0, 0, 200, 30, 16, 64);
      });
    fireEvent(childWrapper1, 'layout', mockChildWrapperOnLayoutParam);
    fireEvent(childWrapper2, 'layout', mockChildWrapperOnLayoutParam);

    ref1.current?.show();
    ref2.current?.show();

    const overlayLayout = queryByTestId('tooltip-overlay-wrapper-test1');
    overlayLayout!.parent!.instance.measure = mockOverlayMeasure;
    fireEvent(overlayLayout!, 'layout', {});

    const content1 = queryByTestId('tooltip-content-test1');
    const content2 = queryByTestId('tooltip-content-test2');
    expect(content1).not.toBeNull();
    expect(content2).toBeNull();

    // clear all
    const btn = queryByTestId('clear_all_btn');
    fireEvent.press(btn!);

    expect(queryByTestId('tooltip-content-test1')).toBeNull();
    expect(queryByTestId('tooltip-content-test2')).toBeNull();
  });

  test('should wait for layout ready', async () => {
    const ref = React.createRef<TooltipRef>();
    // when
    const { queryByTestId } = render(
      <SafeAreaProvider>
        <TooltipProvider>
          <Tooltip
            id={'test'}
            ref={ref}
            overlay
            hole
            content={'content Lorem ipsum dolor sit amet'}
            position={'top'}>
            <Text>trigger text</Text>
          </Tooltip>
        </TooltipProvider>
      </SafeAreaProvider>,
    );

    // then
    const childWrapper = queryByTestId('tooltip-child-wrapper-test');
    childWrapper!.parent!.instance.measure = mockChildWrapperTopMeasure;

    ref.current?.show();
    expect(queryByTestId('tooltip-content-test')).toBeNull();

    fireEvent(childWrapper, 'layout', mockChildWrapperOnLayoutParam);

    const overlayLayout = queryByTestId('tooltip-overlay-wrapper-test');
    overlayLayout!.parent!.instance.measure = mockOverlayMeasure;
    fireEvent(overlayLayout!, 'layout', {});

    const content = queryByTestId('tooltip-content-test');
    expect(content).not.toBeNull();
  });

  test('should hide when press overlay', async () => {
    // when
    const { queryByTestId } = render(
      <SafeAreaProvider>
        <TooltipProvider>
          <Tooltip
            id={'test'}
            overlay
            hole
            content={'content Lorem ipsum dolor sit amet'}
            position={'top'}>
            <Text>trigger text</Text>
          </Tooltip>
        </TooltipProvider>
      </SafeAreaProvider>,
    );

    // then
    const childWrapper = queryByTestId('tooltip-child-wrapper-test');
    childWrapper!.parent!.instance.measure = mockChildWrapperTopMeasure;

    fireEvent(childWrapper, 'layout', mockChildWrapperOnLayoutParam);

    const trigger = queryByTestId('tooltip-trigger-test');
    fireEvent.press(trigger);
    const overlayLayout = queryByTestId('tooltip-overlay-wrapper-test');
    overlayLayout!.parent!.instance.measure = mockOverlayMeasure;
    fireEvent(overlayLayout, 'layout', {});

    fireEvent.press(overlayLayout);
    expect(queryByTestId('tooltip-content-test')).toBeNull();
  });
});
