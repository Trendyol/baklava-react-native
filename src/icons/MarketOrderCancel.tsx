import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgMarketOrderCancel = (props: SvgProps) => (
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
      d="M9.882.287a1.5 1.5 0 0 1 .331 2.095L8.31 5h7.382l-1.904-2.618A1.5 1.5 0 1 1 16.213.618L19.4 5h3.1A1.5 1.5 0 0 1 24 6.5v2a1.5 1.5 0 0 1-1.5 1.5h-21A1.5 1.5 0 0 1 0 8.5v-2A1.5 1.5 0 0 1 1.5 5h3.1L7.787.618A1.5 1.5 0 0 1 9.882.287ZM23 11H1l1.985 10.554A3 3 0 0 0 5.933 24h12.134a3 3 0 0 0 2.948-2.446L23 11ZM9.707 13.293a1 1 0 0 0-1.414 1.414L10.586 17l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 18.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 17l2.293-2.293a1 1 0 0 0-1.414-1.414L12 15.586l-2.293-2.293Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgMarketOrderCancel;
