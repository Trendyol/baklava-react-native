import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgPerformanceData = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M13.032 1.145c0-.665.54-1.21 1.2-1.139a11.03 11.03 0 0 1 9.762 9.761c.071.66-.474 1.201-1.139 1.201h-8.821a1.002 1.002 0 0 1-1.002-1.002V1.145Z"
      fill={props?.fill ?? '#273142'}
    />
    <Path
      d="M9.777 1.079c.677-.104 1.25.448 1.25 1.133v8.757c0 1.107.897 2.005 2.005 2.005h8.757c.684 0 1.237.572 1.133 1.25A11.528 11.528 0 1 1 9.777 1.078Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default SvgPerformanceData;
