import { Box, Text } from '@trendyol/baklava-react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default () => {
  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <Box pb="m">
        <Text p="2xs" variant="subtitle01Bold">
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
        <Text p="2xs" variant="subtitle01Bold">
          Text Subtitle 01
        </Text>
        <Text variant="subtitle01Regular" p="2xs">
          Subtitle 01 / Regular
        </Text>
        <Text variant="subtitle01Medium" p="2xs">
          Subtitle 01 / Medium
        </Text>
        <Text variant="subtitle01Semibold" p="2xs">
          Subtitle 01 / Semibold
        </Text>
        <Text variant="subtitle01Bold" p="2xs">
          Subtitle 01 / Bold
        </Text>
      </Box>
      <Box pb="m">
        <Text p="2xs" variant="subtitle01Bold">
          Text Subtitle 02
        </Text>
        <Text variant="subtitle02Regular" p="2xs">
          Subtitle 02 / Regular
        </Text>
        <Text variant="subtitle02Medium" p="2xs">
          Subtitle 02 / Medium
        </Text>
        <Text variant="subtitle02Semibold" p="2xs">
          Subtitle 02 / Semibold
        </Text>
        <Text variant="subtitle02Bold" p="2xs">
          Sutitle 02 / Bold
        </Text>
      </Box>

      <Box pb="m">
        <Text p="2xs" variant="subtitle01Bold">
          Text Subtitle 03
        </Text>
        <Text variant="subtitle03Regular" p="2xs">
          Subtitle 03 / Regular
        </Text>
        <Text variant="subtitle03Medium" p="2xs">
          Subtitle 03 / Medium
        </Text>
        <Text variant="subtitle03Semibold" p="2xs">
          Subtitle 03 / Semibold
        </Text>
        <Text variant="subtitle03Bold" p="2xs">
          Subtitle 03 / Bold
        </Text>
      </Box>

      <Box pb="m">
        <Text p="2xs" variant="subtitle01Bold">
          Text Subtitle 04
        </Text>
        <Text variant="subtitle04Regular" p="2xs">
          Subtitle 04 / Regular
        </Text>
        <Text variant="subtitle04Medium" p="2xs">
          Subtitle 04 / Medium
        </Text>
        <Text variant="subtitle04Semibold" p="2xs">
          Subtitle 04 / Semibold
        </Text>
        <Text variant="subtitle04Bold" p="2xs">
          Subtitle 04 / Bold
        </Text>
      </Box>

      <Box pb="m">
        <Text p="2xs" variant="subtitle01Bold">
          Text Body
        </Text>
        <Text variant="bodyText" p="2xs">
          Body / Text
        </Text>
        <Text variant="bodyUnderline" p="2xs">
          Body / Underline
        </Text>
        <Text variant="bodyTextLink" p="2xs">
          Body / Text Link
        </Text>
        <Text variant="bodyLongText" p="2xs">
          Body / Long Text
        </Text>
      </Box>

      <Box pb="m">
        <Text p="2xs" variant="subtitle01Bold">
          Text Caption
        </Text>
        <Text variant="captionText" p="2xs">
          Caption / Text
        </Text>
        <Text variant="captionMedium" p="2xs">
          Caption / Medium
        </Text>
        <Text variant="captionLongText" p="2xs">
          Caption / Long Text
        </Text>
        <Text variant="captionTextLink" p="2xs">
          Caption / Text Link
        </Text>
      </Box>
    </ScrollView>
  );
};
