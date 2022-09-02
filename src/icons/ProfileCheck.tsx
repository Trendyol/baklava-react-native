import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgProfileCheck = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M10.5 12c3.331 0 6-2.67 6-6s-2.669-6-6-6c-3.33 0-6 2.67-6 6s2.67 6 6 6Z"
      fill={props?.fill ?? `#273142`}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.37 13.523a16.33 16.33 0 0 0-.87-.023C4.837 13.5 0 16.434 0 21.083 0 23.417 5 24 10.5 24c.746 0 1.483 0 2.2-.007A7.98 7.98 0 0 1 10 18c0-1.659.505-3.2 1.37-4.477Z"
      fill={props?.fill ?? `#273142`}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24 18a6 6 0 1 0-12 0 6 6 0 0 0 12 0Zm-2.97-.97a.75.75 0 1 0-1.06-1.06L17 18.94l-.97-.97a.75.75 0 1 0-1.06 1.06l1.5 1.5a.75.75 0 0 0 1.06 0l3.5-3.5Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgProfileCheck;
