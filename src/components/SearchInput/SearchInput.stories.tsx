import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import React from 'react';
import Box from '../Box/Box';
import Text from '../Text/Text';
import SearchInput from './SearchInput';

const sizeList = ['small', 'medium', 'large'];

const SearchInputMeta: ComponentMeta<typeof SearchInput> = {
  title: 'SearchInput',
  component: SearchInput,
  argTypes: {
    size: {
      options: sizeList,
      control: { type: 'radio' },
    },
  },
  args: {
    size: 'large',
    placeholder: 'Search',
    loading: false,
    disabled: false,
  },
};

export default SearchInputMeta;

type SearchInputStory = ComponentStory<typeof SearchInput>;

export const Basic: SearchInputStory = args => (
  <Box p="m">
    <Text mb="m" variant="subtitle01Bold">
      Search Input
    </Text>
    <SearchInput {...args} />
  </Box>
);

export const WithRequest: SearchInputStory = args => {
  const [loading, setLoading] = React.useState(false);
  const [result, setResult] = React.useState('');
  const timeout = React.useRef<ReturnType<typeof setTimeout>>();

  React.useEffect(() => () => clearTimeout(timeout.current), []);

  const search = (query: string) => {
    clearTimeout(timeout.current);

    if (query.length < 3) {
      setLoading(false);
      setResult('');
      return;
    }

    setLoading(true);
    timeout.current = setTimeout(() => {
      setLoading(false);
      setResult(`Results for "${query}"`);
    }, 600);
  };

  return (
    <Box p="m">
      <Text mb="m" variant="subtitle01Bold">
        Search after three characters
      </Text>
      <SearchInput
        {...args}
        loading={loading}
        onChangeText={search}
        onClear={() => search('')}
      />
      <Text mt="m" color="neutralDark">
        {result}
      </Text>
    </Box>
  );
};

export const States: SearchInputStory = () => (
  <Box p="m">
    <Text mb="2xs" variant="subtitle3Medium">
      Default
    </Text>
    <SearchInput />

    <Text mt="m" mb="2xs" variant="subtitle3Medium">
      Typing
    </Text>
    <SearchInput defaultValue="Typing" autoFocus />

    <Text mt="m" mb="2xs" variant="subtitle3Medium">
      Loading
    </Text>
    <SearchInput defaultValue="Typing" loading />

    <Text mt="m" mb="2xs" variant="subtitle3Medium">
      Searched
    </Text>
    <SearchInput defaultValue="Searched" />

    <Text mt="m" mb="2xs" variant="subtitle3Medium">
      Disabled
    </Text>
    <SearchInput placeholder="Search" disabled />
  </Box>
);

export const Sizes: SearchInputStory = () => (
  <Box p="m">
    <Box mb="m">
      <SearchInput size="large" placeholder="Large" />
    </Box>
    <Box mb="m">
      <SearchInput size="medium" placeholder="Medium" />
    </Box>
    <SearchInput size="small" placeholder="Small" />
  </Box>
);
