import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Pushpin = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="m1.277 11.755 4.505 4.505L0 22.04V24h1.959l5.781-5.782 4.505 4.506c1.253 1.252 3.285.663 3.47-1.008l.567-5.098a3.083 3.083 0 0 1 .878-1.853L23.1 8.823c1.273-1.273 1.184-3.426-.2-4.81l-1.457-1.457L19.987 1.1C18.603-.285 16.45-.374 15.177.899L9.235 6.84c-.491.492-1.14.8-1.853.878l-5.098.567C.613 8.47.023 10.5 1.277 11.755Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default Pushpin;
