import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgPlay = (props: SvgProps) => (
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
      d="M2.452 23.717C1.558 23.299 1 22.486 1 21.6V2.4C1 1.515 1.558.702 2.452.284c.894-.418 1.983-.374 2.824.118l16.5 9.6C22.541 10.449 23 11.198 23 12c0 .804-.46 1.553-1.224 1.996l-16.5 9.6c-.459.27-.992.404-1.526.404-.446 0-.891-.094-1.298-.283Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgPlay;
