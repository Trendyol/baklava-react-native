import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgMailOpened = (props: SvgProps) => (
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
      d="M0 9.297a4 4 0 0 1 1.985-3.455l8-4.666a4 4 0 0 1 4.03 0l8 4.666A4 4 0 0 1 24 9.297V20a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V9.297Zm10.89 3.963L3 8l8.029-4.46a2 2 0 0 1 1.942 0L21 8l-7.89 5.26a2 2 0 0 1-2.22 0Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgMailOpened;
