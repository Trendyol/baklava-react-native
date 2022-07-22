import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgLoading = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className=""
    {...props}>
    <Path
      opacity={0.3}
      d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12ZM3.6 12a8.4 8.4 0 1 0 16.8 0 8.4 8.4 0 0 0-16.8 0Z"
      fill={props?.fill ?? `#273142`}
    />
    <Path
      d="M22.2 12c.994 0 1.814-.81 1.665-1.793A12.004 12.004 0 0 0 16.592.913c-.9-.372-1.84-.633-2.799-.778C12.81-.014 12 .805 12 1.8c0 .994.815 1.78 1.786 1.992a8.398 8.398 0 0 1 6.422 6.422c.211.971.998 1.786 1.992 1.786Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgLoading;
