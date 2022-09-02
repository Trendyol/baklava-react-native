import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgDocument = (props: SvgProps) => (
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
      d="M2 3a3 3 0 0 1 3-3h9.552a4 4 0 0 1 2.56.927l3.449 2.874A4 4 0 0 1 22 6.873V21a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V3Zm3 11a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Zm1 4a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2H6Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgDocument;
