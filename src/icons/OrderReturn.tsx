import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgOrderReturn = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M24 7H13V0h5.57a3 3 0 0 1 2.667 1.628L24 7ZM11 0v7H0l2.763-5.372A3 3 0 0 1 5.43 0H11ZM0 9h12.873A9 9 0 0 0 8 17a8.983 8.983 0 0 0 3.343 7H3a3 3 0 0 1-3-3V9Z"
      fill={props?.fill ?? '#273142'}
    />
    <Path
      d="M13 12a1 1 0 1 0-2 0v3a1 1 0 0 0 1 1h3a1 1 0 1 0 0-2h-.473c.866-.667 1.917-1 2.973-1a4.5 4.5 0 1 1-4.194 6.136 1 1 0 1 0-1.862.728A6.502 6.502 0 0 0 24 17.5a6.5 6.5 0 0 0-6.5-6.5 6.86 6.86 0 0 0-4.5 1.666V12Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);

export default SvgOrderReturn;
