import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgFacebook = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className=""
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.961 23.637c5.198-1.318 9.043-6.027 9.043-11.635C24.004 5.374 18.631 0 12.002 0 5.374 0 0 5.374 0 12.002 0 18.521 5.197 23.826 11.673 24v-6.948H9.001v-3.234h2.672v-2.464C11.673 8.55 13.244 7 15.648 7c1.151 0 2.355.219 2.355.219v2.753h-1.327c-1.307 0-1.714.862-1.714 1.747v2.098h2.918l-.467 3.234h-2.452v6.585Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgFacebook;
