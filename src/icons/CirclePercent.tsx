import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const CirclePercent = (props: SvgProps) => (
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
      d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1Zm4.707 6.293a1 1 0 0 0-1.414 0l-8 8a1 1 0 1 0 1.414 1.414l8-8a1 1 0 0 0 0-1.414ZM15 13a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM9 7a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default CirclePercent;
