import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgFilter = (props: SvgProps) => (
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
      d="M2.896 0A1.5 1.5 0 0 0 1.62 2.286L8.212 13h8l6.593-10.714A1.5 1.5 0 0 0 21.528 0H2.896Zm13.316 15h-8v5.438a2 2 0 0 0 1.515 1.94l5.242 1.311a1 1 0 0 0 1.243-.97V15Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgFilter;
