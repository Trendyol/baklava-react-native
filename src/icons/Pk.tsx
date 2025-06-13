import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgPk = (props: SvgProps) => (
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
        d="M0 12c0 4.549 2.53 8.506 6.26 10.54V1.46A11.997 11.997 0 0 0 0 12Z"
        fill="#F0F0F0"
      />
      <Path
        d="M12 0C9.92 0 7.966.529 6.26 1.46v21.08C7.967 23.472 9.922 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0Z"
        fill="#496E2D"
      />
      <Path
        d="M17.13 13.985a3.391 3.391 0 1 1-2.425-6.112A4.174 4.174 0 1 0 18.2 12.71a3.376 3.376 0 0 1-1.07 1.275ZM17.066 7.826l.855.922 1.14-.529-.612 1.098.855.922-1.233-.243-.612 1.098-.15-1.248-1.234-.243 1.14-.529-.15-1.248Z"
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
export default SvgPk;
