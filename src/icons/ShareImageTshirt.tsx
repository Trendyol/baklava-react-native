import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const ShareImageTshirt = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M9.444 3a1 1 0 0 1 0 2H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h2.639v-4.807L3.5 14.523 5.922 11.7l.15-.158a2 2 0 0 1 1.368-.54H8c.276 0 .493.227.562.495a2.002 2.002 0 0 0 3.877 0c.068-.268.285-.496.561-.496h.837a2 2 0 0 1 1.368.541l.15.158 2.422 2.825-3.138 2.37V22H17a2 2 0 0 0 2-2v-3.333a1 1 0 0 1 2 0V20a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h5.444Z"
      fill={props?.fill ?? '#273142'}
    />
    <Path
      d="M17.582 1.037c0-.884.995-1.361 1.639-.787l4.432 3.963a1.065 1.065 0 0 1 0 1.572l-4.432 3.962c-.644.575-1.638.1-1.639-.785v-1.39c-.033.006-.068.011-.102.013-1.313.08-3.581.48-5.516 2.163-.395.343-1.08 0-.947-.516 1.252-4.835 4.238-6.42 6.565-6.751V1.037Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default ShareImageTshirt;
