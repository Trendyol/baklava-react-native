import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgMail = (props: SvgProps) => (
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
      d="M3 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H3Zm.586 3a.5.5 0 0 0-.287.91l7.554 5.287a2 2 0 0 0 2.294 0L20.7 6.91a.5.5 0 0 0-.287-.91H3.586Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgMail;
