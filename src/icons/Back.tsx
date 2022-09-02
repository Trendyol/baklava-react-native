import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgBack = (props: SvgProps) => (
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
      d="M21.157 22.013c-1.125-4.723-5.08-8.134-9.847-8.65v1.45c0 .914-.529 1.728-1.38 2.123-.924.43-2.001.276-2.75-.393l-6.4-5.725A2.33 2.33 0 0 1 0 9.088c0-.653.284-1.283.78-1.728l6.4-5.725a2.519 2.519 0 0 1 2.75-.394c.851.395 1.38 1.209 1.38 2.123V4.94C18.414 5.578 24 11.547 24 18.794c0 1.048-.131 2.13-.39 3.217a1.266 1.266 0 0 1-1.226.989 1.27 1.27 0 0 1-1.227-.987Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgBack;
