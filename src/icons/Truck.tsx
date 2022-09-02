import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgTruck = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M1 3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h2.035a3.5 3.5 0 1 1 6.93 0H13V7a2 2 0 0 1 2-2h2V4a1 1 0 0 0-1-1H1Z"
      fill={props?.fill ?? '#273142'}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 7a1 1 0 0 1 1-1h5.382a1 1 0 0 1 .894.553l2.407 4.814A3 3 0 0 1 24 12.708V18a1 1 0 0 1-1 1h-1.035a3.5 3.5 0 1 0-6.93 0H14V7Zm7.688 4.797-1.424-3.203A1 1 0 0 0 19.35 8H16v4.5h5.23a.5.5 0 0 0 .457-.703Z"
      fill={props?.fill ?? '#273142'}
    />
    <Path
      d="M21 18.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM9 18.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);

export default SvgTruck;
