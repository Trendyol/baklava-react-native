import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const CalendarCoin = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M18 0a1.5 1.5 0 0 1 1.5 1.5V3h.5a4 4 0 0 1 4 4v3.052A3.488 3.488 0 0 0 21.5 9h-9a3.5 3.5 0 0 0-2.447 6A3.488 3.488 0 0 0 9 17.5c0 .98.404 1.865 1.053 2.5A3.488 3.488 0 0 0 9 22.5c0 .537.12 1.045.337 1.5H4a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h.5V1.5a1.5 1.5 0 1 1 3 0V3h9V1.5A1.5 1.5 0 0 1 18 0Z"
      fill={props?.fill ?? '#273142'}
    />
    <Path
      d="M21.5 21a1.5 1.5 0 0 1 0 3h-9a1.5 1.5 0 0 1 0-3h9ZM21.5 16a1.5 1.5 0 0 1 0 3h-9a1.5 1.5 0 0 1 0-3h9ZM21.5 11a1.5 1.5 0 0 1 0 3h-9a1.5 1.5 0 0 1 0-3h9Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default CalendarCoin;
