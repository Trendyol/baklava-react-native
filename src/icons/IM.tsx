import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgIm = (props: SvgProps) => (
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
        d="m16.443 8.044-.848 3.027-2.545-.47-1.638-3.377-4.425 1.57-.35-.983L5.48 7.67l.872 2.458 3.046-.779.865 2.44-2.105 3.106 3.573 3.048-.678.793.456 1.075 1.693-1.985-2.197-2.248 1.68-1.97 3.742.27.853-4.617 1.026.19.703-.932-2.566-.474Z"
        fill="#F0F0F0"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgIm;
