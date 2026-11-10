import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Hourglass = (props: SvgProps) => (
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
      d="M1 1.5A1.5 1.5 0 0 1 2.5 0h19a1.5 1.5 0 0 1 0 3H21v2a6 6 0 0 1-6 6h-.01a1 1 0 0 0 0 2H15a6 6 0 0 1 6 6v2h.5a1.5 1.5 0 0 1 0 3h-19a1.5 1.5 0 0 1 0-3H3v-2a6 6 0 0 1 6-6h-.074a1 1 0 0 0 0-2H9a6 6 0 0 1-6-6V3h-.5A1.5 1.5 0 0 1 1 1.5Zm6 3a1 1 0 0 0-2 0V5a4 4 0 0 0 4 4h.5a1 1 0 1 0 0-2H9a2 2 0 0 1-2-2v-.5ZM10.5 16a1 1 0 0 1-1 1H9a2 2 0 0 0-2 2v.5a1 1 0 1 1-2 0V19a4 4 0 0 1 4-4h.5a1 1 0 0 1 1 1Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default Hourglass;
