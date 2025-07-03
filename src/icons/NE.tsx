import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgNe = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M1.19 6.783A11.952 11.952 0 0 0 0 12c0 1.87.428 3.64 1.19 5.217L12 18.261l10.81-1.044A11.953 11.953 0 0 0 24 12c0-1.87-.428-3.64-1.19-5.217L12 5.739 1.19 6.783Z"
        fill="#F0F0F0"
      />
      <Path
        d="M1.191 17.217A12 12 0 0 0 12 24a12 12 0 0 0 10.809-6.783H1.19Z"
        fill="#6DA544"
      />
      <Path
        d="M1.191 6.783H22.81A12 12 0 0 0 12 0 12 12 0 0 0 1.191 6.783ZM12 16.174a4.174 4.174 0 1 0 0-8.348 4.174 4.174 0 0 0 0 8.348Z"
        fill="#FF9811"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgNe;
