import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import React, { useState } from 'react';
import Text from '../Text/Text';
import Button from '../Button/Button';
import Box from '../Box/Box';
import Accordion from './Accordion';
import AccordionGroup from './AccordionGroup';

const AccordionMeta: ComponentMeta<typeof Accordion> = {
  title: 'Accordion',
  component: Accordion,
  argTypes: {
    defaultOpen: { control: 'boolean' },
    headerIcon: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    animated: { control: 'boolean' },
    onOpenChange: { action: 'toggled' },
  },
  args: {
    title: 'Accordion Title',
    defaultOpen: false,
    headerIcon: true,
    fullWidth: false,
    animated: false,
  },
};

export default AccordionMeta;

type AccordionStory = ComponentStory<typeof Accordion>;

export const Basic: AccordionStory = args => {
  const [state, setState] = useState(args);

  return (
    <>
      <Text p="2xs" variant="subtitle01Bold">
        Accordion
      </Text>
      <Box px="m" py="2xs">
        <Accordion
          {...state}
          onOpenChange={open => setState({ ...state, defaultOpen: open })}>
          <Text variant="body2" color="neutralDarker">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tincidunt tellus, tellus non facilisis. Est at ante amet eget ut
            blandit.
          </Text>
          <Box flexDirection="row" gap="m">
            <Button label="Button 1" kind="neutral" size="s" />
            <Button
              label="Button 2"
              variant="secondary"
              kind="neutral"
              size="s"
            />
          </Box>
        </Accordion>
      </Box>
    </>
  );
};

export const Variants: AccordionStory = () => (
  <>
    <Text p="2xs" variant="subtitle01Bold">
      Accordion Variants
    </Text>
    <Box px="m" py="2xs">
      <Accordion title="Accordion Title (Closed)" />
    </Box>
    <Box px="m" py="2xs">
      <Accordion title="Accordion Title (Content)" defaultOpen>
        <Text variant="body2" color="neutralDarker">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt
          tellus, tellus non facilisis. Est at ante amet eget ut blandit.
        </Text>
      </Accordion>
    </Box>
    <Box px="m" py="2xs">
      <Accordion title="Accordion Title (With Actions)" defaultOpen>
        <Text variant="body2" color="neutralDarker">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt
          tellus, tellus non facilisis. Est at ante amet eget ut blandit.
        </Text>
        <Box flexDirection="row" gap="m">
          <Button label="Button 1" kind="neutral" size="s" />
          <Button
            label="Button 2"
            variant="secondary"
            kind="neutral"
            size="s"
          />
        </Box>
      </Accordion>
    </Box>
    <Box px="m" py="2xs">
      <Accordion title="Accordion Title (Full Width)" defaultOpen fullWidth>
        <Text variant="body2" color="neutralDarker">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt
          tellus, tellus non facilisis. Est at ante amet eget ut blandit.
        </Text>
      </Accordion>
    </Box>
    <Box px="m" py="2xs">
      <Accordion
        title="Accordion Title (No Icon)"
        defaultOpen
        headerIcon={false}>
        <Text variant="body2" color="neutralDarker">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt
          tellus, tellus non facilisis. Est at ante amet eget ut blandit.
        </Text>
      </Accordion>
    </Box>
  </>
);

export const Animated: AccordionStory = () => {
  const [open, setOpen] = useState(false);
  const [extraCount, setExtraCount] = useState(0);

  return (
    <>
      <Text p="2xs" variant="subtitle01Bold">
        Animated Accordion
      </Text>
      <Box px="m" py="2xs">
        <Accordion
          title="Accordion Title"
          animated
          open={open}
          onOpenChange={setOpen}>
          <Text variant="body2" color="neutralDarker">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tincidunt tellus, tellus non facilisis. Est at ante amet eget ut
            blandit.
          </Text>
          {Array.from({ length: extraCount }).map((_, i) => (
            <Text key={i} variant="body2" color="neutralDarker">
              Added paragraph {i + 1}: Vestibulum ante ipsum primis in faucibus
              orci luctus et ultrices posuere cubilia curae.
            </Text>
          ))}
          <Box flexDirection="row" gap="m">
            <Button
              label="Add Paragraph"
              kind="neutral"
              size="s"
              onPress={() => setExtraCount(c => c + 1)}
            />
            <Button
              label="Clear"
              variant="secondary"
              kind="neutral"
              size="s"
              onPress={() => setExtraCount(0)}
            />
          </Box>
        </Accordion>
      </Box>
      <Box px="m" py="m" backgroundColor="neutralLightest" borderRadius="l">
        <Text variant="subtitle3Medium" color="neutralDarker">
          Content below the accordion
        </Text>
        <Text variant="body2" color="neutralDarker">
          This content should be pushed down when the accordion opens.
        </Text>
      </Box>
    </>
  );
};

export const List: AccordionStory = () => (
  <>
    <Text p="2xs" variant="subtitle01Bold">
      Accordion List
    </Text>
    <Box px="m" py="2xs">
      <AccordionGroup>
        <Accordion title="Accordion Title" headerIcon={false}>
          <Text variant="body2" color="neutralDarker">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </Accordion>
        <Accordion title="Accordion Title" headerIcon="academy">
          <Text variant="body2" color="neutralDarker">
            Sed tincidunt tellus, tellus non facilisis.
          </Text>
        </Accordion>
        <Accordion title="Accordion Title">
          <Text variant="body2" color="neutralDarker">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tincidunt tellus, tellus non facilisis. Est at ante amet eget ut
            blandit.
          </Text>
          <Box flexDirection="row" gap="m">
            <Button label="Button 1" kind="neutral" size="s" />
            <Button
              label="Button 2"
              variant="secondary"
              kind="neutral"
              size="s"
            />
          </Box>
        </Accordion>
        <Accordion title="Accordion Title" headerIcon={false}>
          <Text variant="body2" color="neutralDarker">
            Est at ante amet eget ut blandit.
          </Text>
        </Accordion>
        <Accordion title="Accordion Title">
          <Text variant="body2" color="neutralDarker">
            Lorem ipsum dolor sit amet.
          </Text>
        </Accordion>
      </AccordionGroup>
    </Box>
  </>
);
