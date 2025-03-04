import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import Box, { BoxProps } from '../Box/Box';
import Text from '../Text/Text';
import Icon from '../Icon/Icon';
import insertObjectBetweenElements from './utils';
import Badge from '../Badge/Badge';
import { IconNameType } from '../Icon/types';

type TabsContextType = {
  value: string;
  onValueChange: (newValue: string) => void;
};

const TabsContext = createContext<TabsContextType | null>(null);

type TabsProps = BoxProps & {
  value: string;
  defaultValue?: string;
  onValueChange: (value: string) => void;
};

const Tabs = ({
  value: controlledValue,
  defaultValue,
  onValueChange,
  ...rest
}: TabsProps) => {
  const [value, setValue] = useState(defaultValue ?? '');

  useEffect(() => {
    if (controlledValue !== undefined) {
      setValue(controlledValue);
    }
  }, [controlledValue]);

  const handleChange = (newValue: string) => {
    if (controlledValue === undefined) {
      setValue(newValue);
    }
    onValueChange(newValue);
  };

  return (
    <TabsContext.Provider value={{ value, onValueChange: handleChange }}>
      <Box testID="tabsBox" accessibilityLabel="tabsBox" flex={1} {...rest} />
    </TabsContext.Provider>
  );
};

const List = ({ children }: PropsWithChildren) => {
  const data = React.useMemo(() => {
    const childrenArray = React.Children.toArray(children);
    return insertObjectBetweenElements(
      childrenArray,
      <Box
        flex={1}
        mx="m"
        width={1}
        height={30}
        alignSelf="center"
        backgroundColor="neutralLighter"
      />,
    );
  }, [children]);

  return (
    <Box testID="tabsListBox" accessibilityLabel="tabsListBox">
      <FlatList
        data={data}
        testID="tabsFlatList"
        accessibilityLabel="tabsFlatList"
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => item as React.JSX.Element}
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-around' }}
      />
    </Box>
  );
};

type OptionProps = {
  value: string;
  title: string;
  caption?: string;
  disabled?: boolean;
  iconName?: IconNameType;
  badgeText?: string;
};

const Option = ({
  value,
  title,
  caption = '',
  disabled = false,
  iconName = undefined,
  badgeText = undefined,
}: OptionProps) => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('Tabs.Option must be used within Tabs');
  }

  const isSelected = context.value === value;
  const conditionalColor = disabled
    ? 'neutralLight'
    : isSelected
    ? 'primaryKey'
    : 'neutralDarker';

  const underline = React.useMemo(() => {
    if (!isSelected) {
      return null;
    }

    return (
      <Box
        position="absolute"
        bottom={0}
        alignSelf="center"
        width="100%"
        borderBottomWidth={2}
        borderColor="primaryKey"
      />
    );
  }, [isSelected]);

  return (
    <TouchableOpacity
      disabled={disabled}
      style={{ justifyContent: 'center' }}
      onPress={() => !disabled && context.onValueChange(value)}>
      <Box
        testID="tabOptionBox"
        alignItems="center"
        justifyContent="center"
        paddingVertical="xs">
        <Box flexDirection="row" alignItems="center">
          {iconName ? (
            <Box pr="3xs" testID="tabIconBox">
              <Icon
                name={iconName}
                size="s"
                color={conditionalColor}
                testID="tabIcon"
              />
            </Box>
          ) : null}
          <Box testID="tabTitleBox">
            <Text
              testID="tabTitle"
              fontWeight="500"
              color={conditionalColor}
              numberOfLines={1}
              ellipsizeMode="tail">
              {title}
            </Text>
          </Box>
          {badgeText ? (
            <Box pl="3xs" testID="tabBadgeBox">
              <Badge
                testID="tabBadge"
                text={badgeText}
                size="small"
                transparent
                color="neutralFull"
                backgroundColor="dangerKey"
              />
            </Box>
          ) : null}
        </Box>
        {caption ? (
          <Text
            testID="tabCaption"
            fontSize={12}
            color={disabled ? 'neutralLight' : 'neutralDarker'}>
            {caption}
          </Text>
        ) : null}
      </Box>
      {underline}
    </TouchableOpacity>
  );
};

type ContentProps = BoxProps & {
  value: string;
};

const Content = ({ value, ...rest }: ContentProps) => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('Tabs.Content must be used within Tabs');
  }

  return context.value === value ? (
    <Box
      testID="tabsContentBox"
      accessibilityLabel="tabsContentBox"
      {...rest}
    />
  ) : null;
};

Tabs.List = List;
Tabs.Option = Option;
Tabs.Content = Content;

export default Tabs;
