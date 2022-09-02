import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgBill = (props: SvgProps) => (
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
      d="M2 1a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v21.674a1 1 0 0 1-1.275.962l-1.63-.466a2 2 0 0 0-1.182.026l-1.826.608a2 2 0 0 1-1.182.026l-2.356-.673a2 2 0 0 0-1.098 0l-2.356.673a2 2 0 0 1-1.182-.026l-1.826-.608a2 2 0 0 0-1.182-.026l-1.63.466A1 1 0 0 1 2 22.674V1Zm4 6a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Zm1 4a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2H7Zm8 1a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1Zm-8 4a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2H7Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgBill;
