import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgLiveMonitor = (props: SvgProps) => (
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
      d="M3 1a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h6v2H6a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2h-3v-2h6a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3H3Zm15 4a1 1 0 0 0-1 1v8a1 1 0 1 0 2 0V6a1 1 0 0 0-1-1Zm-7 4a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0V9Zm-5 1a1 1 0 0 0-1 1v3a1 1 0 1 0 2 0v-3a1 1 0 0 0-1-1Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgLiveMonitor;
