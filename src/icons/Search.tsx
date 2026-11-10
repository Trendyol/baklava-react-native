import * as React from 'react';
import Svg, { SvgProps, Mask, Path } from 'react-native-svg';
const Search = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Mask id="a" fill="#fff">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 22c6.075 0 11-4.925 11-11S17.075 0 11 0 0 4.925 0 11s4.925 11 11 11Zm0-3a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"
      />
    </Mask>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 22c6.075 0 11-4.925 11-11S17.075 0 11 0 0 4.925 0 11s4.925 11 11 11Zm0-3a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"
      fill={props?.fill ?? '#273142'}
    />
    <Path
      d="M20 11a9 9 0 0 1-9 9v4c7.18 0 13-5.82 13-13h-4Zm-9-9a9 9 0 0 1 9 9h4c0-7.18-5.82-13-13-13v4Zm-9 9a9 9 0 0 1 9-9v-4C3.82-2-2 3.82-2 11h4Zm9 9a9 9 0 0 1-9-9h-4c0 7.18 5.82 13 13 13v-4Zm6-9a6 6 0 0 1-6 6v4c5.523 0 10-4.477 10-10h-4Zm-6-6a6 6 0 0 1 6 6h4c0-5.523-4.477-10-10-10v4Zm-6 6a6 6 0 0 1 6-6V1C5.477 1 1 5.477 1 11h4Zm6 6a6 6 0 0 1-6-6H1c0 5.523 4.477 10 10 10v-4Z"
      fill={props?.fill ?? '#273142'}
      mask="url(#a)"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.049 15.887a6.534 6.534 0 0 1-2.162 2.162l5.432 5.487c.593.599 1.578.621 2.2.05a1.462 1.462 0 0 0 .05-2.122l-5.52-5.577Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default Search;
