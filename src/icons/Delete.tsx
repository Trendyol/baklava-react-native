import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgDelete = (props: SvgProps) => (
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
      d="M7 4V3a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1h4.5a1.5 1.5 0 0 1 0 3h-19a1.5 1.5 0 1 1 0-3H7Zm3.5-1.5h3a1 1 0 0 1 1 1V4h-5v-.5a1 1 0 0 1 1-1Z"
      fill={props?.fill ?? `#273142`}
    />
    <Path
      d="M3 8h18l-.824 13.187A3 3 0 0 1 17.182 24H6.818a3 3 0 0 1-2.994-2.813L3 8Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgDelete;
