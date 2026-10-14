import React from 'react';
import theme from '../../theme';
import { fireEvent, render } from '../../test-utils';
import Text from '../Text/Text';
import Checkbox from '../Checkbox/Checkbox';
import ListItem from './ListItem';

const SAMPLE_IMAGE =
  'https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/44/e5/9c/44e59caf-c7f4-90c0-fac6-2b22d3a66a5a/AppIcon-1x_U007emarketing-0-10-0-sRGB-85-220.png/1200x600wa.png';

describe('ListItem', () => {
  test('should render basic ListItem correctly', () => {
    const { toJSON, getByTestId } = render(
      <ListItem title="Product Title">
        <Text>Detail</Text>
      </ListItem>,
    );

    expect(toJSON()).toMatchSnapshot();
    expect(getByTestId('list-item-title').props.children).toBe('Product Title');
    expect(getByTestId('list-item-content')).toBeTruthy();
  });

  test('should render children without title', () => {
    const { getByText, queryByTestId } = render(
      <ListItem>
        <Text>Custom content</Text>
      </ListItem>,
    );

    expect(getByText('Custom content')).toBeTruthy();
    expect(queryByTestId('list-item-title')).toBeNull();
  });

  test('should render leading slot', () => {
    const { getByTestId } = render(
      <ListItem
        title="Title"
        leading={<Checkbox checked={false} testID="row-checkbox" />}
      />,
    );

    expect(getByTestId('list-item-leading')).toBeTruthy();
    expect(getByTestId('row-checkbox')).toBeTruthy();
  });

  test('should not render image zone when image is not provided', () => {
    const { queryByTestId } = render(<ListItem title="Title" />);

    expect(queryByTestId('list-item-image')).toBeNull();
    expect(queryByTestId('list-item-image-wrap')).toBeNull();
  });

  test('should render image from url string', () => {
    const { getByTestId } = render(
      <ListItem title="Title" image={SAMPLE_IMAGE} />,
    );

    expect(getByTestId('list-item-image')).toBeTruthy();
    expect(getByTestId('list-item-image').props.source).toEqual({
      uri: SAMPLE_IMAGE,
    });
  });

  test('should render imageBadge when provided', () => {
    const { getByTestId } = render(
      <ListItem title="Title" image={SAMPLE_IMAGE} imageBadge={2} />,
    );

    expect(getByTestId('list-item-image-badge')).toBeTruthy();
    expect(getByTestId('list-item-image-badge-text').props.children).toBe('2');
  });

  test('should not render imageBadge when omitted', () => {
    const { queryByTestId } = render(
      <ListItem title="Title" image={SAMPLE_IMAGE} />,
    );

    expect(queryByTestId('list-item-image-badge')).toBeNull();
  });

  test('should call onImagePress when image is pressed', () => {
    const onImagePress = jest.fn();
    const { getByTestId } = render(
      <ListItem
        title="Title"
        image={SAMPLE_IMAGE}
        onImagePress={onImagePress}
      />,
    );

    fireEvent.press(getByTestId('list-item-image-pressable'));
    expect(onImagePress).toHaveBeenCalledTimes(1);
  });

  test('should apply selected background color', () => {
    const { getByTestId } = render(<ListItem title="Title" selected />);

    expect(getByTestId('list-item').props.style[0].backgroundColor).toBe(
      theme.colors.primaryContrast,
    );
  });

  test('should call onPress when body is pressed', () => {
    const onPress = jest.fn();
    const { getByTestId } = render(
      <ListItem title="Title" onPress={onPress} />,
    );

    fireEvent.press(getByTestId('list-item-body-pressable'));
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  test('should render action button and call onActionPress', () => {
    const onActionPress = jest.fn();
    const { getByTestId } = render(
      <ListItem title="Title" showActionButton onActionPress={onActionPress} />,
    );

    expect(getByTestId('list-item-action-icon').props.title).toBe(
      'arrow-right',
    );
    fireEvent.press(getByTestId('list-item-action-pressable'));
    expect(onActionPress).toHaveBeenCalledTimes(1);
  });

  test('should fall back action press to onPress when onActionPress is missing', () => {
    const onPress = jest.fn();
    const { getByTestId } = render(
      <ListItem title="Title" showActionButton onPress={onPress} />,
    );

    fireEvent.press(getByTestId('list-item-action-pressable'));
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  test('should render custom trailing instead of default action icon', () => {
    const { getByText, queryByTestId } = render(
      <ListItem title="Title" trailing={<Text>Custom</Text>} />,
    );

    expect(getByText('Custom')).toBeTruthy();
    expect(queryByTestId('list-item-action-icon')).toBeNull();
  });

  test('should render footer always', () => {
    const { getByTestId, getByText } = render(
      <ListItem title="Title" footer={<Text>Footer content</Text>} />,
    );

    expect(getByTestId('list-item-footer')).toBeTruthy();
    expect(getByText('Footer content')).toBeTruthy();
  });

  test('should hide collapse content when collapsed by default', () => {
    const { queryByTestId, getByTestId } = render(
      <ListItem
        title="Title"
        collapsible
        collapseContent={<Text>Hidden</Text>}
      />,
    );

    expect(queryByTestId('list-item-collapse-content')).toBeNull();
    expect(getByTestId('list-item-collapse-label').props.children).toBe(
      'Show More',
    );
    expect(getByTestId('list-item-collapse-icon').props.title).toBe(
      'arrow-down',
    );
  });

  test('should show collapse content when defaultExpanded', () => {
    const { getByTestId } = render(
      <ListItem
        title="Title"
        collapsible
        defaultExpanded
        collapseContent={<Text>Visible</Text>}
      />,
    );

    expect(getByTestId('list-item-collapse-content')).toBeTruthy();
    expect(getByTestId('list-item-collapse-label').props.children).toBe(
      'Collapse',
    );
    expect(getByTestId('list-item-collapse-icon').props.title).toBe('arrow-up');
  });

  test('should toggle expand/collapse in uncontrolled mode', () => {
    const onExpandedChange = jest.fn();
    const { getByTestId, queryByTestId } = render(
      <ListItem
        title="Title"
        collapsible
        onExpandedChange={onExpandedChange}
        collapseContent={<Text>Details</Text>}
      />,
    );

    fireEvent.press(getByTestId('list-item-collapse-toggle'));
    expect(onExpandedChange).toHaveBeenCalledWith(true);
    expect(getByTestId('list-item-collapse-content')).toBeTruthy();

    fireEvent.press(getByTestId('list-item-collapse-toggle'));
    expect(onExpandedChange).toHaveBeenCalledWith(false);
    expect(queryByTestId('list-item-collapse-content')).toBeNull();
  });

  test('should respect controlled expanded and still notify onExpandedChange', () => {
    const onExpandedChange = jest.fn();
    const { getByTestId, queryByTestId } = render(
      <ListItem
        title="Title"
        collapsible
        expanded={false}
        onExpandedChange={onExpandedChange}
        collapseContent={<Text>Details</Text>}
      />,
    );

    fireEvent.press(getByTestId('list-item-collapse-toggle'));
    expect(onExpandedChange).toHaveBeenCalledWith(true);
    expect(queryByTestId('list-item-collapse-content')).toBeNull();
  });

  test('should use custom expand and collapse labels', () => {
    const { getByTestId } = render(
      <ListItem
        title="Title"
        collapsible
        expandLabel="Show Less"
        collapseLabel="Show Less"
        defaultExpanded
        collapseContent={<Text>X</Text>}
      />,
    );

    expect(getByTestId('list-item-collapse-label').props.children).toBe(
      'Show Less',
    );
  });

  test('should apply filled collapse button background by default', () => {
    const { getByTestId } = render(
      <ListItem
        title="Title"
        collapsible
        defaultExpanded
        collapseContent={<Text>X</Text>}
      />,
    );

    expect(
      getByTestId('list-item-collapse-button').props.style[0].backgroundColor,
    ).toBe(theme.colors.neutralLightest);
  });

  test('should apply transparent background for ghost collapse button', () => {
    const { getByTestId } = render(
      <ListItem
        title="Title"
        collapsible
        defaultExpanded
        collapseButtonVariant="ghost"
        collapseContent={<Text>X</Text>}
      />,
    );

    expect(
      getByTestId('list-item-collapse-button').props.style[0].backgroundColor,
    ).toBe(theme.colors.transparent);
  });

  test('should hide collapse button when collapsed and visibility is expanded', () => {
    const { queryByTestId, getByTestId, rerender } = render(
      <ListItem
        title="Title"
        collapsible
        expanded={false}
        collapseButtonVisibility="expanded"
        collapseContent={<Text>X</Text>}
      />,
    );

    expect(queryByTestId('list-item-collapse-toggle')).toBeNull();

    rerender(
      <ListItem
        title="Title"
        collapsible
        expanded
        collapseButtonVisibility="expanded"
        collapseContent={<Text>X</Text>}
      />,
    );

    expect(getByTestId('list-item-collapse-toggle')).toBeTruthy();
  });

  test('should not fire presses when disabled', () => {
    const onPress = jest.fn();
    const onImagePress = jest.fn();
    const onActionPress = jest.fn();
    const onExpandedChange = jest.fn();

    const { getByTestId } = render(
      <ListItem
        title="Title"
        disabled
        image={SAMPLE_IMAGE}
        onImagePress={onImagePress}
        onPress={onPress}
        showActionButton
        onActionPress={onActionPress}
        collapsible
        onExpandedChange={onExpandedChange}
        collapseContent={<Text>X</Text>}
      />,
    );

    fireEvent.press(getByTestId('list-item-body-pressable'));
    fireEvent.press(getByTestId('list-item-image-pressable'));
    fireEvent.press(getByTestId('list-item-action-pressable'));
    fireEvent.press(getByTestId('list-item-collapse-toggle'));

    expect(onPress).not.toHaveBeenCalled();
    expect(onImagePress).not.toHaveBeenCalled();
    expect(onActionPress).not.toHaveBeenCalled();
    expect(onExpandedChange).not.toHaveBeenCalled();
  });

  test('should render action pressable when showActionButton without handlers', () => {
    const { getByTestId } = render(<ListItem title="Title" showActionButton />);

    expect(getByTestId('list-item-action-pressable')).toBeTruthy();
    expect(getByTestId('list-item-action-icon').props.title).toBe(
      'arrow-right',
    );
    fireEvent.press(getByTestId('list-item-action-pressable'));
  });

  test('should support custom testID prefix', () => {
    const { getByTestId } = render(
      <ListItem testID="row" title="Title" showActionButton />,
    );

    expect(getByTestId('row')).toBeTruthy();
    expect(getByTestId('row-title')).toBeTruthy();
    expect(getByTestId('row-action-icon')).toBeTruthy();
  });
});
