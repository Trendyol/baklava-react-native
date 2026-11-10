import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgHt = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 12 0 12 0s12 5.373 12 12Z"
        fill="#A2001D"
      />
      <Path d="M0 12C0 5.373 5.373 0 12 0s12 5.373 12 12" fill="#0052B4" />
      <Path
        d="M16.174 15.13 12 14.61l-4.174.521V8.87h8.348v6.26Z"
        fill="#F0F0F0"
      />
      <Path
        d="M12 14.609a2.087 2.087 0 1 0 0-4.174 2.087 2.087 0 0 0 0 4.174Z"
        fill="#0052B4"
      />
      <Path
        d="M12 13.565a1.044 1.044 0 1 0 0-2.087 1.044 1.044 0 0 0 0 2.087Z"
        fill="#A2001D"
      />
      <Path d="M10.435 9.913h3.13L12 11.478l-1.565-1.565Z" fill="#6DA544" />
      <Path d="M11.478 10.957h1.044v3.13h-1.044v-3.13Z" fill="#FFDA44" />
      <Path
        d="M13.67 13.774h-3.34L7.826 15.13h8.348l-2.505-1.356Z"
        fill="#6DA544"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgHt;
