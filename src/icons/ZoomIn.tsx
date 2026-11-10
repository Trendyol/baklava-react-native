import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const ZoomIn = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="m23.606 21.714-4.53-4.517a10.659 10.659 0 1 0-1.879 1.879l4.517 4.53a1.33 1.33 0 0 0 1.892 0 1.331 1.331 0 0 0 0-1.892Zm-10.272-9.713H12v1.333a1.332 1.332 0 1 1-2.664 0V12H8.004a1.333 1.333 0 0 1 0-2.664h1.333V8.004a1.332 1.332 0 0 1 2.664 0v1.333h1.333a1.332 1.332 0 1 1 0 2.664Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default ZoomIn;
