import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgPt = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M0 12c0 5.16 3.256 9.558 7.826 11.254L8.87 12 7.826.746C3.256 2.442 0 6.84 0 12Z"
        fill="#6DA544"
      />
      <Path
        d="M24 12c0-6.627-5.373-12-12-12-1.468 0-2.874.264-4.174.746v22.508c1.3.482 2.706.746 4.174.746 6.627 0 12-5.373 12-12Z"
        fill="#D80027"
      />
      <Path
        d="M7.826 16.174a4.174 4.174 0 1 0 0-8.348 4.174 4.174 0 0 0 0 8.348Z"
        fill="#FFDA44"
      />
      <Path
        d="M5.478 9.913v2.609a2.348 2.348 0 1 0 4.696 0V9.913H5.478Z"
        fill="#D80027"
      />
      <Path
        d="M7.826 13.304a.784.784 0 0 1-.783-.782v-1.044H8.61v1.044a.783.783 0 0 1-.783.782Z"
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
export default SvgPt;
