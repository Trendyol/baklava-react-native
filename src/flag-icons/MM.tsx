import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgMm = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M23.254 16.174c.482-1.3.746-2.706.746-4.174 0-1.468-.264-2.874-.746-4.174L12 6.783.746 7.826A11.974 11.974 0 0 0 0 12c0 1.468.264 2.874.746 4.174L12 17.217l11.254-1.043Z"
        fill="#6DA544"
      />
      <Path
        d="M23.254 7.826C21.558 3.256 17.159 0 12 0 6.84 0 2.442 3.256.746 7.826h22.508Z"
        fill="#FFDA44"
      />
      <Path
        d="M12 24c5.16 0 9.558-3.256 11.254-7.826H.746C2.442 20.744 6.84 24 12 24Z"
        fill="#D80027"
      />
      <Path
        d="M20.229 10.152h-6.286L12 4.175l-1.943 5.978H3.771l5.086 3.695-1.943 5.98L12 16.173l5.086 3.652-1.943-5.979 5.086-3.694Z"
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
export default SvgMm;
