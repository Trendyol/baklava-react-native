import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgOrderTracking = (props: SvgProps) => (
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
      d="M13 6.666A9.475 9.475 0 0 1 16.5 6c1.527 0 2.97.36 4.247 1H24l-2.763-5.372A3 3 0 0 0 18.57 0H13v6.666ZM9.572 9H0v12a3 3 0 0 0 3 3h9.253A9.5 9.5 0 0 1 7 15.5c0-2.514.977-4.8 2.572-6.5ZM11 0v7H0l2.763-5.372A3 3 0 0 1 5.43 0H11Zm11.361 20.18a7.5 7.5 0 1 0-2.146 1.837l1.373 1.525A1.384 1.384 0 0 0 24 22.616v-.061c0-.357-.132-.702-.371-.967l-1.268-1.409ZM20.747 24h.258-.258ZM16.5 20a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgOrderTracking;
