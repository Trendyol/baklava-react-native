import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgAlert = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className=""
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0Zm-1.53 7.067A1 1 0 0 1 11.468 6h1.065a1 1 0 0 1 .997 1.067l-.4 6a1 1 0 0 1-.998.933h-.264a1 1 0 0 1-.998-.933l-.4-6ZM12 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgAlert;
