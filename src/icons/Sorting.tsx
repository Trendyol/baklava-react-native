import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgSorting = (props: SvgProps) => (
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
      d="M18 3.5A1.5 1.5 0 0 1 19.5 5v13.591l1.885-2.094a1.5 1.5 0 0 1 2.23 2.006l-4.5 5a1.5 1.5 0 0 1-2.23 0l-4.5-5a1.5 1.5 0 1 1 2.23-2.006L16.5 18.59V5A1.5 1.5 0 0 1 18 3.5ZM6 20.5A1.5 1.5 0 0 1 4.5 19V5.409L2.615 7.503a1.5 1.5 0 0 1-2.23-2.006l4.5-5a1.5 1.5 0 0 1 2.23 0l4.5 5a1.5 1.5 0 1 1-2.23 2.006L7.5 5.41V19A1.5 1.5 0 0 1 6 20.5Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgSorting;
