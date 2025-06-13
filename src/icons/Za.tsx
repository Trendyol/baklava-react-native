import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgZa = (props: SvgProps) => (
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
        d="M3.515 20.485c-4.687-4.686-4.687-12.284 0-16.97L10.435 12l-6.92 8.485Z"
        fill="#000"
      />
      <Path
        d="M10.435 12 1.592 6.024c-.275.477-.516.974-.724 1.489L5.345 12 .868 16.487c.208.515.45 1.012.723 1.488L10.435 12Z"
        fill="#FFDA44"
      />
      <Path
        d="M23.898 10.435H10.435l-6.92-6.92a12.047 12.047 0 0 0-1.923 2.51L7.556 12 1.59 17.975c.53.92 1.178 1.764 1.924 2.51l6.92-6.92h13.463a12.118 12.118 0 0 0 0-3.13Z"
        fill="#6DA544"
      />
      <Path
        d="M4.694 21.52A11.947 11.947 0 0 0 12 24c5.544 0 10.21-3.76 11.587-8.87H11.083l-6.39 6.39Z"
        fill="#0052B4"
      />
      <Path
        d="M23.587 8.87C22.209 3.76 17.544 0 12 0 9.25 0 6.717.925 4.694 2.48l6.389 6.39h12.504Z"
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
export default SvgZa;
