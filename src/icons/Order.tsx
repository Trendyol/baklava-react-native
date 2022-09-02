import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgOrder = (props: SvgProps) => (
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
      d="M22 0H2v21a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V0ZM6 5.75c0-.69.56-1.25 1.25-1.25h9.5a1.25 1.25 0 0 1 0 2.5h-9.5C6.56 7 6 6.44 6 5.75Zm0 6c0-.69.56-1.25 1.25-1.25h9.5a1.25 1.25 0 0 1 0 2.5h-9.5C6.56 13 6 12.44 6 11.75Zm1.25 4.75a1.25 1.25 0 1 0 0 2.5h5.5a1.25 1.25 0 0 0 0-2.5h-5.5Zm8.25 1.25a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgOrder;
