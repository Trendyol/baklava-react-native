import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgCoupon = (props: SvgProps) => (
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
      d="M2 3h13v1a1 1 0 1 0 2 0V3h5a2 2 0 0 1 2 2v5a2 2 0 1 0 0 4v5a2 2 0 0 1-2 2h-5v-1a1 1 0 1 0-2 0v1H2a2 2 0 0 1-2-2v-5a2 2 0 1 0 0-4V5a2 2 0 0 1 2-2Zm15 5a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0V8Zm-1 5a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgCoupon;
