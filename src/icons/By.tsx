import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgBy = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z"
        fill="#FCFCFC"
      />
      <Path
        d="M4.956 11.13 3.652 8.764l1.304-2.33 1.305 2.33-1.305 2.366ZM2.348 11.13 1.043 8.764l1.305-2.33 1.304 2.33-1.304 2.366ZM4.956 17.565 3.652 15.2l1.304-2.33 1.305 2.33-1.305 2.366ZM2.348 17.565 1.043 15.2l1.305-2.33 1.304 2.33-1.304 2.366ZM6.26 2.33l-.369-.66c-.662.392-1.283.847-1.855 1.355l.92 1.67L6.261 2.33ZM4.957 19.304l-.931 1.662a12.03 12.03 0 0 0 1.855 1.358l.38-.69-1.304-2.33Z"
        fill="#A2001D"
      />
      <Path
        d="M7.304 15.13v7.916C8.747 23.66 10.334 24 12 24c5.16 0 9.558-3.256 11.254-7.826L7.304 15.13Z"
        fill="#6DA544"
      />
      <Path
        d="M23.254 16.174c.482-1.3.746-2.706.746-4.174 0-6.627-5.373-12-12-12-1.666 0-3.253.34-4.696.954v15.22h15.95Z"
        fill="#A2001D"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgBy;
