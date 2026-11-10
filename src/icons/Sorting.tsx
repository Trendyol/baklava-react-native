import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Sorting = (props: SvgProps) => (
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
      d="M12.79 1.015a1 1 0 0 0-1.578 0L6.256 7.386A1 1 0 0 0 7.045 9h9.91a1 1 0 0 0 .79-1.614l-4.954-6.371ZM11.212 22.985a1 1 0 0 0 1.579 0l4.954-6.371a1 1 0 0 0-.79-1.614h-9.91a1 1 0 0 0-.79 1.614l4.957 6.371Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default Sorting;
