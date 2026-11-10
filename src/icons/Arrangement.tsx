import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Arrangement = (props: SvgProps) => (
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
      d="M18.117 1a1.5 1.5 0 0 1 1.5 1.5v19a1.5 1.5 0 1 1-3 0v-19a1.5 1.5 0 0 1 1.5-1.5Z"
      fill={props?.fill ?? '#273142'}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23.547 15.926a1.5 1.5 0 0 1 .027 2.12l-4.383 4.5a1.5 1.5 0 0 1-2.121.028l-4.617-4.5a1.5 1.5 0 0 1 2.094-2.148l3.542 3.452 3.337-3.425a1.5 1.5 0 0 1 2.12-.027ZM6.116 1a1.5 1.5 0 0 1 1.5 1.5v19a1.5 1.5 0 0 1-3 0v-19a1.5 1.5 0 0 1 1.5-1.5Z"
      fill={props?.fill ?? '#273142'}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.136 1a1.5 1.5 0 0 1 1.055.453l4.384 4.5a1.5 1.5 0 0 1-2.15 2.094L6.09 4.622 2.547 8.074A1.5 1.5 0 1 1 .453 5.926l4.617-4.5A1.5 1.5 0 0 1 6.136 1Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default Arrangement;
