import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgHelp = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm0 19.2a1.2 1.2 0 1 1 0-2.401 1.2 1.2 0 0 1 0 2.401Zm1.2-6.192V14.4a1.2 1.2 0 1 1-2.4 0V12a1.2 1.2 0 0 1 1.2-1.2A1.8 1.8 0 1 0 10.2 9a1.2 1.2 0 1 1-2.4 0 4.2 4.2 0 1 1 5.4 4.008Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgHelp;
