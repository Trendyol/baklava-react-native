import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgGg = (props: SvgProps) => (
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
        d="M23.898 10.435H13.565V.102a12.12 12.12 0 0 0-3.13 0v10.333H.102a12.118 12.118 0 0 0 0 3.13h10.333v10.333a12.121 12.121 0 0 0 3.13 0V13.565h10.333a12.121 12.121 0 0 0 0-3.13Z"
        fill="#D80027"
      />
      <Path
        d="m15.391 12.522.783.521v-2.086l-.783.521h-2.87v-2.87l.522-.782h-2.086l.521.783v2.87h-2.87l-.782-.522v2.086l.783-.521h2.87v2.87l-.522.782h2.086l-.521-.783v-2.87h2.87Z"
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
export default SvgGg;
