import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgStarFill = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16Zm1.411-9.942L8.001 3.2 6.59 6.058l-3.155.459 2.283 2.225-.539 3.141L8 10.4l2.822 1.483-.54-3.141 2.283-2.225-3.154-.459Z"
      fill={props?.fill ?? '#FFB600'}
    />
  </Svg>
);
export default SvgStarFill;
