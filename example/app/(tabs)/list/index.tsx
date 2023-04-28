import { Box, Text, theme } from '@trendyol/baklava-react-native';
import { useRouter } from 'expo-router';
import { FlatList, Pressable, StyleSheet } from 'react-native';

const componentList = [
  { label: 'Alert', href: 'alert' },
  { label: 'Box', href: 'box' },
  { label: 'Button', href: 'button' },
  { label: 'Icon', href: 'icon' },
  { label: 'Input', href: 'input' },
  { label: 'Text', href: 'text' },
];

export default () => {
  const router = useRouter();

  return (
    <Box flex={1} backgroundColor="white">
      <FlatList
        data={componentList}
        renderItem={({ item }) => (
          <Pressable
            style={styles.renderItem}
            onPress={() => router.push(`list/${item.href}`)}>
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
    borderBottomColor: '#E3E3E3',
    borderBottomWidth: 1,
    paddingVertical: 16,
    marginHorizontal: 16,
  },
});
