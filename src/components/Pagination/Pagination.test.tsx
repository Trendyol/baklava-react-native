import React from 'react';
import { Pressable } from 'react-native';
import { ReactTestInstance } from 'react-test-renderer';
import theme from '../../theme';
import { fireEvent, render } from '../../test-utils';
import Pagination, { PaginationProps } from './Pagination';

const renderPagination = (props?: Partial<PaginationProps>) => {
  const onPageChange = props?.onPageChange ?? jest.fn();

  return {
    onPageChange,
    ...render(
      <Pagination
        currentPage={1}
        totalPages={150}
        onPageChange={onPageChange}
        {...props}
      />,
    ),
  };
};

describe('Pagination', () => {
  test('should render simple pagination correctly', () => {
    // when
    const { toJSON } = renderPagination();

    // then
    expect(toJSON()).toMatchSnapshot();
  });

  test('should render the simple start range with default props', () => {
    // when
    const { getByTestId, queryByTestId } = renderPagination();

    // then
    expect(getByTestId('pagination-page-1')).toBeTruthy();
    expect(getByTestId('pagination-page-5')).toBeTruthy();
    expect(getByTestId('pagination-ellipsis-end')).toBeTruthy();
    expect(getByTestId('pagination-page-150')).toBeTruthy();
    expect(queryByTestId('pagination-ellipsis-start')).toBeNull();
    expect(queryByTestId('pagination-first')).toBeNull();
    expect(queryByTestId('pagination-last')).toBeNull();
  });

  test('should render the simple middle range and selected page styles', () => {
    // when
    const { getByTestId } = renderPagination({ currentPage: 8 });
    const selectedPage = getByTestId('pagination-page-8');
    const inactivePage = getByTestId('pagination-page-7');

    // then
    expect(getByTestId('pagination-ellipsis-start')).toBeTruthy();
    expect(getByTestId('pagination-ellipsis-end')).toBeTruthy();
    expect(selectedPage.props.accessibilityState.selected).toBe(true);
    expect(selectedPage.props.style[1].backgroundColor).toBe(
      theme.colors.neutralDarker,
    );
    expect(selectedPage.props.style[1].borderRadius).toBe(
      theme.pagination.borderRadius,
    );
    expect(inactivePage.props.accessibilityState.selected).toBe(false);
  });

  test('should render all pages without ellipsis when pages fit', () => {
    // when
    const { getByTestId, queryByTestId } = renderPagination({
      currentPage: 2,
      totalPages: 3,
    });

    // then
    expect(getByTestId('pagination-page-1')).toBeTruthy();
    expect(getByTestId('pagination-page-2')).toBeTruthy();
    expect(getByTestId('pagination-page-3')).toBeTruthy();
    expect(queryByTestId('pagination-ellipsis-start')).toBeNull();
    expect(queryByTestId('pagination-ellipsis-end')).toBeNull();
  });

  test('should call onPageChange for previous, next and page buttons', () => {
    // given
    const onPageChange = jest.fn();
    const { getByTestId } = renderPagination({
      currentPage: 8,
      onPageChange,
    });

    // when
    fireEvent.press(getByTestId('pagination-previous'));
    fireEvent.press(getByTestId('pagination-next'));
    fireEvent.press(getByTestId('pagination-page-1'));

    // then
    expect(onPageChange).toHaveBeenNthCalledWith(1, 7);
    expect(onPageChange).toHaveBeenNthCalledWith(2, 9);
    expect(onPageChange).toHaveBeenNthCalledWith(3, 1);
  });

  test('should not call onPageChange for the selected page', () => {
    // given
    const onPageChange = jest.fn();
    const { UNSAFE_getAllByType } = renderPagination({
      currentPage: 8,
      onPageChange,
    });
    const selectedPage = UNSAFE_getAllByType(Pressable).find(
      (page: ReactTestInstance) => page.props.testID === 'pagination-page-8',
    );

    // when
    selectedPage?.props.onPress();

    // then
    expect(onPageChange).not.toHaveBeenCalled();
  });

  test('should disable previous navigation on the first page', () => {
    // given
    const onPageChange = jest.fn();
    const { getByTestId } = renderPagination({ onPageChange });
    const previousButton = getByTestId('pagination-previous');
    const previousIcon = getByTestId('pagination-previous-icon');

    // when
    fireEvent.press(previousButton);

    // then
    expect(previousButton.props.accessibilityLabel).toBe('Go to previous page');
    expect(previousButton.props.accessibilityState.disabled).toBe(true);
    expect(previousIcon.props.title).toBe('arrow-left');
    expect(previousIcon.props.fill).toBe(theme.colors.neutralLighter);
    expect(onPageChange).not.toHaveBeenCalled();
  });

  test('should enable next navigation on the first page', () => {
    // given
    const onPageChange = jest.fn();
    const { getByTestId } = renderPagination({ onPageChange });
    const nextButton = getByTestId('pagination-next');
    const nextIcon = getByTestId('pagination-next-icon');

    // when
    fireEvent.press(nextButton);

    // then
    expect(nextButton.props.accessibilityLabel).toBe('Go to next page');
    expect(nextButton.props.accessibilityState.disabled).toBe(false);
    expect(nextIcon.props.title).toBe('arrow-right');
    expect(nextIcon.props.fill).toBe(theme.colors.neutralDarker);
    expect(onPageChange).toHaveBeenCalledWith(2);
  });

  test('should disable next navigation on the last page', () => {
    // given
    const onPageChange = jest.fn();
    const { getByTestId } = renderPagination({
      currentPage: 10,
      totalPages: 10,
      onPageChange,
    });
    const nextButton = getByTestId('pagination-next');

    // when
    fireEvent.press(nextButton);

    // then
    expect(nextButton.props.accessibilityState.disabled).toBe(true);
    expect(getByTestId('pagination-next-icon').props.fill).toBe(
      theme.colors.neutralLighter,
    );
    expect(onPageChange).not.toHaveBeenCalled();
  });

  test('should render jumper controls and call first and last page actions', () => {
    // given
    const onPageChange = jest.fn();
    const { getByTestId } = renderPagination({
      currentPage: 8,
      totalPages: 15,
      hasJumper: true,
      onPageChange,
    });
    const firstButton = getByTestId('pagination-first');
    const lastButton = getByTestId('pagination-last');

    // when
    fireEvent.press(firstButton);
    fireEvent.press(lastButton);

    // then
    expect(firstButton.props.accessibilityLabel).toBe('Go to first page');
    expect(lastButton.props.accessibilityLabel).toBe('Go to last page');
    expect(getByTestId('pagination-first-icon').props.title).toBe(
      'double-arrow-left',
    );
    expect(getByTestId('pagination-last-icon').props.title).toBe(
      'double-arrow-right',
    );
    expect(onPageChange).toHaveBeenNthCalledWith(1, 1);
    expect(onPageChange).toHaveBeenNthCalledWith(2, 15);
  });

  test('should disable first and previous buttons at the jumper start', () => {
    // given
    const onPageChange = jest.fn();
    const { getByTestId } = renderPagination({
      totalPages: 15,
      hasJumper: true,
      onPageChange,
    });

    // when
    fireEvent.press(getByTestId('pagination-first'));
    fireEvent.press(getByTestId('pagination-previous'));

    // then
    expect(
      getByTestId('pagination-first').props.accessibilityState.disabled,
    ).toBe(true);
    expect(getByTestId('pagination-first-icon').props.fill).toBe(
      theme.colors.neutralLighter,
    );
    expect(onPageChange).not.toHaveBeenCalled();
  });

  test('should disable last and next buttons at the jumper end', () => {
    // given
    const onPageChange = jest.fn();
    const { getByTestId } = renderPagination({
      currentPage: 15,
      totalPages: 15,
      hasJumper: true,
      onPageChange,
    });

    // when
    fireEvent.press(getByTestId('pagination-next'));
    fireEvent.press(getByTestId('pagination-last'));

    // then
    expect(
      getByTestId('pagination-last').props.accessibilityState.disabled,
    ).toBe(true);
    expect(getByTestId('pagination-last-icon').props.fill).toBe(
      theme.colors.neutralLighter,
    );
    expect(onPageChange).not.toHaveBeenCalled();
  });

  test('should use a custom testID for all elements', () => {
    // when
    const { getByTestId } = renderPagination({
      currentPage: 2,
      totalPages: 3,
      testID: 'custom-pagination',
    });

    // then
    expect(getByTestId('custom-pagination')).toBeTruthy();
    expect(getByTestId('custom-pagination-previous')).toBeTruthy();
    expect(getByTestId('custom-pagination-page-2')).toBeTruthy();
    expect(getByTestId('custom-pagination-next')).toBeTruthy();
  });

  test('should clamp currentPage below the first page', () => {
    // when
    const { getByTestId } = renderPagination({
      currentPage: 0,
      totalPages: 3,
    });

    // then
    expect(
      getByTestId('pagination-page-1').props.accessibilityState.selected,
    ).toBe(true);
    expect(
      getByTestId('pagination-previous').props.accessibilityState.disabled,
    ).toBe(true);
  });

  test('should clamp currentPage above the last page', () => {
    // when
    const { getByTestId } = renderPagination({
      currentPage: 99,
      totalPages: 3,
    });

    // then
    expect(
      getByTestId('pagination-page-3').props.accessibilityState.selected,
    ).toBe(true);
    expect(
      getByTestId('pagination-next').props.accessibilityState.disabled,
    ).toBe(true);
  });

  test('should render a single page for an invalid totalPages value', () => {
    // when
    const { getByTestId, queryByTestId } = renderPagination({
      currentPage: 5,
      totalPages: 0,
    });

    // then
    expect(getByTestId('pagination-page-1')).toBeTruthy();
    expect(queryByTestId('pagination-page-2')).toBeNull();
    expect(
      getByTestId('pagination-previous').props.accessibilityState.disabled,
    ).toBe(true);
    expect(
      getByTestId('pagination-next').props.accessibilityState.disabled,
    ).toBe(true);
  });
});
