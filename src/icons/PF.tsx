import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgPf = (props: SvgProps) => (
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
        d="M1.46 6.26h21.08A11.997 11.997 0 0 0 12 0C7.452 0 3.494 2.53 1.46 6.26ZM12 24c4.549 0 8.506-2.53 10.54-6.26H1.46A11.997 11.997 0 0 0 12 24Z"
        fill="#D80027"
      />
      <Path
        d="M16.174 12c0 2.305-1.869 3.652-4.174 3.652-2.305 0-4.174-1.347-4.174-3.652a4.174 4.174 0 1 1 8.348 0Z"
        fill="#FFDA44"
      />
      <Path d="M16.174 12a4.174 4.174 0 1 1-8.348 0" fill="#0052B4" />
      <Path
        d="M9.391 10.957h1.044v2.086H9.39v-2.086ZM13.565 10.957h1.044v2.086h-1.044v-2.086ZM11.478 9.391h1.044v3.652h-1.044V9.392Z"
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
export default SvgPf;
