import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgDz = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12c0-.522-1.565-12-1.565-12L12 0Z"
        fill="#F0F0F0"
      />
      <Path d="M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0" fill="#496E2D" />
      <Path
        d="m14.578 9.698-.984 1.357-1.595-.517.986 1.356-.984 1.356 1.594-.519.986 1.356-.001-1.676 1.594-.52-1.595-.516V9.698Z"
        fill="#D80027"
      />
      <Path
        d="M12.995 15.391a3.391 3.391 0 1 1 1.614-6.375 4.174 4.174 0 1 0 0 5.967c-.48.26-1.03.408-1.614.408Z"
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
export default SvgDz;
