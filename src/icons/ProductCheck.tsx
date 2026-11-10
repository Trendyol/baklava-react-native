import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const ProductCheck = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#a)" fill={props?.fill ?? '#273142'}>
      <Path d="M13 7h11l-2.763-5.372A3 3 0 0 0 18.57 0H13v7ZM11 7V0H5.43a3 3 0 0 0-2.667 1.628L0 7h11ZM12.873 9H0v12a3 3 0 0 0 3 3h8.343A8.983 8.983 0 0 1 8 17a9 9 0 0 1 4.873-8Z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 17a7 7 0 1 0-14 0 7 7 0 0 0 14 0Zm-3.68-1.517a.656.656 0 0 0-.953-.903l-3.474 3.667-1.273-1.273a.656.656 0 0 0-.928.927l1.75 1.75a.656.656 0 0 0 .94-.012l3.938-4.156Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill={props?.fill ?? '#273142'} d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default ProductCheck;
