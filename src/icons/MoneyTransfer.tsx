import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgMoneyTransfer = (props: SvgProps) => (
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
      d="M0 1a1 1 0 0 1 1-1h22a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H12.555a4.981 4.981 0 0 0-1.022-1.678 4.15 4.15 0 0 0-2.283-1.23V9c0-1.968-1.253-3.276-2.588-3.676-.653-.196-1.419-.2-2.07.17C3.889 5.892 3.5 6.625 3.5 7.5V14H1a1 1 0 0 1-1-1V1Zm15 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      fill={props?.fill ?? `#273142`}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.818 15c-.319-1.309-1.19-3-3.568-3V9c0-3-3.75-3.75-3.75-1.5V15a3 3 0 0 0 3 3v3h9v-3s2.127-.711 2.127-3h-6.809Z"
      fill={props?.fill ?? `#273142`}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 24H6v-4.5h12V24Zm-9-1.5H7.5V21H9v1.5Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgMoneyTransfer;
