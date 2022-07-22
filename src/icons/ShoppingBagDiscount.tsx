import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgShoppingBagDiscount = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className=""
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2.5c1.19 0 2.24.593 2.873 1.5H9.127A3.496 3.496 0 0 1 12 2.5ZM12 0a6.003 6.003 0 0 0-5.659 4h-2.41A3 3 0 0 0 .937 6.837l-.763 14A3 3 0 0 0 3.168 24h17.664a3 3 0 0 0 2.995-3.163l-.763-14A3 3 0 0 0 20.068 4h-2.41A6.003 6.003 0 0 0 12 0ZM8.667 12.333a1.667 1.667 0 1 0 0-3.333 1.667 1.667 0 0 0 0 3.333ZM15.333 19a1.667 1.667 0 1 0 0-3.333 1.667 1.667 0 0 0 0 3.333ZM14.5 9.833a1.178 1.178 0 1 1 1.667 1.667L9.5 18.167A1.178 1.178 0 1 1 7.833 16.5L14.5 9.833Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgShoppingBagDiscount;
