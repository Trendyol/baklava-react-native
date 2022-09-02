import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgImage = (props: SvgProps) => (
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
      d="M20.4 0H3.6C1.56 0 0 1.56 0 3.6v16.8C0 22.44 1.56 24 3.6 24h16.8c2.04 0 3.6-1.56 3.6-3.6V3.6C24 1.56 22.44 0 20.4 0Zm.6 13.68L19.32 12c-1.44-1.32-3.72-1.32-5.04 0l-1.08 1.08L9.72 9.6C8.28 8.28 6 8.28 4.68 9.6L3 11.28V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v9.68ZM15 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgImage;
