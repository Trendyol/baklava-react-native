import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgEg = (props: SvgProps) => (
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
        d="M12 0C6.84 0 2.442 3.256.746 7.826h22.508C21.558 3.256 17.159 0 12 0Z"
        fill="#D80027"
      />
      <Path
        d="M12 24c5.16 0 9.558-3.256 11.254-7.826H.746C2.442 20.744 6.84 24 12 24Z"
        fill="#000"
      />
      <Path
        d="M16.174 10.696h-3.13a1.044 1.044 0 0 0-2.088 0h-3.13c0 .576.502 1.043 1.078 1.043H8.87c0 .576.467 1.044 1.043 1.044 0 .576.467 1.043 1.043 1.043h2.088c.576 0 1.043-.467 1.043-1.043.576 0 1.043-.467 1.043-1.044h-.034c.576 0 1.078-.467 1.078-1.043Z"
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
export default SvgEg;
