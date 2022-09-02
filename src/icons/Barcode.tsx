import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgBarcode = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 0a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V2h1a1 1 0 0 0 0-2H1Zm0 24a1 1 0 0 1-1-1v-2a1 1 0 1 1 2 0v1h1a1 1 0 1 1 0 2H1ZM24 1a1 1 0 0 0-1-1h-2a1 1 0 1 0 0 2h1v1a1 1 0 1 0 2 0V1Zm-1 23a1 1 0 0 0 1-1v-2a1 1 0 1 0-2 0v1h-1a1 1 0 1 0 0 2h2ZM6 5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6Zm5 1a1 1 0 1 1 2 0v12a1 1 0 1 1-2 0V6ZM2 5a1 1 0 0 0-1 1v12a1 1 0 1 0 2 0V6a1 1 0 0 0-1-1Zm17 1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V6Zm-3-1a1 1 0 0 0-1 1v12a1 1 0 1 0 2 0V6a1 1 0 0 0-1-1Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgBarcode;
