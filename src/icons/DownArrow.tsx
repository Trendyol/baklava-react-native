import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const DownArrow = (props: SvgProps) => (
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
      d="M24 4a4 4 0 0 0-4-4H4a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h16a4 4 0 0 0 4-4V4ZM8.943 13H10.5V6a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v7h1.557a1 1 0 0 1 .813 1.581l-3.056 4.28a1 1 0 0 1-1.628 0L8.13 14.58A1 1 0 0 1 8.943 13Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default DownArrow;
