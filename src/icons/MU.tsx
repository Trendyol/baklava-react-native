import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgMu = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        d="m1.459 6.26 10.54 1.044 10.542-1.043A11.997 11.997 0 0 0 12 0C7.45 0 3.494 2.53 1.459 6.26Z"
        fill="#D80027"
      />
      <Path
        d="M1.46 17.74 12 18.782l10.54-1.044C23.472 16.034 24 14.08 24 12l-12-1.043L0 12c0 2.079.529 4.034 1.46 5.74Z"
        fill="#FFDA44"
      />
      <Path
        d="M1.46 6.26A11.946 11.946 0 0 0 0 12h24c0-2.079-.529-4.034-1.46-5.74H1.46Z"
        fill="#0052B4"
      />
      <Path
        d="M12 24c4.548 0 8.506-2.53 10.54-6.26H1.46A11.997 11.997 0 0 0 11.999 24Z"
        fill="#6DA544"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgMu;
