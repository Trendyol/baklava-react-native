import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Laptop = (props: SvgProps) => (
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
      d="M22 4.648C22 2.637 20.345 1 18.311 1H5.69C3.655 1 2 2.637 2 4.648V13h20V4.648ZM13.657 19.578H10.35c-.523 0-.948-.458-.948-1.022 0-.565.425-1.022.948-1.022h3.306c.523 0 .947.457.947 1.022 0 .564-.424 1.022-.947 1.022Zm10.148-.93L22.25 15H1.756L.18 18.7c-.332.981-.2 2.077.355 2.933C1.09 22.489 1.998 23 2.966 23H21.04c.968 0 1.876-.511 2.43-1.367.556-.856.688-1.953.336-2.985Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default Laptop;
