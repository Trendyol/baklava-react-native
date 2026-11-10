import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const ShoppingCart = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M8.5 20a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM18.5 20a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM2.772 0A3 3 0 0 1 5.74 2.563L5.805 3H22.5a1 1 0 0 1 .976 1.217l-2 9a1 1 0 0 1-.905.78l-13.013.928L7.863 17H19.5a1 1 0 1 1 0 2H7.863a2 2 0 0 1-1.978-1.709L3.762 2.854A1 1 0 0 0 2.772 2H1.5a1 1 0 0 1 0-2h1.272Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default ShoppingCart;
