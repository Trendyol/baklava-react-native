import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgMarketOrderChange = (props: SvgProps) => (
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
      d="M16.213.618a1.5 1.5 0 0 0-2.426 1.764L15.691 5H8.309l1.904-2.618A1.5 1.5 0 1 0 7.787.618L4.6 5H1.5A1.5 1.5 0 0 0 0 6.5v2A1.5 1.5 0 0 0 1.5 10h21A1.5 1.5 0 0 0 24 8.5v-2A1.5 1.5 0 0 0 22.5 5h-3.1L16.213.618ZM1 11h22l-1.985 10.554A3 3 0 0 1 18.067 24H5.933a3 3 0 0 1-2.948-2.446L1 11Zm11 2c-.832 0-1.606.255-2.247.69a.693.693 0 0 0-1.386.003V15.3c0 .342.25.632.586.685l1.47.23a.693.693 0 0 0 .214-1.37l-.097-.014a2.614 2.614 0 1 1-1.064 2.854c-.1-.37-.4-.685-.783-.685s-.7.313-.634.69A4.001 4.001 0 1 0 12 13Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgMarketOrderChange;
