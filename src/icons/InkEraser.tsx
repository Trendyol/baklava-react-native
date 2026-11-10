import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const InkEraser = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.935 1.89a2.5 2.5 0 0 1 3.577-.314l5.99 5.192.181.172a2.5 2.5 0 0 1 .127 3.287l-7.92 9.807h6.86a1.5 1.5 0 0 1 0 3H6.127a2.5 2.5 0 0 1-1.646-.619l-2.992-2.618a2.5 2.5 0 0 1-.294-3.457L12.935 1.89Zm-9.11 15.966 2.49 2.177h4.719l2.296-2.844-5.257-4.56-4.247 5.227Z"
        fill={props?.fill ?? '#273142'}
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill={props?.fill ?? '#273142'} d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default InkEraser;
