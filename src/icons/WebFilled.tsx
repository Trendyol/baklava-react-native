import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgWebFilled = (props: SvgProps) => (
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
      d="M14 22v-4h-4v4H7a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2h-3Z"
      fill={props?.fill ?? `#273142`}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 0a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3Zm0 16a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2H3Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgWebFilled;
