import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const OrderBag = (props: SvgProps) => (
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
      d="M5.825 0a3.6 3.6 0 0 0-3.22 1.99L1.014 5.173A9.6 9.6 0 0 0 0 9.466V20.4A3.6 3.6 0 0 0 3.6 24h16.8a3.6 3.6 0 0 0 3.6-3.6V9.466a9.6 9.6 0 0 0-1.014-4.293L21.395 1.99A3.6 3.6 0 0 0 18.175 0H5.825ZM12 13.2c1.324 0 2.4-1.076 2.4-2.4a1.2 1.2 0 1 1 2.4 0c0 2.647-2.153 4.8-4.8 4.8a4.805 4.805 0 0 1-4.8-4.8 1.2 1.2 0 1 1 2.4 0c0 1.324 1.076 2.4 2.4 2.4Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default OrderBag;
