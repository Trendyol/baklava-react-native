import { Box, Text } from '@trendyol/baklava-react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default () => {
  return (
    <ScrollView style={{ backgroundColor: theme.colors.neutralFull }}>
      <Box pb="m">
        <Text p="2xs" variant="subtitle1Bold">
          Text Heading
        </Text>
        <Text variant="heading1" p="2xs">
          Heading 1
        </Text>
        <Text variant="heading2" p="2xs">
          Heading 2
        </Text>
        <Text variant="heading3" p="2xs">
          Heading 3
        </Text>
      </Box>
      <Box pb="m">
        <Text p="2xs" variant="subtitle1Bold">
          Text Subtitle 1
        </Text>
        <Text variant="subtitle1Regular" p="2xs">
          Subtitle 1 / Regular
        </Text>
        <Text variant="subtitle1Medium" p="2xs">
          Subtitle 1 / Medium
        </Text>
        <Text variant="subtitle1Semibold" p="2xs">
          Subtitle 1 / Semibold
        </Text>
        <Text variant="subtitle1Bold" p="2xs">
          Subtitle 1 / Bold
        </Text>
      </Box>
      <Box pb="m">
        <Text p="2xs" variant="subtitle1Bold">
          Text Subtitle 2
        </Text>
        <Text variant="subtitle2Regular" p="2xs">
          Subtitle 2 / Regular
        </Text>
        <Text variant="subtitle2Medium" p="2xs">
          Subtitle 2 / Medium
        </Text>
        <Text variant="subtitle2Semibold" p="2xs">
          Subtitle 2 / Semibold
        </Text>
        <Text variant="subtitle2Bold" p="2xs">
          Sutitle 2 / Bold
        </Text>
      </Box>

      <Box pb="m">
        <Text p="2xs" variant="subtitle1Bold">
          Text Subtitle 3
        </Text>
        <Text variant="subtitle3Regular" p="2xs">
          Subtitle 3 / Regular
        </Text>
        <Text variant="subtitle3Medium" p="2xs">
          Subtitle 3 / Medium
        </Text>
        <Text variant="subtitle3Semibold" p="2xs">
          Subtitle 3 / Semibold
        </Text>
        <Text variant="subtitle3Bold" p="2xs">
          Subtitle 3 / Bold
        </Text>
      </Box>

      <Box pb="m">
        <Text p="2xs" variant="subtitle1Bold">
          Text Subtitle 4
        </Text>
        <Text variant="subtitle4Regular" p="2xs">
          Subtitle 4 / Regular
        </Text>
        <Text variant="subtitle4Medium" p="2xs">
          Subtitle 4 / Medium
        </Text>
        <Text variant="subtitle4Semibold" p="2xs">
          Subtitle 4 / Semibold
        </Text>
        <Text variant="subtitle4Bold" p="2xs">
          Subtitle 4 / Bold
        </Text>
      </Box>

      <Box pb="m">
        <Text p="2xs" variant="subtitle1Bold">
          Text Body
        </Text>
        <Text variant="body1" p="2xs">
          Body 1 / Text
        </Text>
        <Text variant="body2" p="2xs">
          Body 2 / Text
        </Text>
        <Text variant="body3" p="2xs">
          Body 3 / Text
        </Text>
      </Box>

      <Box pb="m">
        <Text p="2xs" variant="subtitle1Bold">
          Text Caption
        </Text>
        <Text variant="caption" p="2xs">
          Caption / Text
        </Text>
      </Box>
    </ScrollView>
  );
};
