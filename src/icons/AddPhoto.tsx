import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgAddPhoto = (props: SvgProps) => (
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
      d="M18 12a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm-2.571-6.857a.857.857 0 1 0 0 1.714h1.714v1.714a.857.857 0 1 0 1.714 0V6.857h1.714a.857.857 0 1 0 0-1.714h-1.714V3.429a.857.857 0 1 0-1.714 0v1.714h-1.714Z"
      fill={props?.fill ?? `#273142`}
    />
    <Path
      d="M10 6H8.393a2 2 0 0 0-1.655.877L5.5 8.7H4a4 4 0 0 0-4 4V20a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4v-7.07A7.963 7.963 0 0 1 18 14a7.968 7.968 0 0 1-3.478-.794 4.5 4.5 0 1 1-2.217-1.588A7.974 7.974 0 0 1 10 6Z"
      fill={props?.fill ?? `#273142`}
    />
    <Path
      d="M10.917 18.4a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgAddPhoto;
