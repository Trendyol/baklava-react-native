import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgSoundOff = (props: SvgProps) => (
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
      d="M10.777.779 5 7H3a3 3 0 0 0-3 3v5a3 3 0 0 0 3 3h2l5.777 5.333A2.516 2.516 0 0 0 15 21.483V2.438A2.437 2.437 0 0 0 10.777.78Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);

export default SvgSoundOff;
