import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgMs = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12C0 12.003 12 .001 12 0c6.627 0 12 5.373 12 12Z"
        fill="#0052B4"
      />
      <Path d="M11.968 12H12v-.032l-.032.032Z" fill="#F0F0F0" />
      <Path
        d="M12 6.26V0h-.002C5.371.001 0 5.373 0 12h6.26V8.474L9.787 12h2.182l.032-.032V9.786L8.474 6.261H12Z"
        fill="#F0F0F0"
      />
      <Path
        d="M6.071 1.565a12.057 12.057 0 0 0-4.506 4.506V12h3.13V4.696H12v-3.13H6.071Z"
        fill="#D80027"
      />
      <Path d="M12 10.524 7.736 6.261H6.261L12 12v-1.476Z" fill="#D80027" />
      <Path
        d="M13.565 6.26V12c0 2.796 3.652 3.652 3.652 3.652S20.87 14.796 20.87 12V6.26h-7.304Z"
        fill="#338AF3"
      />
      <Path
        d="M13.565 12c0 2.796 3.652 3.652 3.652 3.652S20.87 14.796 20.87 12h-7.304Z"
        fill="#A2001D"
      />
      <Path
        d="M18.783 8.87h-1.044V7.826h-1.044V8.87h-1.043v1.043h1.043v3.13h1.044v-3.13h1.044V8.87Z"
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
export default SvgMs;
