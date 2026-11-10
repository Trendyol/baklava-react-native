import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgAm = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M24 12c0-1.468-.264-2.874-.746-4.174L12 7.304.746 7.826A11.975 11.975 0 0 0 0 12c0 1.468.264 2.874.746 4.174L12 16.696l11.254-.522c.482-1.3.746-2.706.746-4.174Z"
        fill="#0052B4"
      />
      <Path
        d="M12 24c5.16 0 9.558-3.256 11.254-7.826H.746C2.442 20.744 6.84 24 12 24Z"
        fill="#FF9811"
      />
      <Path
        d="M.746 7.826h22.508C21.558 3.256 17.159 0 12 0 6.84 0 2.442 3.256.746 7.826Z"
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
export default SvgAm;
