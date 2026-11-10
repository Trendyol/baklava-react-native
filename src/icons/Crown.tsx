import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Crown = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M20.28 19.5H3.56c-.477 0-.888-.335-.984-.801L.522 8.642c-.186-.909.859-1.559 1.595-.994L6.092 10.7a.502.502 0 0 0 .744-.153l4.22-7.534a1.005 1.005 0 0 1 1.743-.016l4.414 7.564c.152.261.5.33.74.145l3.93-3.017c.742-.57 1.794.096 1.592 1.01L21.26 18.714a1.003 1.003 0 0 1-.98.785Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default Crown;
