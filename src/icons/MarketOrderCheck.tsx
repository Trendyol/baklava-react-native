import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgMarketOrderCheck = (props: SvgProps) => (
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
      d="M9.882.287a1.5 1.5 0 0 1 .331 2.095L8.31 5h7.382l-1.904-2.618A1.5 1.5 0 1 1 16.213.618L19.4 5h3.1A1.5 1.5 0 0 1 24 6.5v2a1.5 1.5 0 0 1-1.5 1.5h-21A1.5 1.5 0 0 1 0 8.5v-2A1.5 1.5 0 0 1 1.5 5h3.1L7.787.618A1.5 1.5 0 0 1 9.882.287ZM1 11h22l-1.985 10.555A3 3 0 0 1 18.067 24H5.933a3 3 0 0 1-2.948-2.445L1 11Zm15.75 2.255a.931.931 0 0 1 .011 1.257l-5.729 6.222a.808.808 0 0 1-.595.266.809.809 0 0 1-.594-.266l-2.604-2.828a.931.931 0 0 1 .01-1.257.797.797 0 0 1 1.179.011l2.01 2.183 5.134-5.577a.797.797 0 0 1 1.179-.011Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgMarketOrderCheck;
