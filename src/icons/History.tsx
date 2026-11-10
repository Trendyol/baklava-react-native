import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const History = (props: SvgProps) => (
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
      d="M12 2C6.477 2 2 6.477 2 12c0 2.536.943 4.851 2.5 6.615V16.5a1 1 0 1 1 2 0V21a1 1 0 0 1-1 1H1a1 1 0 1 1 0-2h2.001c-.22-.27-.436-.57-.653-.868l-.062-.085A11.949 11.949 0 0 1 0 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12a1 1 0 1 1 0-2c5.523 0 10-4.477 10-10S17.523 2 12 2Zm9 10a9 9 0 0 1-13 8.064V16.5a2.5 2.5 0 0 0-4.492-1.511A9 9 0 1 1 21 12ZM11 7a1 1 0 1 1 2 0v4h3a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1V7Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default History;
