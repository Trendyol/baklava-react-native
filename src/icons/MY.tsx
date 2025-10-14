import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgMy = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z"
        fill="#F0F0F0"
      />
      <Path
        d="M11.478 12H24c0-1.083-.144-2.132-.413-3.13H11.478V12ZM11.478 5.74h10.76a12.062 12.062 0 0 0-2.768-3.131h-7.992v3.13ZM12 24c2.824 0 5.42-.976 7.47-2.609H4.53A11.949 11.949 0 0 0 12 24ZM1.761 18.26H22.24a11.93 11.93 0 0 0 1.348-3.13H.413c.301 1.117.758 2.169 1.348 3.13Z"
        fill="#D80027"
      />
      <Path d="M12 12V0C5.373 0 0 5.373 0 12h12Z" fill="#0052B4" />
      <Path
        d="M7.98 10.272A2.967 2.967 0 1 1 9.39 4.694a3.652 3.652 0 1 0 0 5.221c-.42.228-.9.357-1.411.357Z"
        fill="#FFDA44"
      />
      <Path
        d="m8.816 5.217.527 1.102 1.19-.275L10 7.143l.957.759-1.192.268.004 1.221-.953-.764-.953.764.004-1.22-1.192-.27.957-.758L7.1 6.044l1.19.275.527-1.102Z"
        fill="#FFDA44"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgMy;
