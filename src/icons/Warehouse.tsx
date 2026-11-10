import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Warehouse = (props: SvgProps) => (
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
      d="M0 6.026a2 2 0 0 1 1.253-1.855l10-4.026a2 2 0 0 1 1.494 0l10 4.026A2 2 0 0 1 24 6.026V23a1 1 0 0 1-1 1h-3v-2.416H4V24H1a1 1 0 0 1-1-1V6.026ZM4 17v2h16v-2H4Zm0-5v2.5h16V12H4Zm8-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default Warehouse;
