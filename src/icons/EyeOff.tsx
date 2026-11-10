import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const EyeOff = (props: SvgProps) => (
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
      d="M6.332 5.453c-2.264 1.223-4.2 3.119-5.906 5.3a2.036 2.036 0 0 0 0 2.493C3.407 17.06 7.096 20 12 20c2.563 0 4.794-.803 6.765-2.114l-2.817-2.817A5 5 0 1 1 8.93 8.052l-2.6-2.599Zm5.79 1.548L9.409 4.287A11.686 11.686 0 0 1 12 4c4.905 0 8.593 2.94 11.574 6.754a2.036 2.036 0 0 1 0 2.492 25.446 25.446 0 0 1-2.461 2.746l-4.114-4.115a5 5 0 0 0-4.876-4.876Zm-1.758 2.484a3 3 0 1 0 4.151 4.151l-4.151-4.15Z"
      fill={props?.fill ?? '#273142'}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M.293.293a1 1 0 0 1 1.414 0l22 22a1 1 0 0 1-1.414 1.414l-22-22a1 1 0 0 1 0-1.414Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default EyeOff;
