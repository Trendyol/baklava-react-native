import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgWarning = (props: SvgProps) => (
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
      d="M14.643 2.544c-1.157-2.059-4.13-2.059-5.286 0L.391 18.506C-.74 20.518.719 23 3.033 23h17.934c2.314 0 3.773-2.482 2.643-4.494L14.643 2.544ZM12 7a1.5 1.5 0 0 0-1.5 1.5v5a1.5 1.5 0 0 0 3 0v-5A1.5 1.5 0 0 0 12 7Zm0 9a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgWarning;
