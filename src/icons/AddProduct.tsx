import * as React from 'react';
import Svg, { SvgProps, Path, Rect } from 'react-native-svg';
const AddProduct = (props: SvgProps) => (
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
      d="M13 7h11l-2.763-5.372A3 3 0 0 0 18.57 0H13v7Zm-2 0V0H5.43a3 3 0 0 0-2.667 1.628L0 7h11ZM0 9h24v3.288A8.5 8.5 0 0 0 12.288 24H3a3 3 0 0 1-3-3V9Z"
      fill={props?.fill ?? '#273142'}
    />
    <Rect
      x={14}
      y={18}
      width={10}
      height={2}
      rx={1}
      fill={props?.fill ?? '#273142'}
    />
    <Rect
      x={20}
      y={14}
      width={10}
      height={2}
      rx={1}
      transform="rotate(90 20 14)"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default AddProduct;
