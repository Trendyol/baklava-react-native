import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgAf = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M17.217 1.19A11.953 11.953 0 0 0 12 0c-1.87 0-3.64.428-5.217 1.19L5.739 12l1.044 10.81A11.953 11.953 0 0 0 12 24c1.87 0 3.64-.428 5.217-1.19L18.261 12 17.217 1.19Z"
        fill="#D80027"
      />
      <Path
        d="M6.783 1.191A12 12 0 0 0 0 12a12 12 0 0 0 6.783 10.809V1.19Z"
        fill="#000"
      />
      <Path
        d="M17.217 1.191V22.81A12 12 0 0 0 24 12a12 12 0 0 0-6.783-10.809Z"
        fill="#496E2D"
      />
      <Path
        d="M12 7.826a4.174 4.174 0 1 0 0 8.348 4.174 4.174 0 0 0 0-8.348Zm0 6.783a2.609 2.609 0 1 1 0-5.218 2.609 2.609 0 0 1 0 5.218Z"
        fill="#FFDA44"
      />
      <Path
        d="M12 10.435c-.576 0-1.044.467-1.044 1.043v1.566h2.087v-1.566c0-.576-.467-1.043-1.043-1.043Z"
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
export default SvgAf;
