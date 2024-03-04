import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgArrowRightUp = (props: SvgProps) => (
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
      d="M10.57 8h5.726c.389 0 .704.315.704.704v5.726a.704.704 0 1 1-1.409 0v-4.025l-6.389 6.389a.704.704 0 1 1-.996-.996l6.389-6.39H10.57a.704.704 0 1 1 0-1.408Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default SvgArrowRightUp;
