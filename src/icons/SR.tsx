import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgSr = (props: SvgProps) => (
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
        d="M23.254 7.826H.746A11.976 11.976 0 0 0 0 12c0 1.468.264 2.874.746 4.174h22.508c.482-1.3.746-2.706.746-4.174 0-1.468-.264-2.874-.746-4.174Z"
        fill="#A2001D"
      />
      <Path
        d="M12.035 24c4.11 0 7.737-2.067 9.9-5.217h-19.8a11.987 11.987 0 0 0 9.9 5.217ZM12.035 0c4.11 0 7.737 2.067 9.9 5.218h-19.8A11.986 11.986 0 0 1 12.035 0Z"
        fill="#6DA544"
      />
      <Path
        d="m12 7.826 1.036 3.189h3.353l-2.713 1.97 1.037 3.189L12 14.204l-2.712 1.97 1.036-3.189-2.713-1.97h3.353L12 7.825Z"
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
export default SvgSr;
