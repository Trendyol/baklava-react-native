import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgMenu = (props: SvgProps) => (
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
      d="M4.8 0A4.8 4.8 0 0 0 0 4.8v14.4A4.8 4.8 0 0 0 4.8 24h14.4a4.8 4.8 0 0 0 4.8-4.8V4.8A4.8 4.8 0 0 0 19.2 0H4.8ZM6 4.8a1.2 1.2 0 0 0 0 2.4h12a1.2 1.2 0 0 0 0-2.4H6ZM4.8 12A1.2 1.2 0 0 1 6 10.8h12a1.2 1.2 0 0 1 0 2.4H6A1.2 1.2 0 0 1 4.8 12ZM6 16.8a1.2 1.2 0 0 0 0 2.4h12a1.2 1.2 0 0 0 0-2.4H6Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default SvgMenu;
