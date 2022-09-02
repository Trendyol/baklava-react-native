import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgNormal = (props: SvgProps) => (
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
      d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12ZM7.2 8.4a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Zm8.4 1.2a1.2 1.2 0 1 1 2.4 0 1.2 1.2 0 0 1-2.4 0Zm-6.3 4.8a.9.9 0 1 0 0 1.8h5.4a.9.9 0 1 0 0-1.8H9.3Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgNormal;
