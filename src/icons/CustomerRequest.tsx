import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const CustomerRequest = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M10.5 12c3.331 0 6-2.67 6-6s-2.669-6-6-6c-3.33 0-6 2.67-6 6s2.67 6 6 6ZM10.67 13.5c-.11.313-.17.65-.17 1v6c0 1.306.835 2.418 2 2.83v.665c-.653.005-1.323.005-2 .005C5 24 0 23.417 0 21.083c0-4.65 4.837-7.583 10.5-7.583h.17Z"
      fill={props?.fill ?? '#273142'}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 13a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2v1.635a.365.365 0 0 0 .602.277L16.834 22H22a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2h-8Zm1 5.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm3 0a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm3.75-.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default CustomerRequest;
