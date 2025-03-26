import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgGermany = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M.746 16.174C2.442 20.744 6.84 24 12 24c5.16 0 9.558-3.256 11.254-7.826L12 15.13.746 16.174Z"
        fill="#FFDA44"
      />
      <Path
        d="M12 0C6.84 0 2.442 3.256.746 7.826L12 8.87l11.254-1.044C21.558 3.256 17.16 0 12 0Z"
        fill="#000"
      />
      <Path
        d="M.746 7.826A11.974 11.974 0 0 0 0 12c0 1.468.264 2.874.746 4.174h22.508c.482-1.3.746-2.706.746-4.174 0-1.468-.264-2.874-.746-4.174H.746Z"
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
export default SvgGermany;
