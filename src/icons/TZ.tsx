import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgTz = (props: SvgProps) => (
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
        d="M3.515 20.485c.503.504 1.04.953 1.604 1.348L21.833 5.119a12.067 12.067 0 0 0-2.952-2.952L2.167 18.882c.395.563.844 1.1 1.348 1.603Z"
        fill="#000"
      />
      <Path
        d="M3.515 3.515C-.271 7.3-.998 12.986 1.333 17.502l16.17-16.169C12.985-.997 7.3-.271 3.514 3.515Z"
        fill="#6DA544"
      />
      <Path
        d="M20.485 20.485c3.786-3.785 4.513-9.471 2.182-13.987l-16.17 16.17c4.517 2.33 10.203 1.603 13.988-2.183Z"
        fill="#338AF3"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgTz;
