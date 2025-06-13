import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgAz = (props: SvgProps) => (
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
        fill="#D80027"
      />
      <Path
        d="M12 24c5.16 0 9.558-3.256 11.254-7.826H.746C2.442 20.744 6.84 24 12 24Z"
        fill="#6DA544"
      />
      <Path
        d="M.746 7.826h22.508C21.558 3.256 17.159 0 12 0 6.84 0 2.442 3.256.746 7.826Z"
        fill="#338AF3"
      />
      <Path
        d="M12.26 15.391a3.391 3.391 0 1 1 1.614-6.375 4.174 4.174 0 1 0 0 5.967c-.48.26-1.03.408-1.613.408Z"
        fill="#F0F0F0"
      />
      <Path
        d="m14.87 9.652.449 1.264 1.21-.576-.575 1.21 1.263.45-1.263.45.576 1.21-1.211-.575-.45 1.263-.449-1.264-1.21.576.575-1.21-1.263-.45 1.263-.45-.576-1.21 1.211.575.45-1.263Z"
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
export default SvgAz;
