import { Alert, Button, Box, Text } from '@trendyol/baklava-react-native';
import { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';

const args = {
  caption: 'Informational Caption',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt tellus, tellus non facilisis. Est at ante amet eget ut blandit.',
  closable: true,
  icon: true,
  closed: false,
};

export default () => {
  const [state, setState] = useState(args);

  return (
    <ScrollView style={{ backgroundColor: theme.colors.neutralFull }}>
      <Box pb="m">
        <Text p="2xs" variant="subtitle01Bold">
          Alert
        </Text>
        <Box px="m" py="2xs">
          <Alert
            {...state}
            onClose={() => setState({ ...state, closed: true })}>
            <Button label="Button" />
            <Button label="Button" variant="secondary" ml="2xs" />
          </Alert>
        </Box>
      </Box>

      <Box pb="m">
        <Text p="2xs" variant="subtitle01Bold">
          Alert Variants
        </Text>
        <Box px="m" py="2xs">
          <Alert
            caption="Informational Caption"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt tellus, tellus non facilisis. Est at ante amet eget ut blandit."
            closable={false}>
            <Button label="Button" />
            <Button label="Button" variant="secondary" ml="2xs" />
          </Alert>
        </Box>
        <Box px="m" py="2xs">
          <Alert
            caption="Informational Caption"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt tellus, tellus non facilisis. Est at ante amet eget ut blandit."
            variant="warning"
            closable={true}
            icon={false}>
            <Button label="Button" />
          </Alert>
        </Box>
        <Box px="m" py="2xs">
          <Alert
            caption="Informational Caption"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt tellus, tellus non facilisis. Est at ante amet eget ut blandit."
            variant="success"
            closable={false}
            icon={false}>
            <Button label="Button" variant="secondary" />
          </Alert>
        </Box>
        <Box px="m" py="2xs">
          <Alert
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt tellus, tellus non facilisis. Est at ante amet eget ut blandit."
            variant="danger"
            closable={true}
          />
        </Box>
      </Box>
    </ScrollView>
  );
};
