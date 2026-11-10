import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgEr = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M10.957 10.957s-7.435 9.53-7.442 9.528A11.962 11.962 0 0 0 12 24c6.627 0 12-5.373 12-12l-13.043-1.043Z"
        fill="#338AF3"
      />
      <Path
        d="M10.957 12S3.522 3.513 3.514 3.515A11.962 11.962 0 0 1 12 0c6.627 0 12 5.373 12 12H10.957Z"
        fill="#6DA544"
      />
      <Path
        d="M3.515 3.515c-4.687 4.686-4.687 12.284 0 16.97C3.515 20.487 24 12 24 12L3.515 3.515Z"
        fill="#D80027"
      />
      <Path
        d="M6.26 7.043a4.179 4.179 0 0 0-4.173 4.174v1.566a4.179 4.179 0 0 0 4.174 4.173 4.179 4.179 0 0 0 4.174-4.173v-1.566A4.179 4.179 0 0 0 6.26 7.043Zm2.61 5.74a2.613 2.613 0 0 1-1.827 2.488v-1.706l1.108-1.107-1.107-1.107v-.916H5.477V12l-1.106 1.107 1.106 1.106v1.058a2.613 2.613 0 0 1-1.826-2.488v-1.566A2.612 2.612 0 0 1 6.261 8.61a2.612 2.612 0 0 1 2.608 2.608v1.566Z"
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
export default SvgEr;
