import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgSv = (props: SvgProps) => (
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
        fill="#0052B4"
      />
      <Path d="M9.59 12.522 12 8.348l2.41 4.174H9.59Z" fill="#FFDA44" />
      <Path
        d="M15.13 13.9 12 15.465 8.87 13.9v-2.087h6.26V13.9Z"
        fill="#6DA544"
      />
      <Path
        d="m14.951 8.527-1.106 1.107a2.609 2.609 0 1 1-3.69 0L9.05 8.527a4.174 4.174 0 1 0 5.903 0Z"
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
export default SvgSv;
