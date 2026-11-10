import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Qr = (props: SvgProps) => (
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
      d="M24 0h-8v8h-5.333v2.667H5.333v2.666H8V16H0v8h8v-8h2.667v2.667h2.666v2.666h-2.666V24h2.666v-2.667H16V24h8v-2.667h-5.333v-2.666h-5.334v-5.334H16V16h5.333v2.667H24v-5.334h-2.667v-2.666h-2.666v2.666H16V8h8V0ZM13.333 13.333h-2.666v-2.666h2.666v2.666Zm8-10.666h-2.666v2.666h2.666V2.667Zm-16 16H2.667v2.666h2.666v-2.666Z"
      fill={props?.fill ?? '#273142'}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 0h8v8H0V0Zm2.667 2.667h2.666v2.666H2.667V2.667Z"
      fill={props?.fill ?? '#273142'}
    />
    <Path
      d="M10.667 0h2.666v5.333h-2.666V0ZM2.667 10.667H0v2.666h2.667v-2.666Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default Qr;
