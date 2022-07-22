import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgGoForward = (props: SvgProps) => (
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
      d="M14.983 2.602A1.5 1.5 0 1 1 17.017.398l6.5 6a1.5 1.5 0 0 1 0 2.204l-6.5 6a1.5 1.5 0 1 1-2.034-2.204L18.663 9H9a6 6 0 0 0 0 12h13.5a1.5 1.5 0 0 1 0 3H9A9 9 0 1 1 9 6h9.663l-3.68-3.398Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgGoForward;
