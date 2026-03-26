import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgTarget = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M7.878 2.061a.515.515 0 0 0-.15.364v1.12L5.301 5.968a.515.515 0 0 0 .729.729l2.425-2.425h1.119a.515.515 0 0 0 .364-.151l1.985-1.985a.258.258 0 0 0-.182-.44h-1.439V.258a.258.258 0 0 0-.44-.182L7.878 2.061Z"
      fill="#8C4EFF"
    />
    <Path
      d="M6.697 3.146v.096l-1.03 1.03a2.06 2.06 0 1 0 2.06 2.061l1.03-1.03h.097a3.349 3.349 0 1 1-2.157-2.157Z"
      fill="#8C4EFF"
    />
    <Path
      d="M6.735 2.086a4.379 4.379 0 1 0 3.18 3.18c.282-.065.544-.207.752-.416l.36-.36A5.667 5.667 0 1 1 7.51.973l-.36.36c-.208.209-.35.47-.414.754Z"
      fill="#8C4EFF"
    />
  </Svg>
);
export default SvgTarget;
