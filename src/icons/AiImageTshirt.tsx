import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const AiImageTshirt = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M9.444 3a1 1 0 0 1 0 2H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h2.639v-4.808L3.5 14.523l2.422-2.825.15-.157A2 2 0 0 1 7.44 11H8c.276 0 .493.227.562.495a2.002 2.002 0 0 0 3.877 0c.068-.268.285-.495.561-.495h.837a2 2 0 0 1 1.368.541l.15.157 2.422 2.825-3.138 2.37V22H17a2 2 0 0 0 2-2v-3.333a1 1 0 0 1 2 0V20a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h5.444Z"
      fill={props?.fill ?? '#273142'}
    />
    <Path
      d="M17.561.297a.472.472 0 0 1 .878 0 9.451 9.451 0 0 0 5.264 5.264.472.472 0 0 1 0 .877 9.45 9.45 0 0 0-5.264 5.265.472.472 0 0 1-.878 0 9.451 9.451 0 0 0-5.264-5.265.472.472 0 0 1 0-.877A9.451 9.451 0 0 0 17.56.297Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default AiImageTshirt;
