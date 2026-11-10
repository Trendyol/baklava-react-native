import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const AddPhoto = (props: SvgProps) => (
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
      d="M8.393 6H10c0 2.166.861 4.132 2.26 5.572A4.664 4.664 0 0 0 11 11.4c-2.531 0-4.583 2.015-4.583 4.5S8.469 20.4 11 20.4s4.583-2.015 4.583-4.5c0-.963-.308-1.856-.833-2.588A7.971 7.971 0 0 0 18 14c1.457 0 2.823-.39 4-1.07V20a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4v-7.3a4 4 0 0 1 4-4h1.5l1.238-1.823A2 2 0 0 1 8.393 6Zm5.19 9.9c0 1.346-1.122 2.5-2.583 2.5s-2.583-1.154-2.583-2.5S9.539 13.4 11 13.4s2.583 1.154 2.583 2.5Z"
      fill={props?.fill ?? '#273142'}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24 6a6 6 0 1 1-12 0 6 6 0 0 1 12 0Zm-9.429 0c0-.473.384-.857.858-.857h1.714V3.429a.857.857 0 1 1 1.714 0v1.714h1.714a.857.857 0 1 1 0 1.714h-1.714v1.714a.857.857 0 1 1-1.714 0V6.857h-1.714A.857.857 0 0 1 14.57 6Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default AddPhoto;
