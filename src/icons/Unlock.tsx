import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgUnlock = (props: SvgProps) => (
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
      d="M8 6.5a3.5 3.5 0 1 1 7 0 1.5 1.5 0 0 0 3 0 6.5 6.5 0 1 0-13 0V9a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3H8V6.5ZM13.5 18a1.5 1.5 0 0 1-3 0v-3a1.5 1.5 0 0 1 3 0v3Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);

export default SvgUnlock;
