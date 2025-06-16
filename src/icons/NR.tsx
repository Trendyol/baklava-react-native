import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgNr = (props: SvgProps) => (
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
        fill="#0052B4"
      />
      <Path
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z"
        fill="#FFDA44"
      />
      <Path
        d="M12 0C5.724 0 .575 4.818.046 10.957h23.908C23.425 4.817 18.276 0 12 0ZM12 24c6.276 0 11.425-4.818 11.954-10.957H.046C.575 19.183 5.724 24 12 24Z"
        fill="#0052B4"
      />
      <Path
        d="m9.913 16.174-1.345.632.716 1.303-1.46-.28-.185 1.475-1.017-1.084-1.017 1.084-.185-1.475-1.46.28.716-1.303-1.344-.632 1.344-.633-.716-1.302 1.46.28.185-1.476 1.017 1.085 1.017-1.085.185 1.476 1.46-.28-.715 1.302 1.344.633Z"
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
export default SvgNr;
