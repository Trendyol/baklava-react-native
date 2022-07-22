import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgEyeOn = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className=""
    {...props}>
    <Path
      d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
      fill={props?.fill ?? `#273142`}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 20c4.905 0 8.593-2.94 11.574-6.754a2.036 2.036 0 0 0 0-2.492C20.593 6.94 16.904 4 12 4 7.095 4 3.407 6.94.426 10.754a2.036 2.036 0 0 0 0 2.492C3.407 17.06 7.096 20 12 20Zm-5-8a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgEyeOn;
