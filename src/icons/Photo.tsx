import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgPhoto = (props: SvgProps) => (
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
      d="M24 18a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h2l1.406-2.11A2 2 0 0 1 9.07 2h5.86a2 2 0 0 1 1.664.89L18 5h2a4 4 0 0 1 4 4v9Zm-3-9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-4 4a5 5 0 1 1-10 0 5 5 0 0 1 10 0Zm-2 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgPhoto;
