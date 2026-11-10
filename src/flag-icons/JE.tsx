import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgJe = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z"
        fill="#F0F0F0"
      />
      <Path
        d="M21.52 19.307 14.214 12l7.306-7.307a12.142 12.142 0 0 0-2.213-2.213L12 9.786 4.693 2.48A12.114 12.114 0 0 0 2.48 4.693L9.786 12 2.48 19.307a12.124 12.124 0 0 0 2.213 2.213L12 14.214l7.307 7.306a12.123 12.123 0 0 0 2.213-2.213Z"
        fill="#D80027"
      />
      <Path
        d="M9.913 3.652 12 4.174l2.087-.522V1.878l-.835.418L12 1.043l-1.252 1.253-.835-.418v1.774Z"
        fill="#FFDA44"
      />
      <Path
        d="M9.913 3.652v1.305C9.913 6.554 12 7.044 12 7.044s2.087-.49 2.087-2.087V3.652H9.913Z"
        fill="#D80027"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgJe;
