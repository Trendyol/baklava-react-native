import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgCl = (props: SvgProps) => (
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
        d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12s12 0 12 0h12Z"
        fill="#D80027"
      />
      <Path d="M0 12C0 5.373 5.373 0 12 0v12H0Z" fill="#0052B4" />
      <Path
        d="m7.143 4.174.777 2.391h2.515L8.4 8.043l.777 2.392-2.035-1.478-2.034 1.478.777-2.392-2.034-1.478h2.514l.777-2.391Z"
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
export default SvgCl;
