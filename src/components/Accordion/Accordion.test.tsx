import React from 'react';
import { Animated } from 'react-native';
import theme from '../../theme';
import { act, fireEvent, render } from '../../test-utils';
import Accordion from './Accordion';
import Button from '../Button/Button';
import Text from '../Text/Text';

describe('Accordion', () => {
  test('should render closed accordion correctly', () => {
    // when
    const { toJSON, queryByTestId, getByTestId } = render(
      <Accordion title="Accordion Title" />,
    );

    // then
    expect(toJSON()).toMatchSnapshot();
    expect(queryByTestId('accordion-content')).toBeNull();
    expect(getByTestId('accordion-chevron').props.title).toBe('arrow-down');
  });

  test('should render accordion open by default', () => {
    // when
    const { getByTestId } = render(
      <Accordion title="Accordion Title" defaultOpen />,
    );

    // then
    expect(getByTestId('accordion-content')).toBeTruthy();
    expect(getByTestId('accordion-chevron').props.title).toBe('arrow-up');
  });

  test('should render header icon with default info icon', () => {
    // when
    const { getByTestId } = render(<Accordion title="Accordion Title" />);

    // then
    expect(getByTestId('accordion-header-icon').props.title).toBe('info');
  });

  test('should hide header icon when headerIcon is false', () => {
    // when
    const { queryByTestId } = render(
      <Accordion title="Accordion Title" headerIcon={false} />,
    );

    // then
    expect(queryByTestId('accordion-header-icon')).toBeNull();
  });

  test('should render custom header icon', () => {
    // when
    const { getByTestId } = render(
      <Accordion title="Accordion Title" headerIcon="warning" />,
    );

    // then
    expect(getByTestId('accordion-header-icon').props.title).toBe('warning');
  });

  test('should toggle open/close on header press', () => {
    // when
    const { getByTestId } = render(<Accordion title="Accordion Title" />);

    const header = getByTestId('accordion-header');

    fireEvent.press(header);

    // then
    expect(getByTestId('accordion-content')).toBeTruthy();
    expect(getByTestId('accordion-chevron').props.title).toBe('arrow-up');

    fireEvent.press(header);

    expect(() => getByTestId('accordion-content')).toThrow();
    expect(getByTestId('accordion-chevron').props.title).toBe('arrow-down');
  });

  test('should render children when open', () => {
    // when
    const { getByText } = render(
      <Accordion title="Accordion Title" defaultOpen>
        <Text>Content</Text>
      </Accordion>,
    );

    // then
    expect(getByText('Content')).toBeTruthy();
  });

  test('should call onOpenChange and keep controlled value when open prop provided', () => {
    // given
    const mockOnOpenChange = jest.fn();

    // when
    const { getByTestId, queryByTestId } = render(
      <Accordion
        title="Accordion Title"
        open={false}
        onOpenChange={mockOnOpenChange}
      />,
    );

    fireEvent.press(getByTestId('accordion-header'));

    // then
    expect(mockOnOpenChange).toBeCalledWith(true);
    expect(queryByTestId('accordion-content')).toBeNull();
  });

  test('should apply fullWidth styles when fullWidth is true', () => {
    // when
    const { getByTestId } = render(
      <Accordion title="Accordion Title" fullWidth />,
    );

    const accordion = getByTestId('accordion');

    // then
    expect(accordion.props.style[0].borderLeftWidth).toBe(0);
    expect(accordion.props.style[0].borderRightWidth).toBe(0);
    expect(accordion.props.style[0].borderTopWidth).toBe(1);
    expect(accordion.props.style[0].borderBottomWidth).toBe(1);
  });

  test('should apply default styles when fullWidth is false', () => {
    // when
    const { getByTestId } = render(<Accordion title="Accordion Title" />);

    const accordion = getByTestId('accordion');

    // then
    expect(accordion.props.style[0].borderLeftWidth).toBe(1);
    expect(accordion.props.style[0].borderRightWidth).toBe(1);
    expect(accordion.props.style[0].borderColor).toBe(
      theme.colors.neutralLighter,
    );
  });

  test('should render buttons as children', () => {
    // when
    const { getByTestId } = render(
      <Accordion title="Accordion Title" defaultOpen>
        <Button
          label="Button 1"
          kind="neutral"
          size="s"
          testID="accordion-button-1"
        />
        <Button
          label="Button 2"
          variant="secondary"
          kind="neutral"
          size="s"
          testID="accordion-button-2"
        />
      </Accordion>,
    );

    // then
    expect(getByTestId('accordion-button-1')).toBeTruthy();
    expect(getByTestId('accordion-button-2')).toBeTruthy();
  });

  test('should set pressed background color on header pressIn', () => {
    // when
    const { getByTestId } = render(<Accordion title="Accordion Title" />);

    const header = getByTestId('accordion-header');

    fireEvent(header, 'pressIn');

    // then
    expect(header.props.style[0].backgroundColor).toBe(
      theme.colors.neutralLightest,
    );

    fireEvent(header, 'pressOut');

    expect(header.props.style[0].backgroundColor).toBe('transparent');
  });

  test('should render measure container initially in animated mode', () => {
    // when
    const { getByTestId, queryByTestId } = render(
      <Accordion title="Accordion Title" animated />,
    );

    // then
    expect(getByTestId('accordion-content-measure')).toBeTruthy();
    expect(getByTestId('accordion-content')).toBeTruthy();
    expect(queryByTestId('accordion-animated-wrapper')).toBeNull();
  });

  test('should keep the animated wrapper constrained during the opening transition', () => {
    let rendered: ReturnType<typeof render>;
    const openingCommitHeights: unknown[] = [];
    const onRender = (_id: string, phase: string) => {
      if (phase !== 'update' || !rendered) {
        return;
      }
      openingCommitHeights.push(
        rendered.getByTestId('accordion-animated-wrapper').props.style.height,
      );
    };
    rendered = render(
      <React.Profiler id="accordion" onRender={onRender}>
        <Accordion title="Accordion Title" animated>
          <Text>Animated Content</Text>
        </Accordion>
      </React.Profiler>,
    );
    act(() => {
      rendered.getByTestId('accordion-content-measure').props.onLayout({
        nativeEvent: { layout: { height: 100 } },
      });
    });
    openingCommitHeights.length = 0;

    fireEvent.press(rendered.getByTestId('accordion-header'));

    expect(openingCommitHeights.length).toBeGreaterThan(0);
    expect(openingCommitHeights).not.toContain(undefined);
  });

  test('should keep content always mounted in animated mode', () => {
    // given
    const { getByTestId } = render(
      <Accordion title="Accordion Title" animated>
        <Text>Animated Content</Text>
      </Accordion>,
    );

    // then
    expect(getByTestId('accordion-content')).toBeTruthy();

    // when - toggle open
    fireEvent.press(getByTestId('accordion-header'));

    // then - content is still mounted
    expect(getByTestId('accordion-content')).toBeTruthy();
  });

  test('should toggle chevron on header press in animated mode', () => {
    // given
    const { getByTestId } = render(
      <Accordion title="Accordion Title" animated />,
    );

    const header = getByTestId('accordion-header');

    // when
    fireEvent.press(header);

    // then
    expect(getByTestId('accordion-chevron').props.title).toBe('arrow-up');
    expect(getByTestId('accordion-content')).toBeTruthy();
  });

  test('should stop the animation when unmounted', () => {
    const stop = jest.fn();
    const timingSpy = jest.spyOn(Animated, 'timing').mockReturnValue({
      start: jest.fn(),
      stop,
    } as unknown as Animated.CompositeAnimation);
    const { getByTestId, unmount } = render(
      <Accordion title="Accordion Title" animated />,
    );

    fireEvent.press(getByTestId('accordion-header'));
    unmount();

    expect(stop).toHaveBeenCalled();
    timingSpy.mockRestore();
  });
});
