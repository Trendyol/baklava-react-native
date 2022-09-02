import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgExternalLink = (props: SvgProps) => (
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
      d="M15 1a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v7a1 1 0 1 1-2 0V2h-6a1 1 0 0 1-1-1Z"
      fill={props?.fill ?? `#273142`}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.5 0a1.5 1.5 0 0 0 0 3h3.379L8.439 13.44a1.5 1.5 0 0 0 2.122 2.12L21 5.122V8.5a1.5 1.5 0 0 0 3 0v-7A1.5 1.5 0 0 0 22.5 0h-7Zm-5 4a1.5 1.5 0 0 1 0 3H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5.5a1.5 1.5 0 0 1 3 0V21a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h7.5Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgExternalLink;
