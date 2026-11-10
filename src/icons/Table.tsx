import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Table = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M0 2.4A2.4 2.4 0 0 1 2.4 0h6a2.4 2.4 0 0 1 2.4 2.4v6a2.4 2.4 0 0 1-2.4 2.4h-6A2.4 2.4 0 0 1 0 8.4v-6ZM0 15.6a2.4 2.4 0 0 1 2.4-2.4h6a2.4 2.4 0 0 1 2.4 2.4v6A2.4 2.4 0 0 1 8.4 24h-6A2.4 2.4 0 0 1 0 21.6v-6ZM15.6 0a2.4 2.4 0 0 0-2.4 2.4v6a2.4 2.4 0 0 0 2.4 2.4h6A2.4 2.4 0 0 0 24 8.4v-6A2.4 2.4 0 0 0 21.6 0h-6Z"
      fill={props?.fill ?? '#273142'}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.6 13.2a2.4 2.4 0 0 0-2.4 2.4v6a2.4 2.4 0 0 0 2.4 2.4h6a2.4 2.4 0 0 0 2.4-2.4v-6a2.4 2.4 0 0 0-2.4-2.4h-6Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default Table;
