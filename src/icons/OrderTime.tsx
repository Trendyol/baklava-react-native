import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const OrderTime = (props: SvgProps) => (
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
      d="M0 0h19.2v6.448a10.198 10.198 0 0 0-3-.448 10.19 10.19 0 0 0-8.46 4.5H5.25a1.25 1.25 0 1 0 0 2.5h1.262a10.19 10.19 0 0 0-.508 3.5H5.25a1.25 1.25 0 1 0 0 2.5h1.14a10.206 10.206 0 0 0 3.237 5H3a3 3 0 0 1-3-3V0Zm4 5.75c0-.69.56-1.25 1.25-1.25h3.5a1.25 1.25 0 1 1 0 2.5h-3.5C4.56 7 4 6.44 4 5.75Z"
      fill={props?.fill ?? '#273142'}
    />
    <Path
      d="M16 8c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8Zm2.4 8.8H16c-.48 0-.8-.32-.8-.8v-4c0-.48.32-.8.8-.8.48 0 .8.32.8.8v3.2h1.6c.48 0 .8.32.8.8 0 .48-.32.8-.8.8Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default OrderTime;
