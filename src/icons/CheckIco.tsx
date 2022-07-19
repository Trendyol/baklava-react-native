import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgCheckIco = (props: SvgProps) => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className=""
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10s4.477 10 10 10 10-4.477 10-10Zm-5.543-1.293a1 1 0 0 0-1.414-1.414L8.75 11.586 6.957 9.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l5-5Z"
      fill={props.color ? props.color : '#273142'}
    />
  </Svg>
);

export default SvgCheckIco;
