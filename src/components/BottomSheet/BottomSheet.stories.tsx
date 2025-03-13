import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import React from 'react';
import Text from '../Text/Text';
import BottomSheet from './BottomSheet';
import Button from '../Button/Button';
import Box from '../Box/Box';

const BottomSheetMeta: ComponentMeta<typeof BottomSheet> = {
  title: 'BottomSheet',
  component: BottomSheet,
};

export default BottomSheetMeta;

type BottomSheetStory = ComponentStory<typeof BottomSheet>;

export const Basic: BottomSheetStory = () => {
  const [modal1, showModal1] = React.useState(false);

  return (
    <Box borderRadius="l" p="m">
      <Text variant="subtitle1Bold" mb="l">
        BottomSheetStory
      </Text>

      <Button mb="m" filled label="Basic" onPress={() => showModal1(true)} />

      <BottomSheet
        modalKey="basic"
        selectButtonLabel="Select"
        closeButtonLabel="Close"
        visible={modal1}
        title="Lorem ipsum dolor"
        closeButtonAction={() => showModal1(false)}
        selectButtonAction={() => showModal1(false)}>
        <Text>Basic Content</Text>
      </BottomSheet>
    </Box>
  );
};
