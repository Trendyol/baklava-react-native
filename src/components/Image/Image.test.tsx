import React from 'react';
import { render } from '../../test-utils';
import Image from './Image';

describe('Image', () => {
  test('should render Image correctly', () => {
    // when
    const { toJSON } = render(
      <Image
        source={{
          uri: 'https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/44/e5/9c/44e59caf-c7f4-90c0-fac6-2b22d3a66a5a/AppIcon-1x_U007emarketing-0-10-0-sRGB-85-220.png/1200x600wa.png',
        }}
        accessibilityLabel="image"
      />,
    );

    // then
    expect(toJSON()).toMatchSnapshot();
  });

  test('should render given Image source correctly', () => {
    // when
    const { getByTestId } = render(
      <Image
        source={{
          uri: 'https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/44/e5/9c/44e59caf-c7f4-90c0-fac6-2b22d3a66a5a/AppIcon-1x_U007emarketing-0-10-0-sRGB-85-220.png/1200x600wa.png',
        }}
      />,
    );
    const imageComponent = getByTestId('image');

    // then
    expect(imageComponent.props.source).toEqual({
      uri: 'https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/44/e5/9c/44e59caf-c7f4-90c0-fac6-2b22d3a66a5a/AppIcon-1x_U007emarketing-0-10-0-sRGB-85-220.png/1200x600wa.png',
    });
  });

  test('should render Image height correctly', () => {
    // when
    const { getByTestId } = render(
      <Image
        source={{
          uri: 'https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/44/e5/9c/44e59caf-c7f4-90c0-fac6-2b22d3a66a5a/AppIcon-1x_U007emarketing-0-10-0-sRGB-85-220.png/1200x600wa.png',
        }}
        height={55}
      />,
    );
    const imageComponent = getByTestId('image');

    // then
    expect(imageComponent.props.style.height).toBe(53);
  });

  test('should render Image correctly with border', () => {
    // when
    const { getByTestId } = render(
      <Image
        source={{
          uri: 'https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/44/e5/9c/44e59caf-c7f4-90c0-fac6-2b22d3a66a5a/AppIcon-1x_U007emarketing-0-10-0-sRGB-85-220.png/1200x600wa.png',
        }}
      />,
    );
    const imageBoxComponent = getByTestId('image-box');

    // then
    expect(imageBoxComponent.props.style[0].borderWidth).toBe(1);
    expect(imageBoxComponent.props.style[0].borderColor).toBe('#AFBBCA');
  });

  test('should render Image correctly without border', () => {
    // when
    const { getByTestId } = render(
      <Image
        source={{
          uri: 'https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/44/e5/9c/44e59caf-c7f4-90c0-fac6-2b22d3a66a5a/AppIcon-1x_U007emarketing-0-10-0-sRGB-85-220.png/1200x600wa.png',
        }}
        bordered={false}
      />,
    );
    const imageBoxComponent = getByTestId('image-box');

    // then
    expect(imageBoxComponent.props.style[0].borderWidth).toBe(0);
    expect(imageBoxComponent.props.style[0].borderColor).toBe('transparent');
  });
});
