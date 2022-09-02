import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgAccount = (props: SvgProps) => (
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
      d="M.654 3.276C0 4.56 0 6.24 0 9.6v4.8c0 3.36 0 5.04.654 6.324a6 6 0 0 0 2.622 2.622C4.56 24 6.24 24 9.6 24h4.8c3.36 0 5.04 0 6.324-.654a6 6 0 0 0 2.622-2.622C24 19.44 24 17.76 24 14.4V9.6c0-3.36 0-5.04-.654-6.324A6 6 0 0 0 20.724.654C19.44 0 17.76 0 14.4 0H9.6C6.24 0 4.56 0 3.276.654A6 6 0 0 0 .654 3.276ZM12 12c2.159 0 3.889-1.78 3.889-4 0-2.22-1.73-4-3.889-4-2.158 0-3.889 1.78-3.889 4 0 2.22 1.73 4 3.889 4Zm0 1.6c-3.775 0-7 1.788-7 4.622C5 19.644 8.333 20 12 20s7 0 7-1.778c0-2.835-3.204-4.622-7-4.622Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgAccount;
