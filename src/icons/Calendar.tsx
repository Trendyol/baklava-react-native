import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Calendar = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M18 2v2M6 2v2"
      stroke={props?.fill ?? '#273142'}
      strokeWidth={3}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 3a4 4 0 0 0-4 4v13a4 4 0 0 0 4 4h16a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4H4Zm0 2.864a1 1 0 0 0-1 1v3.772h18V6.864a1 1 0 0 0-1-1H4Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default Calendar;
