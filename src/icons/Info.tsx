import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Info = (props: SvgProps) => (
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
      d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0Zm-.003 6a1 1 0 1 1 .005 2 1 1 0 0 1-.005-2ZM13 10a1 1 0 1 0-2 0v7a1 1 0 1 0 2 0v-7Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default Info;
