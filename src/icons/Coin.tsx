import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Coin = (props: SvgProps) => (
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
      d="M12 24c6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12C5.373 0 0 5.373 0 12c0 6.628 5.373 12 12 12Zm-2.25-5.258h2.953v.006a4.87 4.87 0 0 0 4.864-4.864H14.48a1.78 1.78 0 0 1-1.644 1.773v-3.598h1.748V8.994h-1.748V6.401H9.75v2.593H8v3.065h1.75v6.684Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default Coin;
