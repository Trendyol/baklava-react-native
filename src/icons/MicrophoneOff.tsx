import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const MicrophoneOff = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#a)" fill={props?.fill ?? '#273142'}>
      <Path d="M3.791.389A1 1 0 1 0 2.21 1.61L8 9.107V12a4 4 0 0 0 5.188 3.82l1.277 1.652A6 6 0 0 1 6 12a1 1 0 0 0-2 0 8.001 8.001 0 0 0 7 7.938V21H9a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2h-2v-1.062a7.947 7.947 0 0 0 2.713-.85l3.496 4.523a1 1 0 1 0 1.582-1.222l-17-22ZM8.2 3.745l7.543 9.669A3.99 3.99 0 0 0 16 12V5a4 4 0 0 0-7.8-1.255ZM17.103 15.158l1.29 1.653A7.964 7.964 0 0 0 20 12a1 1 0 0 0-2 0c0 1.159-.328 2.24-.897 3.158Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default MicrophoneOff;
