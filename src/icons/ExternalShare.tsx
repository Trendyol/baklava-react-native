import * as React from 'react';
import Svg, { SvgProps, Circle, Path } from 'react-native-svg';
const ExternalShare = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Circle
      cx={18}
      cy={5}
      r={3.5}
      stroke={props?.fill ?? '#273142'}
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Circle
      cx={6}
      cy={12}
      r={3.5}
      stroke={props?.fill ?? '#273142'}
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Circle
      cx={18}
      cy={19}
      r={3.5}
      stroke={props?.fill ?? '#273142'}
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="m9.5 13.5 5 3.5M14.5 6.5 9 10"
      stroke={props?.fill ?? '#273142'}
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default ExternalShare;
