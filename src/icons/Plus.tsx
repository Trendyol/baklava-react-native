import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgPlus = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 2a2 2 0 1 0-4 0v8H2a2 2 0 1 0 0 4h8v8a2 2 0 1 0 4 0v-8h8a2 2 0 1 0 0-4h-8V2Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgPlus;
