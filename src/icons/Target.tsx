import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Target = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M15.293 4.707a1 1 0 0 0-.293.707v2.172l-4.707 4.707a1 1 0 0 0 1.414 1.414L16.414 9h2.172a1 1 0 0 0 .707-.293l3.853-3.854A.5.5 0 0 0 22.793 4H20V1.207a.5.5 0 0 0-.854-.353l-3.853 3.853Z"
      fill={props?.fill ?? '#273142'}
    />
    <Path
      d="M13 6.813V7l-2 2a4 4 0 1 0 4 4l2-2h.186A6.5 6.5 0 1 1 13 6.813Z"
      fill={props?.fill ?? '#273142'}
    />
    <Path
      d="M13.073 4.755a8.5 8.5 0 1 0 6.172 6.172 3 3 0 0 0 1.462-.806l.698-.698C21.791 10.544 22 11.748 22 13c0 6.075-4.925 11-11 11S0 19.075 0 13 4.925 2 11 2c1.252 0 2.456.21 3.577.595l-.698.698a3 3 0 0 0-.806 1.462Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default Target;
