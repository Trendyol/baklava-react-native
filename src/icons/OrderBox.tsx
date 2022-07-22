import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgOrderBox = (props: SvgProps) => (
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
      d="M24 7H13V0h5.57a3 3 0 0 1 2.667 1.628L24 7ZM11 0v7H0l2.763-5.372A3 3 0 0 1 5.43 0H11ZM0 9h24v12a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V9Zm15 9h6v3h-6v-3Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgOrderBox;
