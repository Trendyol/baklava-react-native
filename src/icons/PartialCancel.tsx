import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const PartialCancel = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M2.4 0A2.4 2.4 0 0 0 0 2.4v6a2.4 2.4 0 0 0 2.4 2.4h6a2.4 2.4 0 0 0 2.4-2.4v-6A2.4 2.4 0 0 0 8.4 0h-6ZM2.4 13.2A2.4 2.4 0 0 0 0 15.6v6A2.4 2.4 0 0 0 2.4 24h6a2.4 2.4 0 0 0 2.4-2.4v-6a2.4 2.4 0 0 0-2.4-2.4h-6ZM13.2 2.4A2.4 2.4 0 0 1 15.6 0h6A2.4 2.4 0 0 1 24 2.4v6a2.4 2.4 0 0 1-2.4 2.4h-6a2.4 2.4 0 0 1-2.4-2.4v-6Z"
      fill={props?.fill ?? '#273142'}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.6 13.2a2.4 2.4 0 0 0-2.4 2.4v6a2.4 2.4 0 0 0 2.4 2.4h6a2.4 2.4 0 0 0 2.4-2.4v-6a2.4 2.4 0 0 0-2.4-2.4h-6Zm1.28 2.62a.75.75 0 0 0-1.06 1.06l1.72 1.72-1.72 1.72a.75.75 0 0 0 1.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 1 0 1.06-1.06l-1.72-1.72 1.72-1.72a.75.75 0 0 0-1.06-1.06l-1.72 1.72-1.72-1.72Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default PartialCancel;
