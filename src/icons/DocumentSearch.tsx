import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgDocumentSearch = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="m23.754 22.571-2.832-2.823a6.662 6.662 0 1 0-1.174 1.174l2.823 2.832a.834.834 0 0 0 1.365-.271.834.834 0 0 0-.182-.912Z"
      fill={props?.fill ?? `#273142`}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 2a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5h-3v.014A8.482 8.482 0 0 0 9.019 10H4a1 1 0 1 0 0 2h3.752a8.47 8.47 0 0 0-.738 4H4a1 1 0 1 0 0 2h3.374A8.505 8.505 0 0 0 15 23.985V24H2a2 2 0 0 1-2-2V2Zm4 2a1 1 0 0 0 0 2h10a1 1 0 1 0 0-2H4Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgDocumentSearch;
