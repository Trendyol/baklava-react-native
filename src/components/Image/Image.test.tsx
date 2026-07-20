import React from 'react';
import { fireEvent } from '@testing-library/react-native';
import { render } from '../../test-utils';
import Image from './Image';

const REMOTE_URI =
  'https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/44/e5/9c/44e59caf-c7f4-90c0-fac6-2b22d3a66a5a/AppIcon-1x_U007emarketing-0-10-0-sRGB-85-220.png/1200x600wa.png';

describe('Image', () => {
  test('should render Image correctly', () => {
    const { toJSON } = render(
      <Image source={{ uri: REMOTE_URI }} accessibilityLabel="image" />,
    );

    expect(toJSON()).toMatchSnapshot();
  });

  test('should render given Image source correctly', () => {
    const { getByTestId } = render(<Image source={{ uri: REMOTE_URI }} />);
    const imageComponent = getByTestId('image');

    expect(imageComponent.props.source).toEqual({ uri: REMOTE_URI });
  });

  test('should render Image height correctly', () => {
    const { getByTestId } = render(
      <Image source={{ uri: REMOTE_URI }} height={55} />,
    );
    const imageComponent = getByTestId('image');

    expect(imageComponent.props.style.height).toBe(53);
  });

  test('should render Image correctly with border', () => {
    const { getByTestId } = render(<Image source={{ uri: REMOTE_URI }} />);
    const imageBoxComponent = getByTestId('image-box');

    expect(imageBoxComponent.props.style[0].borderWidth).toBe(1);
    expect(imageBoxComponent.props.style[0].borderColor).toBe('#AFBBCA');
  });

  test('should render Image correctly without border', () => {
    const { getByTestId } = render(
      <Image source={{ uri: REMOTE_URI }} bordered={false} />,
    );
    const imageBoxComponent = getByTestId('image-box');

    expect(imageBoxComponent.props.style[0].borderWidth).toBe(0);
    expect(imageBoxComponent.props.style[0].borderColor).toBe('transparent');
  });

  describe('Fabric anti-recycling', () => {
    test('should hide remote image until loaded (opacity: 0)', () => {
      const { getByTestId } = render(<Image source={{ uri: REMOTE_URI }} />);
      const imageComponent = getByTestId('image');

      expect(imageComponent.props.style.opacity).toBe(0);
    });

    test('should show image after onLoad fires (opacity: 1)', () => {
      const { getByTestId } = render(<Image source={{ uri: REMOTE_URI }} />);
      const imageComponent = getByTestId('image');

      fireEvent(imageComponent, 'load', {
        nativeEvent: { source: { width: 100, height: 100 } },
      });

      expect(imageComponent.props.style.opacity).toBe(1);
    });

    test('should always show static source (opacity: 1)', () => {
      const { getByTestId } = render(<Image source={1} />);
      const imageComponent = getByTestId('image');

      expect(imageComponent.props.style.opacity).toBe(1);
    });

    test('should show fallbackSource on error', () => {
      const fallback = { uri: 'https://example.com/fallback.png' };
      const { getByTestId } = render(
        <Image source={{ uri: REMOTE_URI }} fallbackSource={fallback} />,
      );
      const imageComponent = getByTestId('image');

      fireEvent(imageComponent, 'error', {
        nativeEvent: { error: 'Load failed' },
      });

      expect(imageComponent.props.source).toEqual(fallback);
      expect(imageComponent.props.style.opacity).toBe(1);
    });

    test('should show onErrorImage on error when provided', () => {
      const errorImg = { uri: 'https://example.com/error-placeholder.png' };
      const { getByTestId } = render(
        <Image source={{ uri: REMOTE_URI }} onErrorImage={errorImg} />,
      );
      const imageComponent = getByTestId('image');

      fireEvent(imageComponent, 'error', {
        nativeEvent: { error: 'Load failed' },
      });

      expect(imageComponent.props.source).toEqual(errorImg);
      expect(imageComponent.props.style.opacity).toBe(1);
    });

    test('should prefer onErrorImage over fallbackSource when both provided', () => {
      const errorImg = { uri: 'https://example.com/error-image.png' };
      const fallback = { uri: 'https://example.com/fallback.png' };
      const { getByTestId } = render(
        <Image
          source={{ uri: REMOTE_URI }}
          onErrorImage={errorImg}
          fallbackSource={fallback}
        />,
      );
      const imageComponent = getByTestId('image');

      fireEvent(imageComponent, 'error', {
        nativeEvent: { error: 'Load failed' },
      });

      expect(imageComponent.props.source).toEqual(errorImg);
    });

    test('should show border-only (empty) on error without fallbackSource', () => {
      const { getByTestId } = render(<Image source={{ uri: REMOTE_URI }} />);
      const imageComponent = getByTestId('image');

      fireEvent(imageComponent, 'error', {
        nativeEvent: { error: 'Load failed' },
      });

      expect(imageComponent.props.source).toEqual({ uri: REMOTE_URI });
      expect(imageComponent.props.style.opacity).toBe(1);
    });

    test('should forward consumer onLoad callback', () => {
      const onLoad = jest.fn();
      const { getByTestId } = render(
        <Image source={{ uri: REMOTE_URI }} onLoad={onLoad} />,
      );
      const imageComponent = getByTestId('image');

      const event = { nativeEvent: { source: { width: 100, height: 100 } } };
      fireEvent(imageComponent, 'load', event);

      expect(onLoad).toHaveBeenCalledTimes(1);
    });

    test('should forward consumer onError callback', () => {
      const onError = jest.fn();
      const { getByTestId } = render(
        <Image source={{ uri: REMOTE_URI }} onError={onError} />,
      );
      const imageComponent = getByTestId('image');

      const event = { nativeEvent: { error: 'Load failed' } };
      fireEvent(imageComponent, 'error', event);

      expect(onError).toHaveBeenCalledTimes(1);
    });

    test('should have overflow hidden on box', () => {
      const { getByTestId } = render(<Image source={{ uri: REMOTE_URI }} />);
      const imageBoxComponent = getByTestId('image-box');

      const boxStyles = imageBoxComponent.props.style;
      const inlineStyle = boxStyles.find
        ? boxStyles.find((s: any) => s?.overflow)
        : boxStyles[boxStyles.length - 1];
      expect(inlineStyle?.overflow).toBe('hidden');
    });
  });
});
