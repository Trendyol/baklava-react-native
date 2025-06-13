import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgTw = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12L12 0c6.627 0 12 5.373 12 12Z"
        fill="#D80027"
      />
      <Path d="M12 12V0C5.373 0 0 5.373 0 12h12Z" fill="#0052B4" />
      <Path
        d="m10.435 7.023-1.466.69.78 1.419-1.59-.305-.202 1.608-1.109-1.183-1.108 1.183-.202-1.608-1.591.305.78-1.42-1.466-.69 1.466-.688-.78-1.42 1.591.305.202-1.608 1.108 1.182 1.109-1.182.201 1.608 1.592-.305-.78 1.42 1.465.689Z"
        fill="#F0F0F0"
      />
      <Path
        d="M6.848 9.256a2.234 2.234 0 1 0 0-4.467 2.234 2.234 0 0 0 0 4.467Z"
        fill="#0052B4"
      />
      <Path
        d="M6.848 8.213c-.656 0-1.19-.534-1.19-1.19 0-.656.534-1.19 1.19-1.19.656 0 1.19.534 1.19 1.19 0 .656-.534 1.19-1.19 1.19Z"
        fill="#F0F0F0"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgTw;
