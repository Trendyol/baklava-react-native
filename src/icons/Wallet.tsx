import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgWallet = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className=""
    {...props}>
    <Path
      d="M4 0a4 4 0 0 0-4 4v17a3 3 0 0 0 3 3h17a3 3 0 0 0 3-3v-2h-3a4 4 0 0 1-4-4v-1a4 4 0 0 1 4-4h3V8a3 3 0 0 0-3-3H4a1 1 0 1 1 0-2h15.5a1.5 1.5 0 0 0 0-3H4Z"
      fill={props?.fill ?? `#273142`}
    />
    <Path
      d="M20 12a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2h-2Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgWallet;
