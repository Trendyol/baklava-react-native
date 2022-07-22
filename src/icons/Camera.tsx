import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgCamera = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className=""
    {...props}>
    <Path
      d="M.436 5.184C0 6.04 0 7.16 0 9.4v5.2c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.748 1.748C3.04 21 4.16 21 6.4 21h5.2c2.24 0 3.36 0 4.216-.436a4 4 0 0 0 1.748-1.748c.373-.733.427-1.66.435-3.317l4.497 2.624A1 1 0 0 0 24 17.259V6.741a1 1 0 0 0-1.504-.864L18 8.501c-.008-1.658-.062-2.584-.435-3.317a4 4 0 0 0-1.748-1.748C14.96 3 13.84 3 11.6 3H6.4c-2.24 0-3.36 0-4.216.436A4 4 0 0 0 .436 5.184Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgCamera;
