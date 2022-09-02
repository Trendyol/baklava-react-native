import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgSuitcase = (props: SvgProps) => (
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
      d="M8.5 2h7a.5.5 0 0 1 .5.5v2.48H8V2.5a.5.5 0 0 1 .5-.5ZM6 4.98V2.5A2.5 2.5 0 0 1 8.5 0h7A2.5 2.5 0 0 1 18 2.5v2.48h3.5a2.5 2.5 0 0 1 2.5 2.5v4.958a2.5 2.5 0 0 1-2.5 2.5H13a1 1 0 0 0-2 0H2.5a2.5 2.5 0 0 1-2.5-2.5V7.479a2.5 2.5 0 0 1 2.5-2.5H6Zm5 11.95H2a2.987 2.987 0 0 1-1.5-.402V21.5A2.5 2.5 0 0 0 3 24h18a2.5 2.5 0 0 0 2.5-2.5v-4.972a2.987 2.987 0 0 1-1.5.401h-9a1 1 0 0 1-2 0Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgSuitcase;
