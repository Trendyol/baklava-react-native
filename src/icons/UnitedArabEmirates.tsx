import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgUnitedArabEmirates = (props: SvgProps) => (
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
        d="m6.783 16.174 1.043 7.08c1.3.482 2.706.746 4.174.746 5.16 0 9.558-3.256 11.254-7.826H6.783Z"
        fill="#000"
      />
      <Path
        d="M6.783 7.826 7.826.746C9.126.264 10.532 0 12 0c5.16 0 9.558 3.256 11.254 7.826H6.783Z"
        fill="#6DA544"
      />
      <Path
        d="M0 12c0 5.16 3.257 9.558 7.826 11.254V.746C3.256 2.442 0 6.84 0 12Z"
        fill="#A2001D"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgUnitedArabEmirates;
