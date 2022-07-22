import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgSupport = (props: SvgProps) => (
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
      d="M0 5a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v11a4 4 0 0 1-4 4H9.886l-3.261 2.766C5.97 23.32 5 22.826 5 21.938V20H4a4 4 0 0 1-4-4V5Zm7.8 5.4a1.4 1.4 0 1 1-2.8 0 1.4 1.4 0 0 1 2.8 0Zm5.6 0a1.4 1.4 0 1 1-2.8 0 1.4 1.4 0 0 1 2.8 0Zm4.2 1.4a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgSupport;
