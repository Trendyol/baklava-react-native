import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgForward = (props: SvgProps) => (
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
      d="M2.843 22.513c1.125-4.723 5.08-8.134 9.847-8.65v1.45c0 .914.529 1.728 1.38 2.123.924.43 2.001.276 2.75-.393l6.4-5.725a2.33 2.33 0 0 0 .78-1.73 2.33 2.33 0 0 0-.78-1.728l-6.4-5.725a2.519 2.519 0 0 0-2.75-.394c-.851.395-1.38 1.209-1.38 2.123V5.44C5.586 6.078 0 12.047 0 19.294c0 1.048.131 2.13.39 3.217.135.581.642.989 1.226.989a1.27 1.27 0 0 0 1.227-.987Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgForward;
