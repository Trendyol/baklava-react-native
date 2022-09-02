import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgCalendar = (props: SvgProps) => (
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
      d="M6 0a1.5 1.5 0 0 1 1.5 1.5V3h9V1.5a1.5 1.5 0 0 1 3 0V3h.5a4 4 0 0 1 4 4v13a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h.5V1.5A1.5 1.5 0 0 1 6 0ZM3 6.864a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v3.772H3V6.864Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgCalendar;
