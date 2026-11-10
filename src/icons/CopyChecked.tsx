import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const CopyChecked = (props: SvgProps) => (
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
      d="M3 0a3 3 0 0 0-3 3v11a3 3 0 0 0 3 3h2V8a3 3 0 0 1 3-3h9V3a3 3 0 0 0-3-3H3Zm4 10a3 3 0 0 1 3-3h11a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H10a3 3 0 0 1-3-3V10Zm12.743 3.669a1 1 0 1 0-1.486-1.338l-3.795 4.217-1.755-1.755a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.45-.038l4.5-5Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default CopyChecked;
