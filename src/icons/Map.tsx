import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgMap = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M12 0a7 7 0 1 0 0 14.001A7 7 0 0 0 12 0Zm1.634 8.633-4.9 1.634 1.633-4.9 4.9-1.634-1.633 4.9Z"
      fill={props?.fill ?? `#273142`}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m3.04 7.863-1.13-.32A1.5 1.5 0 0 0 0 8.984v12.121a1.5 1.5 0 0 0 .984 1.409l3.4 1.246A1.5 1.5 0 0 0 6.4 22.353v-8.307a8.987 8.987 0 0 1-3.36-6.183ZM8 15.065v7.463a1.5 1.5 0 0 0 1.929 1.438l5-1.492A1.5 1.5 0 0 0 16 21.036v-5.972A8.963 8.963 0 0 1 12 16a8.963 8.963 0 0 1-4-.935Zm9.6-1.019v7.098c0 .61.37 1.16.937 1.39l3.4 1.377A1.5 1.5 0 0 0 24 22.521V10.508a1.5 1.5 0 0 0-.953-1.397l-2.137-.836a8.99 8.99 0 0 1-3.31 5.771Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgMap;
