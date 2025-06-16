import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgAr = (props: SvgProps) => (
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
        d="M12 0A12 12 0 0 0 1.19 6.783h21.62A12 12 0 0 0 12 0ZM12 24a12 12 0 0 0 10.81-6.783H1.19A12 12 0 0 0 12 24Z"
        fill="#338AF3"
      />
      <Path
        d="m15.587 12-1.466.69.78 1.419-1.59-.305-.203 1.608L12 14.229l-1.108 1.183-.202-1.608-1.592.305.78-1.42L8.414 12l1.466-.69-.78-1.419 1.59.305.203-1.608L12 9.77l1.108-1.182.202 1.608 1.591-.305-.78 1.42 1.466.689Z"
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
export default SvgAr;
