import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import React from 'react';
import Box from '../Box/Box';
import Text from '../Text/Text';
import Image from './Image';

const ImageMeta: ComponentMeta<typeof Image> = {
  title: 'Image',
  component: Image,
  argTypes: {
    onPress: { action: 'pressed the button' },
  },
  args: {
    width: 48,
    height: 72,
  },
};

export default ImageMeta;

type ImageStory = ComponentStory<typeof Image>;

export const Basic: ImageStory = args => (
  <>
    <Text p="2xs" variant="subtitle1Bold">
      Image
    </Text>
    <Image
      width={Number(args.width)}
      height={Number(args.height)}
      source={{
        uri: 'https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/44/e5/9c/44e59caf-c7f4-90c0-fac6-2b22d3a66a5a/AppIcon-1x_U007emarketing-0-10-0-sRGB-85-220.png/1200x600wa.png',
      }}
    />
  </>
);

export const Cases: ImageStory = () => {
  return (
    <>
      <Text p="2xs" variant="subtitle01Bold">
        Image Cases
      </Text>

      <Box px="m" py="2xs">
        <Image
          width={60}
          height={60}
          source={{
            uri: 'https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/44/e5/9c/44e59caf-c7f4-90c0-fac6-2b22d3a66a5a/AppIcon-1x_U007emarketing-0-10-0-sRGB-85-220.png/1200x600wa.png',
          }}
        />
      </Box>
      <Box px="m" py="2xs">
        <Image
          resizeMode="contain"
          source={require('../../../assets/trendyol.png')}
        />
      </Box>
      <Box px="m" py="2xs">
        <Image
          width={65}
          height={65}
          bordered={false}
          source={require('../../../assets/trendyol.png')}
        />
      </Box>
      <Box px="m" py="2xs">
        <Image source={require('../../../assets/trendyol.png')} />
      </Box>
    </>
  );
};
