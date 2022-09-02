import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgTurnBack = (props: SvgProps) => (
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
      d="M9.017 2.602A1.5 1.5 0 0 0 6.983.398l-6.5 6a1.5 1.5 0 0 0 0 2.204l6.5 6a1.5 1.5 0 1 0 2.034-2.204L5.337 9H15a6 6 0 0 1 0 12H1.5a1.5 1.5 0 0 0 0 3H15a9 9 0 1 0 0-18H5.336l3.681-3.398Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgTurnBack;
