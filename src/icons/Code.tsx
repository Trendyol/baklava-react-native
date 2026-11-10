import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Code = (props: SvgProps) => (
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
      d="M0 4a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4Zm7.293 12.707a1 1 0 0 0 1.414-1.414L5.414 12l3.293-3.293a1 1 0 0 0-1.414-1.414l-4 4a1 1 0 0 0 0 1.414l4 4Zm8-9.414a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L18.586 12l-3.293-3.293a1 1 0 0 1 0-1.414Zm-1.306-1.129a1 1 0 0 0-1.973-.328l-2 12a1 1 0 1 0 1.973.328l2-12Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default Code;
