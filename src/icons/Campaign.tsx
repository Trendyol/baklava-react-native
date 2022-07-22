import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgCampaign = (props: SvgProps) => (
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
      d="M13.777.881a4 4 0 0 0-3.554 0l-7 3.471A4 4 0 0 0 1 7.936v8.128a4 4 0 0 0 2.223 3.584l7 3.47a4 4 0 0 0 3.554 0l7-3.47A4 4 0 0 0 23 16.064V7.936a4 4 0 0 0-2.223-3.584l-7-3.47ZM9 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm8 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-.293-6.293a1 1 0 0 0-1.414-1.414l-8 8a1 1 0 0 0 1.414 1.414l8-8Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgCampaign;
