import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Money = (props: SvgProps) => (
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
      d="M1.456 1.5h21.088c.386 0 .757.163 1.03.451.273.288.426.678.426 1.085v11.931c0 .407-.153.797-.427 1.084a1.42 1.42 0 0 1-1.03.449H1.457c-.386 0-.756-.163-1.029-.45A1.578 1.578 0 0 1 0 14.967V3.036c0-.407.153-.797.426-1.085.273-.288.644-.45 1.03-.451ZM6 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm13.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM12 5.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5ZM1.82 18l.347.088.227.058.008.002 16.933 4.31a1.423 1.423 0 0 0 1.705-.991L22.018 18H19.68l-.585 2.075L10.943 18H1.821Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default Money;
