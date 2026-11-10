import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgRw = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M0 12c0 2.079.529 4.034 1.46 5.74L12 18.782l10.54-1.044C23.472 16.034 24 14.08 24 12l-12-1.043L0 12Z"
        fill="#FFDA44"
      />
      <Path
        d="M22.54 6.26A11.997 11.997 0 0 0 12 0 11.997 11.997 0 0 0 0 12h24c0-2.079-.529-4.034-1.46-5.74Z"
        fill="#338AF3"
      />
      <Path
        d="M12 24c4.549 0 8.506-2.53 10.54-6.26H1.46A11.997 11.997 0 0 0 12 24Z"
        fill="#496E2D"
      />
      <Path
        d="m13.565 7.023 1.466.69-.78 1.419 1.59-.305.202 1.608 1.109-1.183 1.108 1.183.202-1.608 1.591.305-.78-1.42 1.465-.69-1.465-.688.78-1.42-1.591.305-.202-1.608-1.108 1.182-1.109-1.182-.201 1.608-1.592-.305.78 1.42-1.465.689Z"
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
export default SvgRw;
