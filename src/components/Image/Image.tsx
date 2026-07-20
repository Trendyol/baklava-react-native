import React, { useState, useCallback } from 'react';
import {
  Image as RNImage,
  ImageSourcePropType,
  ImageErrorEventData,
  ImageLoadEventData,
  NativeSyntheticEvent,
} from 'react-native';
import Box from '../Box/Box';

type ImageProps = React.ComponentProps<typeof RNImage> & {
  bordered?: boolean;
  width?: number;
  height?: number;
  source: ImageSourcePropType;
  fallbackSource?: ImageSourcePropType;
  onErrorImage?: ImageSourcePropType;
  testID?: string;
  accessibilityLabel?: string;
  borderRadius?: number;
  style?: any;
};

const Image = ({
  bordered = true,
  width = 48,
  height = 72,
  source,
  fallbackSource,
  onErrorImage,
  testID = 'image',
  accessibilityLabel = 'image',
  borderRadius = 0,
  style,
  onLoad,
  onError,
  ...rest
}: ImageProps) => {
  const isRemoteSource =
    typeof source === 'object' &&
    source !== null &&
    !Array.isArray(source) &&
    'uri' in source;

  const [loaded, setLoaded] = useState(!isRemoteSource);
  const [errored, setErrored] = useState(false);

  const handleLoad = useCallback(
    (e: NativeSyntheticEvent<ImageLoadEventData>) => {
      setLoaded(true);
      onLoad?.(e);
    },
    [onLoad],
  );

  const handleError = useCallback(
    (e: NativeSyntheticEvent<ImageErrorEventData>) => {
      setErrored(true);
      setLoaded(true);
      onError?.(e);
    },
    [onError],
  );

  const errorImage = onErrorImage ?? fallbackSource;
  const resolvedSource = errored && errorImage ? errorImage : source;

  return (
    <Box
      width={width}
      height={height}
      borderWidth={bordered ? 1 : 0}
      borderColor={bordered ? 'neutralLighter' : 'transparent'}
      testID={`${testID}-box`}
      style={{ borderRadius, overflow: 'hidden' }}
      accessibilityLabel={`${accessibilityLabel}-box`}>
      <RNImage
        style={{
          height: bordered ? height - 2 : height,
          width: bordered ? width - 2 : width,
          borderRadius: borderRadius ? borderRadius - 1 : borderRadius,
          opacity: isRemoteSource && !loaded ? 0 : 1,
          ...style,
        }}
        source={resolvedSource}
        testID={testID}
        accessibilityLabel={accessibilityLabel}
        onLoad={handleLoad}
        onError={handleError}
        {...rest}
      />
    </Box>
  );
};

export default Image;
