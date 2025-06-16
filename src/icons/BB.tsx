import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgBb = (props: SvgProps) => (
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
        fill="#FFDA44"
      />
      <Path
        d="M6.783 1.191A12 12 0 0 0 0 12a12 12 0 0 0 6.783 10.809V1.19ZM17.217 1.191V22.81A12 12 0 0 0 24 12a12 12 0 0 0-6.783-10.809Z"
        fill="#0052B4"
      />
      <Path
        d="m15.652 7.304.7.35-.7-.35-.7-.35c-.042.085-.956 1.944-1.105 4.785h-1.064V7.304L12 6.261l-.783 1.043v4.435h-1.064c-.149-2.84-1.063-4.7-1.105-4.785l-1.4.7c.01.02.96 1.956.96 4.868v.782h2.61v4.435h1.565v-4.435h2.608v-.782c0-1.506.26-2.747.48-3.524.238-.846.48-1.34.482-1.345l-.7-.349Z"
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
export default SvgBb;
