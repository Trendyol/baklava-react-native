import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const OrderPin = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M11 7V0H5.43a3 3 0 0 0-2.667 1.628L0 7h11ZM13 7h11l-2.763-5.372A3 3 0 0 0 18.57 0H13v7Z"
        fill={props?.fill ?? '#273142'}
      />
      <Path
        d="M10 14.917c0-2.354 1.102-4.467 2.852-5.917H0v12a3 3 0 0 0 3 3h12.508a24.81 24.81 0 0 1-1.45-1.315C11.532 20.202 10 17.585 10 14.917Z"
        fill="#fff"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.374 20.732a17.022 17.022 0 0 1-2.569 2.177.557.557 0 0 1-.61 0 15.53 15.53 0 0 1-.81-.594c-.6-.47-1.199-1-1.76-1.583-1.634-1.7-2.625-3.489-2.625-5.315C13 12.425 15.462 10 18.5 10s5.5 2.425 5.5 5.417c0 1.826-.991 3.616-2.626 5.315Zm-.674-5.315c0 1.196-.985 2.166-2.2 2.166-1.215 0-2.2-.97-2.2-2.166 0-1.197.985-2.167 2.2-2.167 1.215 0 2.2.97 2.2 2.167Z"
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
export default OrderPin;
