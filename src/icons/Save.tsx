import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgSave = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className=""
    {...props}>
    <Path
      d="M21.333 24H19V14a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v10H2.667A2.667 2.667 0 0 1 0 21.333V2.667A2.667 2.667 0 0 1 2.667 0H5v7a1 1 0 0 0 1 1h11a1 1 0 1 0 0-2H7V0h10.333L24 6.667v14.666A2.667 2.667 0 0 1 21.333 24Z"
      fill={props?.fill ?? `#273142`}
    />
    <Path d="M17 15v9H7v-9h10Z" fill={props?.fill ?? `#273142`} />
  </Svg>
);

export default SvgSave;
