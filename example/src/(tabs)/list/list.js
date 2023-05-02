import { Box, Text } from '@trendyol/baklava-react-native';
import { FlatList, Pressable, StyleSheet } from 'react-native';

const componentList = [
  { label: 'Alert', href: 'alert' },
  { label: 'Box', href: 'box' },
  { label: 'Button', href: 'button' },
  { label: 'Icon', href: 'icon' },
  { label: 'Input', href: 'input' },
  { label: 'Text', href: 'text' },
];

export default ({ navigation }) => {
  return (
    <Box flex={1} backgroundColor="white">
      <FlatList
        data={componentList}
        renderItem={({ item }) => (
          <Pressable
            style={styles.renderItem}
            onPress={() => navigation.navigate(item.href)}>
            <Text variant="subtitle03Medium">{item.label}</Text>
          </Pressable>
        )}
      />
    </Box>
  );
};

const styles = StyleSheet.create({
  renderItem: {
    flexDirection: 'row',
    flex: 1,
    borderBottomColor: '#F4F4F4',
    borderBottomWidth: 1,
    paddingVertical: 16,
    marginHorizontal: 16,
  },
});
