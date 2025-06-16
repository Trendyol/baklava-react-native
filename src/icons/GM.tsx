import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgGm = (props: SvgProps) => (
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
        d="M12 0C7.039 0 2.781 3.01.954 7.304h22.092C21.22 3.011 16.961 0 12 0Z"
        fill="#A2001D"
      />
      <Path
        d="M12 24c4.961 0 9.219-3.01 11.046-7.304H.954C2.78 20.989 7.039 24 12 24Z"
        fill="#496E2D"
      />
      <Path
        d="M23.587 8.87H.413A12.013 12.013 0 0 0 0 12c0 1.083.144 2.132.413 3.13h23.174c.269-.998.413-2.047.413-3.13 0-1.083-.144-2.132-.413-3.13Z"
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
export default SvgGm;
