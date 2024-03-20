import * as React from 'react';
import Svg, { SvgProps, Circle } from 'react-native-svg';
const SvgMoreVertical = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Circle cx={12} cy={6} r={2} fill={props?.fill ?? '#273142'} />
    <Circle cx={12} cy={12} r={2} fill={props?.fill ?? '#273142'} />
    <Circle cx={12} cy={18} r={2} fill={props?.fill ?? '#273142'} />
  </Svg>
);
export default SvgMoreVertical;
