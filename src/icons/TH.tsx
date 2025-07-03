import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgTh = (props: SvgProps) => (
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
        d="M23.254 7.826H.746A11.973 11.973 0 0 0 0 12c0 1.468.264 2.874.746 4.174h22.508c.482-1.3.746-2.706.746-4.174 0-1.468-.264-2.874-.746-4.174Z"
        fill="#0052B4"
      />
      <Path
        d="M12 0a11.972 11.972 0 0 0-9.097 4.174h18.194A11.972 11.972 0 0 0 12 0ZM21.097 19.826H2.903A11.972 11.972 0 0 0 12 24c3.637 0 6.896-1.618 9.097-4.174Z"
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
export default SvgTh;
