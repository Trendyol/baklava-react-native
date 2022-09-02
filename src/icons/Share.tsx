import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgShare = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M19 12v9H5v-9h1a1.5 1.5 0 0 0 0-3H5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3h-1a1.5 1.5 0 0 0 0 3h1Z"
      fill={props?.fill ?? `#273142`}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 16a1.5 1.5 0 0 0 1.5-1.5V2a1.5 1.5 0 0 0-3 0v12.5A1.5 1.5 0 0 0 12 16Z"
      fill={props?.fill ?? `#273142`}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.56 7.06a1.5 1.5 0 0 0 0-2.12l-4.5-4.5a1.5 1.5 0 0 0-2.12 0l-4.5 4.5a1.5 1.5 0 0 0 2.12 2.12L12 3.622l3.44 3.44a1.5 1.5 0 0 0 2.12 0Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgShare;
