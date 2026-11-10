import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const AddPart = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M3 0a3 3 0 0 0-3 3v5a3 3 0 0 0 3 3h5a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3ZM3 13a3 3 0 0 0-3 3v5a3 3 0 0 0 3 3h5a3 3 0 0 0 3-3v-5a3 3 0 0 0-3-3H3ZM13 3a3 3 0 0 1 3-3h5a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h-5a3 3 0 0 1-3-3V3Z"
      fill={props?.fill ?? '#273142'}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24 18.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Zm-4.813-2.063a.687.687 0 1 0-1.375 0v1.375h-1.375a.687.687 0 1 0 0 1.375h1.375v1.375a.687.687 0 1 0 1.375 0v-1.375h1.375a.687.687 0 1 0 0-1.375h-1.375v-1.375Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default AddPart;
