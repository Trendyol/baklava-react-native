import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgGq = (props: SvgProps) => (
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
        fill="#6DA544"
      />
      <Path
        d="M7.304 16.174h15.95C21.558 20.744 17.16 24 12 24a11.96 11.96 0 0 1-8.485-3.515l3.79-4.311Z"
        fill="#D80027"
      />
      <Path
        d="M3.515 3.515c-4.687 4.686-4.687 12.284 0 16.97L12 12 3.515 3.515Z"
        fill="#0052B4"
      />
      <Path
        d="M14.087 9.913v2.609c0 1.597 2.087 2.087 2.087 2.087s2.087-.49 2.087-2.087V9.913h-4.174Z"
        fill="#DEDDE0"
      />
      <Path d="M15.652 12.052h1.044v1.513h-1.044v-1.513Z" fill="#786145" />
      <Path
        d="M17.217 11.478a1.043 1.043 0 1 0-2.087 0 .522.522 0 1 0 0 1.044h2.087a.522.522 0 1 0 0-1.044Z"
        fill="#6DA544"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgGq;
