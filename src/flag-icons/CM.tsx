import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgCm = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M17.217 1.19A11.953 11.953 0 0 0 12 0c-1.87 0-3.64.428-5.217 1.19L5.739 12l1.044 10.81A11.953 11.953 0 0 0 12 24c1.87 0 3.64-.428 5.217-1.19L18.261 12 17.217 1.19Z"
        fill="#D80027"
      />
      <Path
        d="m12 7.826 1.036 3.189h3.353l-2.713 1.97 1.036 3.189L12 14.204l-2.712 1.97 1.036-3.189-2.713-1.97h3.353L12 7.825Z"
        fill="#FFDA44"
      />
      <Path
        d="M6.783 1.191A12 12 0 0 0 0 12a12 12 0 0 0 6.783 10.809V1.19Z"
        fill="#496E2D"
      />
      <Path
        d="M17.217 1.191V22.81A12 12 0 0 0 24 12a12 12 0 0 0-6.783-10.809Z"
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
export default SvgCm;
