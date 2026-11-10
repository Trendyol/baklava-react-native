import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Graphic = (props: SvgProps) => (
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
      d="M3 0a3 3 0 0 0-3 3v18a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3Zm17.049 7.551a1.194 1.194 0 0 1 .35.864V12a1.2 1.2 0 0 1-2.4 0v-.703l-3.95 3.951a1.2 1.2 0 0 1-1.697 0l-2.152-2.15-4.551 4.55a1.2 1.2 0 1 1-1.698-1.697l5.4-5.4a1.2 1.2 0 0 1 1.697 0l2.152 2.152L16.303 9.6H15.6a1.2 1.2 0 0 1 0-2.4h3.611a1.203 1.203 0 0 1 .838.351Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default Graphic;
