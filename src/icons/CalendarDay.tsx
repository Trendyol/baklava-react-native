import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const CalendarDay = (props: SvgProps) => (
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
      d="M18 0a1.5 1.5 0 0 1 1.5 1.5V3h.5a4 4 0 0 1 4 4v13a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h.5V1.5a1.5 1.5 0 1 1 3 0V3h9V1.5A1.5 1.5 0 0 1 18 0Zm-6.274 8.2a.572.572 0 0 0-.182.029.441.441 0 0 0-.154.069L8.17 10.79a.339.339 0 0 0-.168.238.396.396 0 0 0 .07.266l.826 1.078c.066.084.14.136.224.154a.317.317 0 0 0 .266-.07l1.918-1.47v6.664c0 .094.033.178.098.252a.373.373 0 0 0 .252.098h1.82a.341.341 0 0 0 .251-.098.374.374 0 0 0 .1-.252v-9.1a.342.342 0 0 0-.1-.252.342.342 0 0 0-.251-.098h-1.75Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default CalendarDay;
