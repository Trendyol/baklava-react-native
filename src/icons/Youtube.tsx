import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Youtube = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.39 3.55c1.028.297 1.839 1.165 2.116 2.266.514 2.012.494 6.205.494 6.205s0 4.172-.494 6.184c-.277 1.1-1.088 1.97-2.116 2.266C19.512 21 12 21 12 21s-7.493 0-9.39-.55C1.582 20.152.77 19.284.494 18.182 0 16.194 0 12 0 12s0-4.172.494-6.184c.277-1.1 1.107-1.99 2.116-2.287C4.488 3 12 3 12 3s7.512 0 9.39.55ZM16.5 12l-8 4.5v-9l8 4.5Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default Youtube;
