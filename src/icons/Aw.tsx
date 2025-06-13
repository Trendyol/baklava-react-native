import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgAw = (props: SvgProps) => (
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
        d="M12 24c3.637 0 6.896-1.618 9.097-4.174H2.903A11.972 11.972 0 0 0 12 24ZM24 12c0-6.627-5.373-12-12-12S0 5.373 0 12c0 1.083.144 2.132.413 3.13h23.174c.269-.998.413-2.047.413-3.13ZM.954 16.696c.231.543.502 1.066.807 1.565H22.24c.305-.5.576-1.022.807-1.565H.954Z"
        fill="#338AF3"
      />
      <Path
        d="M5.5 7.569 3.154 6.534l2.344-1.035 1.035-2.344 1.035 2.344 2.344 1.035L7.57 7.569 6.534 9.913 5.499 7.569Z"
        fill="#F0F0F0"
      />
      <Path
        d="m6.534 4.447.639 1.448 1.448.639-1.448.639-.64 1.448-.638-1.448-1.448-.64 1.448-.638.639-1.448Z"
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
export default SvgAw;
