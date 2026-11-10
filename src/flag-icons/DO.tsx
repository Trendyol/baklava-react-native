import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgDo = (props: SvgProps) => (
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
        d="M.413 15.13a12.021 12.021 0 0 0 8.457 8.457V15.13H.413Z"
        fill="#D80027"
      />
      <Path
        d="M8.87.413A12.02 12.02 0 0 0 .412 8.87H8.87V.413Z"
        fill="#0052B4"
      />
      <Path
        d="M23.587 8.87A12.02 12.02 0 0 0 15.13.413V8.87h8.457Z"
        fill="#D80027"
      />
      <Path
        d="M15.13 23.587a12.021 12.021 0 0 0 8.457-8.457H15.13v8.457Z"
        fill="#0052B4"
      />
      <Path
        d="M15.13 12a3.13 3.13 0 1 1-6.26 0c0-1.729 3.13-3.13 3.13-3.13s3.13 1.401 3.13 3.13Z"
        fill="#496E2D"
      />
      <Path d="M8.87 12a3.13 3.13 0 0 1 6.26 0" fill="#0052B4" />
      <Path
        d="M10.24 10.435v1.956a1.76 1.76 0 0 0 3.52 0v-1.956h-3.52Z"
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
export default SvgDo;
