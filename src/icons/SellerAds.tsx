import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgSellerAds = (props: SvgProps) => (
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
      d="M13.96.17a1.28 1.28 0 0 0-.453 1.73l.558.986-9.541 9.422a2.058 2.058 0 0 0-.34 2.469l4.928 8.717a.982.982 0 0 0 1.156.46l4.36-1.402c.372-.12.64-.45.687-.845l.51-4.318 5.35-1.923.512.905c.342.605 1.1.812 1.693.463a1.28 1.28 0 0 0 .454-1.73L15.654.634A1.225 1.225 0 0 0 13.96.17Zm-.222 17.968L9.28 19.74l1.152 2.037 2.99-.961.316-2.678Z"
      fill={props?.fill ?? `#273142`}
    />
    <Path
      d="M.62 15.053a1.28 1.28 0 0 0-.454 1.73l2.727 4.823c.342.606 1.1.813 1.693.463a1.28 1.28 0 0 0 .454-1.729l-2.727-4.823a1.225 1.225 0 0 0-1.693-.464Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgSellerAds;
