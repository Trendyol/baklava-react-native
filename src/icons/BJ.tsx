import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgBj = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        d="m7.826 10.957 1.044 12.63c.998.269 2.047.413 3.13.413 6.627 0 12-5.373 12-12L7.826 10.957Z"
        fill="#D80027"
      />
      <Path
        d="M7.826 12 8.87.413A12.013 12.013 0 0 1 12 0c6.628 0 12 5.373 12 12H7.827Z"
        fill="#FFDA44"
      />
      <Path
        d="M0 12c0 5.544 3.76 10.21 8.87 11.587V.413C3.76 1.79 0 6.456 0 12Z"
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
export default SvgBj;
