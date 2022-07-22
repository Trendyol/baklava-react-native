import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgAddProduct = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className=""
    {...props}>
    <Path
      d="M13 7h11l-2.763-5.372A3 3 0 0 0 18.57 0H13v7ZM11 7V0H5.43a3 3 0 0 0-2.667 1.628L0 7h11ZM0 9h24v3.288A8.5 8.5 0 0 0 12.288 24H3a3 3 0 0 1-3-3V9Z"
      fill={props?.fill ?? `#273142`}
    />
    <Path
      d="M13.5 18.75c0-.69.56-1.25 1.25-1.25h8a1.25 1.25 0 1 1 0 2.5h-8c-.69 0-1.25-.56-1.25-1.25Z"
      fill={props?.fill ?? `#273142`}
    />
    <Path
      d="M18.75 24c-.69 0-1.25-.56-1.25-1.25v-7.5a1.25 1.25 0 1 1 2.5 0v7.5c0 .69-.56 1.25-1.25 1.25Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgAddProduct;
