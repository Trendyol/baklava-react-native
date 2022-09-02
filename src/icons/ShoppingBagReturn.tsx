import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgShoppingBagReturn = (props: SvgProps) => (
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
      d="M4.016 5h2.081c.51-2.844 2.96-5 5.902-5 2.944 0 5.392 2.156 5.903 5h2.081a3 3 0 0 1 2.994 2.81l.165 2.612a8.966 8.966 0 0 0-5.745-2.413 1.262 1.262 0 0 0-.215-.007A9 9 0 0 0 11.342 24H3.196a3 3 0 0 1-2.994-3.19l.821-13A3 3 0 0 1 4.016 5Zm11.317 0H8.667c.457-1.47 1.801-2.5 3.333-2.5 1.533 0 2.877 1.03 3.335 2.5ZM6.75 8a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z"
      fill={props?.fill ?? '#273142'}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24 17a7 7 0 1 1-14 0 7 7 0 0 1 14 0Zm-9.92-4c.377 0 .686.293.712.664A4 4 0 1 1 13 17a.714.714 0 0 1 1.429 0 2.571 2.571 0 1 0 1.192-2.17l.029.004a.714.714 0 1 1-.22 1.412l-1.46-.229a.714.714 0 0 1-.605-.705v-1.598c0-.394.32-.714.714-.714Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);

export default SvgShoppingBagReturn;
