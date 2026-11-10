import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Lock = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M8.5 12V6.5h-3V12h3Zm0-5.5A3.5 3.5 0 0 1 12 3V0a6.5 6.5 0 0 0-6.5 6.5h3ZM12 3a3.5 3.5 0 0 1 3.5 3.5h3A6.5 6.5 0 0 0 12 0v3Zm3.5 3.5V12h3V6.5h-3Z"
      fill={props?.fill ?? '#273142'}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 9a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3H5Zm7 4.5a1.5 1.5 0 0 0-1.5 1.5v3a1.5 1.5 0 0 0 3 0v-3a1.5 1.5 0 0 0-1.5-1.5Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default Lock;
