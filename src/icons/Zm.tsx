import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgZm = (props: SvgProps) => (
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
        fill="#496E2D"
      />
      <Path
        d="M16.696 12H12v12a11.98 11.98 0 0 0 4-.684L16.696 12Z"
        fill="#D80027"
      />
      <Path
        d="M20 20.943A11.97 11.97 0 0 0 24 12h-4.696L20 20.943Z"
        fill="#FF9811"
      />
      <Path d="M16 12v11.316a11.993 11.993 0 0 0 4-2.372V12h-4Z" fill="#000" />
      <Path
        d="M22.174 7.826h-3.13a1.044 1.044 0 0 0-2.088 0h-3.13c0 .576.502 1.044 1.078 1.044h-.035c0 .576.467 1.043 1.044 1.043 0 .576.467 1.044 1.043 1.044h2.087c.577 0 1.044-.468 1.044-1.044.576 0 1.043-.467 1.043-1.043h-.034c.576 0 1.078-.468 1.078-1.044Z"
        fill="#FF9811"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgZm;
