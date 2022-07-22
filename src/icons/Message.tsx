import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgMessage = (props: SvgProps) => (
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
      d="M3 1C1.346 1 0 2.346 0 4v18a1 1 0 0 0 1.514.857l3.525-2.714A.987.987 0 0 1 5.553 20H21c1.655 0 3-1.346 3-3V4c0-1.654-1.345-3-3-3H3Zm2 12.75c0-.69.56-1.25 1.25-1.25h5.5a1.25 1.25 0 1 1 0 2.5h-5.5C5.56 15 5 14.44 5 13.75ZM6.25 7a1.25 1.25 0 1 0 0 2.5h10.5a1.25 1.25 0 1 0 0-2.5H6.25Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgMessage;
