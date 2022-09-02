import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgClock = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0Zm3.6 13.2H12c-.72 0-1.2-.48-1.2-1.2V6c0-.72.48-1.2 1.2-1.2s1.2.48 1.2 1.2v4.8h2.4c.72 0 1.2.48 1.2 1.2s-.48 1.2-1.2 1.2Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgClock;
