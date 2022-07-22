import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgHamburger = (props: SvgProps) => (
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
      d="M12 1C6.477 1 2 5.477 2 11v2h20v-2c0-5.523-4.477-10-10-10Zm1 13H2a2 2 0 1 0 0 4h20a2 2 0 1 0 0-4h-5v.5a2 2 0 1 1-4 0V14ZM2 20v-1h20v1a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgHamburger;
