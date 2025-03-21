import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgSlovakia = (props: SvgProps) => (
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
        d="M12 24c6.627 0 12-5.373 12-12 0-1.468-.264-2.874-.746-4.174H.746A11.974 11.974 0 0 0 0 12c0 6.627 5.373 12 12 12Z"
        fill="#0052B4"
      />
      <Path
        d="M12 24c5.16 0 9.558-3.256 11.254-7.826H.746C2.442 20.744 6.84 24 12 24Z"
        fill="#D80027"
      />
      <Path
        d="M3.103 6.783v5.986c0 3.405 4.449 4.448 4.449 4.448S12 16.174 12 12.77V6.783H3.103Z"
        fill="#F0F0F0"
      />
      <Path
        d="M4.147 6.783v5.986c0 .4.088.777.264 1.131h6.28a2.51 2.51 0 0 0 .265-1.131V6.783h-6.81Z"
        fill="#D80027"
      />
      <Path
        d="M9.638 10.957H8.073V9.912h1.044V8.87H8.073V7.826H7.03V8.87H5.986v1.043H7.03v1.043H5.465V12H7.03v1.043h1.043V12h1.565v-1.043Z"
        fill="#F0F0F0"
      />
      <Path
        d="M5.835 15.357a7.5 7.5 0 0 0 1.717.777 7.495 7.495 0 0 0 1.716-.777c.679-.426 1.154-.914 1.424-1.457a1.818 1.818 0 0 0-1.469-.287 1.826 1.826 0 0 0-3.343 0 1.832 1.832 0 0 0-1.469.287c.27.543.745 1.03 1.424 1.457Z"
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
export default SvgSlovakia;
