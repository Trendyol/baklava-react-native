import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgProfile = (props: SvgProps) => (
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
      d="M18 6c0 3.33-2.669 6-6 6-3.33 0-6-2.67-6-6s2.67-6 6-6c3.331 0 6 2.67 6 6ZM1 21.222C1 16.794 6.067 14 12 14c5.966 0 11 2.793 11 7.222C23 24 17.762 24 12 24s-11-.556-11-2.778Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgProfile;
