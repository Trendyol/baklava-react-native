import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgExpress = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 16 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.623 1.87c2.362 2.702 1.61 7.338-1.68 10.355-3.29 3.018-7.871 3.273-10.233.571A5.334 5.334 0 0 1 2.134 12H.667a.667.667 0 0 1 0-1.333h2a.667.667 0 0 0 0-1.334H1.333a.667.667 0 1 1 0-1.333h3.334a.667.667 0 0 0 0-1.333h-4a.667.667 0 0 1 0-1.334h1.542A9.828 9.828 0 0 1 4.39 2.441c3.29-3.017 7.872-3.272 10.233-.57Zm-3.13 2.912a.667.667 0 1 0-.986-.897L7.173 7.552a.667.667 0 0 0 .494 1.115h3a.667.667 0 0 0 0-1.334H9.174l2.32-2.551Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default SvgExpress;
