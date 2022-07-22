import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgWebStroke = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className=""
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 3h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1ZM0 4a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4h-6.5v1.5h3.25a1.25 1.25 0 1 1 0 2.5h-9.5a1.25 1.25 0 1 1 0-2.5h3.25V20H4a4 4 0 0 1-4-4V4Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgWebStroke;
