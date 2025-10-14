import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgEt = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M0 12c0 1.468.264 2.874.746 4.174L12 17.217l11.254-1.043c.482-1.3.746-2.706.746-4.174 0-1.448-.256-2.836-.726-4.12L12 6.782.726 7.88A11.975 11.975 0 0 0 0 12Z"
        fill="#FFDA44"
      />
      <Path
        d="M12 24c5.16 0 9.558-3.256 11.254-7.826H.746C2.442 20.744 6.84 24 12 24Z"
        fill="#D80027"
      />
      <Path
        d="M12 0C6.84 0 2.442 3.256.746 7.826h22.508C21.558 3.256 17.159 0 12 0Z"
        fill="#6DA544"
      />
      <Path
        d="M12 17.74a5.74 5.74 0 1 0 0-11.48 5.74 5.74 0 0 0 0 11.48Z"
        fill="#0052B4"
      />
      <Path
        d="m11.999 7.556 1.036 3.188h3.358l-2.718 1.971 1.044 3.198-2.72-1.98-2.717 1.976 1.04-3.194-2.715-1.97h3.356l1.036-3.19Z"
        fill="#FFDA44"
      />
      <Path
        d="m16.13 12.794-3.286-1.068 2.031-2.796-.844-.613L12 11.112 9.969 8.317l-.845.613 2.032 2.796-3.287 1.068.323.992 3.286-1.068v3.456h1.044v-3.456l3.286 1.068.323-.992Z"
        fill="#FFDA44"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgEt;
