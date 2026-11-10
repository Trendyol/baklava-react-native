import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgMd = (props: SvgProps) => (
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
        fill="#FFDA44"
      />
      <Path
        d="M6.783 1.191A12 12 0 0 0 0 12a12 12 0 0 0 6.783 10.809V1.19Z"
        fill="#0052B4"
      />
      <Path
        d="M17.217 1.191V22.81A12 12 0 0 0 24 12a12 12 0 0 0-6.783-10.809Z"
        fill="#D80027"
      />
      <Path
        d="M16.174 9.442h-2.87a1.304 1.304 0 0 0-2.608 0h-2.87c0 .709.618 1.284 1.327 1.284H9.11c0 .709.575 1.284 1.285 1.284 0 .628.45 1.15 1.046 1.261l-1.012 2.285a4.161 4.161 0 0 0 3.141 0l-1.011-2.285a1.284 1.284 0 0 0 1.046-1.261c.71 0 1.284-.575 1.284-1.284h-.042c.709 0 1.327-.575 1.327-1.284Z"
        fill="#FF9811"
      />
      <Path
        d="M12 11.217 10.304 12v1.565L12 14.61l1.696-1.044V12L12 11.217Z"
        fill="#0052B4"
      />
      <Path d="M10.304 10.435h3.392V12h-3.392v-1.565Z" fill="#D80027" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgMd;
