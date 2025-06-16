import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgNi = (props: SvgProps) => (
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
        d="M12 0A12 12 0 0 0 1.19 6.783h21.62A12 12 0 0 0 12 0ZM12 24a12 12 0 0 0 10.81-6.783H1.19A12 12 0 0 0 12 24Z"
        fill="#338AF3"
      />
      <Path
        d="M12 8.348a3.652 3.652 0 1 0 0 7.304 3.652 3.652 0 0 0 0-7.304Zm0 5.739a2.087 2.087 0 1 1 0-4.174 2.087 2.087 0 0 1 0 4.174Z"
        fill="#FFDA44"
      />
      <Path
        d="M13.807 12.522 12 12l-1.807.522-.603 1.043h4.82l-.603-1.043Z"
        fill="#0052B4"
      />
      <Path
        d="m12 9.391-1.205 2.087L12 12l1.205-.522L12 9.391Z"
        fill="#338AF3"
      />
      <Path
        d="M10.193 12.522h3.614l-.602-1.044h-2.41l-.602 1.044Z"
        fill="#6DA544"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgNi;
