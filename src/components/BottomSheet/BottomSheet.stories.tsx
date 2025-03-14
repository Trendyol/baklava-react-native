import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import React from 'react';
import Text from '../Text/Text';
import BottomSheet from './BottomSheet';
import Button from '../Button/Button';
import Box from '../Box/Box';
import Image from '../Image/Image';
import { useWindowDimensions } from 'react-native';

const BottomSheetMeta: ComponentMeta<typeof BottomSheet> = {
  title: 'BottomSheet',
  component: BottomSheet,
};

export default BottomSheetMeta;

type BottomSheetStory = ComponentStory<typeof BottomSheet>;

export const Basic: BottomSheetStory = () => {
  const dims = useWindowDimensions();

  const [modal1, showModal1] = React.useState(false);
  const [modal2, showModal2] = React.useState(false);

  return (
    <Box borderRadius="l" p="m">
      <Text variant="subtitle1Bold" mb="l">
        BottomSheetStory
      </Text>

      <Box>
        <Button mb="m" filled label="Basic" onPress={() => showModal1(true)} />
        <BottomSheet
          modalKey="basic"
          selectButtonLabel="Select"
          closeButtonLabel="Close"
          visible={modal1}
          title="Basic"
          closeButtonAction={() => showModal1(false)}
          selectButtonAction={() => showModal1(false)}>
          <Text>Basic Content</Text>
        </BottomSheet>
      </Box>

      <Box>
        <Button
          mb="m"
          filled
          label="Basic with image"
          onPress={() => showModal2(true)}
        />
        <BottomSheet
          modalKey="basic"
          selectButtonLabel="Select"
          closeButtonLabel="Close"
          visible={modal2}
          title="Basic with image"
          closeButtonAction={() => showModal2(false)}
          selectButtonAction={() => showModal2(false)}>
          <Image
            height={dims.height * 0.6}
            width={dims.width - 72}
            resizeMode="cover"
            borderRadius={8}
            source={{
              uri: 'https://cdn.dsmcdn.com/ty1006/product/media/images/prod/PIM/20230927/18/a885ced6-7ac8-4ccf-8b58-108db99ed477/1_org_zoom.jpg',
            }}
          />
        </BottomSheet>
      </Box>
    </Box>
  );
};
