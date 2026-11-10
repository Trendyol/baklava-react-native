import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgBr = (props: SvgProps) => (
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
        fill="#6DA544"
      />
      <Path
        d="M12 4.696 21.913 12 12 19.304 2.087 12 12 4.696Z"
        fill="#FFDA44"
      />
      <Path
        d="M12 16.174a4.174 4.174 0 1 0 0-8.348 4.174 4.174 0 0 0 0 8.348Z"
        fill="#F0F0F0"
      />
      <Path
        d="M9.913 11.74c-.726 0-1.426.11-2.086.314a4.173 4.173 0 0 0 7.591 2.34 7.033 7.033 0 0 0-5.505-2.655ZM16.096 12.8a4.174 4.174 0 0 0-7.932-2.447 8.584 8.584 0 0 1 7.932 2.447Z"
        fill="#0052B4"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgBr;
