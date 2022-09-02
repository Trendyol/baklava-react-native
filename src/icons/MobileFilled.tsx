import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgMobileFilled = (props: SvgProps) => (
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
      d="M7 0a3 3 0 0 0-3 3v18a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H7Zm4 20a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgMobileFilled;
