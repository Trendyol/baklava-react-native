import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Close = (props: SvgProps) => (
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
      d="M2.45 2.45c.601-.6 1.576-.6 2.176 0L12 9.825l7.374-7.373a1.538 1.538 0 1 1 2.175 2.175L14.176 12l7.373 7.374a1.538 1.538 0 0 1-2.175 2.175L12 14.176l-7.374 7.373a1.538 1.538 0 0 1-2.175-2.175L9.824 12 2.451 4.626c-.601-.6-.601-1.575 0-2.175Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default Close;
