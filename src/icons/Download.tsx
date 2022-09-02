import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgDownload = (props: SvgProps) => (
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
      d="M12 0a1.5 1.5 0 0 0-1.5 1.5V14a1.5 1.5 0 0 0 3 0V1.5A1.5 1.5 0 0 0 12 0Z"
      fill={props?.fill ?? `#273142`}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.44 8.94a1.5 1.5 0 0 0 0 2.12l4.5 4.5a1.5 1.5 0 0 0 2.12 0l4.5-4.5a1.5 1.5 0 0 0-2.12-2.12L12 12.378l-3.44-3.44a1.5 1.5 0 0 0-2.12 0Z"
      fill={props?.fill ?? `#273142`}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.5 13A1.5 1.5 0 0 1 3 14.5v5A1.5 1.5 0 0 0 4.5 21h15a1.5 1.5 0 0 0 1.5-1.5v-5a1.5 1.5 0 0 1 3 0v5a4.5 4.5 0 0 1-4.5 4.5h-15A4.5 4.5 0 0 1 0 19.5v-5A1.5 1.5 0 0 1 1.5 13Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgDownload;
