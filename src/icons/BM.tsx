import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgBm = (props: SvgProps) => (
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
        fill="#D80027"
      />
      <Path
        d="M12 5.74v4.046L7.826 5.74H12ZM6.26 12h3.526L6.261 7.304l-.522 3.652L6.261 12Z"
        fill="#0052B4"
      />
      <Path d="M11.968 12H12v-.032l-.032.032Z" fill="#F0F0F0" />
      <Path
        d="M12 6.26V0h-.002C5.371.001 0 5.373 0 12h6.26V8.474L9.787 12h2.182l.032-.032V9.786L8.474 6.261H12Z"
        fill="#F0F0F0"
      />
      <Path
        d="M6.071 1.565a12.057 12.057 0 0 0-4.506 4.506v6.45h3.13V4.697h7.827v-3.13H6.07Z"
        fill="#D80027"
      />
      <Path
        d="m12.477 11.001-4.74-4.74H6.26l6.216 6.216v-1.476Z"
        fill="#D80027"
      />
      <Path
        d="M13.565 6.26V12c0 2.796 7.304 2.796 7.304 0V6.26h-7.304Z"
        fill="#F3F3F3"
      />
      <Path
        d="M13.565 12c0 2.796 3.652 3.652 3.652 3.652S20.87 14.796 20.87 12h-7.304Z"
        fill="#6DA544"
      />
      <Path
        d="m17.217 9.704-1.695.73V12l1.695 1.043L18.913 12v-1.565l-1.696-.73Z"
        fill="#A2001D"
      />
      <Path d="M15.522 8.87h3.391v1.565h-3.391V8.87Z" fill="#338AF3" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgBm;
