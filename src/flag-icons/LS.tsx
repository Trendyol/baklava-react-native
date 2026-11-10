import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgLs = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M0 12c0 1.87.428 3.64 1.19 5.217L12 17.74l10.81-.522A11.952 11.952 0 0 0 24 12c0-1.87-.428-3.64-1.19-5.217L12 6.26l-10.81.522A11.952 11.952 0 0 0 0 12Z"
        fill="#F0F0F0"
      />
      <Path
        d="M12 24a12 12 0 0 0 10.81-6.783H1.19A12 12 0 0 0 12 24Z"
        fill="#6DA544"
      />
      <Path
        d="M12 0A12 12 0 0 0 1.19 6.783h21.62A12 12 0 0 0 12 0Z"
        fill="#0052B4"
      />
      <Path
        d="M12.783 11.74V8.87h-1.566v2.87l-1.89 1.89a3.128 3.128 0 0 0 5.346 0l-1.89-1.89Z"
        fill="#000"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgLs;
