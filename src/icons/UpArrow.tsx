import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const UpArrow = (props: SvgProps) => (
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
      d="M0 20a4 4 0 0 0 4 4h16a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4H4a4 4 0 0 0-4 4v16Zm15.057-9H13.5v7a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-7H8.943A1 1 0 0 1 8.13 9.42l3.056-4.28a1 1 0 0 1 1.628 0l3.057 4.28A1 1 0 0 1 15.057 11Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default UpArrow;
