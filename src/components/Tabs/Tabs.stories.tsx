import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import React, { useState } from 'react';
import Box from '../Box/Box';
import Text from '../Text/Text';
import Tabs from './Tabs';
import { useWindowDimensions } from 'react-native';

const TabsMeta: ComponentMeta<typeof Tabs> = {
  title: 'Tabs',
  component: Tabs,
  argTypes: {
    onValueChange: { action: 'pressed the button' },
  },
  args: {
    value: 'tab1',
    defaultValue: 'tab1',
  },
};

export default TabsMeta;

type TabsStory = ComponentStory<typeof Tabs>;

export const Basic: TabsStory = args => {
  const [value, setValue] = React.useState('');
  React.useEffect(() => {
    setValue(args.value);
  }, [args.value]);
  return (
    <>
      <Text p="2xs" variant="subtitle01Bold">
        Tabs
      </Text>
      <Tabs
        {...args}
        onValueChange={setValue}
        value={value}
        defaultValue="tab1">
        <Tabs.List>
          <Tabs.Option value="tab1" title="Tab Title" caption="Caption" />
          <Tabs.Option value="tab2" title="Tab Title" />
        </Tabs.List>
        <Tabs.Content value="tab1">
          <Box mt="s">
            <Text>Tab 1 Content</Text>
          </Box>
        </Tabs.Content>
        <Tabs.Content value="tab2">
          <Box mt="s">
            <Text>Tab 2 Content</Text>
          </Box>
        </Tabs.Content>
      </Tabs>
    </>
  );
};

export const TabTypes: TabsStory = () => {
  return (
    <>
      <Text p="2xs" variant="subtitle01Bold">
        Tab Types
      </Text>
      <Box px="m" py="2xs">
        <Tabs value={'tab1'} onValueChange={() => {}} defaultValue="tab1">
          <Tabs.List>
            <Tabs.Option value="tab1" title="Active Tab" caption="Caption" />
            <Tabs.Option value="tab2" title="Inactive Tab" caption="Caption" />
            <Tabs.Option
              value="tab2"
              title="Disabled Tab"
              caption="Caption"
              disabled
            />
          </Tabs.List>
        </Tabs>
      </Box>
    </>
  );
};

export const Cases: TabsStory = () => {
  const [value, setValue] = useState('tab1');
  const [value2, setValue2] = useState('tab1');
  const [value3, setValue3] = useState('tab1');
  const [value4, setValue4] = useState('tab1');

  return (
    <>
      <Text p="2xs" variant="subtitle01Bold">
        Tab Cases
      </Text>
      <Box px="m" py="2xs">
        <Tabs value={value} onValueChange={setValue} defaultValue="tab1">
          <Tabs.List>
            <Tabs.Option value="tab1" title="Tab Title" caption="Caption" />
            <Tabs.Option value="tab2" title="Tab Title" />
          </Tabs.List>
          <Tabs.Content value="tab1">
            <Box mt="s">
              <Text>Tab 1 Content</Text>
            </Box>
          </Tabs.Content>
          <Tabs.Content value="tab2">
            <Box mt="s">
              <Text>Tab 2 Content</Text>
            </Box>
          </Tabs.Content>
        </Tabs>
      </Box>

      <Box px="m" py="2xs" mt="5xl">
        <Tabs value={value2} onValueChange={setValue2} defaultValue="tab1">
          <Tabs.List>
            <Tabs.Option value="tab1" title="Tab Title" caption="Caption" />
            <Tabs.Option value="tab2" title="Tab Title" caption="Caption" />
            <Tabs.Option
              value="tab3"
              title="Tab Title"
              caption="Caption"
              disabled
            />
          </Tabs.List>
          <Tabs.Content value="tab1">
            <Box mt="s">
              <Text>Tab 1 Content</Text>
            </Box>
          </Tabs.Content>
          <Tabs.Content value="tab2">
            <Box mt="s">
              <Text>Tab 2 Content</Text>
            </Box>
          </Tabs.Content>
          <Tabs.Content value="tab3">
            <Box mt="s">
              <Text>Tab 3 Content</Text>
            </Box>
          </Tabs.Content>
        </Tabs>
      </Box>

      <Box px="m" py="2xs" mt="5xl">
        <Tabs value={value3} onValueChange={setValue3} defaultValue="tab1">
          <Tabs.List>
            <Tabs.Option
              value="tab1"
              title="Lorem ipsum dolor sit amet"
              caption="Caption"
            />
            <Tabs.Option value="tab2" title="Tab Title" caption="Caption" />
          </Tabs.List>
          <Tabs.Content value="tab1">
            <Box mt="s">
              <Text>Tab 1 Content</Text>
            </Box>
          </Tabs.Content>
          <Tabs.Content value="tab2">
            <Box mt="s">
              <Text>Tab 2 Content</Text>
            </Box>
          </Tabs.Content>
        </Tabs>
      </Box>

      <Box px="m" py="2xs" mt="5xl">
        <Tabs value={value4} onValueChange={setValue4} defaultValue="tab1">
          <Tabs.List>
            <Tabs.Option value="tab1" title="Tab Title" caption="Caption" />
            <Tabs.Option value="tab2" title="Tab Title" caption="Caption" />
            <Tabs.Option value="tab3" title="Tab Title" />
            <Tabs.Option value="tab4" title="Tab Title" caption="Caption" />
            <Tabs.Option value="tab5" title="Tab Title" caption="Caption" />
          </Tabs.List>
          <Tabs.Content value="tab1">
            <Box mt="s">
              <Text>Tab 1 Content</Text>
            </Box>
          </Tabs.Content>
          <Tabs.Content value="tab2">
            <Box mt="s">
              <Text>Tab 2 Content</Text>
            </Box>
          </Tabs.Content>
          <Tabs.Content value="tab3">
            <Box mt="s">
              <Text>Tab 3 Content</Text>
            </Box>
          </Tabs.Content>
          <Tabs.Content value="tab4">
            <Box mt="s">
              <Text>Tab 4 Content</Text>
            </Box>
          </Tabs.Content>
          <Tabs.Content value="tab5">
            <Box mt="s">
              <Text>Tab 5 Content</Text>
            </Box>
          </Tabs.Content>
        </Tabs>
      </Box>
    </>
  );
};

