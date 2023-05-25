import { Box, Text } from '@trendyol/baklava-react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default () => {
  return (
    <ScrollView style={{ backgroundColor: theme.colors.neutralFull }}>
      <Box pb="m">
        <Text p="2xs" variant="subtitle01Bold">
          Box
        </Text>
        <Box width={200} height={200} backgroundColor="primaryColor" />
      </Box>
    </ScrollView>
  );
};
