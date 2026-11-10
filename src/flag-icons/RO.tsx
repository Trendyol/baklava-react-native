import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgRomania = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M16.174.746A11.976 11.976 0 0 0 12 0c-1.468 0-2.874.264-4.174.746L6.783 12l1.043 11.254c1.3.482 2.706.746 4.174.746 1.468 0 2.874-.264 4.174-.746L17.217 12 16.174.746Z"
        fill="#FFDA44"
      />
      <Path
        d="M24 12c0-5.16-3.256-9.558-7.826-11.254v22.508C20.744 21.558 24 17.16 24 12Z"
        fill="#D80027"
      />
      <Path
        d="M0 12c0 5.16 3.256 9.558 7.826 11.254V.746C3.256 2.442 0 6.84 0 12Z"
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
export default SvgRomania;
