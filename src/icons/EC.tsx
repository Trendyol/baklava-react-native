import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgEc = (props: SvgProps) => (
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
      <Path
        d="M12 16.174a4.174 4.174 0 1 0 0-8.348 4.174 4.174 0 0 0 0 8.348Z"
        fill="#FFDA44"
      />
      <Path
        d="M12 14.609A2.612 2.612 0 0 1 9.391 12v-1.565A2.612 2.612 0 0 1 12 7.826a2.612 2.612 0 0 1 2.609 2.609V12A2.612 2.612 0 0 1 12 14.609Z"
        fill="#338AF3"
      />
      <Path
        d="M16.174 5.74h-3.13a1.044 1.044 0 0 0-2.088 0h-3.13c0 .575.502 1.043 1.078 1.043H8.87c0 .576.467 1.043 1.043 1.043 0 .576.467 1.044 1.043 1.044h2.088c.576 0 1.043-.468 1.043-1.044.576 0 1.043-.467 1.043-1.043h-.034c.576 0 1.078-.468 1.078-1.044Z"
        fill="#000"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgEc;
