import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgGy = (props: SvgProps) => (
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
        d="M12 0C9.878 0 7.886.551 6.156 1.517v20.966A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0Z"
        fill="#6DA544"
      />
      <Path
        d="M6.192 1.498a12.026 12.026 0 0 0-1.907 1.311L13.475 12l-9.19 9.19a12.03 12.03 0 0 0 1.907 1.312L24 12 6.192 1.498Z"
        fill="#F0F0F0"
      />
      <Path
        d="M5.178 2.127c-.366.254-.717.526-1.052.818L12 12l-7.874 9.055c.335.292.686.564 1.052.818L21.946 12 5.178 2.127Z"
        fill="#FFDA44"
      />
      <Path
        d="M4.285 2.81c-.267.224-.524.459-.77.705L10.957 12l-7.442 8.485c.246.247.503.482.77.706L13.475 12l-9.19-9.19Z"
        fill="#000"
      />
      <Path
        d="M3.515 3.515c-4.687 4.686-4.687 12.284 0 16.97L12 12 3.515 3.515Z"
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
export default SvgGy;
