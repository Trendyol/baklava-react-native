import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgDoorOpen = (props: SvgProps) => (
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
      d="M14.836.014A1 1 0 0 1 16 1v1h3a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1h-3v1a1 1 0 0 1-1.164.986l-10-1.744A1 1 0 0 1 4 21.257V2.962a1 1 0 0 1 .836-.986l10-1.962ZM16 20h2V4h-2v16Zm-5.429-7.89a1.714 1.714 0 1 1 3.428 0 1.714 1.714 0 0 1-3.428 0Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default SvgDoorOpen;
