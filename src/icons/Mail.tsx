import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Mail = (props: SvgProps) => (
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
      d="M4 3a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h16a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4H4Zm18 3H2l8.853 6.197a2 2 0 0 0 2.294 0L22 6Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default Mail;
