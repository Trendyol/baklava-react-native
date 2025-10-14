import React from 'react';
import { fireEvent, render } from '../../test-utils';
import BottomSheet from './BottomSheet';
import Text from '../Text/Text';

describe('BottomSheet', () => {
  test('should render BottomSheet when visible false', () => {
    // when
    const { toJSON, queryByTestId } = render(
      <BottomSheet
        testID="modal"
        visible={false}
        title="Base Title"
        closeButtonLabel="Close"
        selectButtonLabel="Select"
      />,
    );

    // then
    const modalWrapper = queryByTestId('modal-wrapper');
    expect(modalWrapper).toBeNull();
    expect(toJSON()).toMatchSnapshot();
  });

  test('should render BottomSheet when visible true', () => {
    // when
    const { toJSON, queryByTestId } = render(
      <BottomSheet
        testID="modal"
        visible={true}
        title="Base Title"
        closeButtonLabel="Close"
        selectButtonLabel="Select">
        <Text>Base Content</Text>
      </BottomSheet>,
    );

    // then
    const modalWrapper = queryByTestId('modal-wrapper');
    expect(modalWrapper).not.toBeNull();
    expect(toJSON()).toMatchSnapshot();
  });

  test('should render BottomSheet when closeButtonAction is called', () => {
    // when
    const closeButtonAction = jest.fn();
    const { queryByTestId } = render(
      <BottomSheet
        testID="modal"
        visible={true}
        title="Base Title"
        closeButtonAction={closeButtonAction}
        closeButtonLabel="Close"
        selectButtonLabel="Select">
        <Text>Base Content</Text>
      </BottomSheet>,
    );

    fireEvent.press(queryByTestId('modal-header-close'));

    // then
    expect(closeButtonAction).toHaveBeenCalled();
  });

  test('should render BottomSheet when selectButtonAction is called', () => {
    // when
    const selectButtonAction = jest.fn();
    const { queryByTestId } = render(
      <BottomSheet
        testID="modal"
        visible={true}
        title="Base Title"
        selectButtonAction={selectButtonAction}
        closeButtonLabel="Close"
        selectButtonLabel="Select">
        <Text>Base Content</Text>
      </BottomSheet>,
    );

    fireEvent.press(queryByTestId('modal-header-select'));

    // then
    expect(selectButtonAction).toHaveBeenCalled();
  });

  test('should render BottomSheet when title is given', () => {
    // when
    const { queryByTestId } = render(
      <BottomSheet
        testID="modal"
        visible={true}
        title="Base Title"
        closeButtonLabel="Close"
        selectButtonLabel="Select">
        <Text>Base Content</Text>
      </BottomSheet>,
    );

    // then
    expect(queryByTestId('modal-header-label').children[0]).toEqual(
      'Base Title',
    );
  });
});
