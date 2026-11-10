import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const MoneyBag = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M17.78 6.129a1 1 0 0 1-.974.773H7.194a1 1 0 0 1-.974-.773l-.888-3.803a1 1 0 0 1 1.116-1.217l4.42.631a8 8 0 0 0 2.263 0l4.421-.631a1 1 0 0 1 1.116 1.217l-.888 3.803Z"
      fill={props?.fill ?? '#273142'}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.2 8.902c.322 0 .626.156.814.419l2.656 3.718A7.141 7.141 0 0 1 22 17.19a5.712 5.712 0 0 1-5.712 5.713H7.712A5.712 5.712 0 0 1 2 17.19c0-1.488.465-2.94 1.33-4.15l2.656-3.72c.188-.262.492-.418.815-.418h10.398Zm-5.2 4.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default MoneyBag;
