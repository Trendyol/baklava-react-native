import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgAs = (props: SvgProps) => (
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
        d="M17.822 1.505A11.945 11.945 0 0 0 12 0C5.373 0 0 5.372 0 11.999l8.348-4.173 9.474-6.32ZM0 12.001C0 18.628 5.373 24 12 24c2.113 0 4.097-.547 5.822-1.505l-9.474-6.321L0 12Z"
        fill="#0052B4"
      />
      <Path
        d="M18.822 2.127a12.02 12.02 0 0 0-1-.622L0 12V12l17.821 10.493c.345-.19.678-.398 1-.621L2.055 12l16.768-9.873Z"
        fill="#D80027"
      />
      <Path
        d="M20.87 11.553h-1.43a1.136 1.136 0 0 0-.07-1.53 1.136 1.136 0 0 0 0-1.605l-.027.026c.444-.443.47-1.19.027-1.633l-6.424 6.425a1.12 1.12 0 0 0 1.593-.005l.124-.113 3.076-.28v1.323h1.044v-1.418l1.565-.142.522-1.049Z"
        fill="#A2001D"
      />
      <Path
        d="M13.044 14.609 12 14.087l1.044-.522h6.782v1.044h-6.782Z"
        fill="#FFDA44"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgAs;
