import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgPin = (props: SvgProps) => (
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
      d="M14.03 22.735a31.128 31.128 0 0 0 3.196-2.922C20.198 16.676 22 13.372 22 10c0-5.523-4.477-10-10-10S2 4.477 2 10c0 3.372 1.802 6.676 4.774 9.813a31.125 31.125 0 0 0 4.254 3.726c.195.141.337.24.417.293a1 1 0 0 0 1.11 0c.08-.054.222-.152.417-.293.32-.23.675-.5 1.057-.804ZM12 14a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgPin;
