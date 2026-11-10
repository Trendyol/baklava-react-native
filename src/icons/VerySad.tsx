import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const VerySad = (props: SvgProps) => (
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
      d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12ZM9.17 8.335a.75.75 0 0 0-1.34-.67C7.473 8.375 6.757 8.75 6 8.75a.75.75 0 0 0 0 1.5c1.242 0 2.526-.625 3.17-1.915Zm5.995-1.006a.75.75 0 0 0-.336 1.006c.645 1.29 1.928 1.915 3.171 1.915a.75.75 0 1 0 0-1.5c-.758 0-1.474-.375-1.83-1.085a.75.75 0 0 0-1.005-.336Zm-.076 9.576c1.367.159 1.911.222 1.911-.67C17 14.45 15.682 13 12 13s-5 1.449-5 3.236c0 .891.544.828 1.91.669.76-.089 1.774-.207 3.09-.207 1.316 0 2.33.118 3.09.207Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default VerySad;
