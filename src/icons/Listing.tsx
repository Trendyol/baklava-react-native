import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgListing = (props: SvgProps) => (
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
      d="M1 3a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V3Zm8 3a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1Zm1 5a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-8Zm-1 7a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1ZM6 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-1 7a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm1 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgListing;
