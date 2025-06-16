import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgLi = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12c.522 0 12-1.565 12-1.565L24 12Z"
        fill="#D80027"
      />
      <Path d="M0 12C0 5.373 5.373 0 12 0s12 5.373 12 12" fill="#0052B4" />
      <Path
        d="M8.87 8.348A1.565 1.565 0 0 0 6.26 7.18v-.92h.523V5.217H6.26v-.521H5.217v.521h-.521v1.044h.521v.92A1.565 1.565 0 0 0 3.13 9.514v.92h5.218v-.92a1.56 1.56 0 0 0 .521-1.166Z"
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
export default SvgLi;
