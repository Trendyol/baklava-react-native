import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgMinusFill = (props: SvgProps) => (
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
      d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12ZM6.5 10.5a1.5 1.5 0 0 0 0 3h11a1.5 1.5 0 0 0 0-3h-11Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgMinusFill;
