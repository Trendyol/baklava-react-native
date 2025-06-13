import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgCf = (props: SvgProps) => (
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
        d="M22.541 6.26a12.027 12.027 0 0 0-7.41-5.847l-.522 5.848h7.932ZM1.46 6.26H9.39L8.87.414A12.027 12.027 0 0 0 1.46 6.26Z"
        fill="#0052B4"
      />
      <Path
        d="M14.609 12v5.74h7.932C23.47 16.033 24 14.078 24 12h-9.391ZM9.391 12H0c0 2.079.529 4.034 1.46 5.74H9.39V12Z"
        fill="#6DA544"
      />
      <Path
        d="M1.46 17.74a12.028 12.028 0 0 0 7.41 5.847l.521-5.114-7.932-.734ZM15.13 23.587a12.028 12.028 0 0 0 7.411-5.848l-7.932.734.521 5.114ZM14.609 18.473l7.932-.734h-7.932v.734Z"
        fill="#FFDA44"
      />
      <Path d="M9.391 17.74H1.46l7.932.733v-.734Z" fill="#FFDA44" />
      <Path
        d="M12 0c-1.083 0-2.132.144-3.13.413v23.174c.998.269 2.047.413 3.13.413 1.083 0 2.132-.144 3.13-.413V.413A12.013 12.013 0 0 0 12 0Z"
        fill="#D80027"
      />
      <Path
        d="m6.455 2.609.323.996h1.048l-.847.616.323.996-.847-.615-.848.615.324-.996-.848-.616h1.048l.324-.996Z"
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
export default SvgCf;
