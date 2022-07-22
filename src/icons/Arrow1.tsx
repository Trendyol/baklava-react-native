import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgArrow1 = (props: SvgProps) => (
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
      d="M7.359 3.93c.67-.669 1.755-.669 2.424 0l6.857 6.858c.67.67.67 1.755 0 2.424L9.784 20.07a1.714 1.714 0 1 1-2.424-2.424L13.004 12 7.359 6.355a1.714 1.714 0 0 1 0-2.424Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgArrow1;
