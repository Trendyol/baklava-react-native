import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgArchive = (props: SvgProps) => (
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
      d="M0 3a3 3 0 0 1 3-3h18a3 3 0 0 1 3 3v1.2c0 1.11-.603 2.08-1.5 2.599V21a3 3 0 0 1-3 3h-15a3 3 0 0 1-3-3V6.799A2.999 2.999 0 0 1 0 4.2V3Zm2.5.5a1 1 0 0 1 1-1h17a1 1 0 1 1 0 2h-17a1 1 0 0 1-1-1ZM8 13.25c0-.69.56-1.25 1.25-1.25h5.5a1.25 1.25 0 1 1 0 2.5h-5.5c-.69 0-1.25-.56-1.25-1.25Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgArchive;
