import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgBz = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M24 12c0-4.118-2.075-7.752-5.236-9.913L12 1.565l-6.763.522A11.987 11.987 0 0 0 0 12c0 4.119 2.075 7.752 5.237 9.913l6.763.522 6.764-.522A11.987 11.987 0 0 0 24 12Z"
        fill="#0052B4"
      />
      <Path
        d="M18.764 2.087A11.944 11.944 0 0 0 12 0C9.491 0 7.162.77 5.237 2.087h13.527ZM5.237 21.913A11.943 11.943 0 0 0 12 24c2.509 0 4.838-.77 6.764-2.087H5.237Z"
        fill="#A2001D"
      />
      <Path
        d="M12 17.74a5.74 5.74 0 1 0 0-11.48 5.74 5.74 0 0 0 0 11.48Z"
        fill="#F0F0F0"
      />
      <Path
        d="M12 16.696a4.696 4.696 0 1 0 0-9.392 4.696 4.696 0 0 0 0 9.392Z"
        fill="#6DA544"
      />
      <Path
        d="M12 15.13a3.13 3.13 0 1 0 0-6.26 3.13 3.13 0 0 0 0 6.26Z"
        fill="#F0F0F0"
      />
      <Path
        d="M12 11.217 10.304 12v1.304L12 14.348l1.696-1.044V12L12 11.217Z"
        fill="#0052B4"
      />
      <Path d="M10.304 10.435h3.392V12h-3.392v-1.565Z" fill="#FFDA44" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgBz;
