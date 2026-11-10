import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const LeftSidedArrow = (props: SvgProps) => (
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
      d="M20 0a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h16Zm-9 15.057V13.5h7a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-7V8.943a1 1 0 0 0-1.581-.814l-4.28 3.057a1 1 0 0 0 0 1.628l4.28 3.056A1 1 0 0 0 11 15.057Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default LeftSidedArrow;
