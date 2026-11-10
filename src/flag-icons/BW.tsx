import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgBw = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M.567 8.348A11.989 11.989 0 0 0 0 12c0 1.274.199 2.5.567 3.652L12 16.174l11.433-.522C23.801 14.5 24 13.273 24 12c0-1.274-.2-2.5-.567-3.652L12 7.826.567 8.348Z"
        fill="#F0F0F0"
      />
      <Path
        d="M24 12c0-.712-.062-1.41-.181-2.087H.18a12.063 12.063 0 0 0 0 4.174H23.82A12.07 12.07 0 0 0 24 12Z"
        fill="#000"
      />
      <Path
        d="M12 24c5.354 0 9.888-3.506 11.433-8.348H.567C2.112 20.494 6.647 24 12 24ZM12 0C6.646 0 2.112 3.506.567 8.348h22.866C21.888 3.506 17.353 0 12 0Z"
        fill="#338AF3"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgBw;
