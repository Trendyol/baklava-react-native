import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgInfo = (props: SvgProps) => (
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
      d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0Zm-1.5 11.5a1.5 1.5 0 0 1 3 0v5a1.5 1.5 0 0 1-3 0v-5ZM12 6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgInfo;
