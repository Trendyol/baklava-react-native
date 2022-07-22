import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgPreview = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className=""
    {...props}>
    <Path
      d="M8.5 11a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Z"
      fill={props?.fill ?? `#273142`}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 22c6.075 0 11-4.925 11-11S17.075 0 11 0 0 4.925 0 11s4.925 11 11 11Zm0-16c-3.27 0-5.728 1.837-7.716 4.221a1.21 1.21 0 0 0 0 1.558C5.272 14.163 7.73 16 11 16c3.27 0 5.728-1.837 7.716-4.221a1.21 1.21 0 0 0 0-1.558C16.728 7.837 14.27 6 11 6Z"
      fill={props?.fill ?? `#273142`}
    />
    <Path
      d="M18.049 15.887a6.534 6.534 0 0 1-2.162 2.162l5.432 5.487c.593.599 1.578.621 2.2.049a1.462 1.462 0 0 0 .05-2.12l-5.52-5.578Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgPreview;
