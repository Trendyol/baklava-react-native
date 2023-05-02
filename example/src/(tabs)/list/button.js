import { Box, Button, Text } from '@trendyol/baklava-react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default () => {
  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <Box pb="m">
        <Text p="2xs" variant="subtitle01Bold">
          Button Variants
        </Text>
        <Button variant="primary" label="Primary Button" m="2xs" />
        <Button variant="secondary" label="Secondary Button" m="2xs" />
        <Button variant="tertiary" label="Tertiary Button" m="2xs" />
      </Box>
      <Box pb="m">
        <Text p="2xs" variant="subtitle01Bold">
          Primary Buttons
        </Text>
        <Box>
          <Button label="Primary Button" m="2xs" />
          <Button kind="neutral" label="Primary Button" m="2xs" />
          <Button kind="success" label="Primary Button" m="2xs" />
          <Button kind="danger" label="Primary Button" m="2xs" />
        </Box>
      </Box>
      <Box pb="m">
        <Text p="2xs" variant="subtitle01Bold">
          Secondary Buttons
        </Text>
        <Box>
          <Button variant="secondary" label="Secondary Button" m="2xs" />
          <Button
            variant="secondary"
            kind="neutral"
            label="Secondary Button"
            m="2xs"
          />
          <Button
            variant="secondary"
            kind="success"
            label="Secondary Button"
            m="2xs"
          />
          <Button
            variant="secondary"
            kind="danger"
            label="Secondary Button"
            m="2xs"
          />
        </Box>
      </Box>

      <Box pb="m">
        <Text p="2xs" variant="subtitle01Bold">
          Tertiary Buttons
        </Text>
        <Box>
          <Button variant="tertiary" label="Tertiary Button" m="2xs" />
          <Button
            variant="tertiary"
            kind="neutral"
            label="Tertiary Button"
            m="2xs"
          />
          <Button
            variant="tertiary"
            kind="success"
            label="Tertiary Button"
            m="2xs"
          />
          <Button
            variant="tertiary"
            kind="danger"
            label="Tertiary Button"
            m="2xs"
          />
        </Box>
      </Box>

      <Box pb="m">
        <Text p="2xs" variant="subtitle01Bold">
          Icon Buttons
        </Text>
        <Box flexDirection="row" justifyContent="space-around">
          <Box>
            <Button label="Save" icon="info" m="2xs" />
            <Button kind="neutral" label="Save" icon="info" m="2xs" />
            <Button kind="success" label="Save" icon="info" m="2xs" />
            <Button kind="danger" label="Save" icon="info" m="2xs" />
          </Box>
          <Box>
            <Button variant="tertiary" label="Save" icon="info" m="2xs" />
            <Button
              variant="tertiary"
              kind="neutral"
              label="Save"
              icon="info"
              m="2xs"
            />
            <Button
              variant="tertiary"
              kind="success"
              label="Save"
              icon="info"
              m="2xs"
            />
            <Button
              variant="tertiary"
              kind="danger"
              label="Save"
              icon="info"
              m="2xs"
            />
          </Box>
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
