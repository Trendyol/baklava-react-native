import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgExit = (props: SvgProps) => (
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
      d="M0 4.5A4.5 4.5 0 0 1 4.5 0h5a1.5 1.5 0 0 1 0 3h-5A1.5 1.5 0 0 0 3 4.5v15A1.5 1.5 0 0 0 4.5 21h5a1.5 1.5 0 0 1 0 3h-5A4.5 4.5 0 0 1 0 19.5v-15Z"
      fill={props?.fill ?? `#273142`}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 12a1.5 1.5 0 0 1 1.5-1.5H22a1.5 1.5 0 0 1 0 3H9.5A1.5 1.5 0 0 1 8 12Z"
      fill={props?.fill ?? `#273142`}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.94 6.44a1.5 1.5 0 0 1 2.12 0l4.5 4.5a1.5 1.5 0 0 1 0 2.12l-4.5 4.5a1.5 1.5 0 0 1-2.12-2.12L20.378 12l-3.44-3.44a1.5 1.5 0 0 1 0-2.12Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgExit;
