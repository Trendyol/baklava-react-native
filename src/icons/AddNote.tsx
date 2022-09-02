import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgAddNote = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 14c.69 0 1.36-.088 2-.252V22a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V0h12.708a7.984 7.984 0 0 0-2.646 5H4a1 1 0 1 0 0 2h6.062a7.964 7.964 0 0 0 1.693 4H4a1 1 0 1 0 0 2h10.124c1.148.637 2.47 1 3.876 1ZM4 17a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H4Zm11 1a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
      fill={props?.fill ?? `#273142`}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24.034 6c0 3.314-2.69 6-6.009 6a6.004 6.004 0 0 1-6.008-6c0-3.314 2.69-6 6.008-6a6.004 6.004 0 0 1 6.009 6ZM14.018 6a1 1 0 0 1 1.002-1h2.003V3a1 1 0 0 1 2.002 0v2h2.003a1 1 0 1 1 0 2h-2.003v2a1 1 0 0 1-2.002 0V7H15.02a1 1 0 0 1-1.002-1Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgAddNote;
