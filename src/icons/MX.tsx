import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgMx = (props: SvgProps) => (
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
        d="M24 12a12 12 0 0 0-6.783-10.81v21.62A12 12 0 0 0 24 12Z"
        fill="#D80027"
      />
      <Path
        d="M0 12a12 12 0 0 0 6.783 10.81V1.19A12 12 0 0 0 0 12ZM8.87 12a3.13 3.13 0 0 0 6.26 0v-1.043H8.87V12Z"
        fill="#6DA544"
      />
      <Path
        d="M16.174 9.913h-3.13a1.044 1.044 0 0 0-2.088 0h-3.13c0 .576.502 1.043 1.078 1.043H8.87c0 .577.468 1.044 1.044 1.044 0 .576.467 1.043 1.043 1.043h2.087c.577 0 1.044-.467 1.044-1.043.576 0 1.043-.467 1.043-1.043h-.035c.577 0 1.079-.468 1.079-1.044Z"
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
export default SvgMx;
