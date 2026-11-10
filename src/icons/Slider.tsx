import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Slider = (props: SvgProps) => (
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
      d="M8.5 13a4.5 4.5 0 0 1 4.242 3H21.5a1.5 1.5 0 0 1 0 3h-8.758a4.5 4.5 0 0 1-8.484 0H2.5a1.5 1.5 0 0 1 0-3h1.758A4.5 4.5 0 0 1 8.5 13Zm0 3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM15.5 2a4.5 4.5 0 0 1 4.242 3H21.5a1.5 1.5 0 0 1 0 3h-1.758a4.5 4.5 0 0 1-8.484 0H2.5a1.5 1.5 0 1 1 0-3h8.758A4.5 4.5 0 0 1 15.5 2Zm0 3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default Slider;
