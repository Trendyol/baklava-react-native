import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgStop = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);

export default SvgStop;
