import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgExternalShare = (props: SvgProps) => (
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
      d="M18 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 3a5 5 0 1 0-4.958-4.35L9.157 8.122a5 5 0 1 0 .483 7.306l3.488 2.443a5 5 0 1 0 1.53-2.59l-3.705-2.595a5.045 5.045 0 0 0-.144-2.06l3.515-2.236A4.987 4.987 0 0 0 18 10ZM6 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm14 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgExternalShare;
