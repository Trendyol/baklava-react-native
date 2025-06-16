import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgGl = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M0 12C0 5.373 5.373 0 12 0s12 5.373 12 12c-.522 0-12 1.565-12 1.565L0 12Z"
        fill="#F0F0F0"
      />
      <Path d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12" fill="#D80027" />
      <Path
        d="M8.348 17.74a5.74 5.74 0 1 0 0-11.48 5.74 5.74 0 0 0 0 11.48Z"
        fill="#F0F0F0"
      />
      <Path d="M2.609 12a5.74 5.74 0 0 1 11.478 0" fill="#D80027" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgGl;
