import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgMinus = (props: SvgProps) => (
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
      d="M0 12a2 2 0 0 1 2-2h20a2 2 0 1 1 0 4H2a2 2 0 0 1-2-2Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgMinus;
