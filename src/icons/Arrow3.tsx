import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgArrow3 = (props: SvgProps) => (
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
      d="M12 6.857c.455 0 .89.18 1.212.502l6.858 6.857a1.714 1.714 0 0 1-2.425 2.425L12 10.996 6.355 16.64a1.714 1.714 0 1 1-2.424-2.425l6.857-6.857A1.714 1.714 0 0 1 12 6.857Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgArrow3;
