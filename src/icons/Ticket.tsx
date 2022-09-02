import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgTicket = (props: SvgProps) => (
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
      d="M0 5a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v4a3 3 0 1 0 0 6v4a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-4a3 3 0 1 0 0-6V5Zm6 4a1 1 0 0 1 1-1h11a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Zm1 5a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H7Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgTicket;
