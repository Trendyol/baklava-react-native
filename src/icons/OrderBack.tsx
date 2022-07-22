import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgOrderBack = (props: SvgProps) => (
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
      d="M11 0v7H0l2.763-5.372A3 3 0 0 1 5.43 0H11Zm13 7H13V0h5.57a3 3 0 0 1 2.667 1.628L24 7ZM12.873 9H0v12a3 3 0 0 0 3 3h8.343A8.983 8.983 0 0 1 8 17a9 9 0 0 1 4.873-8ZM17 24a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm-.293-8.293a1 1 0 0 0-1.414-1.414l-2 2a1 1 0 0 0 0 1.414l2 2a1 1 0 0 0 1.414-1.414L16.414 18H20a1 1 0 1 0 0-2h-3.586l.293-.293Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgOrderBack;
