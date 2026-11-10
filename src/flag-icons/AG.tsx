import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgAg = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M0 12c0 .822.083 1.625.24 2.4l11.76.73 11.76-.73a12.047 12.047 0 0 0 0-4.8L12 8.87.24 9.6C.083 10.376 0 11.178 0 12Z"
        fill="#0052B4"
      />
      <Path
        d="M23.76 14.4H.24C1.352 19.877 6.195 24 12 24s10.648-4.123 11.76-9.6Z"
        fill="#F0F0F0"
      />
      <Path
        d="M.24 9.6h23.52C22.648 4.123 17.805 0 12 0S1.352 4.123.24 9.6Z"
        fill="#000"
      />
      <Path
        d="M17.217 9.6H6.783l2.131-1.003L7.78 6.533l2.315.442.294-2.338L12 6.357l1.613-1.72.293 2.338 2.315-.442-1.135 2.064L17.217 9.6Z"
        fill="#FFDA44"
      />
      <Path
        d="M0 12c0 6.627 5.373 12 12 12L2.4 4.8A11.946 11.946 0 0 0 0 12ZM12 24c6.627 0 12-5.373 12-12 0-2.702-.893-5.195-2.4-7.2L12 24Z"
        fill="#A2001D"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgAg;
