import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Box from '../Box/Box';
import Text from '../Text/Text';
import Checkbox from './Checkbox';

const CheckboxMeta: Meta<typeof Checkbox> = {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: {
    onPress: { action: 'pressed the button' },
  },
  args: {
    checked: true,
    indeterminate: false,
    disabled: false,
  },
};

export default CheckboxMeta;

type Story = StoryObj<typeof CheckboxMeta>;

export const Basic: Story = {
  render: args => {
    const [checked, setChecked] = React.useState(false);
    React.useEffect(() => {
      setChecked(args.checked);
    }, [args.checked]);
    return (
      <>
        <Text p="2xs" variant="subtitle01Bold">
          Checkbox
        </Text>
        <Checkbox
          {...args}
          onPress={() => setChecked(!checked)}
          checked={checked}
          indeterminate={args.indeterminate}
          label="lorem ipsum"
          m="2xs"
        />
      </>
    );
  },
};

export const Cases: Story = {
  render: () => {
    return (
      <>
        <Text p="2xs" variant="subtitle01Bold">
          Checkbox
        </Text>
        <Box px="m" py="2xs" flexDirection="row">
          <Checkbox checked={false} />
          <Box width={8} />
          <Checkbox checked={true} indeterminate={false} />
          <Box width={8} />
          <Checkbox checked={true} indeterminate={true} />
          <Box width={8} />
          <Checkbox disabled checked={false} />
          <Box width={8} />
          <Checkbox disabled checked={true} indeterminate={false} />
          <Box width={8} />
          <Checkbox disabled checked={true} indeterminate={true} />
        </Box>

        <Box px="m" py="2xs">
          <Box height={12} />
          <Checkbox checked={false} label="checked: false" />
          <Box height={12} />
          <Checkbox
            checked={false}
            indeterminate={false}
            label="checked: false, indeterminate: false"
          />
          <Box height={12} />
          <Checkbox
            checked={false}
            indeterminate={true}
            label="checked: false, indeterminate: true"
          />
          <Box height={12} />
          <Checkbox checked={true} label="checked: true" />
          <Box height={12} />
          <Checkbox
            checked={true}
            indeterminate={false}
            label="checked: true, indeterminate: false"
          />
          <Box height={12} />
          <Checkbox
            checked={true}
            indeterminate={true}
            label="checked: true, indeterminate: true"
          />
        </Box>

        <Box px="m" py="xs">
          <Text py="xs" variant="subtitle02Medium">
            Disable:
          </Text>
          <Checkbox
            disabled={true}
            checked={false}
            label="disabled, checked: false"
          />
          <Box height={12} />
          <Checkbox
            disabled={true}
            checked={false}
            indeterminate={false}
            label="disabled, checked: false, indeterminate: false"
          />
          <Box height={12} />
          <Checkbox
            disabled={true}
            checked={false}
            indeterminate={true}
            label="disabled, checked: false, indeterminate: true"
          />
          <Box height={12} />
          <Checkbox
            disabled={true}
            checked={true}
            label="disabled, checked: true"
          />
          <Box height={12} />
          <Checkbox
            disabled={true}
            checked={true}
            indeterminate={false}
            label="disabled, checked: true, indeterminate: false"
          />
          <Box height={12} />
          <Checkbox
            disabled={true}
            checked={true}
            indeterminate={true}
            label="disabled, checked: true, indeterminate: true"
          />
        </Box>

        <Box px="m" py="xs">
          <Text py="xs" variant="subtitle02Medium">
            Alignment:
          </Text>
          <Checkbox
            checked={false}
            label="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <Box height={12} />
          <Checkbox
            checked={false}
            indeterminate={false}
            alignItems="center"
            label="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </Box>
      </>
    );
  },
};

