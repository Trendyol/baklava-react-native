import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgCa = (props: SvgProps) => (
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
        d="M24 12a12 12 0 0 0-6.783-10.81v21.62A12 12 0 0 0 24 12ZM0 12a12 12 0 0 0 6.783 10.81V1.19A12 12 0 0 0 0 12ZM14.087 13.565l2.087-1.043L15.13 12v-1.043L13.043 12l1.044-2.087h-1.044L12 8.348l-1.043 1.565H9.912L10.956 12 8.87 10.957V12l-1.043.522 2.087 1.043-.522 1.044h2.087v1.565h1.044v-1.565h2.087l-.522-1.044Z"
        fill="#D80027"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgCa;
