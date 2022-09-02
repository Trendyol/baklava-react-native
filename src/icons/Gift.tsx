import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgGift = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M0 6a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6Z"
      fill={props?.fill ?? `#273142`}
    />
    <Path
      d="M7 2.5a2.5 2.5 0 0 1 5 0V5H9.5A2.5 2.5 0 0 1 7 2.5ZM12 2.5A2.5 2.5 0 1 1 14.5 5H12V2.5Z"
      fill={props?.fill ?? `#273142`}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 14H2v8a2 2 0 0 0 2 2h7V14Zm2 10h7a2 2 0 0 0 2-2v-8h-9v10Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgGift;
