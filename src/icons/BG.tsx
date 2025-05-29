import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgBulgaria = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#clip0_18096_38984)">
      <Path
        d="M24 12C24 10.5322 23.736 9.12605 23.2536 7.82612L12 7.30435L0.746391 7.82607C0.264047 9.12605 0 10.5322 0 12C0 13.4679 0.264047 14.874 0.746391 16.1739L12 16.6957L23.2536 16.1739C23.736 14.874 24 13.4679 24 12Z"
        fill="#496E2D"
      />
      <Path
        d="M12 24C17.1596 24 21.5581 20.7435 23.2536 16.1739H0.746399C2.44191 20.7435 6.84043 24 12 24Z"
        fill="#D80027"
      />
      <Path
        d="M0.746399 7.82611H23.2537C21.5581 3.2565 17.1596 0 12 0C6.84043 0 2.44191 3.2565 0.746399 7.82611Z"
        fill="#F0F0F0"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_18096_38984">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgBulgaria;
