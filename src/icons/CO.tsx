import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgCo = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M0 12C0 5.373 5.373 0 12 0s12 5.373 12 12l-12 1.043L0 12Z"
        fill="#FFDA44"
      />
      <Path
        d="M1.606 18C3.68 21.587 7.558 24 12 24s8.32-2.413 10.394-6L12 17.217 1.606 18Z"
        fill="#D80027"
      />
      <Path
        d="M22.394 18A11.944 11.944 0 0 0 24 12H0c0 2.186.585 4.235 1.606 6h20.788Z"
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
export default SvgCo;
