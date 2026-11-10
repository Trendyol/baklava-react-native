import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgAo = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M0 12C0 5.373 5.373 0 12 0s12 5.373 12 12c-.522 0-12 1.565-12 1.565L0 12Z"
        fill="#D80027"
      />
      <Path d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12" fill="#000" />
      <Path
        d="m10.355 9.544 1.017.739-.388 1.195 1.017-.74 1.017.74-.389-1.196 1.016-.74-1.256.001-.39-1.195-.387 1.196h-1.257Z"
        fill="#FFDA44"
      />
      <Path
        d="M15 6.804a5.961 5.961 0 0 0-3-.802v1.565a4.405 4.405 0 0 1 2.217.592 4.44 4.44 0 0 1 1.624 6.058 4.44 4.44 0 0 1-6.058 1.624A4.405 4.405 0 0 1 8.3 14.443l-1.306.862A5.961 5.961 0 0 0 9 17.196 6.007 6.007 0 0 0 17.196 15 6.007 6.007 0 0 0 15 6.804Z"
        fill="#FFDA44"
      />
      <Path
        d="M8.54 10.957a1.565 1.565 0 0 0 .622 2.124l5.084 2.778c-.346.632-.162 1.4.47 1.746l1.373.752a1.304 1.304 0 0 0 1.77-.519l.751-1.373-10.07-5.508Z"
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
export default SvgAo;
