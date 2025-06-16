import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgKz = (props: SvgProps) => (
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
        fill="#338AF3"
      />
      <Path
        d="M18.783 12.13H5.217c0 .937.816 1.696 1.753 1.696h-.057c0 .937.76 1.696 1.696 1.696 0 .936.759 1.695 1.695 1.695h3.392c.936 0 1.695-.759 1.695-1.695.937 0 1.696-.76 1.696-1.696h-.056c.936 0 1.752-.76 1.752-1.696Z"
        fill="#FFDA44"
      />
      <Path d="M16.696 9.913a4.696 4.696 0 0 1-9.392 0" fill="#338AF3" />
      <Path
        d="m15.587 9.913-1.466.69.78 1.419-1.59-.305-.203 1.608L12 12.143l-1.108 1.182-.202-1.608-1.592.305.78-1.42-1.465-.689 1.466-.69-.78-1.419 1.59.305.203-1.608L12 7.684 13.108 6.5l.202 1.608 1.591-.305-.78 1.42 1.466.689Z"
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
export default SvgKz;
