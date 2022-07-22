import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgStar = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className=""
    {...props}>
    <Path
      d="M10.952.682a1.147 1.147 0 0 1 2.096 0l2.803 5.94c.17.362.5.612.88.67l6.267.953c.959.145 1.341 1.378.648 2.086l-4.535 4.624a1.258 1.258 0 0 0-.336 1.083l1.07 6.53c.164.999-.838 1.76-1.696 1.289l-5.605-3.083a1.124 1.124 0 0 0-1.088 0l-5.605 3.083c-.858.471-1.86-.29-1.696-1.29l1.07-6.53a1.259 1.259 0 0 0-.336-1.082L.354 10.331c-.694-.708-.31-1.94.648-2.086l6.267-.953c.38-.058.71-.308.88-.67l2.803-5.94Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgStar;
