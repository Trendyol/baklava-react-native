import { Box, Button, Icon, Text } from '@trendyol/baklava-react-native';
import { iconList } from '@trendyol/baklava-react-native/lib/commonjs/components/Icon/list';
import { IconNameType } from '@trendyol/baklava-react-native/lib/typescript/src/components/Icon/types';
import { ScrollView } from 'react-native-gesture-handler';

export default () => {
  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <Box pb="m">
        <Text p="2xs" variant="subtitle01Bold">
          Icon Sizes
        </Text>
        <Box p="2xs" alignSelf="flex-start">
          <Box flexDirection="row" p="2xs" alignItems="center">
            <Icon name="confetti" size="xl" />
            <Text pl="2xs">xl</Text>
          </Box>
          <Box flexDirection="row" p="2xs" alignItems="center">
            <Icon name="confetti" size="l" />
            <Text pl="2xs">l</Text>
          </Box>
          <Box flexDirection="row" p="2xs" alignItems="center">
            <Icon name="confetti" size="m" />
            <Text pl="2xs">m</Text>
          </Box>
          <Box flexDirection="row" p="2xs" alignItems="center">
            <Icon name="confetti" size="s" />
            <Text pl="2xs">s</Text>
          </Box>
          <Box flexDirection="row" p="2xs" alignItems="center">
            <Icon name="confetti" size="xs" />
            <Text pl="2xs">xs</Text>
          </Box>
          <Box flexDirection="row" p="2xs" alignItems="center">
            <Icon name="confetti" size="2xs" />
            <Text pl="2xs">2xs</Text>
          </Box>
        </Box>
      </Box>

      <Box pb="m">
        <Text p="2xs" variant="subtitle01Bold">
          Icon Colors
        </Text>
        <Box alignSelf="flex-start" p="2xs">
          <Box flexDirection="row" p="2xs" alignItems="center">
            <Icon name="confetti" color="contentPrimary" />
            <Text pl="2xs">contentPrimary</Text>
          </Box>
          <Box flexDirection="row" p="2xs" alignItems="center">
            <Icon name="confetti" color="red" />
            <Text pl="2xs">red</Text>
          </Box>
          <Box flexDirection="row" p="2xs" alignItems="center">
            <Icon name="confetti" color="#fcba03" />
            <Text pl="2xs">#fcba03</Text>
          </Box>
        </Box>
      </Box>

      <Box pb="m">
        <Text p="2xs" variant="subtitle01Bold">
          Icon List
        </Text>
        <Box p="2xs" alignSelf="flex-start">
          {iconList.map((iconName: IconNameType) => (
            <Box key={iconName} flexDirection="row" p="2xs" alignItems="center">
              <Icon name={iconName} />
              <Text pl="2xs">{iconName}</Text>
            </Box>
          ))}
        </Box>
      </Box>

      <Box pb="m">
        <Text p="2xs" variant="subtitle01Bold">
          Icon Only Buttons
        </Text>
        <Box>
          <Button icon="info" m="2xs" />
          <Button kind="neutral" icon="info" m="2xs" />
          <Button kind="success" icon="info" m="2xs" />
          <Button kind="danger" icon="info" m="2xs" />
        </Box>
      </Box>

      <Box pb="m">
        <Text p="2xs" variant="subtitle01Bold">
          Button Sizes
        </Text>
        <Box>
          <Button size="l" icon="info" label="Primary Button" m="2xs" />
          <Button size="m" icon="info" label="Primary Button" m="2xs" />
          <Button
            size="s"
            icon="info"
            label="Primary Button"
            m="2xs"
            mb="2xl"
          />
          <Button
            size="l"
            icon="info"
            label="Primary Button"
            filled={true}
            m="2xs"
          />
          <Button
            size="m"
            icon="info"
            label="Primary Button"
            filled={true}
            m="2xs"
          />
          <Button
            size="s"
            icon="info"
            label="Primary Button"
            filled={true}
            m="2xs"
          />
        </Box>
      </Box>

      <Box pb="m">
        <Text p="2xs" variant="subtitle01Bold">
          Disabled Buttons
        </Text>
        <Box mt="xl">
          <Text p="2xs" variant="captionMedium">
            Primary & Secondary Variants
          </Text>
          <Button size="l" disabled={true} label="Passive Button" m="2xs" />
          <Button size="m" disabled={true} label="Passive Button" m="2xs" />
          <Button
            size="s"
            disabled={true}
            label="Passive Button"
            m="2xs"
            mb="2xl"
          />
          <Text p="2xs" variant="captionMedium">
            Tertiary Variant
          </Text>
          <Button
            size="l"
            variant="tertiary"
            disabled={true}
            label="Passive Button"
            m="2xs"
          />
          <Button
            size="m"
            variant="tertiary"
            disabled={true}
            label="Passive Button"
            m="2xs"
          />
          <Button
            size="s"
            variant="tertiary"
            disabled={true}
            label="Passive Button"
            m="2xs"
          />
        </Box>
      </Box>

      <Box pb="m">
        <Text p="2xs" variant="subtitle01Bold">
          Pressed States
        </Text>
        <Box mt="xl">
          <Text p="2xs" variant="captionMedium">
            Primary & Secondary Variants
          </Text>
          <Button isPressed={true} label="Save" icon="info" m="2xs" />
          <Button
            isPressed={true}
            kind="neutral"
            label="Save"
            icon="info"
            m="2xs"
          />
          <Button
            isPressed={true}
            kind="success"
            label="Save"
            icon="info"
            m="2xs"
          />
          <Button
            isPressed={true}
            kind="danger"
            label="Save"
            icon="info"
            m="2xs"
            mb="2xl"
          />
          <Text p="2xs" variant="captionMedium">
            Tertiary Variant
          </Text>
          <Button
            variant="tertiary"
            isPressed={true}
            label="Save"
            icon="info"
            m="2xs"
          />
          <Button
            variant="tertiary"
            isPressed={true}
            kind="neutral"
            label="Save"
            icon="info"
            m="2xs"
          />
          <Button
            variant="tertiary"
            isPressed={true}
            kind="success"
            label="Save"
            icon="info"
            m="2xs"
          />
          <Button
            variant="tertiary"
            isPressed={true}
            kind="danger"
            label="Save"
            icon="info"
            m="2xs"
          />
        </Box>
      </Box>
    </ScrollView>
  );
};
