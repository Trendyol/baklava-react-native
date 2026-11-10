import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Dislike = (props: SvgProps) => (
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
      d="M9 20.445v-4.81H3c-.347.003-1.271-.025-1.587-.169a2.418 2.418 0 0 1-1.385-2.562L1.677 2.05c.086-.575.376-1.1.815-1.476.44-.377 1-.58 1.576-.574H18V13.23l-5.124 10.27c-.17.34-.518.564-.892.507C10.41 23.764 9 22.586 9 20.445ZM22 0h-2v13h2a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Z"
      fill={props?.fill ?? '#273142'}
    />
  </Svg>
);
export default Dislike;
