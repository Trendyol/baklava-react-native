import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgReport = (props: SvgProps) => (
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
      d="M6 3H5a3 3 0 0 0-3 3v15a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3h-1v1.5A2.5 2.5 0 0 1 15.5 7h-7A2.5 2.5 0 0 1 6 4.5V3Zm1 8a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2H7Zm-1 7a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Z"
      fill={props?.fill ?? `#273142`}
    />
    <Path
      d="M7 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V2Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgReport;
