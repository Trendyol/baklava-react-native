import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import theme, { Theme } from '../../theme';
import Box from '../Box/Box';
import Icon from '../Icon/Icon';
import Text from '../Text/Text';
import {
  clampCurrentPage,
  getPaginationItems,
  normalizeTotalPages,
} from './utils';

export type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  hasJumper?: boolean;
  testID?: string;
};

type NavigationButtonProps = {
  accessibilityLabel: string;
  disabled: boolean;
  iconName:
    | 'arrow-left'
    | 'arrow-right'
    | 'double-arrow-left'
    | 'double-arrow-right';
  onPress: () => void;
  testID: string;
};

const paginationTheme = theme.pagination;
const activeBackgroundColor =
  theme.colors[paginationTheme.activeBackgroundColor as keyof Theme['colors']];
const activeTextColor =
  paginationTheme.activeTextColor as keyof Theme['colors'];
const textColor = paginationTheme.textColor as keyof Theme['colors'];
const disabledColor = paginationTheme.disabledColor as keyof Theme['colors'];

const NavigationButton = ({
  accessibilityLabel,
  disabled,
  iconName,
  onPress,
  testID,
}: NavigationButtonProps) => (
  <Pressable
    accessibilityLabel={accessibilityLabel}
    accessibilityRole="button"
    accessibilityState={{ disabled }}
    disabled={disabled}
    onPress={onPress}
    style={styles.item}
    testID={testID}>
    <Icon
      accessible={false}
      color={disabled ? disabledColor : textColor}
      name={iconName}
      size="s"
      testID={`${testID}-icon`}
    />
  </Pressable>
);

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  hasJumper = false,
  testID = 'pagination',
}: PaginationProps) => {
  const normalizedTotalPages = normalizeTotalPages(totalPages);
  const normalizedCurrentPage = clampCurrentPage(
    currentPage,
    normalizedTotalPages,
  );
  const paginationItems = getPaginationItems(
    normalizedCurrentPage,
    normalizedTotalPages,
    hasJumper,
  );
  const isFirstPage = normalizedCurrentPage === 1;
  const isLastPage = normalizedCurrentPage === normalizedTotalPages;

  const handlePageChange = (page: number) => {
    if (page !== normalizedCurrentPage) {
      onPageChange(page);
    }
  };

  return (
    <Box
      accessible={false}
      alignItems="center"
      flexDirection="row"
      testID={testID}
      width="100%">
      <Box flexDirection="row">
        {hasJumper ? (
          <NavigationButton
            accessibilityLabel="Go to first page"
            disabled={isFirstPage}
            iconName="double-arrow-left"
            onPress={() => handlePageChange(1)}
            testID={`${testID}-first`}
          />
        ) : null}

        <NavigationButton
          accessibilityLabel="Go to previous page"
          disabled={isFirstPage}
          iconName="arrow-left"
          onPress={() => handlePageChange(normalizedCurrentPage - 1)}
          testID={`${testID}-previous`}
        />
      </Box>

      <Box
        alignItems="center"
        flex={1}
        flexDirection="row"
        justifyContent="center"
        style={{ gap: paginationTheme.itemGap }}>
        {paginationItems.map(item => {
          if (typeof item !== 'number') {
            return (
              <Box
                accessible={false}
                alignItems="center"
                height={paginationTheme.itemSize}
                justifyContent="center"
                key={item}
                testID={`${testID}-${item}`}
                width={paginationTheme.itemSize}>
                <Text variant="subtitle3Medium" color={textColor}>
                  ...
                </Text>
              </Box>
            );
          }

          const isSelected = item === normalizedCurrentPage;

          return (
            <Pressable
              accessibilityLabel={`Page ${item}`}
              accessibilityRole="button"
              accessibilityState={{ selected: isSelected }}
              disabled={isSelected}
              key={item}
              onPress={() => handlePageChange(item)}
              style={[
                styles.item,
                isSelected ? styles.selectedItem : undefined,
              ]}
              testID={`${testID}-page-${item}`}>
              <Text
                accessible={false}
                color={isSelected ? activeTextColor : textColor}
                variant="subtitle3Medium">
                {item}
              </Text>
            </Pressable>
          );
        })}
      </Box>

      <Box flexDirection="row">
        <NavigationButton
          accessibilityLabel="Go to next page"
          disabled={isLastPage}
          iconName="arrow-right"
          onPress={() => handlePageChange(normalizedCurrentPage + 1)}
          testID={`${testID}-next`}
        />

        {hasJumper ? (
          <NavigationButton
            accessibilityLabel="Go to last page"
            disabled={isLastPage}
            iconName="double-arrow-right"
            onPress={() => handlePageChange(normalizedTotalPages)}
            testID={`${testID}-last`}
          />
        ) : null}
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  item: {
    alignItems: 'center',
    height: paginationTheme.itemSize,
    justifyContent: 'center',
    width: paginationTheme.itemSize,
  },
  selectedItem: {
    backgroundColor: activeBackgroundColor,
    borderRadius: paginationTheme.borderRadius,
  },
});

export default Pagination;
