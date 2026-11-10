import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Browser = (props: SvgProps) => (
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
      d="M3 0a3 3 0 0 0-3 3v17.997a3 3 0 0 0 3 3h9.176l-2.884-9.733c-.901-3.043 1.93-5.873 4.972-4.972l9.732 2.884V3a3 3 0 0 0-3-3H3Zm11.398 3.6a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Zm2.4 1.2a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4Zm4.799-1.2a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Zm-8.338 8.17a1.2 1.2 0 0 0-1.49 1.489l2.618 8.902a1.2 1.2 0 0 0 2 .51l1.833-1.833 2.725 2.652a1.8 1.8 0 0 0 2.51-2.58l-2.69-2.617 1.906-1.906a1.2 1.2 0 0 0-.51-2l-8.902-2.618Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default Browser;
