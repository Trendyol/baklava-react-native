import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgTg = (props: SvgProps) => (
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
        fill="#FFDA44"
      />
      <Path
        d="M12 0c-.009 0-.522 4.8-.522 4.8h10.123A11.982 11.982 0 0 0 12 0ZM12 24c3.926 0 7.411-1.885 9.6-4.8H2.4A11.981 11.981 0 0 0 12 24ZM23.76 9.6H11.478L12 14.4h11.76a12.049 12.049 0 0 0 0-4.8Z"
        fill="#496E2D"
      />
      <Path
        d="M12 14.4V0C5.373 0 0 5.373 0 12c0 .822.083 1.624.24 2.4H12Z"
        fill="#D80027"
      />
      <Path
        d="m6.621 5.74.777 2.39h2.515L7.879 9.61 8.656 12 6.62 10.522 4.587 12l.777-2.391L3.33 8.13h2.514l.777-2.39Z"
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
export default SvgTg;
