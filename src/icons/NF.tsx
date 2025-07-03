import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgNf = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M17.218 1.19A11.952 11.952 0 0 0 12 0c-1.87 0-3.64.428-5.217 1.19L5.739 12l1.044 10.81A11.953 11.953 0 0 0 12 24c1.87 0 3.64-.428 5.218-1.19L18.26 12 17.218 1.19Z"
        fill="#F0F0F0"
      />
      <Path
        d="M6.783 1.191A12 12 0 0 0 0 12a12 12 0 0 0 6.783 10.809V1.19ZM17.217 1.191V22.81A12 12 0 0 0 24 12a12 12 0 0 0-6.783-10.809ZM15.13 15.652 12 5.74l-3.13 9.913h2.348v2.609h1.565v-2.609h2.348Z"
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
export default SvgNf;
