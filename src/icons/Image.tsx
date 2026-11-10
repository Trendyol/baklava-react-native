import * as React from 'react';
import Svg, { SvgProps, Path, Circle } from 'react-native-svg';
const Image = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M20.4 0H3.6C1.56 0 0 1.56 0 3.6v16.8C0 22.44 1.56 24 3.6 24h16.8c2.04 0 3.6-1.56 3.6-3.6V3.6C24 1.56 22.44 0 20.4 0Zm1.2 14.28L19.32 12c-1.44-1.32-3.72-1.32-5.04 0l-1.08 1.08L9.72 9.6C8.28 8.28 6 8.28 4.68 9.6L2.4 11.88V3.6c0-.72.48-1.2 1.2-1.2h16.8c.72 0 1.2.48 1.2 1.2v10.68Z"
      fill={props?.fill ?? '#273142'}
    />
    <Circle cx={13.5} cy={7.5} r={1.5} fill={props?.fill ?? '#273142'} />
    <Path
      d="M4 3a1 1 0 0 0-1 1v8H1V2h1V1h20v1h1v13h-2V4a1 1 0 0 0-1-1H4Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default Image;
