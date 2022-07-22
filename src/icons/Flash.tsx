import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgFlash = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className=""
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.778 0h8.798L13.5 9H20L6.765 24l4.163-11.07H4L9.778 0Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgFlash;
