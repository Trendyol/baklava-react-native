import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const ShoppingBagAdd = (props: SvgProps) => (
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
      d="M12 0c2.943 0 5.391 2.156 5.902 5h2.081a3 3 0 0 1 2.994 2.81l.165 2.612a8.966 8.966 0 0 0-5.745-2.413 1.262 1.262 0 0 0-.215-.007A9 9 0 0 0 11.342 24H3.196a3 3 0 0 1-2.994-3.19l.821-13A3 3 0 0 1 4.016 5h2.081c.51-2.844 2.96-5 5.902-5Zm0 2.5c1.531 0 2.876 1.03 3.334 2.5H8.666c.457-1.47 1.801-2.5 3.333-2.5ZM6.75 8a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5ZM17 24a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm-3-8a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2v-2a1 1 0 1 0-2 0v2h-2Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default ShoppingBagAdd;
