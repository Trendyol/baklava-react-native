import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgLiveSupport = (props: SvgProps) => (
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
      d="M5.47 9c.157-1.996.811-3.506 1.764-4.547 1.095-1.196 2.704-1.9 4.766-1.9s3.671.704 4.766 1.9c.953 1.04 1.607 2.551 1.765 4.547H18a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1 1 1 0 0 1-1 1h-1.268A2 2 0 0 0 14 20h-1a2 2 0 1 0 0 4h1a2 2 0 0 0 1.732-1H17a3 3 0 0 0 3-3 4 4 0 0 0 4-4v-3a4.002 4.002 0 0 0-3.023-3.88c-.146-2.619-.986-4.83-2.457-6.436C16.891.905 14.608 0 12 0 9.392 0 7.109.905 5.48 2.684 4.01 4.29 3.17 6.501 3.023 9.12A4.002 4.002 0 0 0 0 13v3a4 4 0 0 0 4 4h2a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1h-.53Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgLiveSupport;
