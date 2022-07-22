import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgPaper = (props: SvgProps) => (
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
      d="M.775 3.816A4 4 0 0 1 4.77 0H19.23a4 4 0 0 1 3.995 3.816l.737 16A4 4 0 0 1 19.965 24H4.034a4 4 0 0 1-3.996-4.184l.737-16ZM5 19a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Zm1-6a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H6Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgPaper;
