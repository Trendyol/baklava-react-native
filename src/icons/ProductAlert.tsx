import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const ProductAlert = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M13 7h11l-2.763-5.372A3 3 0 0 0 18.57 0H13v7ZM11 7V0H5.43a3 3 0 0 0-2.667 1.628L0 7h11ZM12.873 9H0v12a3 3 0 0 0 3 3h8.343A8.983 8.983 0 0 1 8 17a9 9 0 0 1 4.873-8Z"
      fill={props?.fill ?? '#273142'}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17 10a7 7 0 1 1 0 14 7 7 0 0 1 0-14Zm-.893 4.122a.583.583 0 0 1 .582-.622h.622c.337 0 .604.286.582.622l-.234 3.5a.583.583 0 0 1-.582.545h-.154a.583.583 0 0 1-.582-.545l-.234-3.5ZM17 20.5a.875.875 0 1 0 0-1.75.875.875 0 0 0 0 1.75Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default ProductAlert;
