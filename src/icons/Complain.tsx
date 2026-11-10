import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Complain = (props: SvgProps) => (
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
      d="M4 1a4 4 0 0 0-4 4v11a4 4 0 0 0 4 4h1v1.938c0 .889.97 1.383 1.625.828L9.885 20H20a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H4Zm6.5 4.5a1.5 1.5 0 0 1 3 0v6a1.5 1.5 0 0 1-3 0v-6ZM12 14a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default Complain;
