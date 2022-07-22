import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgCalendarStroke = (props: SvgProps) => (
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
      d="M3 2a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H3Zm18 6H3v12a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V8Z"
      fill={props?.fill ?? `#273142`}
    />
    <Path
      d="M4 1.5a1.5 1.5 0 1 1 3 0v1a1.5 1.5 0 1 1-3 0v-1ZM17 1.5a1.5 1.5 0 0 1 3 0v1a1.5 1.5 0 0 1-3 0v-1ZM5.5 10.5h3v3h-3v-3ZM5.5 15.5h3v3h-3v-3ZM10.5 10.5h3v3h-3v-3ZM10.5 15.5h3v3h-3v-3ZM15.5 10.5h3v3h-3v-3Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgCalendarStroke;
