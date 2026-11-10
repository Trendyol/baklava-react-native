import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const FullSize = (props: SvgProps) => (
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
      d="M6.5 3H3v3.5a1.5 1.5 0 1 1-3 0v-4A2.5 2.5 0 0 1 2.5 0h4a1.5 1.5 0 1 1 0 3Zm11 0H21v3.5a1.5 1.5 0 0 0 3 0v-4A2.5 2.5 0 0 0 21.5 0h-4a1.5 1.5 0 0 0 0 3ZM3 21v-3.5a1.5 1.5 0 0 0-3 0v4A2.5 2.5 0 0 0 2.5 24h4a1.5 1.5 0 0 0 0-3H3Zm18-3.5V21h-3.5a1.5 1.5 0 0 0 0 3h4a2.5 2.5 0 0 0 2.5-2.5v-4a1.5 1.5 0 0 0-3 0Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default FullSize;
