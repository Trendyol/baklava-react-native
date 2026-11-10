import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const GraphicDecrease = (props: SvgProps) => (
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
      d="M4 24a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H4Zm16.049-7.552a1.194 1.194 0 0 0 .35-.863V12a1.2 1.2 0 0 0-2.4 0v.703L14.05 8.75a1.2 1.2 0 0 0-1.697 0L10.2 10.903 5.649 6.35A1.2 1.2 0 0 0 3.95 8.05l5.4 5.4a1.2 1.2 0 0 0 1.697 0l2.152-2.152 3.103 3.103H15.6a1.2 1.2 0 0 0 0 2.4h3.611a1.202 1.202 0 0 0 .838-.352Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default GraphicDecrease;
