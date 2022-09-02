import * as React from 'react';
import Svg, { SvgProps, Circle, Path } from 'react-native-svg';

const SvgMetricStatusDown = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Circle
      opacity={0.3}
      cx={12}
      cy={12}
      r={12}
      fill={props?.fill ?? `#273142`}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.93 16.5H8.204a.704.704 0 0 1-.704-.704V10.07a.704.704 0 0 1 1.409 0v4.025l6.389-6.389a.704.704 0 0 1 .996.996l-6.389 6.39h4.025a.704.704 0 0 1 0 1.408Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgMetricStatusDown;
