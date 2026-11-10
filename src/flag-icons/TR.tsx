import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgTurkey = (props: SvgProps) => (
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
        fill="#D80027"
      />
      <Path
        d="m15.165 9.98.985 1.356 1.595-.517-.987 1.356.985 1.357-1.594-.52-.986 1.356v-1.676l-1.593-.519 1.594-.517.001-1.676Z"
        fill="#F0F0F0"
      />
      <Path
        d="M12.478 15.565a3.391 3.391 0 1 1 1.613-6.375 4.174 4.174 0 1 0 0 5.967c-.48.26-1.029.408-1.613.408Z"
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
export default SvgTurkey;
