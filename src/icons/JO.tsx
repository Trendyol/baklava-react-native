import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgJo = (props: SvgProps) => (
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
        fill="#F0F0F0"
      />
      <Path
        d="M7.304 7.826h15.95C21.558 3.256 17.16 0 12 0a11.96 11.96 0 0 0-8.485 3.515l3.79 4.311Z"
        fill="#000"
      />
      <Path
        d="M7.304 16.174h15.95C21.558 20.744 17.16 24 12 24a11.96 11.96 0 0 1-8.485-3.515l3.79-4.311Z"
        fill="#6DA544"
      />
      <Path
        d="M3.515 3.515c-4.687 4.686-4.687 12.284 0 16.97L12 12 3.515 3.515Z"
        fill="#D80027"
      />
      <Path
        d="m4.763 9.391.658 1.377 1.488-.343-.667 1.373 1.196.949-1.489.335.004 1.527-1.19-.955-1.191.955.004-1.527-1.49-.335 1.197-.949-.666-1.373 1.487.343.659-1.377Z"
        fill="#F0F0F0"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgJo;
