import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Microphone = (props: SvgProps) => (
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
      d="M12 1a4 4 0 0 0-4 4v7a4 4 0 0 0 8 0V5a4 4 0 0 0-4-4ZM5 11a1 1 0 0 1 1 1 6 6 0 0 0 12 0 1 1 0 1 1 2 0 8.001 8.001 0 0 1-7 7.938V21h2a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h2v-1.062A8.001 8.001 0 0 1 4 12a1 1 0 0 1 1-1Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default Microphone;
