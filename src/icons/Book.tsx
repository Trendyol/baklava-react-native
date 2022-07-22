import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgBook = (props: SvgProps) => (
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
      d="M4 0a3 3 0 0 0-3 3v18a3 3 0 0 0 3 3h17.5a1.5 1.5 0 0 0 1.5-1.5v-19A1.5 1.5 0 0 0 21.5 2H21v20H4a1 1 0 1 1 0-2h15V1.5A1.5 1.5 0 0 0 17.5 0H4Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgBook;
