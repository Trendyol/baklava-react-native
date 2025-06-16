import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgSz = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M22.81 17.217A11.953 11.953 0 0 0 24 12c0-1.87-.428-3.64-1.19-5.217L12 6.26l-10.81.522A11.953 11.953 0 0 0 0 12c0 1.87.428 3.64 1.19 5.217L12 17.74l10.81-.522Z"
        fill="#FFDA44"
      />
      <Path
        d="M12 0A12 12 0 0 0 1.19 6.783h21.62A12 12 0 0 0 12 0Z"
        fill="#000"
      />
      <Path
        d="M12 24a12 12 0 0 1-10.81-6.783h21.62A12 12 0 0 1 12 24Z"
        fill="#0052B4"
      />
      <Path
        d="M23.433 8.348H.567A11.991 11.991 0 0 0 0 12c0 1.274.2 2.5.567 3.652h22.866A11.99 11.99 0 0 0 24 12c0-1.274-.2-2.5-.567-3.652Z"
        fill="#A2001D"
      />
      <Path
        d="M4.174 11.478h15.652v1.044H4.174v-1.044ZM6.26 9.391H17.74v1.044H6.261V9.39Z"
        fill="#FFDA44"
      />
      <Path
        d="M17.814 12S15.13 15.13 12 15.13 8.87 12 8.87 12s0-3.13 3.13-3.13S17.814 12 17.814 12Z"
        fill="#F0F0F0"
      />
      <Path
        d="M12 15.13C8.87 15.13 6.186 12 6.186 12S8.87 8.87 12 8.87"
        fill="#000"
      />
      <Path d="M9.913 10.957h1.044v2.086H9.913v-2.086Z" fill="#F0F0F0" />
      <Path d="M13.043 10.957h1.044v2.086h-1.043v-2.086Z" fill="#000" />
      <Path
        d="M4.174 13.043a1.043 1.043 0 1 0 0-2.086 1.043 1.043 0 0 0 0 2.086ZM19.826 13.043a1.043 1.043 0 1 0 0-2.086 1.043 1.043 0 0 0 0 2.086Z"
        fill="#0052B4"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgSz;
