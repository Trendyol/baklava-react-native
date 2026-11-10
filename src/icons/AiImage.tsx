import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const AiImage = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M9.444 3a1 1 0 0 1 0 2H4a2 2 0 0 0-2 2v9.798l3.39-2.26a2 2 0 0 1 2.22 0l2.728 1.818a1 1 0 0 0 1.18-.05l3.252-2.603a2 2 0 0 1 2.45-.038L20.2 15.9a2 2 0 0 1 .8 1.6V20a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h5.444Z"
      fill={props?.fill ?? '#273142'}
    />
    <Path
      d="M6.5 8a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM17.561.297a.472.472 0 0 1 .878 0 9.452 9.452 0 0 0 5.264 5.264.472.472 0 0 1 0 .877 9.451 9.451 0 0 0-5.264 5.265.472.472 0 0 1-.878 0 9.451 9.451 0 0 0-5.264-5.265.472.472 0 0 1 0-.877A9.451 9.451 0 0 0 17.56.297Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default AiImage;
