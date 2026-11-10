import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const ExpressFurniture = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M9 1a3 3 0 0 0-3 3v2.5A2.5 2.5 0 0 1 8.5 9v4.5h11V9A2.5 2.5 0 0 1 22 6.5V4a3 3 0 0 0-3-3H9Z"
      fill={props?.fill ?? '#273142'}
    />
    <Path
      d="M4 10H3a1 1 0 1 1 0-2h2.22c.042 0 .084.003.126.008A1.5 1.5 0 0 1 7 9.5V14a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5a1.5 1.5 0 0 1 3 0V18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2H3a1 1 0 1 1 0-2h2a1 1 0 1 0 0-2H1a1 1 0 1 1 0-2h3a1 1 0 1 0 0-2ZM9 21H6l.31 1.242a1 1 0 0 0 .97.758h.44a1 1 0 0 0 .97-.758L9 21ZM22 21h-3l.31 1.242a1 1 0 0 0 .97.758h.44a1 1 0 0 0 .97-.758L22 21Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default ExpressFurniture;
