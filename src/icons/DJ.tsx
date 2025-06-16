import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgDj = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M10.957 13.043s-7.435-9.53-7.442-9.528A11.962 11.962 0 0 1 12 0c6.627 0 12 5.373 12 12l-13.043 1.043Z"
        fill="#338AF3"
      />
      <Path
        d="M10.957 12s-7.435 8.487-7.442 8.485A11.963 11.963 0 0 0 12 24c6.627 0 12-5.373 12-12H10.957Z"
        fill="#6DA544"
      />
      <Path
        d="M3.515 3.515c-4.687 4.686-4.687 12.284 0 16.97L12 12 3.515 3.515Z"
        fill="#F0F0F0"
      />
      <Path
        d="m4.857 8.87.777 2.39h2.514L6.114 12.74l.777 2.391-2.034-1.478-2.035 1.478.777-2.391-2.034-1.478H4.08l.777-2.391Z"
        fill="#D80027"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgDj;
