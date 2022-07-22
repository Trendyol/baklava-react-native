import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgChatbot = (props: SvgProps) => (
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
      d="M2 6a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5v2a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2v1a5 5 0 0 1-5 5h-2.847l-1.393 1.646a.993.993 0 0 1-1.52 0L9.847 21H7a5 5 0 0 1-5-5v-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2V6Zm6 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm1.92 4.11a1 1 0 0 0-1.84.78A4.266 4.266 0 0 0 12.003 17a4.265 4.265 0 0 0 3.916-2.593 1 1 0 0 0-1.838-.789A2.266 2.266 0 0 1 12.003 15a2.266 2.266 0 0 1-2.082-1.39ZM17.5 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgChatbot;
