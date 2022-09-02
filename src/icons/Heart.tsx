import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgHeart = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M17.21 1c-.898 0-1.786.184-2.613.542a6.778 6.778 0 0 0-2.223 1.555L12 3.5l-.375-.403A6.673 6.673 0 0 0 6.79 1a6.673 6.673 0 0 0-4.816 2.075A7.167 7.167 0 0 0 0 8.036c0 1.852.706 3.637 1.974 4.959l9.304 9.697a1 1 0 0 0 1.443 0l9.304-9.697a7.057 7.057 0 0 0 1.463-2.28 7.256 7.256 0 0 0 0-5.359 7.056 7.056 0 0 0-1.463-2.28 6.778 6.778 0 0 0-2.203-1.534A6.586 6.586 0 0 0 17.209 1Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgHeart;
