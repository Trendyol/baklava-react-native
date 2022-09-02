import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgCheckFill = (props: SvgProps) => (
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
      d="M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12Zm-7.272-1.815a1 1 0 0 0-1.456-1.37l-4.92 5.226-1.624-1.726a1 1 0 0 0-1.456 1.37l2.353 2.5a1 1 0 0 0 1.456 0l5.647-6Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgCheckFill;
