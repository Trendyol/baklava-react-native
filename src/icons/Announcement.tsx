import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgAnnouncement = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className=""
    {...props}>
    <Path
      d="M21 12h-1v6a1 1 0 1 1-2 0V2a1 1 0 1 1 2 0v6h1a2 2 0 1 1 0 4ZM5.38 15.804 5.22 15H2.999A1.999 1.999 0 0 1 1 13V8c0-1.105.895-2 1.999-2H9.5c1.813 0 3.305-.326 4.5-.78v10.298a17.553 17.553 0 0 0-3.553-.498l-1.274-.055.25 1.25 1.118 5.589A1 1 0 0 1 9.561 23H7.64a1 1 0 0 1-.981-.804l-1.278-6.392Z"
      fill={props?.fill ?? `#273142`}
      stroke={props?.fill ?? `#273142`}
      strokeWidth={2}
    />
  </Svg>
);

export default SvgAnnouncement;
