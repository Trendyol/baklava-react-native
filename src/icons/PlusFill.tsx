import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgPlusFill = (props: SvgProps) => (
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
      d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0Zm0 6a1.2 1.2 0 0 1 1.2 1.2v3.6h3.6a1.2 1.2 0 0 1 0 2.4h-3.6v3.6a1.2 1.2 0 0 1-2.4 0v-3.6H7.2a1.2 1.2 0 0 1 0-2.4h3.6V7.2A1.2 1.2 0 0 1 12 6Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgPlusFill;
