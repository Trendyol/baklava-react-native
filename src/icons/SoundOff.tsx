import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SoundOff = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M10.777.779 5 7H3a3 3 0 0 0-3 3v5a3 3 0 0 0 3 3h2l5.777 5.333A2.516 2.516 0 0 0 15 21.483V2.438A2.437 2.437 0 0 0 10.777.78ZM16.699 8.19a.988.988 0 0 0 0 1.398l2.158 2.158-2.158 2.158a.988.988 0 1 0 1.397 1.397l2.158-2.158 2.055 2.056a.988.988 0 1 0 1.398-1.397l-2.056-2.056 2.056-2.055a.988.988 0 0 0-1.398-1.398l-2.055 2.056-2.158-2.158a.988.988 0 0 0-1.397 0Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default SoundOff;
