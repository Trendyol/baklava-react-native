import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgHistory = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M7 0a7 7 0 1 1 0 14 .583.583 0 0 1 0-1.167 5.833 5.833 0 1 0-4.375-1.977V9.625a.583.583 0 0 1 1.167 0v2.625a.584.584 0 0 1-.584.583H.583a.583.583 0 0 1 0-1.166h1.17c-.14-.173-.28-.366-.419-.557A7 7 0 0 1 7 0Zm0 1.75a5.25 5.25 0 1 1-2.333 9.954V9.625a1.459 1.459 0 0 0-2.62-.882A5.25 5.25 0 0 1 7 1.75ZM7 3.5a.583.583 0 0 0-.583.583V7c0 .322.26.583.583.583h2.333a.584.584 0 1 0 0-1.166h-1.75V4.083A.583.583 0 0 0 7 3.5Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default SvgHistory;
