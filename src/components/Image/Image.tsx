import React from 'react';
import { Image as RNImage, ImageSourcePropType } from 'react-native';
import Box from '../Box/Box';

type ImageProps = React.ComponentProps<typeof RNImage> & {
  bordered?: boolean;
  width?: number;
  height?: number;
  source: ImageSourcePropType;
  testID?: string;
  accessibilityLabel?: string;
};

const Image = ({
  bordered = true,
  width = 48,
  height = 72,
  source,
  testID = 'image',
  accessibilityLabel = 'image',
  ...rest
}: ImageProps) => {
  return (
    <Box
      width={width}
      height={height}
      borderWidth={bordered ? 1 : 0}
      borderColor={bordered ? 'neutralLighter' : 'transparent'}
      testID={`${testID}-box`}
      accessibilityLabel={`${accessibilityLabel}-box`}>
      <RNImage
        style={{
          height: bordered ? height - 2 : height,
          width: bordered ? width - 2 : width,
        }}
        source={source}
        testID={testID}
        accessibilityLabel={accessibilityLabel}
        {...rest}
      />
    </Box>
  );
};

export default Image;
