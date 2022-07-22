import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgAcademy = (props: SvgProps) => (
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
      d="M12 2c.658 0 1.306.153 1.894.447l9.249 4.624a1.551 1.551 0 0 1-.107 2.823l-9.11 3.727a5.086 5.086 0 0 1-3.851 0L2.5 10.523v4.727a1.25 1.25 0 1 1-2.5 0V8.459C0 7.87.332 7.334.857 7.07l9.249-4.624A4.236 4.236 0 0 1 12 2Zm8 16.5c0 1.757-3.582 3.5-8 3.5s-8-1.743-8-3.5V13l5.595 2.448a6 6 0 0 0 4.81 0L20 13v5.5Zm-18.75-1a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgAcademy;
