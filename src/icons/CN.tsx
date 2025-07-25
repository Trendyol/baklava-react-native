import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgCn = (props: SvgProps) => (
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
        fill="#D80027"
      />
      <Path
        d="m6.567 7.303 1.036 3.188h3.352l-2.71 1.973 1.036 3.188-2.714-1.97-2.714 1.97 1.04-3.188-2.713-1.973H5.53l1.036-3.188ZM14.227 18.586l-.793-.975-1.171.455.68-1.055-.793-.98 1.214.324.684-1.055.066 1.256 1.219.324-1.177.45.07 1.256ZM15.802 15.727l.375-1.2-1.027-.727 1.256-.019.37-1.2.408 1.19 1.257-.013-1.008.75.403 1.19-1.027-.726-1.007.755ZM17.925 8.808l-.553 1.13.9.876-1.242-.178-.553 1.125-.216-1.238-1.247-.178 1.116-.586-.216-1.242.9.877 1.111-.586ZM14.26 5.386l-.094 1.251 1.167.474-1.224.3-.089 1.256-.66-1.069-1.224.3.81-.96-.665-1.065 1.167.474.811-.961Z"
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
export default SvgCn;
