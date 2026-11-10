import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgAl = (props: SvgProps) => (
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
        d="M18.783 8.907h-4.347A1.565 1.565 0 1 0 12 6.96a1.564 1.564 0 0 0-2.87.865c0 .42.166.8.434 1.08H5.217c0 1.153 1.004 2.088 2.157 2.088h-.07c0 1.152.935 2.087 2.087 2.087 0 .373.099.723.27 1.026l-1.73 1.731 1.327 1.328 1.885-1.884c.073.027.15.049.228.064l-1.138 2.57L12 19.826l1.767-1.91-1.138-2.57c.078-.015.155-.037.229-.064l1.883 1.884 1.329-1.328-1.732-1.731c.172-.303.27-.653.27-1.026a2.087 2.087 0 0 0 2.088-2.088h-.07c1.153 0 2.157-.934 2.157-2.086Z"
        fill="#000"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgAl;
