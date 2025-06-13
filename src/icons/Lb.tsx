import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgLb = (props: SvgProps) => (
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
        d="M12 0A12 12 0 0 0 1.19 6.783h21.62A12 12 0 0 0 12 0ZM12 24a12 12 0 0 0 10.81-6.783H1.19A12 12 0 0 0 12 24Z"
        fill="#D80027"
      />
      <Path
        d="M15.13 14.087 12 8.347l-3.13 5.74h2.347v1.565h1.566v-1.565h2.347Z"
        fill="#6DA544"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgLb;
