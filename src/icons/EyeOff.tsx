import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgEyeOff = (props: SvgProps) => (
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
      d="M17.668 18.547c2.264-1.223 4.2-3.119 5.906-5.3a2.036 2.036 0 0 0 0-2.493C20.593 6.94 16.904 4 12 4c-2.563 0-4.794.803-6.765 2.114L8.052 8.93a5 5 0 1 1 7.017 7.017l2.6 2.599Zm-5.79-1.549 2.714 2.715C13.767 19.9 12.904 20 12 20 7.095 20 3.407 17.06.426 13.246a2.036 2.036 0 0 1 0-2.492 25.426 25.426 0 0 1 2.461-2.746l4.114 4.115a5 5 0 0 0 4.876 4.876Zm1.758-2.483a3 3 0 1 0-4.151-4.151l4.151 4.15Z"
      fill={props?.fill ?? `#273142`}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23.707 23.707a1 1 0 0 1-1.414 0l-22-22A1 1 0 0 1 1.707.293l22 22a1 1 0 0 1 0 1.414Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgEyeOff;
