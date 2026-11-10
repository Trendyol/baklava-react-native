import * as React from 'react';
import Svg, { SvgProps, Circle, Rect } from 'react-native-svg';
const MetricMinus = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Circle
      opacity={0.1}
      cx={12}
      cy={12}
      r={12}
      fill={props?.fill ?? '#273142'}
    />
    <Rect
      x={4.5}
      y={10.5}
      width={15}
      height={3}
      rx={1.5}
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default MetricMinus;
