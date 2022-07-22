import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgArrowDown = (props: SvgProps) => (
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
      d="M3.93 7.36c.67-.67 1.756-.67 2.425 0L12 13.003l5.645-5.645a1.714 1.714 0 0 1 2.425 2.425l-6.858 6.857c-.67.67-1.755.67-2.424 0L3.931 9.784a1.714 1.714 0 0 1 0-2.425Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgArrowDown;
