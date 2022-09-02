import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgZoomOut = (props: SvgProps) => (
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
      d="M19.767 17.645A10.952 10.952 0 0 0 22 11c0-6.075-4.925-11-11-11S0 4.925 0 11s4.925 11 11 11c2.497 0 4.8-.832 6.645-2.233l3.794 3.794a1.5 1.5 0 0 0 2.122-2.122l-3.794-3.794ZM7 9.5a1.5 1.5 0 0 0 0 3h8a1.5 1.5 0 0 0 0-3H7Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgZoomOut;
