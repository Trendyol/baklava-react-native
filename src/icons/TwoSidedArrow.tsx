import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const TwoSidedArrow = (props: SvgProps) => (
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
      d="M4 0a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h16a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4H4Zm2 9h8v1a.999.999 0 0 0 1.707.708l3-2a1 1 0 0 0 0-1.415l-3-2A1 1 0 0 0 14 6.001v1H6a1 1 0 1 0 0 2Zm12 8h-8v1a1 1 0 0 1-1.707.707l-3-2a1 1 0 0 1 0-1.415l3-2A1 1 0 0 1 10 14v1h8a1 1 0 1 1 0 2Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default TwoSidedArrow;
