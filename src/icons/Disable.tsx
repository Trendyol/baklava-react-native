import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgDisable = (props: SvgProps) => (
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
      d="M17.215 19.336a9 9 0 0 1-12.55-12.55l12.55 12.55Zm2.121-2.121L6.786 4.664a9 9 0 0 1 12.55 12.55ZM24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default SvgDisable;
