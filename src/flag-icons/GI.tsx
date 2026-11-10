import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgGi = (props: SvgProps) => (
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
        fill="#F9F9F9"
      />
      <Path
        d="M12 24c5.16 0 9.558-3.256 11.254-7.826H.746C2.442 20.744 6.84 24 12 24ZM16.696 9.913V8.348h.521V7.304h-1.043v.522H15.13v-.522h-1.044v1.044h.522v1.565h-1.044V6.261h.522V5.218h-1.043v.521h-.522v-.521h-1.044v.521h-.521v-.521H9.912V6.26h.522v3.652H9.39V8.348h.522V7.304H8.87v.522H7.826v-.522H6.783v1.044h.521v1.565H6.261v4.174h11.478V9.913h-1.043Z"
        fill="#D80027"
      />
      <Path
        d="M12 13.565a1.565 1.565 0 0 0-.522 3.041v2.177H9.913v2.087h2.609v-4.264a1.566 1.566 0 0 0-.522-3.04Zm0 2.087a.522.522 0 1 1 0-1.043.522.522 0 0 1 0 1.043Z"
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
export default SvgGi;
