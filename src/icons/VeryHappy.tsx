import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const VeryHappy = (props: SvgProps) => (
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
      d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12ZM5.5 14.52c.007-.68.66-1 1.174-.887 2.286.504 6.856 1.043 10.724.033.517-.135 1.21.175 1.211.88.003 1.363-.822 2.609-2.01 3.493-1.196.89-2.816 1.461-4.544 1.461-1.735 0-3.36-.575-4.556-1.47-1.19-.89-2.012-2.143-1.999-3.51ZM6 9.6a1.2 1.2 0 1 1 2.4 0 1.2 1.2 0 0 1-2.4 0Zm10.8-1.2a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default VeryHappy;
