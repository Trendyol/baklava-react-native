import React from 'react';
import theme from '../../theme';
import { fireEvent, render } from '../../test-utils';
import Tabs from './Tabs';
import Box from '../Box/Box';
import Text from '../Text/Text';
import insertObjectBetweenElements from './utils';

describe('Tabs', () => {
  beforeEach(() => {});

  test('should render Tabs correctly', () => {
    // given
    const { toJSON, getByTestId } = render(
      <Tabs value="tab1" onValueChange={() => {}} defaultValue="tab1">
        <Tabs.List>
          <Tabs.Option value="tab1" title="Tab 1" />
          <Tabs.Option value="tab2" title="Tab 2" />
        </Tabs.List>
        <Tabs.Content value="tab1">
          <Text>Tab 1 Content</Text>
        </Tabs.Content>
        <Tabs.Content value="tab2">
          <Text>Tab 2 Content</Text>
        </Tabs.Content>
      </Tabs>,
    );

    // when
    const tabsComponent = getByTestId('tabsBox');
    const listComponent = getByTestId('tabsListBox');

    // then
    expect(toJSON()).toMatchSnapshot();
    expect(tabsComponent).toBeTruthy();
    expect(listComponent).toBeTruthy();
  });

  test('should change selected tab on press', () => {
    // given
    const onValueChange = jest.fn();
    const { getByText } = render(
      <Tabs value="tab1" onValueChange={onValueChange} defaultValue="tab1">
        <Tabs.List>
          <Tabs.Option value="tab1" title="Tab 1" />
          <Tabs.Option value="tab2" title="Tab 2" />
        </Tabs.List>
        <Tabs.Content value="tab1">
          <Text>Tab 1 Content</Text>
        </Tabs.Content>
        <Tabs.Content value="tab2">
          <Text>Tab 2 Content</Text>
        </Tabs.Content>
      </Tabs>,
    );

    // when
    fireEvent.press(getByText('Tab 2'));

    // then
    expect(onValueChange).toHaveBeenCalledWith('tab2');
  });

  test('should change selected tab on press when value undefined', () => {
    // given
    const onValueChange = jest.fn();
    const { getByText } = render(
      <Tabs value={undefined} onValueChange={onValueChange} defaultValue="tab1">
        <Tabs.List>
          <Tabs.Option value="tab1" title="Tab 1" />
          <Tabs.Option value="tab2" title="Tab 2" />
        </Tabs.List>
        <Tabs.Content value="tab1">
          <Text>Tab 1 Content</Text>
        </Tabs.Content>
        <Tabs.Content value="tab2">
          <Text>Tab 2 Content</Text>
        </Tabs.Content>
      </Tabs>,
    );

    // when
    fireEvent.press(getByText('Tab 2'));

    // then
    expect(onValueChange).toHaveBeenCalledWith('tab2');
  });

  test('should not trigger onValueChange when disabled tab is pressed', () => {
    // given
    const onValueChange = jest.fn();
    const { getByText } = render(
      <Tabs value="tab1" onValueChange={onValueChange}>
        <Tabs.List>
          <Tabs.Option value="tab1" title="Tab 1" />
          <Tabs.Option value="tab2" title="Tab 2" disabled />
        </Tabs.List>
        <Tabs.Content value="tab1">
          <Text>Tab 1 Content</Text>
        </Tabs.Content>
        <Tabs.Content value="tab2">
          <Text>Tab 2 Content</Text>
        </Tabs.Content>
      </Tabs>,
    );

    // when
    fireEvent.press(getByText('Tab 2'));

    // then
    expect(onValueChange).not.toHaveBeenCalled();
  });

  test('should update value state when uncontrolled (defaultValue is used)', () => {
    // given
    const onValueChangeMock = jest.fn();
    const { getByText } = render(
      <Tabs value="tab1" defaultValue="tab1" onValueChange={onValueChangeMock}>
        <Tabs.List>
          <Tabs.Option value="tab1" title="Tab 1" />
          <Tabs.Option value="tab2" title="Tab 2" />
        </Tabs.List>
      </Tabs>,
    );

    const tab2 = getByText('Tab 2');

    // when
    fireEvent.press(tab2);

    // then
    expect(onValueChangeMock).toHaveBeenCalledWith('tab2');
  });

  test('should render correct content based on selected tab', () => {
    // given
    const { getByTestId, queryByTestId } = render(
      <Tabs value="tab1" onValueChange={() => {}}>
        <Tabs.List>
          <Tabs.Option value="tab1" title="Tab 1" />
          <Tabs.Option value="tab2" title="Tab 2" />
        </Tabs.List>
        <Tabs.Content value="tab1">
          <Box testID="content-tab1">
            <Text>Tab 1 Content</Text>
          </Box>
        </Tabs.Content>
        <Tabs.Content value="tab2">
          <Box testID="content-tab2">
            <Text>Tab 2 Content</Text>
          </Box>
        </Tabs.Content>
      </Tabs>,
    );

    // then
    expect(getByTestId('content-tab1')).toBeTruthy();
    expect(queryByTestId('content-tab2')).toBeNull();
  });

  test('should have neutralLight color when disabled', () => {
    // given
    const { getByTestId } = render(
      <Tabs value="tab1" onValueChange={jest.fn()}>
        <Tabs.List>
          <Tabs.Option
            value="tab1"
            title="Tab 1"
            disabled
            iconName="heart"
            badgeText="test"
          />
        </Tabs.List>
      </Tabs>,
    );

    // when
    const title = getByTestId('tabTitle');
    const icon = getByTestId('tabIcon');
    const badge = getByTestId('tabBadge');
    const badgeText = getByTestId('badgeText');

    // then
    expect(title.props.style[0].color).toEqual(theme.colors.neutralLight);
    expect(icon.props.fill).toEqual(theme.colors.neutralLight);
    expect(badgeText.props.style[0].color).toEqual(theme.colors.neutralFull);
    expect(badge.props.style[1].backgroundColor).toEqual(
      theme.colors.dangerKey,
    );
  });

  test('should have primaryKey color when selected and enabled', () => {
    // given
    const { getByTestId } = render(
      <Tabs value="tab1" onValueChange={jest.fn()}>
        <Tabs.List>
          <Tabs.Option
            value="tab1"
            title="Tab 1"
            iconName="heart"
            badgeText="test"
          />
        </Tabs.List>
      </Tabs>,
    );

    // when
    const title = getByTestId('tabTitle');
    const icon = getByTestId('tabIcon');
    const badge = getByTestId('tabBadge');
    const badgeText = getByTestId('badgeText');

    // then
    expect(title.props.style[0].color).toEqual(theme.colors.primaryKey);
    expect(icon.props.fill).toEqual(theme.colors.primaryKey);
    expect(badgeText.props.style[0].color).toEqual(theme.colors.neutralFull);
    expect(badge.props.style[1].backgroundColor).toEqual(
      theme.colors.dangerKey,
    );
  });

  test('should render caption when provided', () => {
    // given
    const { getByText } = render(
      <Tabs value="tab1" onValueChange={jest.fn()}>
        <Tabs.List>
          <Tabs.Option
            value="tab1"
            title="Tab 1"
            caption="Test Caption"
            disabled
          />
        </Tabs.List>
      </Tabs>,
    );

    // when
    const tab1 = getByText('Tab 1');

    // then
    expect(getByText('Test Caption')).toBeTruthy();
    expect(tab1.props.style[0].color).toEqual(theme.colors.neutralLight);
  });

  test('should not render caption when not provided', () => {
    // given
    const { queryByText } = render(
      <Tabs value="tab1" onValueChange={jest.fn()}>
        <Tabs.List>
          <Tabs.Option value="tab1" title="Tab 1" />
        </Tabs.List>
      </Tabs>,
    );

    // then
    expect(queryByText('Test Caption')).toBeNull();
  });

  test('should render title with neutralDarker color when not disabled and not selected', () => {
    // Given
    const onValueChange = jest.fn();
    const { getByText } = render(
      <Tabs value="tab1" onValueChange={onValueChange}>
        <Tabs.List>
          <Tabs.Option value="tab1" title="Option 1" caption="Caption 1" />
          <Tabs.Option value="tab2" title="Option 2" caption="Caption 2" />
        </Tabs.List>
      </Tabs>,
    );

    // When
    const option2Text = getByText('Option 2');

    // Then
    expect(option2Text.props.style[0].color).toBe(theme.colors.neutralDarker);
  });

  test('should throw error if Tabs.Option is used outside of Tabs', () => {
    // given
    const consoleErrorSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    // then
    expect(() => render(<Tabs.Option value="tab1" title="Tab 1" />)).toThrow(
      'Tabs.Option must be used within Tabs',
    );

    consoleErrorSpy.mockRestore();
  });

  test('should throw error if Tabs.Content is used outside of Tabs', () => {
    // given
    const consoleErrorSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    // then
    expect(() => render(<Tabs.Content value="tab1" />)).toThrow(
      'Tabs.Content must be used within Tabs',
    );

    consoleErrorSpy.mockRestore();
  });

  test('provider', () => {});
});

describe('insertObjectBetweenElements', () => {
  test('should return the same array if it has 0 elements', () => {
    // given
    const input: string[] = [];
    const separator = '|';

    const result = insertObjectBetweenElements(input, separator);

    // then
    expect(result).toEqual([]);
  });

  test('should return the same array if it has 1 element', () => {
    // given
    const input = ['A'];
    const separator = '|';

    const result = insertObjectBetweenElements(input, separator);

    // then
    expect(result).toEqual(['A']);
  });

  test('should insert the object between elements', () => {
    // given
    const input = ['A', 'B', 'C'];
    const separator = '|';

    const result = insertObjectBetweenElements(input, separator);

    // then
    expect(result).toEqual(['A', '|', 'B', '|', 'C']);
  });
});
