import React from 'react';
import { Animated } from 'react-native';
import { fireEvent, render } from '../../test-utils';
import Text from '../Text/Text';
import Modal from './Modal';
import Box from '../Box/Box';

describe('Modal', () => {
  test('should not render Modal when visible false', () => {
    // when
    const { toJSON, queryByTestId } = render(
      <Modal testID="modal" visible={false} />,
    );

    const modalWrapper = queryByTestId('modal-wrapper');

    // then
    expect(modalWrapper).toBeNull();
    expect(toJSON()).toMatchSnapshot();
  });

  test('should not render Modal when visible true without children', () => {
    // when
    const { toJSON, queryByTestId } = render(
      <Modal accessibilityLabel="modal" visible={true} />,
    );

    const modalWrapper = queryByTestId('modal-wrapper');

    // then
    expect(modalWrapper).toBeNull();
    expect(toJSON()).toMatchSnapshot();
  });

  test('should render Modal when visible true with children', () => {
    // when
    const { toJSON, queryByTestId } = render(
      <Modal testID="modal" visible={true} title="test title">
        <Text testID="lorem-text">Lorem ipsum dolor</Text>
      </Modal>,
    );

    const modalWrapper = queryByTestId('modal-wrapper');
    const title = queryByTestId('modal-title');
    const content = queryByTestId('lorem-text');

    // then
    expect(modalWrapper).not.toBeNull();
    expect(title?.props.children).toBe('test title');
    expect(content).not.toBeNull();
    expect(toJSON()).toMatchSnapshot();
  });

  test('should render Modal without header', () => {
    // when
    const { toJSON, queryByTestId } = render(
      <Modal testID="modal" visible={true} closable={false}>
        <Text testID="lorem-text">Lorem ipsum dolor</Text>
      </Modal>,
    );

    const modalHeader = queryByTestId('modal-header');
    const title = queryByTestId('modal-title');
    const content = queryByTestId('lorem-text');

    // then
    expect(modalHeader).toBeNull();
    expect(title).toBeNull();
    expect(content).not.toBeNull();
    expect(toJSON()).toMatchSnapshot();
  });

  test('should show close button', () => {
    jest.useFakeTimers('modern').setSystemTime(17);
    const mockCloseButtonAction = jest.fn();
    // when
    const { getByTestId } = render(
      <Modal
        testID="modal"
        visible={true}
        closable={true}
        title="test title"
        closeButtonAction={mockCloseButtonAction}>
        <Text testID="lorem-text">Lorem ipsum dolor</Text>
      </Modal>,
    );

    const closeBtn = getByTestId('modal-close');
    jest.setSystemTime(1018);
    fireEvent.press(closeBtn);

    // then
    expect(mockCloseButtonAction).toBeCalled();
    jest.useRealTimers();
  });

  test('should not show close button', () => {
    const mockCloseButtonAction = jest.fn();
    // when
    const { queryByTestId } = render(
      <Modal
        testID="modal"
        visible={true}
        closable={false}
        title="test title"
        closeButtonAction={mockCloseButtonAction}>
        <Text testID="lorem-text">Lorem ipsum dolor</Text>
      </Modal>,
    );

    const closeBtn = queryByTestId('modal-close');

    // then
    expect(closeBtn).toBeNull();
  });

  test('overlay should close', () => {
    jest.useFakeTimers('modern').setSystemTime(17);
    const mockCloseButtonAction = jest.fn();
    // when
    const { getByTestId } = render(
      <Modal
        testID="modal"
        visible={true}
        closable={true}
        wrongPressThresholdMs={5000}
        title="test title"
        closeButtonAction={mockCloseButtonAction}>
        <Text testID="lorem-text">Lorem ipsum dolor</Text>
      </Modal>,
    );

    const overlay = getByTestId('modal-overlay');
    jest.setSystemTime(5018);
    fireEvent(overlay, 'onResponderRelease');

    // then
    expect(mockCloseButtonAction).toBeCalled();
    jest.useRealTimers();
  });

  test('overlay should not close when closable false', () => {
    const mockCloseButtonAction = jest.fn();
    // when
    const { getByTestId } = render(
      <Modal
        testID="modal"
        visible={true}
        closable={false}
        title="test title"
        closeButtonAction={mockCloseButtonAction}>
        <Text testID="lorem-text">Lorem ipsum dolor</Text>
      </Modal>,
    );

    const overlay = getByTestId('modal-overlay');
    fireEvent(overlay, 'onResponderRelease');

    // then
    expect(mockCloseButtonAction).not.toBeCalled();
  });

  test('overlay should fade animation', () => {
    const mockStart = jest.fn();
    const mockTiming = jest.fn().mockReturnValue({ start: mockStart });
    jest.spyOn(Animated, 'timing').mockImplementation(mockTiming);
    // when
    render(
      <Modal testID="modal" visible={true} closable={false} title="test title">
        <Text testID="lorem-text">Lorem ipsum dolor</Text>
      </Modal>,
    );

    // then
    expect(mockTiming).toBeCalled();
    expect(mockStart).toBeCalled();
  });

  test('should not show actions area', () => {
    // when
    const { queryByTestId } = render(
      <Modal testID="modal" visible={true} closable={true} title="test title">
        <Text testID="lorem-text">Lorem ipsum dolor</Text>
      </Modal>,
    );

    const actionsArea = queryByTestId('modal-actions-area');

    // then
    expect(actionsArea).toBeNull();
  });

  test('should show action button', () => {
    const mockOnPress = jest.fn();
    // when
    const { getByTestId, getByText, queryByTestId } = render(
      <Modal
        testID="modal"
        visible={true}
        closable={true}
        title="test title"
        actionButtonProps={{
          label: 'Test Action Button',
          onPress: mockOnPress,
        }}>
        <Text testID="lorem-text">Lorem ipsum dolor</Text>
      </Modal>,
    );

    const actionsArea = getByTestId('modal-actions-area');
    const actionBtn = getByTestId('modal-action');
    const secondActionBtn = queryByTestId('modal-second-action');
    const actionBtnLabel = getByText('Test Action Button');
    fireEvent.press(actionBtn);

    // then
    expect(actionsArea).not.toBeNull();
    expect(secondActionBtn).toBeNull();
    expect(actionBtnLabel).not.toBeNull();
    expect(mockOnPress).toBeCalled();
  });

  test('should show second action button', () => {
    const mockOnPress = jest.fn();
    // when
    const { getByTestId, getByText, queryByTestId } = render(
      <Modal
        testID="modal"
        visible={true}
        closable={true}
        title="test title"
        secondActionButtonProps={{
          label: 'Test Second Action Button',
          onPress: mockOnPress,
        }}>
        <Text testID="lorem-text">Lorem ipsum dolor</Text>
      </Modal>,
    );

    const actionsArea = getByTestId('modal-actions-area');
    const actionBtn = queryByTestId('modal-action');
    const secondActionBtn = getByTestId('modal-second-action');
    const secondActionBtnLabel = getByText('Test Second Action Button');
    fireEvent.press(secondActionBtn);

    // then
    expect(actionsArea).not.toBeNull();
    expect(actionBtn).toBeNull();
    expect(secondActionBtnLabel).not.toBeNull();
    expect(mockOnPress).toBeCalled();
  });

  test('should show two action buttons', () => {
    const mockFirstOnPress = jest.fn();
    const mockSecondOnPress = jest.fn();
    // when
    const { getByTestId } = render(
      <Modal
        testID="modal"
        visible={true}
        closable={true}
        title="test title"
        actionButtonProps={{
          label: 'Test Action Button',
          onPress: mockFirstOnPress,
        }}
        secondActionButtonProps={{
          label: 'Test Second Action Button',
          onPress: mockSecondOnPress,
        }}>
        <Text testID="lorem-text">Lorem ipsum dolor</Text>
      </Modal>,
    );

    const actionsArea = getByTestId('modal-actions-area');
    const actionBtn = getByTestId('modal-action');
    const secondActionBtn = getByTestId('modal-second-action');
    fireEvent.press(actionBtn);
    fireEvent.press(secondActionBtn);

    // then
    expect(actionsArea).not.toBeNull();
    expect(mockFirstOnPress).toBeCalled();
    expect(mockSecondOnPress).toBeCalled();
  });

  test('should show multiple modals', () => {
    // when
    const { getByTestId } = render(
      <Box>
        <Text testID="">It shows multiple modals</Text>
        <Modal
          modalKey="first"
          testID="first-modal"
          visible={true}
          closable={true}
          title="first modal">
          <Text testID="first-content">first modal content</Text>
        </Modal>
        <Modal
          modalKey="second"
          testID="second-modal"
          visible={true}
          closable={true}
          title="second modal">
          <Text testID="second-content">second modal content</Text>
        </Modal>
      </Box>,
    );

    const firstModalWrapper = getByTestId('first-modal-wrapper');
    const secondModalWrapper = getByTestId('second-modal-wrapper');

    // then
    expect(firstModalWrapper).not.toBeNull();
    expect(secondModalWrapper).not.toBeNull();
  });
});
