import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgKp = (props: SvgProps) => (
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
        d="M12 0a11.972 11.972 0 0 0-9.097 4.174h18.194A11.972 11.972 0 0 0 12 0ZM21.096 19.826H2.903A11.972 11.972 0 0 0 12 24c3.637 0 6.896-1.618 9.096-4.174Z"
        fill="#0052B4"
      />
      <Path
        d="M22.239 5.74H1.76A11.943 11.943 0 0 0 0 12c0 2.294.644 4.438 1.761 6.26H22.24A11.943 11.943 0 0 0 24 12c0-2.294-.644-4.438-1.761-6.26Z"
        fill="#D80027"
      />
      <Path
        d="M7.383 16.617a4.617 4.617 0 1 0 0-9.234 4.617 4.617 0 0 0 0 9.234Z"
        fill="#F0F0F0"
      />
      <Path
        d="m7.383 7.383 1.036 3.188h3.358l-2.718 1.97 1.044 3.199-2.72-1.98-2.717 1.976 1.04-3.194-2.715-1.97h3.356l1.036-3.19Z"
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
export default SvgKp;