export const CheckboxWithFlagIcon: Story = {
  render: () => {
    return (
      <>
        <Text p="2xs" variant="subtitle01Bold">
          Checkbox With Flag Icon
        </Text>

        <Box px="m" py="2xs">
          <Box height={12} />
          <Checkbox
            checked={false}
            label="checked: false, flagIcon: TR"
            flagIcon="TR"
          />
          <Box height={12} />
          <Checkbox
            checked={true}
            label="checked: true, flagIcon: DE"
            flagIcon="DE"
          />
          <Box height={12} />
          <Checkbox
            checked={true}
            indeterminate={true}
            label="checked: true, indeterminate: true, flagIcon: GR"
            flagIcon="GR"
          />
          <Box height={12} />
          <Checkbox
            disabled={true}
            checked={false}
            label="checked: false, disabled, flagIcon: RO"
            flagIcon="RO"
          />
        </Box>
      </>
    );
  },
};

const GROUP_ERROR_MESSAGE = 'You must select at least 1 item.';
const TERMS_ERROR_MESSAGE = 'You must agree before submitting.';

export const RequiredCheckbox: Story = {
  name: 'Required Checkbox',
  render: () => {
    const [termsAccepted, setTermsAccepted] = React.useState(false);
    const [termsSubmitted, setTermsSubmitted] = React.useState(false);

    const [groupSelectedItems, setGroupSelectedItems] = React.useState<
      string[]
    >([]);
    const [groupValidationTriggered, setGroupValidationTriggered] =
      React.useState(true);

    const termsHasError = termsSubmitted && !termsAccepted;
    const groupHasError =
      groupValidationTriggered && groupSelectedItems.length === 0;

    const toggleGroupItem = (id: string) => {
      setGroupSelectedItems(prev =>
        prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id],
      );
    };

    return (
      <>
        <Text p="2xs" variant="subtitle01Bold">
          Required Checkbox
        </Text>

        <Box px="m" py="2xs">
          <Text py="xs" variant="subtitle02Medium">
            Single checkbox (terms):
          </Text>
          <Checkbox
            checked={termsAccepted}
            error={termsHasError}
            helperText={termsHasError ? TERMS_ERROR_MESSAGE : undefined}
            label="Agree to terms and conditions"
            onPress={() => setTermsAccepted(!termsAccepted)}
          />
          <Box height={8} />
          <Text
            variant="subtitle04Regular"
            color="primaryKey"
            onPress={() => setTermsSubmitted(true)}>
            Validate terms
          </Text>
        </Box>

        <Box px="m" py="xs">
          <Text py="xs" variant="subtitle02Medium">
            Error states (static):
          </Text>
          <Checkbox
            checked={false}
            error
            helperText={TERMS_ERROR_MESSAGE}
            label="Agree to terms and conditions"
          />
          <Box height={12} />
          <Checkbox
            checked={false}
            error
            helperText="Helper text"
            label="Label"
            flagIcon="TR"
          />
        </Box>

        <Box height={24} />

        <Box px="m" py="2xs">
          <Text py="xs" variant="subtitle02Medium">
            {GROUP_ERROR_MESSAGE}
          </Text>
          <Checkbox
            checked={groupSelectedItems.includes('1')}
            error={groupHasError}
            label="Item 1"
            onPress={() => toggleGroupItem('1')}
          />
          <Box height={12} />
          <Checkbox
            checked={groupSelectedItems.includes('2')}
            error={groupHasError}
            label="Item 2"
            onPress={() => toggleGroupItem('2')}
          />
          <Box height={12} />
          <Checkbox
            checked={groupSelectedItems.includes('3')}
            error={groupHasError}
            label="Item 3"
            onPress={() => toggleGroupItem('3')}
          />
          {groupHasError ? (
            <Text marginTop="3xs" variant="subtitle04Regular" color="dangerKey">
              {GROUP_ERROR_MESSAGE}
            </Text>
          ) : null}
          <Box height={8} />
          <Text
            variant="subtitle04Regular"
            color="primaryKey"
            onPress={() => {
              setGroupSelectedItems([]);
              setGroupValidationTriggered(true);
            }}>
            Reset demo
          </Text>
        </Box>
      </>
    );
  },
};
