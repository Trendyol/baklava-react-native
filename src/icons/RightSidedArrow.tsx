import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const RightSidedArrow = (props: SvgProps) => (
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
      d="M4 0a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h16a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4H4Zm9 15.057V13.5H6a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h7V8.943a1 1 0 0 1 1.581-.814l4.28 3.057a1 1 0 0 1 0 1.628l-4.28 3.056A1 1 0 0 1 13 15.057Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default RightSidedArrow;
