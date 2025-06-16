import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgGt = (props: SvgProps) => (
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
        d="M24 12a12 12 0 0 0-6.783-10.81v21.62A12 12 0 0 0 24 12ZM0 12a12 12 0 0 0 6.783 10.81V1.19A12 12 0 0 0 0 12Z"
        fill="#338AF3"
      />
      <Path
        d="M15.136 14.03 13.106 12l1.932-1.931-.087-1.02-.553-.554L12 10.893 9.602 8.495l-.553.554-.087 1.02L10.893 12l-2.029 2.03 1.107 1.106L12 13.106l2.03 2.03 1.106-1.107Z"
        fill="#ACABB1"
      />
      <Path
        d="m14.951 9.049-1.106 1.106a2.609 2.609 0 1 1-3.69 0L9.05 9.05a4.174 4.174 0 1 0 5.903 0Z"
        fill="#6DA544"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgGt;
