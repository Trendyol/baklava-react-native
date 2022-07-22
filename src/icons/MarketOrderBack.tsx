import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgMarketOrderBack = (props: SvgProps) => (
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
      d="M16.213.618a1.5 1.5 0 0 0-2.426 1.764L15.691 5H8.309l1.904-2.618A1.5 1.5 0 1 0 7.787.618L4.6 5H1.5A1.5 1.5 0 0 0 0 6.5v2A1.5 1.5 0 0 0 1.5 10h21A1.5 1.5 0 0 0 24 8.5v-2A1.5 1.5 0 0 0 22.5 5h-3.1L16.213.618ZM23 11H1l1.985 10.555A3 3 0 0 0 5.933 24h12.134a3 3 0 0 0 2.948-2.445L23 11Zm-11.293 3.707a1 1 0 0 0-1.414-1.414l-3 3a1 1 0 0 0 0 1.414l3 3a1 1 0 0 0 1.414-1.414L10.414 18H16a1 1 0 1 0 0-2h-5.586l1.293-1.293Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgMarketOrderBack;
