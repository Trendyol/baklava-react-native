import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgBf = (props: SvgProps) => (
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
        fill="#D80027"
      />
      <Path d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12" fill="#6DA544" />
      <Path
        d="m12 7.826.906 2.79h2.934l-2.373 1.724.906 2.79L12 13.406 9.627 15.13l.906-2.79-2.373-1.724h2.933L12 7.826Z"
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
export default SvgBf;
