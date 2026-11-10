import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const RoboticMover = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M20 14a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-.05a2.501 2.501 0 0 1-4.9 0h-6.1a2.501 2.501 0 0 1-4.9 0H4a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3h16ZM20 9a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2h16ZM20 0a3 3 0 1 1 0 6H4a3 3 0 0 1 0-6h16Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default RoboticMover;
