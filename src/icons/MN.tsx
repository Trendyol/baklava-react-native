import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgMn = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M12 24c1.468 0 2.874-.264 4.174-.746L16.696 12 16.174.746A11.975 11.975 0 0 0 12 0c-1.468 0-2.874.264-4.174.746L7.304 12l.522 11.254c1.3.482 2.706.746 4.174.746Z"
        fill="#0052B4"
      />
      <Path
        d="M0 12c0 5.16 3.256 9.558 7.826 11.254V.746C3.256 2.442 0 6.84 0 12ZM16.174.746v22.508C20.744 21.558 24 17.16 24 12c0-5.16-3.256-9.558-7.826-11.254Z"
        fill="#A2001D"
      />
      <Path
        d="M5.74 12h1.043v4.174H5.739V12ZM1.565 12H2.61v4.174H1.565V12ZM4.174 14.609a1.043 1.043 0 1 0 0-2.087 1.043 1.043 0 0 0 0 2.087ZM4.174 10.435a.522.522 0 1 0 0-1.044.522.522 0 0 0 0 1.044ZM3.13 15.13h2.087v1.044H3.13V15.13ZM3.13 10.957h2.087V12H3.13v-1.043ZM4.174 6.26l.37 1.138h1.195l-.967.703.37 1.137-.968-.703-.967.703.369-1.137-.967-.703h1.195l.37-1.137Z"
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
export default SvgMn;
