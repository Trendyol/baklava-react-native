import { ScrollView } from 'react-native-gesture-handler';
import { Box, Button, Input, Text } from '@trendyol/baklava-react-native';
import { useState } from 'react';

const args = {
  size: 'large',
  label: 'Label',
  placeholder: 'Placeholder Text',
  labelFixed: false,
  required: true,
  secureTextEntry: false,
  helpText: 'Help Text',
  error: false,
  success: false,
  disabled: false,
  errorText: 'Error Text',
  successText: 'Success Text',
  icon: 'confetti',
};

export default () => {
  const [state, setState] = useState(args);

  return (
    <ScrollView style={{ backgroundColor: theme.colors.neutralFull }}>
      <Box pb="m">
        <Box px="2xs">
          <Text py="2xs" variant="subtitle01Bold">
            Input
          </Text>

          <Input
            size="large"
            label="Label"
            placeholder="Placeholder Text"
            labelFixed={false}
            required={true}
            secureTextEntry={false}
            helpText="Help Text"
            error={false}
            success={false}
            disabled={false}
            errorText="Error Text"
            successText="Success Text"
            icon="confetti"
          />
        </Box>
      </Box>

      <Box pb="m">
        <Box px="2xs">
          <Text py="2xs" variant="subtitle01Bold">
            Input Cases
          </Text>
          {/* @ts-ignore */}
          <Input
            {...args}
            success={false}
            error={false}
            required={false}
            helpText={null}
            icon={null}
            disabled={true}
          />
          {/* @ts-ignore */}
          <Input
            {...args}
            success={false}
            error={false}
            required={true}
            helpText={null}
            icon="calendar"
            label={null}
          />
          <Input
            {...args}
            labelFixed={false}
            success={false}
            error={false}
            icon={null}
            size="large"
            helpText={null}
          />
          <Input
            {...args}
            labelFixed={false}
            success={false}
            error={false}
            icon={null}
            size="medium"
            helpText={null}
          />
          <Input
            {...args}
            labelFixed={false}
            success={false}
            error={false}
            icon={null}
            size="small"
            helpText={null}
          />
          {/* @ts-ignore */}
          <Input {...state} />
          <Box flexDirection="row" mb="m">
            <Button
              flex={1}
              kind="danger"
              variant="secondary"
              size="s"
              onPress={() =>
                setState({
                  ...state,
                  error: true,
                  errorText: null,
                  success: false,
                })
              }
              label="Toggle Error"
              filled={true}
              mr="2xs"
            />
            <Button
              flex={1}
              size="s"
              kind="success"
              variant="secondary"
              onPress={() =>
                setState({
                  ...state,
                  success: true,
                  successText: null,
                  error: false,
                })
              }
              label="Toggle Success"
              filled={true}
              ml="2xs"
            />
          </Box>
          <Box flexDirection="row">
            <Button
              flex={1}
              size="s"
              kind="danger"
              variant="secondary"
              onPress={() =>
                setState({
                  ...state,
                  error: true,
                  errorText: 'Error text',
                  success: false,
                })
              }
              label="Error with Text"
              filled={true}
              mr="2xs"
            />

            <Button
              flex={1}
              size="s"
              kind="success"
              variant="secondary"
              onPress={() =>
                setState({
                  ...state,
                  success: true,
                  successText: 'Success text',
                  error: false,
                })
              }
              label="Success with Text"
              filled={true}
              ml="2xs"
            />
          </Box>
        </Box>
      </Box>
    </ScrollView>
  );
};
