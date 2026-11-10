import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Review = (props: SvgProps) => (
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
      d="M0 4c0-1.654 1.346-3 3-3h18c1.655 0 3 1.346 3 3v13c0 1.654-1.345 3-3 3H5.553a.987.987 0 0 0-.514.143l-3.525 2.714a.996.996 0 0 1-1.007.013A1 1 0 0 1 0 22V4Zm12.524.34a.573.573 0 0 0-1.048 0l-1.401 2.971a.587.587 0 0 1-.44.335L6.5 8.122c-.48.073-.67.69-.324 1.043l2.267 2.313c.138.14.201.342.169.54l-.536 3.266c-.082.5.42.88.848.644l2.803-1.541a.562.562 0 0 1 .544 0l2.803 1.541c.428.236.93-.145.848-.644l-.536-3.265a.63.63 0 0 1 .168-.541l2.268-2.313c.347-.353.155-.97-.324-1.043l-3.133-.476a.587.587 0 0 1-.44-.335l-1.402-2.97Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default Review;
