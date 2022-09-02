import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgPhone = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M21.518 14.776a13.8 13.8 0 0 1-3.09-.768 2.888 2.888 0 0 0-3.034.654l-1.149 1.147A17.669 17.669 0 0 1 8.167 9.74l1.15-1.147a2.878 2.878 0 0 0 .643-3.017 13.682 13.682 0 0 1-.77-3.11A2.913 2.913 0 0 0 6.318 0H2.87A2.9 2.9 0 0 0 .154 1.96 2.887 2.887 0 0 0 .01 3.132 23.473 23.473 0 0 0 3.63 13.33a22.962 22.962 0 0 0 7.065 7.055A23.414 23.414 0 0 0 20.863 24h.264a2.875 2.875 0 0 0 2.657-1.779c.144-.349.217-.723.216-1.1v-3.442a2.877 2.877 0 0 0-2.482-2.903Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgPhone;
