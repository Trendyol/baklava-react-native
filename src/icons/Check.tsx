import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgCheck = (props: SvgProps) => (
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
      d="M23.401 3.573a2 2 0 0 1 .026 2.828l-13.75 14a2 2 0 0 1-2.854 0l-6.25-6.363a2 2 0 0 1 2.854-2.803l4.823 4.91L20.573 3.6a2 2 0 0 1 2.828-.026Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgCheck;
