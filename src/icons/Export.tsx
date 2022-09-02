import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgExport = (props: SvgProps) => (
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
      d="M4.5 0A4.5 4.5 0 0 0 0 4.5v15A4.5 4.5 0 0 0 4.5 24h15a4.5 4.5 0 0 0 4.5-4.5V14a1.5 1.5 0 0 0-3 0v5.5a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 19.5v-15A1.5 1.5 0 0 1 4.5 3H11a1.5 1.5 0 0 0 0-3H4.5Zm11.489 9.43c-3.377.351-6.179 2.677-6.975 5.897a.893.893 0 0 1-.87.673.89.89 0 0 1-.868-.674A9.193 9.193 0 0 1 7 13.132c0-4.94 3.957-9.01 8.989-9.446V2.612c0-.623.374-1.178.977-1.447a1.838 1.838 0 0 1 1.948.268l4.533 3.903c.352.304.553.733.553 1.179 0 .446-.201.875-.553 1.179l-4.533 3.903a1.839 1.839 0 0 1-1.948.268c-.603-.269-.978-.824-.978-1.447V9.43Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgExport;
