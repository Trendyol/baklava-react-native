import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgUy = (props: SvgProps) => (
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
        d="M12 8.87h11.587a11.932 11.932 0 0 0-1.348-3.13H12v3.13ZM4.53 21.391h14.94a12.06 12.06 0 0 0 2.769-3.13H1.76a12.062 12.062 0 0 0 2.77 3.13ZM12 0v2.609h7.47A11.949 11.949 0 0 0 12 0Z"
        fill="#338AF3"
      />
      <Path
        d="M12 8.87h11.587a11.932 11.932 0 0 0-1.348-3.13H12v3.13ZM0 12c0 1.083.144 2.132.413 3.13h23.174c.269-.998.413-2.047.413-3.13H0Z"
        fill="#338AF3"
      />
      <Path
        d="m10.435 7.023-1.466.69.78 1.419-1.59-.305-.202 1.608-1.109-1.183-1.108 1.183-.202-1.608-1.591.305.78-1.42-1.466-.69 1.466-.688-.78-1.42 1.591.305.202-1.608 1.108 1.182 1.109-1.182.201 1.608 1.592-.305-.78 1.42 1.465.689Z"
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
export default SvgUy;
