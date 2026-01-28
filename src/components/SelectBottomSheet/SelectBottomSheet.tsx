import React from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Box, { BoxProps } from '../Box/Box';
import BottomSheet, { BottomSheetProps } from '../BottomSheet/BottomSheet';
import Checkbox from '../Checkbox/Checkbox';
import RadioButton from '../RadioButton/RadioButton';
import { FlagIconNameType } from '../FlagIcon/types';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import theme from '../../theme';

interface Option {
  id: string;
  label: string;
  flagIcon?: FlagIconNameType | null;
  disabled?: boolean;
}

interface SelectBottomSheetProps extends BottomSheetProps {
  options: Option[];
  type: 'checkbox' | 'radio';
  onSelect?: (selectedValues: string[]) => void;
  selectedOption?: string[];
  maxVisibleItems?: number;
  pb?: BoxProps['pb'];
  applyBottomInset?: boolean;
  accessibilityLabel?: string;
  testID?: string;
}

const SelectBottomSheet: React.FC<SelectBottomSheetProps> = ({
  options,
  type,
  onSelect,
  selectedOption,
  maxVisibleItems = 6,
  pb,
  accessibilityLabel,
  testID,
  applyBottomInset = false,
  ...bottomSheetProps
}) => {
  const insets = useSafeAreaInsets();
  const [selectedValues, setSelectedValues] = React.useState<string[]>(
    selectedOption ?? [],
  );

  const testProps = React.useMemo(() => {
    return {
      accessibilityLabel: accessibilityLabel ?? testID,
      testID: testID ?? accessibilityLabel,
    };
  }, [testID, accessibilityLabel]);

  React.useEffect(() => {
    if (Array.isArray(selectedOption)) {
      setSelectedValues(selectedOption);
    }
  }, [selectedOption]);

  const handleSelect = (value: string) => {
    if (type === 'checkbox') {
      setSelectedValues(prev =>
        prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value],
      );
    } else {
      setSelectedValues([value]);
    }
  };

  React.useEffect(() => {
    if (onSelect) {
      onSelect(selectedValues);
    }
  }, [selectedValues, onSelect]);

  const renderItem = ({ item, index }: { item: Option; index: number }) => {
    return (
      <Box key={item.id}>
        <TouchableOpacity
          onPress={() => handleSelect(item.id)}
          disabled={item.disabled}
          {...testProps}
          testID={`touchable-selectBottomSheet-${item.id}`}>
          {type === 'checkbox' ? (
            <Checkbox
              testID={`checkbox-selectBottomSheet-${item.id}`}
              label={item.label}
              flagIcon={item.flagIcon}
              checked={selectedValues.includes(item.id)}
              onPress={() => handleSelect(item.id)}
              disabled={item.disabled}
            />
          ) : (
            <RadioButton
              testID={`radiobutton-selectBottomSheet-${item.id}`}
              label={item.label}
              flagIcon={item.flagIcon}
              selected={selectedValues.includes(item.id)}
              onPress={() => handleSelect(item.id)}
              disabled={item.disabled}
            />
          )}
        </TouchableOpacity>
        {index < options.length - 1 && (
          <Box height={1} backgroundColor="borderColor" marginVertical="m" />
        )}
      </Box>
    );
  };

  const paddingProps = React.useMemo(() => {
    if (applyBottomInset && pb) {
      return {
        style: {
          paddingBottom: insets.bottom + theme.spacing[pb],
        },
      };
    } else if (applyBottomInset) {
      return {
        style: {
          paddingBottom: insets.bottom,
        },
      };
    }

    return {
      pb: pb,
    };
  }, [applyBottomInset, pb, insets.bottom]);

  return (
    <BottomSheet {...bottomSheetProps} {...testProps}>
      <Box {...paddingProps}>
        <ScrollView
          testID={'selectBottomSheet'}
          contentContainerStyle={styles.flatListContainer}
          horizontal
          bounces={false}>
          <FlatList
            data={options}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            nestedScrollEnabled
            initialNumToRender={maxVisibleItems}
            maxToRenderPerBatch={maxVisibleItems}
            style={{ maxHeight: maxVisibleItems * 50 - 15 }}
          />
        </ScrollView>
      </Box>
    </BottomSheet>
  );
};

export default SelectBottomSheet;

const styles = StyleSheet.create({
  flatListContainer: {
    flex: 1,
    width: 'auto',
  },
});
