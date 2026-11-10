import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgMr = (props: SvgProps) => (
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
        fill="#496E2D"
      />
      <Path
        d="M12 13.863a4.175 4.175 0 0 1-4.077-3.28 4.174 4.174 0 1 0 8.154 0A4.174 4.174 0 0 1 12 13.864Z"
        fill="#FFDA44"
      />
      <Path
        d="m12 8.348.389 1.196h1.257l-1.017.739.388 1.195L12 10.74l-1.017.74.388-1.196-1.017-.74h1.258L12 8.349Z"
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
export default SvgMr;
