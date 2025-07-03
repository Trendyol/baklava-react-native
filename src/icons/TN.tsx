import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgTn = (props: SvgProps) => (
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
        fill="#D80027"
      />
      <Path
        d="M12 17.74a5.74 5.74 0 1 0 0-11.48 5.74 5.74 0 0 0 0 11.48Z"
        fill="#F0F0F0"
      />
      <Path
        d="m12.707 9.806.984 1.356 1.595-.517-.986 1.356.984 1.357-1.594-.52-.986 1.356.001-1.676L11.111 12l1.595-.517.001-1.676Z"
        fill="#D80027"
      />
      <Path
        d="M13.304 15.391a3.391 3.391 0 1 1 1.614-6.375 4.174 4.174 0 1 0 0 5.967c-.48.26-1.03.408-1.614.408Z"
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
export default SvgTn;
