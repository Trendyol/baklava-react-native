import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgHamburgerMenu = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className=""
    {...props}>
    <Path
      d="M0 20a1.5 1.5 0 0 1 1.5-1.5h21a1.5 1.5 0 0 1 0 3h-21A1.5 1.5 0 0 1 0 20ZM0 12a1.5 1.5 0 0 1 1.5-1.5h21a1.5 1.5 0 0 1 0 3h-21A1.5 1.5 0 0 1 0 12ZM0 4a1.5 1.5 0 0 1 1.5-1.5h21a1.5 1.5 0 0 1 0 3h-21A1.5 1.5 0 0 1 0 4Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgHamburgerMenu;
