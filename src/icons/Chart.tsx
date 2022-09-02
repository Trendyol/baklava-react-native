import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgChart = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M9 1.5A1.5 1.5 0 0 1 10.5 0h3A1.5 1.5 0 0 1 15 1.5v21a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 22.5v-21ZM0 7.5A1.5 1.5 0 0 1 1.5 6h3A1.5 1.5 0 0 1 6 7.5v15A1.5 1.5 0 0 1 4.5 24h-3A1.5 1.5 0 0 1 0 22.5v-15ZM19.5 12a1.5 1.5 0 0 0-1.5 1.5v9a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5v-9a1.5 1.5 0 0 0-1.5-1.5h-3Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgChart;
