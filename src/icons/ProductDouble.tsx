import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const ProductDouble = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 27 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M13.094 6.547h10.911l-2.668-4.851A3.274 3.274 0 0 0 18.47 0h-5.375v6.547ZM10.912 6.547V0H5.535C4.342 0 3.243.65 2.668 1.696L0 6.546h10.912ZM11.045 8.73H0v12.002a3.273 3.273 0 0 0 3.273 3.273h4.365v-8.707c0-.73.183-1.449.533-2.09l1.81-3.318c.26-.477.628-.871 1.064-1.16ZM19.095 14.185h7.093l-1.517-2.696a3.273 3.273 0 0 0-2.853-1.669h-2.723v4.365Z"
      fill={props?.fill ?? '#273142'}
    />
    <Path
      d="M16.913 14.185V9.82H14.19a3.273 3.273 0 0 0-2.853 1.669L9.82 14.185h7.093ZM26.188 16.367H9.82v6.547a3.273 3.273 0 0 0 3.274 3.273h9.82a3.273 3.273 0 0 0 3.273-3.273v-6.547Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default ProductDouble;
