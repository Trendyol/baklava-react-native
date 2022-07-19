import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgInfoIco = (props: SvgProps) => (
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
      d="M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0ZM8.75 9.583a1.25 1.25 0 0 1 2.5 0v4.167a1.25 1.25 0 1 1-2.5 0V9.583ZM10 5a1.25 1.25 0 1 0 0 2.5A1.25 1.25 0 0 0 10 5Z"
      fill={props.color ? props.color : '#273142'}
    />
  </Svg>
);

export default SvgInfoIco;
