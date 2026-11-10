import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SplitMoney = (props: SvgProps) => (
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
      d="M13.174 4.5H1.456c-.386.001-.757.163-1.03.451A1.578 1.578 0 0 0 0 6.036v11.932c0 .406.154.795.427 1.082.273.288.643.45 1.03.45h5.289l2.251-5.253a3.75 3.75 0 0 1 2.559-5.97L13.174 4.5Zm-.73 11.224a3.75 3.75 0 0 0 2.559-5.97L17.254 4.5h5.29c.386.001.757.163 1.03.451.273.288.426.679.426 1.085v11.932c0 .406-.153.796-.427 1.083a1.42 1.42 0 0 1-1.03.45H10.827l1.618-3.777ZM4.5 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM21 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
      fill={props?.fill ?? '#273142'}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.17 1.659a1.5 1.5 0 0 1 .672 2.012l-7.5 18a1.5 1.5 0 1 1-2.684-1.341l1.817-4.36L7.5 10.5l2.783-3.67 1.875-4.5a1.5 1.5 0 0 1 2.013-.671Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default SplitMoney;
