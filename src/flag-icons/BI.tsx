import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const SvgBi = (props: SvgProps) => (
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
        d="M19.307 2.48a12.006 12.006 0 0 0-14.614 0L12 9.786l7.307-7.306ZM12 14.214 4.693 21.52a12.006 12.006 0 0 0 14.614 0L12 14.214Z"
        fill="#D80027"
      />
      <Path
        d="M9.786 12 2.48 4.693a12.006 12.006 0 0 0 0 14.614L9.786 12ZM14.214 12l7.306 7.307a12.006 12.006 0 0 0 0-14.614L14.214 12Z"
        fill="#6DA544"
      />
      <Path
        d="M12 17.217a5.217 5.217 0 1 0 0-10.434 5.217 5.217 0 0 0 0 10.434Z"
        fill="#F0F0F0"
      />
      <Path
        d="m12 8.348.452.782h.903l-.451.783.451.783h-.903l-.452.782-.452-.782h-.904l.452-.783-.452-.783h.904L12 8.348ZM9.703 12l.452.783h.904l-.452.782.452.783h-.904l-.452.782-.452-.782h-.903l.452-.783-.452-.782h.903L9.703 12ZM14.297 12l.451.783h.904l-.452.782.452.783h-.903l-.452.782-.452-.782h-.904l.452-.783-.452-.782h.904l.452-.783Z"
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
export default SvgBi;
