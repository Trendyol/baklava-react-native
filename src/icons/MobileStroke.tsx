import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgMobileStroke = (props: SvgProps) => (
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
      d="M14.5 2.5H17a.5.5 0 0 1 .5.5v18a.5.5 0 0 1-.5.5H7a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5h2.5V3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-.5ZM4 3a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V3Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgMobileStroke;
