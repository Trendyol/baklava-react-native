import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgCu = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#a)">
      <Path d="M.001 2.087H0v19.826h.001V2.087Z" fill="#FF9811" />
      <Path
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z"
        fill="#F0F0F0"
      />
      <Path
        d="M12 0a11.982 11.982 0 0 0-9.6 4.8h19.2A11.981 11.981 0 0 0 12 0ZM12 24c3.926 0 7.411-1.886 9.6-4.8H2.4A11.982 11.982 0 0 0 12 24ZM0 12c0 .822.083 1.625.24 2.4h23.52a12.047 12.047 0 0 0 0-4.8H.24C.083 10.376 0 11.178 0 12Z"
        fill="#0052B4"
      />
      <Path
        d="M3.515 3.515c-4.687 4.686-4.687 12.284 0 16.97L12 12 3.515 3.515Z"
        fill="#D80027"
      />
      <Path
        d="m4.857 8.87.777 2.391h2.514l-2.034 1.478.777 2.391-2.034-1.478-2.035 1.478.778-2.391-2.035-1.478H4.08l.777-2.391Z"
        fill="#F0F0F0"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgCu;
