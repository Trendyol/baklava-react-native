import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgClose = (props: SvgProps) => (
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
      d="M.54.54a1.846 1.846 0 0 1 2.612 0L12 9.39 20.848.54a1.846 1.846 0 0 1 2.611 2.612L14.611 12l8.848 8.848a1.846 1.846 0 0 1-2.61 2.611L12 14.611l-8.848 8.848A1.846 1.846 0 0 1 .54 20.85L9.389 12 .541 3.152A1.846 1.846 0 0 1 .54.54Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgClose;
