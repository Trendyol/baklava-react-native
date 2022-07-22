import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgLightBulb = (props: SvgProps) => (
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
      d="M21 9a9 9 0 0 1-5.043 8.086l-.68 1.361a1 1 0 0 1-.895.553H9.618a1 1 0 0 1-.894-.553l-.681-1.361A9 9 0 1 1 21 9ZM9 21a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1 1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1 1 1 0 0 1-1-1v-1Zm3-18.5a1 1 0 1 0 0 2c.944 0 2.094.49 3.026 1.312C15.964 6.64 16.5 7.64 16.5 8.5a1 1 0 1 0 2 0c0-1.64-.964-3.14-2.15-4.187C15.155 3.26 13.555 2.5 12 2.5Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgLightBulb;
