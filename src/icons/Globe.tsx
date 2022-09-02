import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgGlobe = (props: SvgProps) => (
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
      d="M12 21.5a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19ZM24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12Z"
      fill={props?.fill ?? `#273142`}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M.75 12c0-.69.56-1.25 1.25-1.25h20a1.25 1.25 0 1 1 0 2.5H2c-.69 0-1.25-.56-1.25-1.25Z"
      fill={props?.fill ?? `#273142`}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.465 11.967C6.556 8.464 7.358 4.14 10.096 1h3.808c2.738 3.14 3.54 7.464 3.631 10.967v.066c-.09 3.503-.893 7.827-3.631 10.967h-3.808c-2.738-3.14-3.54-7.464-3.631-10.967v-.066Zm2.5.033c.09 3.305.86 6.897 3.035 9.378 2.175-2.481 2.945-6.073 3.035-9.378-.09-3.305-.86-6.897-3.035-9.378C9.825 5.103 9.055 8.695 8.965 12Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgGlobe;
