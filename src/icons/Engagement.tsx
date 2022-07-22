import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgEngagement = (props: SvgProps) => (
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
      d="M15.345 2.562c-.665-.593-.312-1.685.577-1.784l6.92-.771a1.033 1.033 0 0 1 1.153 1.02L24 7.97c0 .89-1.063 1.36-1.731.764L19.998 6.71C16.152 10.346 10.27 14 1.5 14a1.5 1.5 0 1 1 0-3c7.653 0 12.8-3.09 16.25-6.294l-2.405-2.144ZM18 13a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V13Zm-8 2a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1h-4Zm-9 3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H1Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgEngagement;
