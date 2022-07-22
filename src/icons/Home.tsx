import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgHome = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className=""
    {...props}>
    <Path
      d="M1.44 7.109A3.661 3.661 0 0 0 0 10.025V21.57C0 22.912 1.075 24 2.4 24h5a1 1 0 0 0 1-1v-4.97c0-1.342 1.075-2.43 2.4-2.43h2.4c1.325 0 2.4 1.088 2.4 2.43V23a1 1 0 0 0 1 1h5c1.325 0 2.4-1.088 2.4-2.43V10.025a3.661 3.661 0 0 0-1.44-2.916l-8.4-6.38a3.564 3.564 0 0 0-4.32 0l-8.4 6.38Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgHome;
