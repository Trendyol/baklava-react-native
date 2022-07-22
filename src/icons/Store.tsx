import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgStore = (props: SvgProps) => (
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
      d="M20 12a2.987 2.987 0 0 0 1.771.755l.229.009V21a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8.236c.769 0 1.47-.29 2-.764.289.258.627.461 1 .593V18h14l.001-5.407c.373-.132.711-.335.999-.593Zm-.5-11a3 3 0 0 1 2.4 1.2l1.5 2A3 3 0 0 1 24 6v3a2 2 0 1 1-4 0 2 2 0 1 1-4 0 2 2 0 1 1-4 0 2 2 0 1 1-4 0 2 2 0 1 1-4 0 2 2 0 1 1-4 0V6a3 3 0 0 1 .6-1.8l1.5-2A3 3 0 0 1 4.5 1h15Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgStore;
