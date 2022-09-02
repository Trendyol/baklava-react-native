import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgDislike = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 21.43v-4.81H3c-.347.003-1.271-.025-1.587-.168A2.418 2.418 0 0 1 .028 13.89l1.65-10.854c.086-.576.376-1.1.815-1.477.44-.376 1-.58 1.576-.574H18v13.23l-5.124 10.27c-.17.339-.518.564-.892.506C10.41 24.749 9 23.571 9 21.431ZM22 .985h-2v13h2a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgDislike;
