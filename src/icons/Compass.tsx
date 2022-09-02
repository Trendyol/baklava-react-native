import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgCompass = (props: SvgProps) => (
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
      d="M0 12c0 6.617 5.383 12 12 12s12-5.383 12-12c0-6.618-5.383-12-12-12S0 5.382 0 12Zm6.53 5.37a.138.138 0 0 1-.017-.025.18.18 0 0 0-.01-.017 1.187 1.187 0 0 1-.214-1.232l3.095-6.11c.122-.3.361-.536.661-.657l6.056-3.042a1.2 1.2 0 0 1 1.317.295c.35.33.485.85.292 1.322l-3.096 6.108a1.194 1.194 0 0 1-.66.66L7.9 17.712c-.147.06-.3.088-.449.088-.325 0-.63-.14-.855-.372a1.022 1.022 0 0 0-.024-.02c-.014-.013-.028-.024-.041-.038ZM12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      fill={props?.fill ?? `#273142`}
    />
  </Svg>
);

export default SvgCompass;
