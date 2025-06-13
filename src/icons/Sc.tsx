import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgSc = (props: SvgProps) => (
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
        d="M20.1 3.147A11.956 11.956 0 0 0 12 0c-.511 0-1.015.032-1.51.094L4.697 6.783.38 15.006a11.925 11.925 0 0 0 1.255 3.043L12 12l8.1-8.853Z"
        fill="#FFDA44"
      />
      <Path
        d="m21.99 18.649-16.789 3.24A11.943 11.943 0 0 0 12 24c4.168 0 7.84-2.125 9.99-5.351Z"
        fill="#6DA544"
      />
      <Path
        d="M20.102 3.149 1.642 18.06a12.045 12.045 0 0 0 1.719 2.267L24 12c0-3.504-1.502-6.658-3.898-8.851Z"
        fill="#D80027"
      />
      <Path
        d="M0 12c0 1.038.132 2.046.38 3.006L10.49.094C4.577.836 0 5.884 0 12Z"
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
export default SvgSc;