export const IconAndBadge: TabsStory = () => {
  const [value1, setValue1] = useState('tab1');
  const [value2, setValue2] = useState('tab1');
  const [value3, setValue3] = useState('tab1');

  return (
    <>
      <Text p="2xs" variant="subtitle01Bold">
        Icon And Badge Tab Cases
      </Text>

      <Box px="m" py="2xs" mt="5xl">
        <Tabs value={value1} onValueChange={setValue1} defaultValue="tab1">
          <Tabs.List>
            <Tabs.Option value="tab2" title="Tab Title" caption="Caption" />
            <Tabs.Option
              value="tab1"
              title="Tab Title"
              caption="Caption"
              iconName="heart"
            />
            <Tabs.Option value="tab3" title="Tab Title" />
          </Tabs.List>
          <Tabs.Content value="tab1">
            <Box mt="s">
              <Text>Tab 1 Content</Text>
            </Box>
          </Tabs.Content>
          <Tabs.Content value="tab2">
            <Box mt="s">
              <Text>Tab 2 Content</Text>
            </Box>
          </Tabs.Content>
          <Tabs.Content value="tab3">
            <Box mt="s">
              <Text>Tab 3 Content</Text>
            </Box>
          </Tabs.Content>
          <Tabs.Content value="tab4">
            <Box mt="s">
              <Text>Tab 4 Content</Text>
            </Box>
          </Tabs.Content>
          <Tabs.Content value="tab5">
            <Box mt="s">
              <Text>Tab 5 Content</Text>
            </Box>
          </Tabs.Content>
        </Tabs>
      </Box>

      <Box px="m" py="2xs" mt="5xl">
        <Tabs value={value2} onValueChange={setValue2} defaultValue="tab1">
          <Tabs.List>
            <Tabs.Option value="tab2" title="Tab Title" caption="Caption" />
            <Tabs.Option
              value="tab1"
              title="Tab Title"
              caption="Caption"
              badgeText="New"
            />
            <Tabs.Option value="tab3" title="Tab Title" />
          </Tabs.List>
          <Tabs.Content value="tab1">
            <Box mt="s">
              <Text>Tab 1 Content</Text>
            </Box>
          </Tabs.Content>
          <Tabs.Content value="tab2">
            <Box mt="s">
              <Text>Tab 2 Content</Text>
            </Box>
          </Tabs.Content>
          <Tabs.Content value="tab3">
            <Box mt="s">
              <Text>Tab 3 Content</Text>
            </Box>
          </Tabs.Content>
          <Tabs.Content value="tab4">
            <Box mt="s">
              <Text>Tab 4 Content</Text>
            </Box>
          </Tabs.Content>
          <Tabs.Content value="tab5">
            <Box mt="s">
              <Text>Tab 5 Content</Text>
            </Box>
          </Tabs.Content>
        </Tabs>
      </Box>

      <Box px="m" py="2xs" mt="5xl">
        <Tabs value={value3} onValueChange={setValue3} defaultValue="tab1">
          <Tabs.List>
            <Tabs.Option value="tab2" title="Tab Title" caption="Caption" />
            <Tabs.Option
              value="tab1"
              title="Tab Title"
              caption="Caption"
              iconName="confetti"
              badgeText="Ipsum"
            />
            <Tabs.Option value="tab3" title="Tab Title" />
          </Tabs.List>
          <Tabs.Content value="tab1">
            <Box mt="s">
              <Text>Tab 1 Content</Text>
            </Box>
          </Tabs.Content>
          <Tabs.Content value="tab2">
            <Box mt="s">
              <Text>Tab 2 Content</Text>
            </Box>
          </Tabs.Content>
          <Tabs.Content value="tab3">
            <Box mt="s">
              <Text>Tab 3 Content</Text>
            </Box>
          </Tabs.Content>
          <Tabs.Content value="tab4">
            <Box mt="s">
              <Text>Tab 4 Content</Text>
            </Box>
          </Tabs.Content>
          <Tabs.Content value="tab5">
            <Box mt="s">
              <Text>Tab 5 Content</Text>
            </Box>
          </Tabs.Content>
        </Tabs>
      </Box>
    </>
  );
};

export const Example: TabsStory = () => {
  const [value, setValue] = useState('tab1');
  const dims = useWindowDimensions();

  return (
    <Box height={dims.height} backgroundColor="dangerContrast">
      <Tabs value={value} onValueChange={setValue} defaultValue="tab1">
        <Tabs.List>
          <Tabs.Option value="tab1" title="Tab Title" caption="Caption" />
          <Tabs.Option value="tab2" title="Tab Title" caption="Caption" />
        </Tabs.List>
        <Tabs.Content flex={1} value="tab1" backgroundColor="infoKey">
          <Box mt="s">
            <Text>Tab 1 Content</Text>
          </Box>
        </Tabs.Content>
        <Tabs.Content flex={1} value="tab2" backgroundColor="infoKey">
          <Box mt="s">
            <Text>Tab 2 Content</Text>
          </Box>
        </Tabs.Content>
      </Tabs>
    </Box>
  );
};
