import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgSe = (props: SvgProps) => (
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
        d="M9.391 10.435h14.507C23.131 4.547 18.097 0 12 0c-.896 0-1.769.099-2.609.285v10.15ZM6.26 10.435V1.459a12.007 12.007 0 0 0-6.158 8.976H6.26ZM6.26 13.565H.103a12.007 12.007 0 0 0 6.159 8.976v-8.976ZM9.391 13.565v10.15c.84.186 1.713.285 2.609.285 6.097 0 11.131-4.547 11.898-10.435H9.391Z"
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
export default SvgSe;
