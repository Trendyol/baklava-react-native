import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgSearch = (props: SvgProps) => (
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
      d="M11 22c6.075 0 11-4.925 11-11S17.075 0 11 0 0 4.925 0 11s4.925 11 11 11Zm0-3a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"
      fill={props?.fill ?? `#273142`}
    />
    <Path
      d="M18.049 15.887a6.534 6.534 0 0 1-2.162 2.162l5.432 5.487c.593.599 1.578.621 2.2.049a1.462 1.462 0 0 0 .05-2.12l-5.52-5.578Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgSearch;
