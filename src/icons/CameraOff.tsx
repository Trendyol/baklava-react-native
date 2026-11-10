import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const CameraOff = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M2.8.4a1 1 0 1 0-1.6 1.2l1.28 1.706c-.103.039-.201.082-.296.13A4 4 0 0 0 .436 5.184C0 6.04 0 7.16 0 9.4v5.2c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.748 1.748C3.04 21 4.16 21 6.4 21h5.2c1.992 0 3.098 0 3.92-.306L17.7 23.6a1 1 0 0 0 1.6-1.2L2.8.4ZM6.75 3l11.123 14.83c.1-.587.121-1.324.126-2.33l4.497 2.623A1 1 0 0 0 24 17.259V6.741a1 1 0 0 0-1.504-.864L18 8.501c-.008-1.658-.062-2.584-.435-3.317a4 4 0 0 0-1.748-1.748C14.96 3 13.84 3 11.6 3H6.75Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default CameraOff;
