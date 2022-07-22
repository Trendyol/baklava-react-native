import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgCopy = (props: SvgProps) => (
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
      d="M0 3a3 3 0 0 1 3-3h11a3 3 0 0 1 3 3v2H8a3 3 0 0 0-3 3v9H3a3 3 0 0 1-3-3V3Zm10 4a3 3 0 0 0-3 3v11a3 3 0 0 0 3 3h11a3 3 0 0 0 3-3V10a3 3 0 0 0-3-3H10Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgCopy;
