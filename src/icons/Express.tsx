import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Express = (props: SvgProps) => (
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
      d="M21.935 3.805c3.543 4.053 2.414 11.007-2.52 15.533-4.935 4.526-11.808 4.91-15.35.857A7.989 7.989 0 0 1 3.2 19H1a1 1 0 1 1 0-2h3a1 1 0 1 0 0-2H2a1 1 0 1 1 0-2h5a1 1 0 1 0 0-2H1a1 1 0 1 1 0-2h2.314a14.742 14.742 0 0 1 3.272-4.338c4.934-4.526 11.807-4.91 15.35-.857ZM17.24 8.173a1 1 0 1 0-1.48-1.346l-5 5.5A1 1 0 0 0 11.5 14H16a1 1 0 1 0 0-2h-2.24l3.48-3.827Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default Express;
